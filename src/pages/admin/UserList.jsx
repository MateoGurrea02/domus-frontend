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
        <Link to={'/admin/clients/'}>
          <button type="button" className="text-black bg-gray-200 hover:bg-gray-400 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 text-center">Volver</button>
        </Link>
      </div>
      <MyTableUsers />
    </>
  )
}

export default UserList