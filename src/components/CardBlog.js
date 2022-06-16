import React from 'react'

function CardBlog({Image, Title, Text}) {
  return (
    <div className='w-full lg:w-[32%] xl:w-[31%] 2xl:w-[32%] h-[450px] lg:h-[480px]'>
        <div className=''><img className='w-full' src={Image} alt='' /> </div>
        <h2 className='text-[20px] xl:text-[22px] 2xl:text-[24px] text-[#343434] font-medium my-[30px]'>{Title}</h2>
        <p className='text-[15px] xl:text-[16px] 2xl:text-[18px] text-[#343434] xl:w-[100%] 2xl:w-[90%]'>{Text}</p>
    </div>
  )
}

export default CardBlog