import Header from '../../components/Header'
import MyTableAgents from '../../components/MyTableAgents'
import TitlePage from '../../components/title/Title'
import { Link } from 'react-router-dom'

const AgentsList = ()=>{
  
  return(
    <>
      <Header/>
      <TitlePage title='Lista de Agentes'/>
      <div className='flex mx-auto flex w-full px-5 pb-5 md:max-w-[92%] lg:max-w-[80%]'>
        <Link to={'/admin/users'} className='px-1'>
          <button type="button" className="text-black bg-gray-200 hover:bg-gray-400 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 text-center">Volver</button>
        </Link>
        <Link to={'/new-agent/'} className='px-1'>
          <button type="button" className="text-amber-900 bg-amber-500 hover:bg-amber-600 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2">Agregar Agente</button>
        </Link>
        </div>
      <MyTableAgents />
    </>
  )
}

export default AgentsList