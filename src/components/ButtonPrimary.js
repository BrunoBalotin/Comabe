import React from 'react'
import { HashLink as  Link } from 'react-router-hash-link'
import './css/ButtonPrimary.css'

function ButtonPrimary({text, color, linkRef = '', border = '' , fullWidth = '', hash = '', onClick}) {
  return (
   <Link onClick={onClick} to={linkRef} hash={hash} > <button className={`text-sm text-white px-6 py-3 sm:px-12 sm:py-3 rounded-3xl font-medium border ${fullWidth} ${border} ${color}`}>{text}</button> </Link>
  )
}

export default ButtonPrimary