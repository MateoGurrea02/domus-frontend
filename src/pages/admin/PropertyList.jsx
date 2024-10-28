import { Container } from "../../components/container/Container"
import Header from '../../components/Header'
import MyTableProperty from '../../components/MyTableProperty'
import TitlePage from '../../components/title/Title'
import { Link } from "react-router-dom"

const PropertyList = ()=>{
  
  return(
    <>
      <Header/>
      <TitlePage title='Lista de Propiedades'/>
      <div className='flex mx-auto flex w-full px-5 pb-5 md:max-w-[92%] lg:max-w-[80%]'>
        <Link to={'/new-property/'} className='px-1'>
          <button type="button" className="text-amber-900 bg-amber-500 hover:bg-amber-600 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2">Agregar Propiedad</button>
        </Link>
        <Link to={'/new-rental-sale/'} className='px-1'>
          <button type="button" className="text-amber-900 bg-amber-500 hover:bg-amber-600 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2">Registar Alquiler</button>
        </Link>
        <Link to={'/new-property-sale/'} className='px-1'>
          <button type="button" className="text-amber-900 bg-amber-500 hover:bg-amber-600 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2">Registar Venta</button>
        </Link>
      </div>
      <MyTableProperty/>
    </>
  )
}

export default PropertyList