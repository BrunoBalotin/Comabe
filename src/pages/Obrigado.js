import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import ButtonPrimary from "../components/ButtonPrimary"

import { BsInstagram, BsYoutube } from 'react-icons/bs'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"

export function Obrigado() {


    return (
        <main className="obrigado-bg">
            <div className="mx-auto container flex flex-col justify-between h-full">
            <header>
                <nav className="flex pt-8">
                    <div className="logo flex-1">
                    <Link to='/'>
                    <img src='https://static.wixstatic.com/media/0c951b_2bcbb988c7cf489ba9487b9f6cfc26d4~mv2.png/v1/fill/w_143,h_25,al_c,q_85,enc_auto/0c951b_2bcbb988c7cf489ba9487b9f6cfc26d4~mv2.png' alt='logo'/>
                    </Link>
                    </div>

                    <ButtonPrimary text='Voltar ao site' color='orange' border='border-none' linkRef="/"/>
                </nav>
            </header>
            <section className="mt-40">
                <div>
                    <h2 className="text-white text-[4rem] text-center">
                        Obrigado pelo interesse!
                    </h2>
                    <p className="text-white text-[1.3rem] text-center">
                        Para fazer o download do e-book, basta clicar no botão abaixo
                    </p>
                    <div className="flex justify-center w-full mt-10">
                        <a className="text-white py-3 px-5 bg-[#FF8800] rounded-full text-[1.3rem] font-medium" href='https://drive.google.com/u/0/uc?id=1OHGVk2AOl-WsKXWk2xB9G1t4L2NdGDGX&export=download'>
                            Acessar o material
                        </a>
                    </div>
                </div>
            </section>
            <footer className="mb-[20vh] mt-[15vh]">
                <h2 className="text-white font-medium text-[1.3rem] text-center">Acesse também nossas redes sociais!</h2>
                <div className="flex justify-center mt-5">
                    <a className="flex mx-2" href="https://www.facebook.com/comabeoficial" target='_blank'>
                      <FaFacebookF color="white" size={30}/>
                    </a>
                    <a className="flex mx-2" href="https://www.instagram.com/comabeoficial/" target='_blank'>
                      <BsInstagram color="white" size={30}/>
                    </a>
                    <a className="flex mx-2" href="https://br.linkedin.com/company/comabeoficial" target='_blank'>
                      <FaLinkedinIn color="white" size={30}/>
                    </a>
                    <a className="flex mx-2" href="https://www.youtube.com/user/comabers" target='_blank'>
                      <BsYoutube color="white" size={30}/>
                    </a>
                </div>
            </footer>
            </div>
        </main>
    )
}