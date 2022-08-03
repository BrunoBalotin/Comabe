import React, { useState } from "react";
import SerraGaucha from "../images/serragaucha.png";
import Feevale from "../images/feevale.png";
import SantaCatarina from "../images/santacatarina.png";

import { ReactComponent as GrayPin } from "../images/graypin.svg";
import VerNoMapa from "./VerNoMapa";
import Modal from "./Modal";

function Sedes() {

  const [openSerra, setOpenSerra] = useState(true)
  const [openFeevale, setOpenFeevale] = useState(0)
  const [openSanta, setOpenSanta] = useState(0)

  

  const [openMapaSerra, setOpenMapaSerra] = useState(0)
  
  const toggleMapaSerra = () => {
    setOpenMapaSerra(!openMapaSerra)
    console.log("Clicado")
  }

  const [openMapaFeevale, setOpenMapaFeevale] = useState(0)
  
  const toggleMapaFeevale = () => {
    setOpenMapaFeevale(!openMapaFeevale)
    console.log("Clicado")
  }

  const [openMapaSanta, setOpenMapaSanta] = useState(0)
  
  const toggleMapaSanta = () => {
    setOpenMapaSanta(!openMapaSanta)
    console.log("Clicado")
  }


  
   
 

  const toggleSerra = () => {
      
    setOpenSerra(!openSerra)

    if (openFeevale === true) {
      setOpenFeevale(!openFeevale)
    } else if (openSanta === true) {
      setOpenSanta(!openSanta)
    }

  }

  const toggleFeevale = () => {
    setOpenFeevale(!openFeevale)

    if (openSerra === true) {
      setOpenSerra(!openSerra)
    } else if (openSanta === true) {
      setOpenSanta(!openSanta)
    }
}

  const toggleSanta = () => {
  setOpenSanta(!openSanta)
  if (openFeevale === true) {
    setOpenFeevale(!openFeevale)
  } else if (openSerra === true) {
    setOpenSerra(!openSerra)
  }
}


  return (
    <div className="py-48 flex items-center">
      <div className="container mx-auto">
        <div>
          <h2 className="text-3xl font-medium text-center mb-[80px]">
            Nossas sedes
          </h2>
        </div>

        <div className="flex flex-col-reverse lg:flex-row justify-between">
          <div className="w-full lg:w-[40%] relative">
            <img className={`absolute duration-700 ${openSerra? 'opacity-1 block' : 'opacity-0 hidden'}`} src={SerraGaucha} alt="" />
            <img className={`absolute duration-700 ${openFeevale? 'opacity-1 block' : 'opacity-0 hidden'}`} src={Feevale} alt="" />
            <img className={`absolute duration-700 ${openSanta? 'opacity-1 block' : 'opacity-0 hidden'}`} src={SantaCatarina} alt="" />
          </div>

          <div className="w-full lg:w-[50%]">
            <div className="flex flex-col">
              <div className="flex justify-between mb-[25px]">
                <span onClick={toggleSerra} className="w-25w lg:w-auto text-xl font-medium cursor-pointer">
                  Serra Gaúcha
                </span>
                <span onClick={toggleFeevale} className="flex justify-center lg:block w-31w lg:w-auto text-xl font-medium cursor-pointer">
                  Feevale Techpark
                </span>
                <span onClick={toggleSanta} className="flex justify-end lg:block w-31w lg:w-auto text-xl font-medium cursor-pointer">
                  Santa catarina
                </span>
              </div>

              <div className="relative">
                <span className="absolute w-full block bg-slate-400 h-[1px]"></span>
                <span className={`absolute w-[21%] duration-700 block bg-[#0F5197] h-[4px] -top-[1.3px] ${openSerra? 'translate-x-0' : null} ${openFeevale? 'translate-x-[135%] lg:translate-x-[133%] w-[25%] lg:w-[27%]' : null} ${openSanta? 'translate-x-[235%] w-[30%] lg:translate-x-[356%] lg:w-[22%]' : null}`}></span>
              </div>
            </div>

            <div className="relative h-[350px] lg:h-auto">
              <div className={`absolute opacity-1 duration-700 ${openSerra? 'opacity-1 z-10' : 'opacity-0 z-0'}`}>
                <p className="text-sm font-light text-[#575757] mt-[30px] mb-[30px]">
                  Conhecida como a cidade da uva e do vinho, Bento Gonçalves -
                  RS é o berço da Comabe e está entre as dez maiores economias
                  do estado. Com um vasto mercado de comércio e indústria
                  instalados na cidade, a Comabe identificou este como um
                  excelente ponto para a instalação de sua sede matriz.
                </p>
                <span className="flex items-center gap-[20px] mb-[30px]">
                  <GrayPin /> Rua Três de Outubro, 120 Cidade Alta, Bento
                  Gonçalves - RS
                </span>
                <VerNoMapa onClick={toggleMapaSerra}/>
              </div>
              <div className={`absolute duration-700 ${openFeevale? 'opacity-1 z-10' : 'opacity-0 z-0 hidden'}`}>
                <p className="text-sm font-light text-[#575757] mt-[30px] mb-[30px]">
                  Firmando parceria com a Feevale Techpark, a Comabe conta com
                  uma unidade no polo tecnológico da Feevale. Situado na região
                  metropolitana, na cidade de Campo Bom/RS, o Techpark é um dos
                  3 melhores parques tecnológicos do Brasil e tem a inovação
                  como principal objetivo. Para a estrutura do parque
                  tecnológico, a Comabe ampliou o desenvolvimento de soluções
                  customizadas de ECM, atendendo, de forma particular e
                  completa, as demandas de gestão documental específica para
                  cada vertente do mercado
                </p>
                <span className="flex items-center gap-[20px] mb-[30px]">
                  <GrayPin /> Rua Três de Outubro, 120 Cidade Alta, Bento
                  Gonçalves - RS
                </span>
                <VerNoMapa onClick={toggleMapaFeevale} />
              </div>
              <div className={`absolute duration-700 ${openSanta? 'opacity-1 z-10' : 'opacity-0 z-0 hidden'}`}>
                <p className="text-sm font-light text-[#575757] mt-[30px] mb-[30px]">
                  A Comabe conta também com uma unidade estrategicamente
                  localizada na cidade de Passo de Torres, em SC, distante 270
                  quilômetros de Florianópolis, às margens do Rio Mampituba (rio
                  dos Bagres), divisa entre os estados de Santa Catarina e Rio
                  Grande do Sul. Além disso, a cidade é banhada por rio e mar,
                  onde a Comabe atende diversas necessidades, entre elas a
                  cadeia de logística.
                </p>
                <span className="flex items-center gap-[20px] mb-[30px]">
                  <GrayPin /> Rua Três de Outubro, 120 Cidade Alta, Bento
                  Gonçalves - RS
                </span>
                <VerNoMapa onClick={toggleMapaSanta}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Modal onClick={toggleMapaSerra} Close={`${openMapaSerra? 'scale-1 block' : 'scale-0 hidden'}`} className='scale-0' Mapa="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3483.748734717859!2d-51.52159467000493!3d-29.17207574128924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951c3cb37c898417%3A0x77532064530a150b!2sR.%20Tr%C3%AAs%20de%20Outubro%2C%20120%20-%20Cidade%20Alta%2C%20Bento%20Gon%C3%A7alves%20-%20RS%2C%2095700-000!5e0!3m2!1spt-BR!2sbr!4v1654519683169!5m2!1spt-BR!2sbr" />
      <Modal onClick={toggleMapaFeevale} Close={`${openMapaFeevale? 'scale-1 block' : 'scale-0 hidden'}`} className='scale-0' Mapa="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d866.798643146844!2d-51.05257587075377!3d-29.65612773344226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951940e2d3ecd413%3A0x1e523c0da5e5286a!2sAlameda%20da%20Inova%C3%A7%C3%A3o%2C%20270%20-%20I%2C%20Campo%20Bom%20-%20RS%2C%2093700-000!5e0!3m2!1spt-BR!2sbr!4v1654524763153!5m2!1spt-BR!2sbr" />
      <Modal onClick={toggleMapaSanta} Close={`${openMapaSanta? 'scale-1 block' : 'scale-0 hidden'}`} className='scale-0' Mapa="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3478.5721272551!2d-49.724982384398324!3d-29.324224205112362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9522699a614519fd%3A0x3574ba44913bb2f0!2sR.%20Cel.%20Jo%C3%A3o%20Fernandes%2C%20195%20-%20Passo%20de%20Torres%2C%20SC%2C%2088980-000!5e0!3m2!1spt-BR!2sbr!4v1654524797462!5m2!1spt-BR!2sbr" />

    </div>
  );
}

export default Sedes;
