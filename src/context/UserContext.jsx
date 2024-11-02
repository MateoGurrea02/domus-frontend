import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { setLocalStorage, getLocalStorage } from "../utils/myLocalStorage";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState('')
  const [isAuth,setIsAuth] = useState(false)
  const [errorLogin, setErrorLogin] = useState(false)
  const navigate = useNavigate()
  const baseURL = 'http://127.0.0.1:4000/api'

  useEffect(() => {
    if(getLocalStorage('user') != ''){
      setUser(getLocalStorage('user'))
      setIsAuth(true)
    }
  }, []);

  const login = async (usuario, password)=>{
    const token = await axios.post(`${baseURL}/login`, {email:usuario, password:password}).catch(
      (error) => {
        setErrorLogin(true)
        console.log(error)
        }
    )
    if(token.status === 200){
      const tokenVerify = (await axios.get(`${baseURL}/verifyToken`,{
        headers: {
          'Authorization': `${await token.data.token}`
        }
      }))
      if(tokenVerify.status == 200){
        let data = {id:tokenVerify.data.id,name:tokenVerify.data.name,type:tokenVerify.data.type,token:token.data.token}
        setUser(data)
        setIsAuth(true)
        setLocalStorage('user',data)
        navigate('/')
      }else{
        setErrorLogin(true)
      }
    }
    
  }

  const logout = ()=>{
    setIsAuth(false)
    setUser('')
    setLocalStorage('user', '')
    navigate('/')
  }

  const register = async (data)=>{
    const registerPetition = await axios.post(`${baseURL}/register`, {    
      "name": data.user,
      "email": data.email,
      "password": data.password,
      "type": 4,
    }).catch(
      (error) => {
        setErrorRegister(true)
      }
    )

    if(registerPetition.status == 201){
      navigate('/login')
    }
  }
  

  return (
    <UserContext.Provider value={{ user,setUser,login,register,logout,isAuth,errorLogin,setErrorLogin}}>
      {children}
    </UserContext.Provider>
  )
}
export default UserProvider
