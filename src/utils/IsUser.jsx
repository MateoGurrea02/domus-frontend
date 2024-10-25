import React from "react"
import { Navigate } from "react-router-dom"
import { getLocalStorage } from "./myLocalStorage"

export const IsUserRoute = ({ children }) => {
  let user = getLocalStorage('user')
  if (user && user.type === 3) {
    return children
  }
  return <Navigate to="/" />
}

export const IsUser = ({ children }) => {
  let user = getLocalStorage('user')
  if (user && user.type === 3) {
    return children
  }
  return
}
