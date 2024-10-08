import React from 'react'

function TitlePage({title}) {
  return (
    <h1 class="text-4xl font-semibold mx-auto flex w-full p-5 md:max-w-[92%] lg:max-w-[80%]">{title}</h1>
  )
}

export default TitlePage