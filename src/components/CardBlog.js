import React from 'react'
import { Link } from 'react-router-dom'

function CardBlog({Image, Title, Text, BlogLink = '', onClick}) {
  return (
    <Link onClick={onClick} className='w-full lg:w-[32%] xl:w-[31%] 2xl:w-[32%] h-[450px] lg:h-[480px]' to={BlogLink}>
    <div className='w-full'>
        <div className='rounded-3xl overflow-hidden h-[230px]'><img className='w-full h-full' src={Image} alt='' /> </div>
        <h2 className='text-[18px] xl:text-[19px] 2xl:text-[21px] text-[#343434] font-medium my-[20px] w-[85%] h-[60px]'>{Title}</h2>
        <p className='text-[15px] xl:text-[16px] 2xl:text-[17px] text-[#343434] xl:w-[100%] 2xl:w-[100%]'>{Text}</p>
    </div>
    </Link>
  )
}

export default CardBlog