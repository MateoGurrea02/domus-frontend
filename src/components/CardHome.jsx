import React from "react"
import { Link } from "react-router-dom"
const CardHome = ({image, title, description, reverse=true, btn}) => {
  return(
    <section class="text-gray-600 body-font bg-gray-300 rounded-xl p-20 my-20">
      <div className={`flex mx-auto justify-end px-5 py-24 w-3/5 flex-col items-center ${reverse ? "md:flex-row-reverse ": "md:flex-row"}`}>
        <div class={`w-full relative`} data-aos={reverse ? "fade-left" : "fade-right"} data-aos-duration="2000">
          <img class={`object-cover object-center rounded-xl h-96  absolute -top-48 ${reverse ? "right-10" : "left-10"}`} alt="hero" src={image}/>
        </div>
        <div className={`${reverse ? 'lg:pr-24 md:pr-16 md:items-start md:text-left ' : 'lg:pl-24 md:pl-16 md:items-end md:text-right text-right'} flex flex-col items-center bg-white p-10 rounded-xl z-10`} data-aos={reverse ? "fade-right" : "fade-left"}  >
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 w-full">
            {title}
          </h1>
          <p class="mb-8 leading-relaxed">{description}</p>
          <Link to={"/property-search"} class="flex justify-center">
            <button class="inline-flex border-0 py-2 px-6 focus:outline-none text-amber-900 bg-amber-500 hover:bg-amber-600 rounded text-lg">{btn}</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CardHome