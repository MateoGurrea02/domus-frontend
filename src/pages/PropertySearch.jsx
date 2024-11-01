import React, {useState,useEffect} from "react";
import { Container } from "../components/container/Container";
import FilterSearch from "../components/FilterSearch";
import Header from "../components/Header"
import CardProduct from "../components/CardProduct"
import axios from "axios";

const PropertySearch = () => {
  const [data, setData] = useState('')

  const getProperties = async ()=>{
    const data = (await axios.get(`http://127.0.0.1:4000/api/properties`).then())

    setData(data.data)
  }

  useEffect(() => {
    getProperties()
  }, [])

    const propertyFilters = [
        {
          name: 'propertyType',
          label: 'Tipo Propiedad',
          type: 'checkbox',
          options: [
            { value: 'casa', label: 'Casa' },
            { value: 'departamento', label: 'Departamento' },
            { value: 'localComercial', label: 'Local Comercial' },
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
        {
          name: 'rooms',
          label: 'Habitaciones',
          type: 'checkbox',
          options: [
            { value: '1', label: '1 Habitación' },
            { value: '2', label: '2 Habitaciones' },
            { value: '3', label: '3 Habitaciones' },
            { value: '4', label: '4 Habitaciones' },
          ],
        },
        {
          name: 'location',
          label: 'Ubicación',
          type: 'checkbox',
          options: [
            { value: 'centro', label: 'Centro' },
            { value: 'norte', label: 'Norte' },
            { value: 'sur', label: 'Sur' },
            { value: 'este', label: 'Este' },
            { value: 'oeste', label: 'Oeste' },
          ],
        },
      ];
      
      return (
        <>
            <Header />
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
                  <div className="w-auto pt-10 "> 
                    <FilterSearch filters={propertyFilters} />
                  </div>
                  <div className="flex-1 flex flex-col"> 
                      <h3 className="px-5 pb-4 text-gray-600"><span className="font-semibold">{data.length}</span> Propiedades a la venta</h3>
                      {data?data.map((item) => (
                          <div key={item.id} className="px-5 pb-5">
                              <CardProduct data={item} />
                          </div>
                      )):''}
                  </div>
                </div>
            </Container>
        </>
    );
    

}

export default PropertySearch