import React from "react"
import { Navigate } from "react-router-dom"
import { getLocalStorage } from "./myLocalStorage"

export const IsClient = ({ children }) => {
  let user = getLocalStorage('user')
  if (user && user.type === 3) {
    return children
  } else {
    return <Navigate to="/" />
  }
}