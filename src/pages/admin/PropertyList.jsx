import Header from '../../components/Header'
import MyTable from '../../components/MyTable'
import TitlePage from '../../components/title/Title'

const PropertyList = ()=>{
  let titleList = ['Dirección','Tipo','Precio','Estado','Tamaño','Agente','Acciones']
  let data = [
    {
        address: 'Calle Mayor 123, Madrid',
        type: 'Apartamento',
        price: '250,000 EUR',
        status: 'Disponible',
        size: '80 m²',
        agent: 'Carlos Gómez'
    },
    {
        address: 'Avenida Libertad 45, Barcelona',
        type: 'Casa',
        price: '500,000 EUR',
        status: 'Vendido',
        size: '150 m²',
        agent: 'María Torres'
    },
    {
        address: 'Calle San Juan 22, Sevilla',
        type: 'Dúplex',
        price: '320,000 EUR',
        status: 'En construcción',
        size: '120 m²',
        agent: 'Lucía Fernández'
    },
    {
        address: 'Paseo de la Castellana 89, Madrid',
        type: 'Oficina',
        price: '1,200,000 EUR',
        status: 'Disponible',
        size: '300 m²',
        agent: 'Juan Pérez'
    },
    {
        address: 'Calle Gran Vía 10, Valencia',
        type: 'Local comercial',
        price: '750,000 EUR',
        status: 'En alquiler',
        size: '200 m²',
        agent: 'Laura Sánchez'
    }
                    
  ]
  return(
    <>
      <Header/>
      <TitlePage title='Lista de Propiedades'/>
      <MyTable titleList={titleList} data={data}/>
    </>
  )
}

export default PropertyList