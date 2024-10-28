import Header from '../../components/Header'
import MyTable from '../../components/MyTableProperty'
import TitlePage from '../../components/title/Title'
import { Link } from 'react-router-dom'

const ClientList = ()=>{
  let titleList = ['Nombre','Documento Identidad','Teléfono','Acciones']
  let data = [
    {
        name: 'Matthew Green',
        dni: '12345678A',
        phone: '+1-555-123-4567'
    },
    {
        name: 'Sophia Brown',
        dni: '87654321B',
        phone: '+1-555-234-5678'
    },
    {
        name: 'James Smith',
        dni: '23456789C',
        phone: '+1-555-345-6789'
    },
    {
        name: 'Emma Johnson',
        dni: '34567890D',
        phone: '+1-555-456-7890'
    },
    {
        name: 'Oliver Williams',
        dni: '45678901E',
        phone: '+1-555-567-8901'
    }                
  ]
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
      <MyTable titleList={titleList} data={data}/>
    </>
  )
}

export default ClientList