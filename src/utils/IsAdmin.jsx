import React from "react"
import { Navigate } from "react-router-dom"
import { getLocalStorage } from "./myLocalStorage"

export const IsAdminRoute = ({ children }) => {
  let user = getLocalStorage('user')

  if (user && user.type === 1) {
    return children
  } else {
    return <Navigate to="/" />
  }
}

export const IsAdmin = ({ children }) => {
  let user = getLocalStorage('user')

  if (user && user.type === 1) {
    return children
  } else {
    return 
  }
}