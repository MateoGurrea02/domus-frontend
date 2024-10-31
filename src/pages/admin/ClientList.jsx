import Header from '../../components/Header'
import MyTableClients from '../../components/MyTableClients'
import TitlePage from '../../components/title/Title'
import { Link } from 'react-router-dom'

const ClientList = ()=>{
  
  return(
    <>
      <Header/>
      <TitlePage title='Lista de Clientes'/>
      <div className='flex mx-auto flex w-full px-5 pb-5 md:max-w-[92%] lg:max-w-[80%]'>
        <Link to={'/admin/users'} className='px-1'>
          <button type="button" className="text-amber-900 bg-amber-500 hover:bg-amber-600 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2">Ver todos los usuarios</button>
        </Link>
        <Link to={'/new-client/'} className='px-1'>
          <button type="button" className="text-amber-900 bg-amber-500 hover:bg-amber-600 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2">Agregar Cliente</button>
        </Link>
        </div>
      <MyTableClients />
    </>
  )
}

export default ClientList