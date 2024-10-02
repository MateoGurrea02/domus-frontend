import './App.css'
import { Layout } from './components/layout/Layout'
import TitlePage from './components/title/Title'
import Login from './pages/login/Login'
import Register from './pages/register/Register'

function App() {
  return (
    <Layout>
      <Register></Register>
    </Layout>
  )
}

export default App
