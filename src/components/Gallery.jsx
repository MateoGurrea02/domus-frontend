const Gallery = ({imgMain, imgListSecondary})=>{
  return(
    <>
      <div className="flex justify-center">
        <div className='flex w-5/6'>
          <img className='rounded-l-2xl shadow-md' src={imgMain} alt="" />
        </div>
        <div className='flex flex-col w-2/6 rounded-md'>
          <img className='rounded-tr-2xl ml-2 duration-200 hover:rounded-2xl shadow-md ' src={imgListSecondary[0]} alt="" />
          <img className='mt-2 ml-2 duration-200 hover:rounded-2xl shadow-md' src={imgListSecondary[1]} alt="" />
          <img className='rounded-br-2xl mt-2 ml-2 duration-200 hover:rounded-2xl shadow-md' src={imgListSecondary[2]} alt="" />
        </div>
      </div>
    </>
  )
}

export default Gallery