import React, { useContext, useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import Gallery from "../components/Gallery"
import RateStars from "../components/RateStars"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Container } from "../components/container/Container"
import { Link } from "react-router-dom"
import axios from "axios"

const PropertyDetail = ()=>{
  const { isAuth } = useContext(UserContext)
  const [data, setData] = useState(false)
  const { idProperty } = useParams()
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false)

  
  useEffect(() => {
    getProperty()
    
  }, [])
  
  const getProperty = async ()=>{
    const data = await axios.get(`http://127.0.0.1:4000/api/properties/find/${idProperty}`)
    if(data.status === 200){
      setData(data.data)
      setIsLoading(true)
    }
  }

  const handleDescription = ()=>{
    setShow(!show)
  }
  return (
    <>
      <Header/>
      {isLoading?
      
      
      <Container>
        <Link to={'/property-search/'}>
          <button type="button" className="text-black bg-gray-200 hover:bg-gray-400 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 text-center">Volver</button>
        </Link>
      <div className="flex flex-col mb-10">
        <div className="flex flex-col my-5">
          <h6 class="mb-2 block font-sans text-xs md:text-base font-semibold uppercase leading-relaxed tracking-normal antialiased"></h6>
          <div className="flex items-center">
            <RateStars rate={4}/>
            <p className=""><span className="mx-2">•</span> {data?data.address:'Sin Direccion'}</p>
          </div>
        </div>
        <Gallery 
          imgMain={data ? data.ImageProperties:''} 
          />
        <div className="my-5">
          <h2 className="text-amber-500 text-3xl md:text-5xl font-bold">{data?data.PropertyStatus.status:'Diponible'}</h2>
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
          <p className={`text-xs md:text-base md:w-3/4 mt-5 cursor-pointer`} onClick={handleDescription}>
            <span className={`duration-1000 ${show ? '':'line-clamp-5'}`}>
              {data?data.description:''}
            </span>
            <span className="text-amber-500 font-semibold">{show ? "  Ver Menos" : "Ver Mas"}</span>
          </p>
        </div>
        { isAuth ? 
        <div className="flex items-center mt-5">
          <a href="https://api.whatsapp.com/send?phone=543385409800" target="_blank" className="mx-2 hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" stroke-width="1.5" fill="#25d366" stroke="#25d366" class="size-9">
              <path d="M 24 3.9980469 C 12.972292 3.9980469 4 12.970339 4 23.998047 C 4 27.273363 4.8627078 30.334853 6.2617188 33.064453 L 4.09375 40.826172 C 3.5887973 42.629575 5.3719261 44.41261 7.1757812 43.908203 L 14.943359 41.740234 C 17.670736 43.136312 20.727751 43.998047 24 43.998047 C 35.027708 43.998047 44 35.025755 44 23.998047 C 44 12.970339 35.027708 3.9980469 24 3.9980469 z M 24 6.9980469 C 33.406292 6.9980469 41 14.591755 41 23.998047 C 41 33.404339 33.406292 40.998047 24 40.998047 C 20.998416 40.998047 18.190601 40.217527 15.742188 38.853516 A 1.50015 1.50015 0 0 0 14.609375 38.71875 L 7.2226562 40.779297 L 9.2851562 33.396484 A 1.50015 1.50015 0 0 0 9.1503906 32.261719 C 7.7836522 29.811523 7 27.002565 7 23.998047 C 7 14.591755 14.593708 6.9980469 24 6.9980469 z M 17.240234 15 C 16.921234 15 16.405797 15.119656 15.966797 15.597656 C 15.528797 16.073656 14.294922 17.228125 14.294922 19.578125 C 14.294922 21.928125 16.005141 24.197578 16.244141 24.517578 C 16.482141 24.834578 19.547344 29.812562 24.402344 31.726562 C 28.436344 33.316563 29.256812 32.999922 30.132812 32.919922 C 31.008813 32.841922 32.959422 31.766391 33.357422 30.650391 C 33.755422 29.534391 33.755672 28.579813 33.638672 28.382812 C 33.519672 28.183812 33.200656 28.063219 32.722656 27.824219 C 32.245656 27.585219 29.898937 26.430484 29.460938 26.271484 C 29.022938 26.112484 28.702766 26.031766 28.384766 26.509766 C 28.066766 26.987766 27.152047 28.062859 26.873047 28.380859 C 26.594047 28.700859 26.315891 28.740953 25.837891 28.501953 C 25.358891 28.260953 23.822094 27.757859 21.996094 26.130859 C 20.576094 24.865859 19.620797 23.302219 19.341797 22.824219 C 19.063797 22.348219 19.311781 22.086609 19.550781 21.849609 C 19.765781 21.635609 20.028578 21.292672 20.267578 21.013672 C 20.504578 20.734672 20.583188 20.53675 20.742188 20.21875 C 20.901188 19.90175 20.822125 19.621813 20.703125 19.382812 C 20.584125 19.143813 19.655469 16.780938 19.230469 15.835938 C 18.873469 15.041938 18.49725 15.024719 18.15625 15.011719 C 17.87825 15.000719 17.558234 15 17.240234 15 z"></path>
            </svg>
          </a>
          <a href="mailto:mategurrea@gmail.com" className="mx-2 hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#c71610" class="size-9">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          </a>
          <a href="tel:+543385409800" className="flex mx-2 hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-9">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
            <span className="items-center text-center mt-2">+54 03385-409800</span>
          </a>
        </div>
        :
        ""
        }

        <hr className="my-20 "/>
        
      </div>
      </Container>
      :
      <h1>Cargando</h1>
      }
      <Footer/>
    </>
  )
}

export default PropertyDetail