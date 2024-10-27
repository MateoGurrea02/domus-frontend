import Header from '../components/Header'
import foto from '../assets/casa2.jpg'
import CardHome from '../components/CardHome'
import Footer from '../components/Footer'
import foto2 from '../assets/casa1.jpeg'
import { Link } from 'react-router-dom'

const Home = () => {
  return(
    <>
      <Header></Header>  
      <section className="">
        <img src={foto} alt="" className='object-cover w-full h-full absolute blur-sm -z-10'/>
        <div className='bg-black h-full w-full absolute opacity-40 -z-10'>
        </div>
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center z-10" data-aos="zoom-in" data-aos-duration="2000">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-6xl text-white">
              Propiedades que inspiran espacios que transforman
            </h1>

            <p className="mt-4 sm:text-xl/relaxed text-white">
              Desde modernas residencias hasta locales comerciales, ofrecemos espacios que se adaptan a tu estilo de vida y necesidades.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/property-search"
                className="block w-full rounded px-12 py-3 text-xl font-medium text-amber-900 bg-amber-500 hover:bg-amber-600 shadow sm:w-auto"
              >
                Ver Mas
              </Link>
            </div>
          </div>
        </div>
      </section>  
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
        image={foto2}
        reverse={false}
        btn={"Ver Propiedades"}
      />
      <Footer/>
    </>
  )
}

export default Home