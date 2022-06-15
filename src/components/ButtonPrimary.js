import React from 'react'
import { HashLink as  Link } from 'react-router-hash-link'
import './css/ButtonPrimary.css'

function ButtonPrimary({text, color, linkRef, border, fullWidth, hash}) {
  return (
   <Link to={linkRef} hash={hash} > <button className={`text-[15px] sm:text-[16px] md:text-[16px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] text-white px-6 py-3 sm:px-12 sm:py-3 rounded-[30px] font-medium border ${fullWidth} ${border} ${color}`}>{text}</button> </Link>
  )
}

export default ButtonPrimary