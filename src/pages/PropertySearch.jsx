import React, { useState, useEffect } from "react";
import { Container } from "../components/container/Container";
import FilterSearch from "../components/FilterSearch";
import Header from "../components/Header";
import CardProduct from "../components/CardProduct";
import axios from "axios";

const PropertySearch = () => {
  const [data, setData] = useState([]);

  const getProperties = async (filters = {}) => {
    try {
      const { data } = await axios.post("http://127.0.0.1:4000/api/properties/filter", filters);
      setData(data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  useEffect(() => {
    getProperties();
  }, []);

  const handleApplyFilters = (filters) => {
    getProperties(filters);
  };

  const propertyFilters = [
    {
      name: 'propertyType',
      label: 'Tipo Propiedad',
      type: 'checkbox',
      options: [
        { value: 1, label: 'Casa' },
        { value: 2, label: 'Departamento' },
        { value: 3, label: 'Local Comercial' },
      ],
    },
    {
      name: 'priceRange',
      label: 'Precio',
      type: 'checkbox',
      options: [
        { value: 'menosDe49999', label: 'Menos de $49999' },
        { value: 'de50000a100000', label: 'Desde $50000 hasta $100000' },
        { value: 'de100000a200000', label: 'Desde $100000 hasta $200000' },
        { value: 'masDe200000', label: 'Más de $200000' },
      ],
    },
  ];

  return (
    <>
      <Header />
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="w-auto pt-10">
            <FilterSearch filters={propertyFilters} onApplyFilters={handleApplyFilters} />
          </div>
          <div className="flex-1 flex flex-col">
            <h3 className="px-5 pb-4 text-gray-600">
              <span className="font-semibold">{data.length}</span> Propiedades a la venta
            </h3>
            {data.map((item) => (
              <div key={item.id} className="px-5 pb-5">
                <CardProduct data={item} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default PropertySearch;
