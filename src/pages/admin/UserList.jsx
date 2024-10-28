import Header from '../../components/Header'
import MyTable from '../../components/MyTableProperty'
import TitlePage from '../../components/title/Title'

const UserList = ()=>{
  let titleList = ['Nombre','Correo','Rol','Acciones']
  let data = [
    {
        name: 'Fernando Chazarreta',
        email: 'fer.fer@example.com',
        role: 'Administrador'
    },
    {
        name: 'Lucia Fernandez',
        email: 'lucia.fernandez@example.com',
        role: 'Cliente'
    },
    {
        name: 'John Perez',
        email: 'john.perez@example.com',
        role: 'Usuario'
    },
    {
        name: 'Maria Lopez',
        email: 'maria.lopez@example.com',
        role: 'Cliente'
    },
    {
        name: 'Charles Diaz',
        email: 'charles.diaz@example.com',
        role: 'Vendedor'
    }                 
  ]
  return(
    <>
      <Header/>
      <TitlePage title='Lista de Usuarios'/>
      <MyTable titleList={titleList} data={data}/>
    </>
  )
}

export default UserList