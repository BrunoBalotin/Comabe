import React from 'react'

function ProductCard({Nome, Imagem, LinkButton}) {
  return (
    <div className='bg-white w-[340px] h-[435px] rounded-xl shadow-shadow-card pb-[30px] pt-[30px]'>
        <div className='flex flex-col items-center justify-center h-full'>
            <div className='h-[180px] flex items-end'><img className='w-full object-cover' src={Imagem} alt=''/> </div>
            <h2 className='text-[18px] font-medium w-[85%] text-center mt-[50px] mb-[30px]'>{Nome}</h2>
            <a target='_blank' rel='noreferrer' className='flex justify-center items-center bg-comabeblue hover:bg-black duration-700 px-7 py-3 w-[200px] text-[18px] text-white font-medium rounded-full cursor-pointer' href={LinkButton}>Tenho interesse</a>
        </div>
    </div>
  )
}

export default ProductCard