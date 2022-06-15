import React, {useEffect, useState} from 'react'
import {ReactComponent as Impressora} from '../images/impressora.svg'
import {ReactComponent as Multifuncionais} from '../images/multifuncionais.svg'
import {ReactComponent as Scanners} from '../images/scanners.svg'
import {ReactComponent as Rotuladores} from '../images/rotuladores.svg'
import {ReactComponent as Papel} from '../images/papel.svg'
import {ReactComponent as Tonners} from '../images/tonners.svg'
import {ReactComponent as BolsaDeTinta} from '../images/bolsadetinta.svg'

import {ReactComponent as ArrowFilter} from '../images/arrowfilter.svg'
import {ReactComponent as ArrowDown} from '../images/arrowdowncircle.svg'
import ProductCard from './ProductCard'

import EcotankM1180 from '../images/EcotankM1180.png'
import BrotherHL from '../images/BrotherHL.png'
import L8360 from '../images/L8360.png'

import L5652 from '../images/L5652.png'
import B7535 from '../images/B7535.png'
import M5799 from '../images/WF-M5799.png'

import ES400 from '../images/ES-400.png'
import W1700 from '../images/1700W.png'
import W2800 from '../images/2800W.png'

import PT70 from '../images/PT70.png'
import PT80 from '../images/PT80.png'
import PTD210 from '../images/PTD210.png'
import PTH110 from '../images/PTH110.png'
import PTE550WVP from '../images/PTE550WVP.png'

