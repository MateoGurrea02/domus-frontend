import Header from '../../components/Header'
import MyTable from '../../components/MyTable'
import TitlePage from '../../components/title/Title'

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
      <MyTable titleList={titleList} data={data}/>
    </>
  )
}

export default ClientList