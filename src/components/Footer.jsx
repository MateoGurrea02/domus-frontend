import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"
import youtube from "../assets/youtube.svg"
import twitter from "../assets/twitter.svg"

const Footer = () => {
  return (
    <footer class="bg-black shadow">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <ul class="flex flex-wrap justify-center text-sm font-medium text-gray-500 mb-5">
            <li>
              <a href="#" className=""><img src={facebook} className="h-5 mx-2" alt="facebook" /></a>
            </li>
            <li>
              <a href="#" className=""><img src={youtube} className="h-5 mx-2" alt="youtube" /></a>
            </li>
            <li>
              <a href="#" className=""><img src={instagram} className="h-5 mx-2" alt="instagram" /></a>
            </li>
            <li>
              <a href="#" className=""><img src={twitter} className="h-5 mx-2" alt="twitter" /></a>
            </li>
          </ul>
          <span class="block text-sm text-gray-500 mb-5 text-center">© <a href="https://flowbite.com/" class="hover:underline">DOMUS Inmobiliaria</a> - Desarrollo ITEC-LAB.</span>
          <ul class="flex flex-wrap justify-center text-sm font-medium text-gray-500 mb-5">
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">Servicios</a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">Privacidad</a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">Terminos</a>
            </li>
            <li>
              <a href="#" class="hover:underline">Contacto</a>
            </li>
          </ul>
        </div>
    </footer>
  )
}

export default Footer