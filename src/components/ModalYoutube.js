import React from 'react'
import { AiFillCloseSquare } from 'react-icons/ai'

function ModalYoutube({onClick, Close, video}) {
  return (
    <div className={`fixed top-0 left-0 w-screen h-screen bg-black/70 ${Close}`}>
    <div className='fixed left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] w-[90%] lg:w-[55.3%] h-[80%] lg:h-[65%] bg-white'>
        <AiFillCloseSquare onClick={onClick} size={30} color='#FFF' className='absolute -top-[35px] right-0 cursor-pointer'/>
        <iframe className='w-full h-full' src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </div>
  )
}

export default ModalYoutube