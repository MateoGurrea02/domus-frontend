import React from "react"
import { Navigate } from "react-router-dom"
import { getLocalStorage } from "./myLocalStorage"

export const IsAdminOrAgentRoute = ({ children }) => {
  let user = getLocalStorage('user')

  if (user && user.type === 2 || user.type === 1) {
    return children
  } else {
    return <Navigate to="/" />
  }
}

export const IsAdminOrAgent = ({ children }) => {
  let user = getLocalStorage('user')

  if (user && user.type === 2 || user.type === 1) {
    return children
  } else {
    return 
  }
}