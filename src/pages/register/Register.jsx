import React, { useState,useContext,useNavigate,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import logo from '../../assets/Image 10.png'

function Register() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const {isAuth,errorLogin, setErrorLogin,register} = useContext(UserContext)
    const navigate = useNavigate

    const handleChangeError=()=>{
        setErrorLogin(false)
    }  

    const handleSubmit = (e)=>{
        e.preventDefault();
        let data = {
            email: email,
            user: userName,
            password: password,
        }
        register(data)
    }

    useEffect(() => {
        console.log(isAuth)
        if(isAuth){
            navigate('/')
        }
    }, []);

  return (
    <div class="flex flex-col w-full h-full mt-40 md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-[#ffffff] rounded-2xl shadow-xl">
    <div class="flex flex-row gap-3 pb-4">
        <div>
            <img src={logo} width="50" alt="Logo"/>
        </div>
         <h1 class="text-3xl font-bold text-[#4B5563] text-[#4B5563] my-auto">DOMUS</h1>

    </div>
    <div class="text-md font-light text-[#6B7280] pb-3 ">Registrate</div>
    <form class="flex flex-col" onSubmit={handleSubmit}>
        <div class="pb-2" onClick={handleChangeError}>
            <label for="email" class="block mb-2 text-sm font-medium text-[#111827]">Nombre</label>
            <div class={`${errorLogin?'text-rose-500 ':'text-gray-400 '}relative`}><span class="absolute inset-y-0 left-0 flex items-center p-1 pl-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></span> 
                <input type="text" name="name" id="name" class={`${errorLogin?'border-2 border-rose-500 text-rose-500 ':''}pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4`} placeholder="Nombre" autocomplete="off"onChange={(e)=>{setUserName(e.target.value)}}/>
            </div>
        </div>
        <div class="pb-2" onClick={handleChangeError}>
            <label for="email" class="block mb-2 text-sm font-medium text-[#111827]">Email</label>
            <div class={`${errorLogin?'text-rose-500 ':'text-gray-400 '}relative`}><span class="absolute inset-y-0 left-0 flex items-center p-1 pl-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></span> 
                <input type="email" name="email" id="email" class={`${errorLogin?'border-2 border-rose-500 text-rose-500 ':''}pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4`} placeholder="nombre@domus.com" autocomplete="off" onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
        </div>
        <div class="pb-6" onClick={handleChangeError}>
            <label for="password" class="block mb-2 text-sm font-medium text-[#111827]">Contraseña</label>
            <div class={`${errorLogin?'text-rose-500 ':'text-gray-400 '}relative`}><span class="absolute inset-y-0 left-0 flex items-center p-1 pl-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-asterisk"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M12 8v8"></path><path d="m8.5 14 7-4"></path><path d="m8.5 10 7 4"></path></svg></span> 
                <input type="password" name="password" id="password" placeholder="••••••••••" class={`${errorLogin?'border-2 border-rose-500 text-rose-500 ':''}pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4`} autocomplete="new-password" onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
        </div>
        <button type="submit" class="w-full text-[#FFFFFF] bg-[#4F46E5] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6">Registrarse</button>
        <div class="text-sm font-light text-[#6B7280] ">
            <span className='pr-1'>¿Ya tienes una cuenta?</span>
            <Link to='/login'>
                <p class="font-medium text-[#4F46E5] hover:underline">Iniciar Sesion</p>
            </Link>

        </div>
    </form>
</div>
  )
}

export default Register 