import React from 'react'
import { FaWindowClose } from 'react-icons/fa'

function Modal({Mapa, Close, onClick}) {
  return (
    <div className={`fixed bg-black w-[80%] h-[80%] top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-50 ${Close} duration-500`}>
      <div className="relative w-full h-full">
      <iframe title="Mapa" className='w-full h-full object-cover' src={Mapa}></iframe>
      <div onClick={onClick} className='absolute top-0 right-0 bg-[#0F5197] text-white p-4 cursor-pointer flex items-center gap-3'><FaWindowClose size={20}/> Fechar </div>
      </div>
    </div>
  );
}

export default Modal