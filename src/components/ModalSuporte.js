import React from 'react'
import { FaWindowClose } from 'react-icons/fa'


function ModalSuporte({Close, classRef, onClick}) {
  return (
    <div className={`fixed bg-black w-[50%] h-[80%] top-[50%] left-[50%] rounded-xl translate-y-[-50%] translate-x-[-50%] z-50 ${Close} duration-500 ${classRef}`}> 
      <div className="relative w-full h-full ">
      <div onClick={onClick} className='absolute top-1 right-2 text-white cursor-pointer flex items-center gap-3'><FaWindowClose size={20} color='#0F5197'/> </div>
        <div className='bg-white w-full h-full rounded-xl'>
          <div className='flex w-full h-full'>
            <div className='bg-modal h-full w-[50%]'>

            </div>

            <div>
              <div className='container mx-auto'>
                <h2 className='text-2xl'>Preencha o formulário</h2>
                <p className='text-sm'>Assim que recebermos sua solicitação, um dos nossos especialistas entrará em contato.</p>
                <form>
                  <input placeholder='Nome'></input>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalSuporte