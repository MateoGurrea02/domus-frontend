import Gallery from "../components/Gallery"
import casa2 from '../assets/casa2.jpg'
import casa from '../assets/casa.jpg'
import casa1 from '../assets/casa1.jpeg'
import RateStars from "../components/RateStars"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Container } from "../components/container/Container"

const PropertyDetail = ()=>{
  let list = [casa2,casa,casa1]
  return (
    <>
      <Header/>
      <Container>
      <div className="flex flex-col mb-10">
        <div className="flex flex-col my-5">
          <h6 class="mb-2 block font-sans text-xs md:text-base font-semibold uppercase leading-relaxed tracking-normal antialiased">Departamento Luminoso en el Centro</h6>
          <div className="flex items-center">
            <RateStars rate={4}/>
            <p className=""><span className="mx-2">•</span> Taito City, Tokyo, Japan</p>
          </div>
        </div>
        <Gallery imgMain={casa2} imgListSecondary={list}/>
        <div className="my-5">
          <h2 className="text-amber-500 text-3xl md:text-5xl font-bold">Disponible</h2>
          <h3 className="md:text-xl mt-10">Informacion</h3>
          <div className="flex mt-5">
            <div className="mr-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#636AE8" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </div>
            <p className="md:text-xl">6 personas<span className="mx-2">•</span>2 habitaciones<span className="mx-2">•</span>1 baño</p>
          </div>
          <div className="flex mt-5">
            <div className="mr-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#E8618C" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>

            </div>
            <p>Cancelación gratuita en las primeras 48 horas</p>
          </div>
          <p className="text-xs md:text-base md:w-3/4 mt-5">Este acogedor departamento de 2 habitaciones se encuentra en una ubicación privilegiada en el corazón de la ciudad, ideal para quienes buscan comodidad y cercanía a las principales zonas comerciales y de entretenimiento. La propiedad cuenta con grandes ventanales que permiten la entrada de abundante luz natural, creando un ambiente cálido y acogedor en todas las áreas.La sala de estar se conecta de manera abierta con el comedor y la cocina, formando un espacio amplio y funcional, perfecto para recibir visitas o disfrutar de momentos en familia. La cocina está equipada con electrodomésticos modernos y acabados en granito, ofreciendo un diseño elegante y práctico.
            Las dos habitaciones son de buen tamaño, con closets empotrados y excelente iluminación. La habitación principal tiene acceso a un pequeño balcón, ideal para relajarse y disfrutar de la vista a la ciudad. El baño principal cuenta con acabados de primera calidad, ducha tipo lluvia y detalles en mármol.Este departamento también ofrece acceso a las amenidades del Edificio Sol, que incluyen un gimnasio totalmente equipado, áreas comunes de descanso, una terraza en la azotea con zona de BBQ, y servicio de vigilancia las 24 horas.
          </p>
        </div>
        <hr className="my-20 "/>
        
      </div>
      </Container>
      <Footer/>
    </>
  )
}

export default PropertyDetail