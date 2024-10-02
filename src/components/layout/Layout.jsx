import React from 'react'

export const Layout = ({children}) => {
  return (<section class="text-gray-600 body-font">
    <div class="container px-5 py-16 ">
      <div class="flex flex-wrap">
        {children}
      </div>
    </div>
  </section>
  )
}