import FolhasImagem from '../images/FolhasImagem.png'
import TonnersImagem from '../images/TonnersImagem.png'
import BolsaDeTintasImagem from '../images/BolsaDeTintasImagem.png'


 
function Filtro() {

  const [stickyClass, setStickyClass] = useState('static')

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };

  }, []);

  const stickNavbar = () => {
    let windowHeight = window.scrollY;
    
    if (window !== undefined) {
      
   
       windowHeight > 927 && windowHeight < 3767 ? setStickyClass('fixed') : setStickyClass('static');
      
    }
     
  };

 


   
  

  return (
    <div className="container mx-auto relative py-48" id='produtos'>
      <div className="flex justify-between">
        <div className="w-[280px] h-[750px] relative">
          <div
            className={`top-0 w-[280px] h-[600px] rounded-xl shadow-lg bg-white duration-700 ${stickyClass}`}
          >
            <div className="bg-[#0F5197] py-5 rounded-t-xl">
              <h2 className="text-white text-[20px] font-medium text-center">
                FILTRAR CATEGORIAS {}
              </h2>
            </div>
            <div className="flex flex-col container mx-auto">
              <span className="cursor-pointer flex items-center justify-between border-b text-[18px] font-light border-gray-300 pb-[20px] mt-[20px]">
               <a href='#impressora'> <span className="flex items-center gap-[15px]">
                  <Impressora/> Impressoras
                </span></a>
                <ArrowFilter />
              </span>
              <span className="cursor-pointer flex items-center justify-between border-b text-[18px] font-light border-gray-300 pb-[20px] mt-[20px]">
               <a href='#multifuncional'> <span className="flex items-center gap-[15px]">
                  <Multifuncionais /> Multifuncionais
                </span></a>
                <ArrowFilter />
              </span>
              <span className="cursor-pointer flex items-center justify-between border-b text-[18px] font-light border-gray-300 pb-[20px] mt-[20px]">
              <a href='#scanner'><span className="flex items-center gap-[15px]">
                  <Scanners /> Scanners
                </span></a>
                <ArrowFilter />
              </span>
              <span className="cursor-pointer flex items-center justify-between border-b text-[18px] font-light border-gray-300 pb-[20px] mt-[20px]">
              <a href='#rotulador'><span className="flex items-center gap-[15px]">
                  <Rotuladores /> Rotuladores
                </span></a>
                <ArrowFilter />
              </span>
              <span className="cursor-pointer flex items-center justify-between border-b text-[18px] font-light border-gray-300 pb-[20px] mt-[20px]">
              <a href='#suprimento'><span className="flex items-center gap-[15px]">
                  <Papel /> Papel
                </span></a>
                <ArrowFilter />
              </span>
              <span className="cursor-pointer flex items-center justify-between border-b text-[18px] font-light border-gray-300 pb-[20px] mt-[20px]">
              <a href='#suprimento'><span className="flex items-center gap-[15px]">
                  <Tonners /> Tonners
                </span></a>
                <ArrowFilter />
              </span>
              <span className="cursor-pointer flex items-center justify-between border-b text-[18px] font-light border-gray-300 pb-[20px] mt-[20px]">
              <a href='#suprimento'><span className="flex items-center gap-[15px]">
                  <BolsaDeTinta /> Bolsa de tinta
                </span></a>
                <ArrowFilter />
              </span>
            </div>
          </div>
        </div>

        <div className="relative w-[75%]">
          <div>
            <div className="flex justify-between items-center" id='impressora'>
              <h2 className="text-[24px] text-[#0F5197] font-medium">
                IMPRESSORAS
              </h2>
              <span className="flex items-center text-[18px] font-light text-[#0F5197] gap-[20px]">
                Confira alguns destaques <ArrowDown />
              </span>
            </div>
            <div className="flex justify-between mt-[50px]">
              <ProductCard
                Nome="Impressora monocromática Ecotank Epson M1180"
                Imagem={EcotankM1180}
                LinkButton="https://api.whatsapp.com/send?phone=5554926212300&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20Impressora%20Monocrom%C3%A1tica%20EcoTank%20Epson%20M1180"
              />
              <ProductCard
                Nome="Impressora laser monocromática brother HL-L6202DW"
                Imagem={BrotherHL}
                LinkButton="https://api.whatsapp.com/send?phone=5554926212300&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20%E2%80%8BImpressora%20Laser%20Monocrom%C3%A1tica%20Brother%20HL-L6202DW"
              />
              <ProductCard
                Nome="Impressora laser color brother HL- L8360CDW"
                Imagem={L8360}
                LinkButton="https://api.whatsapp.com/send?phone=5554926212300&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20Impressora%20Laser%20Colorida%20Corporativa%20Brother%20HL-%20L8360CDW"
              />
            </div>
          </div>

          <div className={`mt-[50px] duration-1000 `}>
            <div className="flex justify-between items-center" id='multifuncional'>
              <h2 className="text-[24px] text-[#0F5197] font-medium">
                MULTIFUNCIONAIS
              </h2>
              <span className="flex items-center text-[18px] font-light text-[#0F5197] gap-[20px]">
                Confira alguns destaques <ArrowDown />
              </span>
            </div>
            <div className="flex justify-between mt-[50px]">
              <ProductCard
                Nome="Impressora multifuncional laser monocromática brother DCP-L5652DN"
                Imagem={L5652}
                LinkButton="https://api.whatsapp.com/send?phone=5554926212300&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20Impressora%20Multifuncional%20Laser%20Monocrom%C3%A1tica%20Brother%20DCP-L5652DN"
              />
              <ProductCard
                Nome="Impressora multifuncional laser monocromática brother DCP-B7535DW"
                Imagem={B7535}
                LinkButton="https://api.whatsapp.com/send?phone=5554926212300&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20Impressora%20Multifuncional%20Laser%20Monocrom%C3%A1tica%20Brother%20DCP-B7535DW"
              />
              <ProductCard
                Nome="Impressora multifuncional laser monocromática workforce pro Epson WF-M5799"
                Imagem={M5799}
                LinkButton="https://api.whatsapp.com/send?phone=5554926212300&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20Impressora%20Multifuncional%20Monocrom%C3%A1tica%20Workforce%20Pro%20Epson%20WF-M5799"
              />
            </div>
          </div>

          <div className={`mt-[50px] duration-1000`}>
            <div className="flex justify-between items-center" id='scanner'>
              <h2 className="text-[24px] text-[#0F5197] font-medium">
                SCANNERS
              </h2>
              <span className="flex items-center text-[18px] font-light text-[#0F5197] gap-[20px]">
                Confira alguns destaques <ArrowDown />
              </span>
            </div>
            <div className="flex justify-between mt-[50px]">
              <ProductCard
                Nome="Scanner Epson workforce ES-400"
                Imagem={ES400}
                LinkButton="https://api.whatsapp.com/send?phone=5554926212300&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20%E2%80%8BScanner%20Epson%20Workforce%20ES-400"
              />
              <ProductCard
                Nome="Scanner compacto de mesa brother ADS - 1700W"
                Imagem={W1700}
                LinkButton="https://api.whatsapp.com/send?phone=5554926212300&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Scanner%20Compacto%20De%20Mesa%20Brother%20ADS%20-%201700W"
              />
              <ProductCard
                Nome="Scanner compacto de mesa brother ADS - 2800W"
                Imagem={W2800}
                LinkButton="https://api.whatsapp.com/send?phone=5554926212300&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Scanner%20Compacto%20De%20Mesa%20Brother%20ADS%20-%202800W"
              />
            </div>
          </div>

          <div className={`mt-[50px] duration-1000 `}>
            <div className="flex justify-between items-center" id='rotulador'>
              <h2 className="text-[24px] text-[#0F5197] font-medium">
                ROTULADORES
              </h2>
              <span className="flex items-center text-[18px] font-light text-[#0F5197] gap-[20px]">
                Confira alguns destaques <ArrowDown />
              </span>
            </div>
            <div className="flex flex-wrap mt-[50px] gap-[30px]">
              <ProductCard
                Nome="Rotulador portátil brother PT-70"
                Imagem={PT70}
                LinkButton="https://api.whatsapp.com/send?phone=5554926212300&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Rotulador%20Port%C3%A1til%20Brother%C2%A0PT-70"
              />
              <ProductCard
                Nome="Rotulador portátil brother PT-80"
                Imagem={PT80}
                LinkButton="https://api.whatsapp.com/send?phone=5554926212300&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Rotulador%20Port%C3%A1til%20Brother%C2%A0PT-80"
              />
              <ProductCard
                Nome="Rotulador portátil brother PT-D210"
                Imagem={PTD210}
                LinkButton="https://api.whatsapp.com/send?phone=5554926212300&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Rotulador%20Port%C3%A1til%20Brother%C2%A0PT-D210"
              />
              <ProductCard
                Nome="Rotulador portátil brother PTH-110"
                Imagem={PTH110}
                LinkButton="https://api.whatsapp.com/send?phone=5554926212300&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Rotulador%20Port%C3%A1til%20Brother%C2%A0PTH-110"
              />
              <ProductCard
                Nome="Rotulador portátil brother PT-E550WVP"
                Imagem={PTE550WVP}
                LinkButton="https://api.whatsapp.com/send?phone=5554926212300&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Rotulador%20Port%C3%A1til%20Brother%C2%A0PT-E550WVP"
              />
            </div>
          </div>

          <div className={`mt-[50px] duration-1000 `}>
            <div className="flex justify-between items-center" id='suprimento'>
              <h2 className="text-[24px] text-[#0F5197] font-medium">
                SUPRIMENTOS
              </h2>
              <span className="flex items-center text-[18px] font-light text-[#0F5197] gap-[20px]">
                Confira alguns destaques <ArrowDown />
              </span>
            </div>
            <div className="flex justify-between mt-[50px]">
              <ProductCard
                Nome="Folhas de Papel"
                Imagem={FolhasImagem}
                LinkButton="https://api.whatsapp.com/send?phone=5554926212300&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20as%20Folhas"
              />
              <ProductCard
                Nome="Tonners"
                Imagem={TonnersImagem}
                LinkButton="https://api.whatsapp.com/send?phone=5554926212300&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20Tonners"
              />
              <ProductCard
                Nome="Bolsas de tinta"
                Imagem={BolsaDeTintasImagem}
                LinkButton="https://api.whatsapp.com/send?phone=5554926212300&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20as%20Bolsas%20de%20tinta"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filtro