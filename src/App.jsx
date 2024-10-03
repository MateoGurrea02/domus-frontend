import './App.css'
import { Layout } from './components/layout/Layout'
import TitlePage from './components/title/Title'
import Login from './pages/login/Login'
import Register from './pages/register/Register'


function App() {
  return (
    <>
      <Header />
      <Footer />
      <CardHome 
        title={"Ubicaciones Estratégicas"} 
        description={"Nuestras propiedades están situadas en zonas de alto desarrollo y conectividad, cerca de servicios esenciales, centros comerciales y áreas recreativas. Vive donde todo está a tu alcance."}
        image={foto}
        reverse={true}
        btn={"Ver Alquileres"}
      />
      <CardHome 
        title={"Diseños Modernos"} 
        description={"Cada propiedad está cuidadosamente diseñada con acabados de primera calidad, optimizando el espacio y brindando comodidad. Disfruta de hogares con estilo contemporáneo y adaptados a tus necesidades."}
        image={foto}
        reverse={false}
        btn={"Ver Propiedades"}
      />
    </>
  )
}

export default App
