import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../images/logocomabe.svg'
import { RiMenuAddFill } from 'react-icons/ri';
import {HashLink} from 'react-router-hash-link'



function Navbar()  {

  const [openMenu, setOpenMenu] = useState(0)
  var responsiveBreakpoint = window.matchMedia("(max-width: 640px)")

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  const scrollToBlog = () => {

    if (responsiveBreakpoint.matches) {
      setTimeout(() => {
        window.scrollTo({
            top: 9000,
            behavior: "smooth"
          });
    }, 300)

    } else {

      setTimeout(() => {
        window.scrollTo({
            top: 7200,
            behavior: "smooth"
          });
    }, 300)

    }
    
  }

  return (
    <div id='header'>
    <div className='bg-white h-[15vh] sm:h-[15vh] lg:h-[15vh] xl:h-[15vh] 2xl:h-[10vh]'>
        <div className='container h-full mx-auto'>
            <div className='flex justify-between h-full items-center'>
                <div><Link to={'/'}><Logo className='w-[100px] lg:w-[110px] xl:w-[120px] 2xl:w-auto sm:w-auto'/></Link></div>

                <div className='flex gap-[30px] items-center'>
                    <nav className='hidden lg:flex gap-[30px] '>
                        <Link className='lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-medium hover:text-[#0F5197] duration-500' to={'/'}>Início</Link>
                        <Link className='lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-medium hover:text-[#0F5197] duration-500' to={'/quem-somos'}>Quem Somos</Link>
                        <Link className='lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-medium hover:text-[#0F5197] duration-500' to={'/business-scan'}>Business Scan</Link>
                        <Link className='lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-medium hover:text-[#0F5197] duration-500' to={'/produtos'}>Produtos</Link>
                        <Link className='lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-medium hover:text-[#0F5197] duration-500' to={'/solu%C3%A7%C3%B5es'}>Soluções</Link>
                        <HashLink onClick={scrollToBlog} className='lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-medium hover:text-[#0F5197] duration-500' to={'/'}>Blog</HashLink>
                    </nav>

                    <div className='hidden sm:flex gap-[10px] items-center'>
                        <Link className='lg:text-[15px] xl:text-[16px] 2xl:text-[18px] text-[#0F5197] font-medium border border-[#0F5197] px-[16px] py-[8px] rounded-full hover:bg-[#0F5197] hover:text-white duration-500' to={'/contato'}>Contato</Link>
                    </div>

                    <div onClick={toggleMenu} className='block lg:hidden cursor-pointer'> <RiMenuAddFill  size={30} /></div>

                    
                </div>
            </div>
        </div>
        
    </div>

    <div className={`w-full h-[0px] overflow-hidden gap-[10px] flex flex-col items-center justify-center text-center lg:hidden duration-500 bg-[#0F5197] ${openMenu ? ' h-[400px]' : null}`}>
    <Link className='text-[20px] sm:text-[24px] text-white font-medium hover:text-[#FF8800] duration-500' to={'/'}>Início</Link>
    <Link className='text-[20px] sm:text-[24px] text-white font-medium hover:text-[#FF8800] duration-500' to={'/quem-somos'}>Quem Somos</Link>
    <Link className='text-[20px] sm:text-[24px] text-white font-medium hover:text-[#FF8800] duration-500' to={'/business-scan'}>Business Scan</Link>
    <Link className='text-[20px] sm:text-[24px] text-white font-medium hover:text-[#FF8800] duration-500' to={'/produtos'}>Produtos</Link>
    <Link className='text-[20px] sm:text-[24px] text-white font-medium hover:text-[#FF8800] duration-500' to={'/solu%C3%A7%C3%B5es'}>Soluções</Link>
    <HashLink onClick={scrollToBlog} className='text-[20px] sm:text-[24px] text-white font-medium hover:text-[#FF8800] duration-500' to={'/'}>Blog</HashLink>
    <div className='flex sm:hidden flex-col gap-[10px] mt-[20px]'>
    <Link className='xl:text-[18px] sm:text-[24px] text-white font-medium border border-white px-[16px] py-[8px] rounded-full hover:bg-[#0F5197] hover:text-white duration-500' to={'/contato'}>Contato</Link>
    </div>
    </div>
    </div>
    
  )
}

export default Navbar