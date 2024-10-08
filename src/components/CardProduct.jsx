import RateStars from "./RateStars"

const CardProduct = ({property})=>{
  return (
    <div class="relative flex w-full max-w-[60rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
    <div class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
        alt="image"
        class="h-full w-full object-cover"
      />
    </div>
    <div class="p-6">
      <div className="flex items-center justify-between">
        <h6 class="block font-sans text-xs md:text-base font-semibold uppercase leading-relaxed tracking-normal antialiased">
          {property.title}
        </h6>
        <button class="flex  select-none items-center gap-2 rounded-lg py-3 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>          
        </button>
      </div>
      <p class="block font-sans text-xs font-normal leading-relaxed text-gray-700 antialiased">
        <span className="font-bold">Direccion:</span> {property.direction}
      </p>      
      <p class="block font-sans text-xs font-normal leading-relaxed text-gray-700 antialiased">
        <span className="font-bold">Tipo:</span> {property.type}
      </p>      
      <p class="block font-sans text-xs font-normal leading-relaxed text-gray-700 antialiased">
        <span className="font-bold">Tamaño:</span> {property.size}
      </p>      
      <p class="block font-sans text-xs font-normal leading-relaxed text-gray-700 antialiased">
        <span className="font-bold">Estado:</span> {property.state}
      </p>      
      <p class="block font-sans text-xs font-normal leading-relaxed text-gray-700 antialiased">
        <span className="font-bold">Descripcion:</span> {property.description}
      </p> 
      <div className="flex items-start md:items-center mt-3 justify-between flex-col md:flex-row">
        <h2 className="font-bold text-purple-600 text-base md:text-2xl">Precio: ${property.price} USD/mes</h2>     
        <RateStars rate={property.rate} />
      </div>
    </div>
  </div>
  )
}


export default CardProduct