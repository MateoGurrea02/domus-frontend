import Header from '../../components/Header'
import MyTableUsers from '../../components/MyTableUsers'
import TitlePage from '../../components/title/Title'
import { Link } from 'react-router-dom'

const UserList = ()=>{
  let titleList = ['Nombre','Correo','Rol','Acciones']
  return(
    <>
      <Header/>
      <TitlePage title='Lista de Usuarios'/>
      <div className='flex mx-auto flex w-full px-5 pb-5 md:max-w-[92%] lg:max-w-[80%]'>
        <Link to={'/admin/clients'} className='px-1'>
          <button type="button" className="text-amber-900 bg-amber-500 hover:bg-amber-600 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2">Ver todos los clientes</button>
        </Link>
        <Link to={'/admin/agents/'} className='px-1'>
          <button type="button" className="text-amber-900 bg-amber-500 hover:bg-amber-600 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2">Ver todos los agentes</button>
        </Link>
      </div>
      <MyTableUsers />
    </>
  )
}

export default UserList