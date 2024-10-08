import CardProduct from "../components/CardProduct"
import Header from "../components/Header"

const PropertyList = () => {
  let data = [
    {
      title:'Departamento Luminoso en el Centro',
      direction: 'Avenida Principal 1010,Edificio Sol, Piso 5',
      type: 'Departamento',
      size: '85 mts2',
      state: 'Disponible',
      description: 'Departamento de 2 habitaciones, 1 baño, con excelentes vistas y a pocos metros de zonas comerciales y transporte.',
      price: '1500000',
      rate:4,
    }
  ]
  return (
    <>
      <Header/>
      {data.map((item)=>{
        return(
          <CardProduct property={item} />
        )
      })}
    </>
  )
}

export default PropertyList