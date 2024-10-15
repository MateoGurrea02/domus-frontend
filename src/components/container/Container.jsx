import React from 'react'

export const Container = ({children}) => {
  return (
    <div class="mx-auto p-5 md:max-w-[92%] lg:max-w-[80%]">
      {children}
    </div>
  )
}
