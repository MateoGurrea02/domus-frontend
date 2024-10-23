import React, { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { Navigate } from "react-router-dom"

export const IsLogged = ({ children }) => {
  const { isAuth } = useContext(UserContext)
  if (isAuth ) {
    return <Navigate to='/'/>
  }
  return children
}