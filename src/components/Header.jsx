import logo from '../assets/Image 10.png'


const Header = () => {
  return(
    <>
      <nav className="bg-white border-gray-200 px-10 py-5 md:px-20 md:py-0">
        <div className="flex flex-wrap items-center justify-between mx-auto">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={logo} className="h-20 md:h-40" alt="Domus logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap"></span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button type="button" className="text-black hover:bg-gray-200 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 text-center">Iniciar Sesion</button>
              <button type="button" className="text-amber-900 bg-amber-500 hover:bg-amber-600 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 text-center">Registrarse</button>
              <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-cta" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li>
                <a href="#" className="block py-2 px-3 md:p-0 text-gray-500 rounded md:bg-transparent md:hover:text-gray-900" aria-current="page">Inicio</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 md:p-0 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-900 ">Propiedades</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 md:p-0 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-900 ">Alquileres</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header