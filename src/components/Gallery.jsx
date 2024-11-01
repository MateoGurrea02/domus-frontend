const Gallery = ({imgMain})=>{
  return(
    <>
    {console.log(imgMain)}
      <div className="flex justify-center">
        <div className='flex w-5/6'>
          <img className='rounded-l-2xl shadow-md' src={imgMain[0].path} alt="" />
        </div>
        <div className='flex flex-col w-2/6 rounded-md'>
          <img className='rounded-tr-2xl ml-2 duration-200 hover:rounded-2xl shadow-md ' src={imgMain[1].path} alt="" />
          <img className='mt-2 ml-2 duration-200 hover:rounded-2xl shadow-md' src={imgMain[2].path} alt="" />
          <img className='rounded-br-2xl mt-2 ml-2 duration-200 hover:rounded-2xl shadow-md' src={imgMain[3].path} alt="" />
        </div>
      </div>
    </>
  )
}

export default Gallery