import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import axios from "axios";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState('')
  const [isAuth,setIsAuth] = useState(false)
  const navigate = useNavigate()
  const baseURL = 'http://127.0.0.1:4000/api'

  const login = async (usuario, password)=>{
    const token = (await axios.post(`${baseURL}/login`, {email:usuario, password:password}).then())
    if(token.status === 200){
      const tokenVerify = (await axios.get(`${baseURL}/verifytoken`,{
        headers: {
          'Authorization': `${await token.data.token}`
        }
      }).then())

      if(tokenVerify.status == 200){
        setIsAuth(true)
        navigate('/')
      }

    }
  }

  const logout = ()=>{
    setIsAuth(false)
  }

  const register = async (data)=>{
    const registerPetition = (await axios.post(`${baseURL}/users`, {    
      "name": data.user,
      "email": data.email,
      "password": data.password,
      "type":4
    }).then())
    console.log(registerPetition)

    if(registerPetition.status == 201){
      navigate('/login')
    }
  }
  

  return (
    <UserContext.Provider value={{ user,setUser,login,register,logout,isAuth}}>
      {children}
    </UserContext.Provider>
  )
}
export default UserProvider

export const useAuth =()=> useContext(UserContext)

export const RutaProtegida = ({ children }) => {
  const { isAuth } = useAuth()
  if (isAuth) {
    return <Navigate to='/'/>
  }
  return children
}