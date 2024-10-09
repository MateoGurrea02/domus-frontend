import { Container } from "../components/container/Container";
import FilterSearch from "../components/FilterSearch";
import Header from "../components/Header"
import CardProduct from "../components/CardProduct"

const PropertySearch = () => {
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
      let data = [
        {
          title:'Departamento Luminoso en el Centro',
          direction: 'Avenida Principal 1010,Edificio Sol, Piso 5',
          type: 'Departamento',
          size: '85 mts2',
          state: 'Disponible',
          description: 'Departamento de 2 habitaciones, 1 baño, con excelentes vistas y a pocos metros de zonas comerciales y transporte.',
          price: '150000',
          rate:'4',
          imageUrl: 'https://st2.depositphotos.com/1277251/7958/i/450/depositphotos_79588208-stock-photo-house-for-sale-board-with.jpg',
        },
        {
            title: 'Casa Moderna con Jardín',
            direction: 'Calle Los Robles 45, Urbanización Verde, Casa 3',
            type: 'Casa',
            size: '120 mts2',
            state: 'Disponible',
            description: 'Casa de 3 habitaciones y 2 baños, con un amplio jardín, garaje para 2 autos y acabados modernos en una zona residencial tranquila.',
            price: '250000',
            rate: '5',
            imageUrl: 'https://st2.depositphotos.com/1277251/7958/i/450/depositphotos_79588208-stock-photo-house-for-sale-board-with.jpg',
          },
          {
            title: 'Penthouse con Vista al Mar',
            direction: 'Malecón de la Playa 300, Torre Marina, Piso 15',
            type: 'Penthouse',
            size: '150 mts2',
            state: 'Disponible',
            description: 'Exclusivo penthouse de 3 habitaciones y 2 baños, con terraza privada, piscina y vistas panorámicas al mar.',
            price: '500000',
            rate: '5',
            imageUrl: 'https://st2.depositphotos.com/1277251/7958/i/450/depositphotos_79588208-stock-photo-house-for-sale-board-with.jpg',
          },
          {
            title: 'Loft Estilo Industrial',
            direction: 'Calle Arte Urbano 22, Barrio Creativo, Piso 2',
            type: 'Loft',
            size: '70 mts2',
            state: 'En construcción',
            description: 'Loft de diseño industrial con techos altos, cocina integrada y espacios abiertos, ideal para jóvenes profesionales.',
            price: '130000',
            rate: '4',
            imageUrl: 'https://st2.depositphotos.com/1277251/7958/i/450/depositphotos_79588208-stock-photo-house-for-sale-board-with.jpg',
          },
          {
            title: 'Departamento Familiar en Zona Residencial',
            direction: 'Avenida Jardines 500, Edificio Familiar, Piso 3',
            type: 'Departamento',
            size: '95 mts2',
            state: 'Disponible',
            description: 'Departamento de 3 habitaciones y 2 baños, con balcón, áreas verdes y cercanía a parques y colegios.',
            price: '180000',
            rate: '4',
            imageUrl: 'https://st2.depositphotos.com/1277251/7958/i/450/depositphotos_79588208-stock-photo-house-for-sale-board-with.jpg',
          }
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
                      <h3 className="px-5 pb-4 text-gray-600"><span className="font-semibold">58</span> Propiedades a la venta</h3>
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
    

}

export default PropertySearch