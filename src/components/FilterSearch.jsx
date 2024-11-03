import React, { useState, useEffect } from 'react';

const FilterSearch = ({ filters, onApplyFilters }) => {
  const initializeFilterState = () => {
    return filters.reduce((acc, filter) => {
      acc[filter.name] = null;
      return acc;
    }, {});
  };

  const [filterState, setFilterState] = useState(initializeFilterState);

  const handleRadioChange = (filterName, optionValue) => {
    setFilterState((prevState) => ({
      ...prevState,
      [filterName]: optionValue,
    }));
  };

  const resetFilters = () => {
    setFilterState(initializeFilterState());
    onApplyFilters({});
  };

  // Aplicar filtros automáticamente cada vez que `filterState` cambia
  useEffect(() => {
    const activeFilters = {};

    for (const filterName in filterState) {
      const selectedOption = filterState[filterName];
      if (selectedOption) {
        if (filterName === 'priceRange') {
          activeFilters['price'] = mapPriceToRange(selectedOption);
        } else if (filterName === 'propertyType') {
          activeFilters['propertytype'] = selectedOption;
        }
      }
    }

    onApplyFilters(activeFilters);
  }, [filterState]);

  const mapPriceToRange = (selectedOption) => {
    const ranges = {};
    if (selectedOption === 'menosDe49999') ranges['lte'] = 49999;
    if (selectedOption === 'de50000a100000') {
      ranges['gte'] = 50000;
      ranges['lte'] = 100000;
    }
    if (selectedOption === 'de100000a200000') {
      ranges['gte'] = 100000;
      ranges['lte'] = 200000;
    }
    if (selectedOption === 'masDe200000') ranges['gte'] = 200000;
    return ranges;
  };

  // Verificar si hay algún filtro activo para mostrar el botón de reset
  const hasActiveFilters = Object.values(filterState).some(value => value !== null);

  return (
    <div className="w-64 p-4 bg-gray-100 rounded-lg">
      {filters.map((filter) => (
        <div key={filter.name} className="mb-4 p-2 rounded-lg bg-gray-50">
          <h3 className="font-bold">{filter.label}</h3>
          {filter.options.map((option) => (
            <div key={option.value}>
              <label>
                <input
                  type="radio"
                  name={filter.name}
                  value={option.value}
                  checked={filterState[filter.name] === option.value}
                  onChange={() => handleRadioChange(filter.name, option.value)}
                  className="mr-2"
                />
                {option.label}
              </label>
            </div>
          ))}
        </div>
      ))}
      {hasActiveFilters && (
        <button onClick={resetFilters} className="mt-4 p-2 bg-gray-300 text-gray-700 rounded">
          Resetear Filtros
        </button>
      )}
    </div>
  );
};

export default FilterSearch;
