import React from 'react'
import ButtonPrimary from './ButtonPrimary'
import {ReactComponent as UserAvatar} from '../images/Outsourcing/User.svg'

function ContactBox({imagem, title, text, buttonText, contactLink}) {
  return (
    <div className='container mx-auto pt-[100px] pb-[150px]'>
        <div className='w-full h-[485px] bg-[#F8F8FA] rounded-2xl'>
            <div className='flex justify-between relative h-full'>
                <div className='pl-[70px] w-[45%]'>
                    <img className='absolute -top-[44px]' src={imagem} alt='' />
                </div>

                <div className='w-[45%] pr-[150px] flex flex-col justify-center h-full'>
                    <h2 className='text-[32px] font-medium text-[#343434] w-[100%]'>{title}</h2>
                    <p className='text-[18px] text-[#575757] font-light my-[30px] w-[100%]'>{text}</p>
                    <ButtonPrimary text={buttonText} color="ButtonPrimary" linkRef={contactLink} />
                    <span className='flex items-center gap-[20px] text-[18px] text-[#575757] font-medium mt-[30px]'><UserAvatar />Nosso time lhe retornará o mais breve possível </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactBox