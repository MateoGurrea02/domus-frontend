import React, { useState } from 'react';

const FilterSearch = ({ filters }) => {
  const [filterState, setFilterState] = useState(
    filters.reduce((acc, filter) => {
      acc[filter.name] = filter.options.reduce((optAcc, option) => {
        optAcc[option.value] = false;
        return optAcc;
      }, {});
      return acc;
    }, {})
  );

  const [expanded, setExpanded] = useState({});

  const handleCheckboxChange = (filterName, optionValue) => {
    setFilterState((prevState) => ({
      ...prevState,
      [filterName]: {
        ...prevState[filterName],
        [optionValue]: !prevState[filterName][optionValue],
      },
    }));
  };

  const toggleExpand = (filterName) => {
    setExpanded((prevState) => ({
      ...prevState,
      [filterName]: !prevState[filterName],
    }));
  };

  return (
    <div className="w-64 p-4 bg-gray-100 rounded-lg">
      {filters.map((filter) => (
        <div
          key={filter.name}
          className="mb-4 p-2 rounded-lg bg-gray-50"
        >
          <h3
            className="font-bold cursor-pointer flex justify-between"
            onClick={() => toggleExpand(filter.name)}
          >
            {filter.label}
            <span>{expanded[filter.name] ? '▲' : '▼'}</span>
          </h3>
          {expanded[filter.name] && (
            <div className="mt-2">
              {filter.options.map((option) => (
                <div key={option.value}>
                  <label>
                    <input
                      type="checkbox"
                      checked={filterState[filter.name][option.value]}
                      onChange={() => handleCheckboxChange(filter.name, option.value)}
                      className="mr-2"
                    />
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FilterSearch;
