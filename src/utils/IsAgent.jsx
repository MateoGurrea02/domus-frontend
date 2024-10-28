import React from "react"
import { Navigate } from "react-router-dom"
import { getLocalStorage } from "./myLocalStorage"

export const IsAgentRoute = ({ children }) => {
  let user = getLocalStorage('user')

  if (user && user.type === 2) {
    return children
  } else {
    return <Navigate to="/" />
  }
}

export const IsAgent = ({ children }) => {
  let user = getLocalStorage('user')

  if (user && user.type === 2) {
    return children
  } else {
    return 
  }
}