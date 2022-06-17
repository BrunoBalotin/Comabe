import React from 'react'
import ButtonPrimary from './ButtonPrimary'
import {ReactComponent as UserAvatar} from '../images/Outsourcing/User.svg'

function ContactBox({imagem, title, text, buttonText, contactLink}) {
  return (
    <div className='container mx-auto py-5 lg:py-0 lg:pt-[100px] lg:pb-[150px]'>
        <div className='w-full py-20 bg-[#F8F8FA] rounded-2xl'>
            <div className='flex justify-between relative h-full'>
                <div className='px-5 lg:px-0 lg:pl-[70px] lg:w-[45%]'>
<<<<<<< HEAD
                    <img className='hidden lg:block absolute lg:-top-[135px] 2xl:-top-[100px]' src={imagem} alt='' />
=======
                    <img className='hidden lg:block absolute lg:-top-[135px] 2xl:-top-[44px]' src={imagem} alt='' />
>>>>>>> c7c01f89e681e6675f092be30e3c21306d9d0e4c
                </div>

                <div className='w-full lg:w-[45%] lg:pr-[150px] flex flex-col justify-center h-full'>
                    <h2 className='text-2xl font-medium text-[#343434] w-[100%]'>{title}</h2>
                    <p className='text-sm text-[#575757] font-light my-[30px] w-[100%]'>{text}</p>
                    <ButtonPrimary text={buttonText} color="ButtonPrimary" linkRef={contactLink} />
                    <span className='flex items-center gap-[20px] text-sm text-[#575757] font-medium mt-[30px]'><UserAvatar />Nosso time lhe retornará o mais breve possível </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactBox