import React, { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { Navigate } from "react-router-dom"
import { getLocalStorage } from "./myLocalStorage"

export const IsAdmin = ({ children }) => {
  // const { user } = useContext(UserContext)

  let user = getLocalStorage('user')
  if (user && user.type === 1) {
    console.log('entre')
    return children
  } else {
    return <Navigate to="/" />
  }
}