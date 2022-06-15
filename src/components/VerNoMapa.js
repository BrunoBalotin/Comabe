import React from 'react'
import {ReactComponent as ArrowRightMapa} from '../images/arrowrightmapa.svg'

function VerNoMapa({onClick}) {
  

  return (
    <button onClick={onClick} className='flex items-center gap-[10px] text-comabeblue text-[20px] font-medium'>Ver no mapa <ArrowRightMapa className='mt-[5px]' /> </button>
  )
}

export default VerNoMapa