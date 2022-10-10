import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import EpsonLogo from "../images/epsonlogo.png";
import KyoceraLogo from "../images/kyoceralogo.png";
import BrotherLogo from "../images/brotherlogo.png";
import XeroxLogo from "../images/xeroxlogo.png";
import KatunLogo from "../images/katunlogo.png";
import ImageRevendedor from "../images/Revendas/Icones/ImageRevendedor.png";
import ImpressoraRevenda from "../images/Revendas/Icones/ImpressoraRevenda.png";

import ContactBoxImage from "../images/Revendas/Icones/ContactBoxImage.png";

import ButtonPrimary from "../components/ButtonPrimary";

import { ReactComponent as PortfolioDocs } from "../images/Revendas/Icones/PortfolioDocs.svg";
import { ReactComponent as Calendario } from "../images/Revendas/Icones/Calendario.svg";
import { ReactComponent as CSA } from "../images/Revendas/Icones/CSA.svg";
import { ReactComponent as Desenvolvimento } from "../images/Revendas/Icones/Desenvolvimento.svg";
import { ReactComponent as Suporte } from "../images/Revendas/Icones/Suporte.svg";
import { ReactComponent as Treinamentos } from "../images/Revendas/Icones/Treinamentos.svg";
import { ReactComponent as Frete } from "../images/Revendas/Icones/Frete.svg";
import { ReactComponent as Atendimento } from "../images/Revendas/Icones/Atendimento.svg";
import { ReactComponent as Participação } from "../images/Revendas/Icones/Participação.svg";
import { ReactComponent as Estoque } from "../images/Revendas/Icones/Estoque.svg";
import { ReactComponent as Rebate } from "../images/Revendas/Icones/Rebate.svg";

import { ReactComponent as Prev } from "../images/Revendas/Icones/Prev.svg";
import { ReactComponent as Next } from "../images/Revendas/Icones/Next.svg";

import { ReactComponent as YoutubeLaranja } from "../images/Revendas/Icones/YoutubeLaranja.svg";
import { ReactComponent as DocLaranja } from "../images/Revendas/Icones/DocLaranja.svg";
import { ReactComponent as ArrowDownload } from "../images/Revendas/Icones/ArrowDownload.svg";
import Sedes from "../components/Sedes";
import ContactBox from "../components/ContactBox";
import ModalRevendas from "../components/ModalRevendas";
import Navbar from "../components/Navbar";
import Utilities from "../components/Utilities";
import Footer from "../components/Footer";
import { WhatsappButton } from "../components/WhatsappButton";

const maquinas = [
    
    {

    "id": 1,
    "nome": "Impressora laser monocromática Brother HL-L6202DW",
    "img": "https://uploaddeimagens.com.br/images/003/901/996/full/HL-L6202DW-1.png?1655116523",
    "marca": "Brother",
    "link": "https://www.grupocomabe.com.br/_files/ugd/0c951b_440790b5f57c4fb9a2490d0513e54660.pdf"

    },

    {

    "id": 2,
    "nome": "Impressora multifuncional laser monocromática Brother MFC-L6702DW",
    "img": "https://uploaddeimagens.com.br/images/003/901/997/full/32942-1-impressora-brother-dcp-l5652dn-dcp-l5652-multifuncional-laser.png?1655116604",
    "marca": "Brother",
    "link": "https://www.grupocomabe.com.br/_files/ugd/0c951b_9828ff91b2df4c769d5b93bbb78a0511.pdf"

    },

    {

    "id": 3,
    "nome": "Impressora multifuncional laser monocromática Brother MFC-L6902DW",
    "img": "https://uploaddeimagens.com.br/images/003/901/998/full/BROTHER-MFC-L6902DW-2.png?1655116650",
    "marca": "Brother",
    "link": "https://www.grupocomabe.com.br/_files/ugd/0c951b_58e5c5e52ff34c79b6d80a95d834d456.pdf"

    },

    {

    "id": 4,
    "nome": "Impressora multifuncional laser monocromática Brother DCP-L5652DN",
    "img": "https://uploaddeimagens.com.br/images/003/901/999/full/32942-1-impressora-brother-dcp-l5652dn-dcp-l5652-multifuncional-laser.png?1655116685",
    "marca": "Brother",
    "link": "https://www.grupocomabe.com.br/_files/ugd/0c951b_4600616ac6184a098ee12cb69415d0be.pdf"

    },

    {

    "id": 5,
    "nome": "Impressora multifuncional laser monocromática Brother DCP-L2540DW",
    "img": "https://uploaddeimagens.com.br/images/003/902/000/full/BROTHER-DCP-L2540DW-2.png?1655116711",
    "marca": "Brother",
    "link": "https://www.grupocomabe.com.br/_files/ugd/0c951b_ba77270be83340aca4ae5e4bbdf10008.pdf"

    },

    {

    "id": 6,
    "nome": "Impressora multifuncional laser monocromática Brother DCP-7535DW",
    "img": "https://uploaddeimagens.com.br/images/003/902/001/full/DCP-B7535DW_%281%29_edited.png?1655116738",
    "marca": "Brother",
    "link": "https://www.grupocomabe.com.br/_files/ugd/0c951b_512e3ecf11934b10b814ae7e8d5791a5.pdf"

    },

    {

    "id": 7,
    "nome": "Impressora multifuncional tanque de tinta inkbenefit colorida Brother DCP-T420W",
    "img": "https://uploaddeimagens.com.br/images/003/902/002/full/DCP-T420W_Planogram_PT.png?1655116764",
    "marca": "Brother",
    "link": "https://www.grupocomabe.com.br/_files/ugd/0c951b_b0432f3dc74840519ee60cdcf6f5682a.pdf"

    },

    {

    "id": 8,
    "nome": "Impressora multifuncional laser monocromática Brother DCP-T720DW",
    "img": "https://uploaddeimagens.com.br/images/003/902/003/thumb/DCP-T720DW_Planogram_PT.png?1655116799",
    "marca": "Brother",
    "link": "https://www.grupocomabe.com.br/_files/ugd/0c951b_d0a0cc7a9b8947e08d7e37b8e8c449cf.pdf"

    },

    {

    "id": 9,
    "nome": "Impressora multifuncional laser monocromática Brother DCP-T820DW",
    "img": "https://uploaddeimagens.com.br/images/003/902/005/full/DCP-T720DW_Planogram_PT.png?1655116823",
    "marca": "Brother",
    "link": "https://www.grupocomabe.com.br/_files/ugd/0c951b_47fa5d87cfbf40f5b249a835a9166c3b.pdf"

    },

    {

    "id": 10,
    "nome": "Impressora multifuncional laser colorida profissional Brother DCP-L3551CDW",
    "img": "https://uploaddeimagens.com.br/images/003/902/006/full/DCPL3551cdw-front.png?1655116854",
    "marca": "Brother",
    "link": "https://www.grupocomabe.com.br/_files/ugd/0c951b_2f3b7ea6759a4655bf15aff7ad325e3d.pdf"

    },

    {

    "id": 11,
    "nome": "Impressora multifuncional laser colorida profissional Brother MFC-L8610CDW",
    "img": "https://uploaddeimagens.com.br/images/003/902/007/full/2_MFC-L8610CDW.png?1655116882",
    "marca": "Brother",
    "link": "https://www.grupocomabe.com.br/_files/ugd/0c951b_6cc2f01d04744eefa7b19c99a523ff66.pdf"

    },

    {

    "id": 12,
    "nome": "Impressora multifuncional jato de tinta Brother MFC-T4500DW",
    "img": "https://uploaddeimagens.com.br/images/003/902/008/full/MFC-T4500DW_%281%29.png?1655116937",
    "marca": "Brother",
    "link": "https://www.grupocomabe.com.br/_files/ugd/0c951b_5729fd556cc841bf8ba73b1312779eb7.pdf"

    },

    {

    "id": 13,
    "nome": "Impressora multifuncional jato de tinta Brother MFC-J6945DW",
    "img": "https://uploaddeimagens.com.br/images/003/902/009/full/BROTHER-MFC-J6935DW.png?1655116978",
    "marca": "Brother",
    "link": "https://www.grupocomabe.com.br/_files/ugd/0c951b_73524dd741aa44e4aca32a72b358fff6.pdf"

    },

    {

    "id": 14,
    "nome": "Scanner compacto de mesa Brother ADS - 1700W",
    "img": "https://uploaddeimagens.com.br/images/003/902/010/full/ADS1700W_front_%281%29.png?1655117003",
    "marca": "Brother",
    "link": "https://www.grupocomabe.com.br/_files/ugd/0c951b_2c6ed284ce79406e88f8e94fc6aa5d29.pdf"

    },

    {

    "id": 15,
    "nome": "Scanner compacto de mesa Brother ADS - 2200",
    "img": "https://uploaddeimagens.com.br/images/003/902/011/full/ADS2200W_front.png?1655117030",
    "marca": "Brother",
    "link": "https://www.grupocomabe.com.br/_files/ugd/0c951b_7636c3c41b944f6b8c9f4ed4fc15d0c1.pdf"

    },

    {

    "id": 16,
    "nome": "Scanner de mesa para grupo de trabalho Brother ADS - 2800W",
    "img": "https://uploaddeimagens.com.br/images/003/902/012/full/ADS-2800_%281%29.png?1655117060",
    "marca": "Brother",
    "link": "https://www.grupocomabe.com.br/_files/ugd/0c951b_82d4898622284082b95fa2a4cedd3efc.pdf"

    },

    {

    "id": 17,
    "nome": "Impressora multifuncional monocromática ecotank Epson - M1180",
    "img": "https://uploaddeimagens.com.br/images/003/902/013/full/00014187.png?1655117092",
    "marca": "Epson",
    "link": "https://www.grupocomabe.com.br/_files/ugd/0c951b_8ad94d2a815748469dc9e707361338f4.pdf"

    },

    {

    "id": 18,
    "nome": "Impressora multifuncional monocromática ecotank Epson - M3180",
    "img": "https://uploaddeimagens.com.br/images/003/902/014/full/M3180.png?1655117291",
    "marca": "Epson",
    "link": "https://www.grupocomabe.com.br/_files/ugd/0c951b_423e9a1885674e1ca4fe09e69cec934f.pdf"

    },

    {

    "id": 19,
    "nome": "Impressora multifuncional monocromática ecotank Epson - L6161",
    "img": "https://uploaddeimagens.com.br/images/003/902/015/full/multifuncional_tanque_de_tinta_ecotank_l6161_wi_fi_epson_6374_2_20190711100104.png?1655117339",
    "marca": "Epson",
    "link": "https://www.grupocomabe.com.br/_files/ugd/0c951b_7b17a1bbb52143018f5be208fd190a5b.pdf"

    },

    {

    "id": 20,
    "nome": "Impressora multifuncional Wireless ecotank Epson - L6191",
    "img": "https://uploaddeimagens.com.br/images/003/902/016/full/20191021115229_1520998480_DZ.png?1655117387",
    "marca": "Epson",
    "link": "https://www.grupocomabe.com.br/_files/ugd/0c951b_321db7de58354832824d2c65769e0efc.pdf"

    },

    {

    "id": 21,
    "nome": "Impressora multifuncional ecotank Epson - L1455",
    "img": "https://uploaddeimagens.com.br/images/003/902/017/full/D_NQ_NP_721921-MLA41727583216_052020-O.png?1655117427",
    "marca": "Epson",
    "link": "https://www.grupocomabe.com.br/_files/ugd/0c951b_88747939f116466ca140ef70bbfc4135.pdf"

    },

    {

    "id": 22,
    "nome": "Impressora multifuncional laser monocromática Epson Workforce Pro - M5799",
    "img": "https://uploaddeimagens.com.br/images/003/902/020/full/wf-m5799_hero-paper_690x460_%281%29.png?1655117482",
    "marca": "Epson",
    "link": "https://www.grupocomabe.com.br/_files/ugd/0c951b_ad5ecd0f8b0d4b038699fc69997fab29.pdf"

    },

    {

    "id": 23,
    "nome": "Impressora multifuncional laser monocromática Epson Workforce Pro WF-M5299",
    "img": "https://uploaddeimagens.com.br/images/003/902/021/thumb/WF-M5299_SPT_C11CG07201_384x286.png?1655117526",
    "marca": "Epson",
    "link": "https://www.grupocomabe.com.br/_files/ugd/0c951b_863bab0dd29a44c9b488ea2b64e4be1e.pdf"

    },

    {

    "id": 24,
    "nome": "Impressora multifuncional Workforce Pro  WF-C5710",
    "img": "https://uploaddeimagens.com.br/images/003/902/022/full/wf-m5799_hero-paper_690x460_%281%29.png?1655117571",
    "marca": "Epson",
    "link": "https://www.grupocomabe.com.br/_files/ugd/0c951b_1f5c3870448147c0b88b6ace1031e1ed.pdf"

    },

    {

    "id": 25,
    "nome": "Impressora multifuncional Workforce Pro  WF-C5790",
    "img": "https://uploaddeimagens.com.br/images/003/902/023/full/wf-m5799_hero-paper_690x460_%281%29.png?1655117616",
    "marca": "Epson",
    "link": "https://www.grupocomabe.com.br/_files/ugd/0c951b_8d98ccb3ed964d8e9920b1d75869a32e.pdf"

    },

    {

    "id": 26,
    "nome": "Impressora multifuncional Workforce Pro  WF-C869R",
    "img": "https://uploaddeimagens.com.br/images/003/902/024/full/wf-c869r_hero_690x460.png?1655117647",
    "marca": "Epson",
    "link": "https://www.grupocomabe.com.br/_files/ugd/0c951b_7d4d3ed3a1d7463dbedcfd59743884df.pdf"

    },

]

function Revendas() {

  const scrollToTop = () => {
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }, 200)
}

  
  const [modalRevendas, setModalRevendas] = useState('scale-0')

  const toggleRevendas = () => {
    setModalRevendas(!modalRevendas)
  }


  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft -= 375;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += 375;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <Navbar />
      <div className="bg-hero-bg-revendas w-full py-36 flex items-center">
        <div className="container mx-auto relative h-full flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-[50%]">
            <h1 className="text-2xl lg:text-4xl text-white font-medium mb-[30px]">
              Torne-se um Revendedor de nossa linha de produtos e adquira
              vantagens exclusivas
            </h1>
            <p className="text-white text-sm font-light lg:w-[85%] mb-[55px]">
              Os nossos revendedores tem vantagens exclusivas, com ferramentas e
              informações dos produtos que os dão um diferencial competitivo
              dentro do mercado
            </p>
          </div>

          <div className="w-full h-[120px] rounded-2xl bg-white lg:absolute -bottom-[200px] px-[10px] lg:px-[90px]">
            <div className="flex w-full gap-2 justify-between items-center h-full">
              <a
                className="lg:w-[40%] sm:w-auto"
                target="_blank"
                rel="noreferrer"
                href="https://epson.com.br"
              >
                <img
                  className="md:w-[80%] lg:w-auto"
                  alt="logo da epson"
                  src={EpsonLogo}
                />
              </a>
              <a
                className="lg:w-[40%] sm:w-auto"
                target="_blank"
                rel="noreferrer"
                href="https://brazil.kyocera.com"
              >
                <img
                  className="md:w-[80%] lg:w-auto"
                  alt="logo da kyocera"
                  src={KyoceraLogo}
                />
              </a>
              <a
                className="lg:w-[40%] sm:w-auto"
                target="_blank"
                rel="noreferrer"
                href="https://brother.com.br"
              >
                <img
                  className="md:w-[80%] lg:w-auto"
                  alt="logo da brother"
                  src={BrotherLogo}
                />
              </a>
              <a
                className="lg:w-[40%] sm:w-auto"
                target="_blank"
                rel="noreferrer"
                href="https://xerox.com"
              >
                <img
                  className="md:w-[80%] lg:w-auto"
                  alt="logo da xerox"
                  src={XeroxLogo}
                />
              </a>
              <a
                className="lg:w-[40%] sm:w-auto"
                target="_blank"
                rel="noreferrer"
                href="https://katun.com"
              >
                <img
                  className="md:w-[80%] lg:w-auto object-cover"
                  alt="logo da katun"
                  src={KatunLogo}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center bg-[#F8F8FA] py-36">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between">
            <div>
              <h2 className="text-2xl text-[#575757] font-medium">
                Vantagens em ser Revendedor Comabe:
              </h2>
            </div>

            <div>
              <ButtonPrimary
                text="Torne-se um revendedor"
                color="ButtonPrimary"
                onClick={toggleRevendas}
              />
            </div>
          </div>

          <div className="flex flex-wrap lg:gap-[20px] 2xl:gap-[40px] mt-[70px]">
            <div className="w-[49%] lg:w-[24%] 2xl:w-[320px] h-[190px] flex flex-col gap-[15px] pt-[30px] items-center bg-white rounded-2xl">
              <div className="w-full h-[50px] flex justify-center">
                <PortfolioDocs />
              </div>
              <span className="text-sm text-[#575757] font-medium text-center w-[80%]">
                Portfólio Office completo Epson, Brother e Katun
              </span>
            </div>
            <div className="w-[49%] lg:w-[23%] 2xl:w-[320px] h-[190px] flex flex-col gap-[15px] pt-[30px] items-center bg-white rounded-2xl">
              <div className="w-full h-[50px] flex justify-center">
                <Calendario />
              </div>
              <span className="text-sm text-[#575757] font-medium text-center w-[80%]">
                Eventos Técnicos e Comerciais com Fabricantes
              </span>
            </div>
            <div className="w-[49%] lg:w-[23%] 2xl:w-[320px] h-[190px] flex flex-col gap-[15px] pt-[30px] items-center bg-white rounded-2xl">
              <div className="w-full h-[50px] flex justify-center">
                <CSA />
              </div>
              <span className="text-sm text-[#575757] font-medium text-center w-[80%]">
                Se tornar uma Revenda CSA Comabe Epson
              </span>
            </div>
            <div className="w-[49%] lg:w-[23%] 2xl:w-[320px] h-[190px] flex flex-col gap-[15px] pt-[30px] items-center bg-white rounded-2xl">
              <div className="w-full h-[50px] flex justify-center">
                <Desenvolvimento />
              </div>
              <span className="text-sm text-[#575757] font-medium text-center w-[95%]">
                Desenvolvimento e compartilhamento de Soluções Customizadas
              </span>
            </div>
            <div className="w-[49%] lg:w-[23%] 2xl:w-[320px] h-[190px] flex flex-col gap-[15px] justify-center items-center bg-white rounded-2xl">
              <div className="w-full h-[50px] flex justify-center">
                <Suporte />
              </div>
              <span className="text-sm text-[#575757] font-medium text-center w-[80%]">
                Suporte técnico especializado
              </span>
            </div>
            <div className="w-[49%] lg:w-[23%] 2xl:w-[320px] h-[190px] flex flex-col gap-[15px] justify-center items-center bg-white rounded-2xl">
              <div className="w-full h-[50px] flex justify-center">
                <Treinamentos />
              </div>
              <span className="text-sm text-[#575757] font-medium text-center w-[80%]">
                Treinamentos Técnicos
              </span>
            </div>
            <div className="w-[49%] lg:w-[23%] 2xl:w-[320px] h-[190px] flex flex-col gap-[15px] justify-center items-center bg-white rounded-2xl">
              <div className="w-full h-[50px] flex justify-center">
                <Frete />
              </div>
              <span className="text-sm text-[#575757] font-medium text-center w-[80%]">
                Frete e logística diferenciados
              </span>
            </div>
            <div className="w-[49%] lg:w-[23%] 2xl:w-[320px] h-[190px] flex flex-col gap-[15px] justify-center items-center bg-white rounded-2xl">
              <div className="w-full h-[50px] flex justify-center">
                <Atendimento />
              </div>
              <span className="text-sm text-[#575757] font-medium text-center w-[80%]">
                Atendimento Especializado
              </span>
            </div>
            <div className="w-[49%] lg:w-[23%] 2xl:w-[320px] h-[190px] flex flex-col gap-[15px] justify-center items-center bg-white rounded-2xl">
              <div className="w-full h-[50px] flex justify-center">
                <Participação />
              </div>
              <span className="text-sm text-[#575757] font-medium text-center w-[80%]">
                Participação no Epson Stars
              </span>
            </div>
            <div className="w-[49%] lg:w-[23%] 2xl:w-[320px] h-[190px] flex flex-col gap-[15px] justify-center items-center bg-white rounded-2xl">
              <div className="w-full h-[50px] flex justify-center">
                <Estoque />
              </div>
              <span className="text-sm text-[#575757] font-medium text-center w-[80%]">
                Estoque a pronta entrega
              </span>
            </div>
            <div className="w-[49%] lg:w-[23%] 2xl:w-[320px] h-[190px] flex flex-col gap-[15px] justify-center items-center bg-white rounded-2xl">
              <div className="w-full h-[50px] flex justify-center">
                <Rebate />
              </div>
              <span className="text-sm text-[#575757] font-medium text-center w-[80%]">
                Rebate
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[1200px] items-center">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <h2 className="text-3xl text-[#343434] font-medium">
              Conheça nosso mix de produtos
            </h2>
          </div>

          <div className="flex justify-between mt-[100px]">
            <div
              className="carousel flex justify-between overflow-x-auto lg:py-[35px] scroll-smooth"
              ref={carousel}
            >
            
              {maquinas.map((maquinas) => (
                <div className="w-[330px] h-[430px] bg-white rounded-2xl flex-none shadow-shadow-card flex flex-col pt-[15px] mx-[15px]" key={maquinas.id}>
                  <div className="flex flex-col items-center">
                  <div className='h-[200px] flex items-end'><img src={maquinas.img} alt='' /></div>
                  <h2 className='text-sm text-[#0F5197] font-medium text-center w-[75%] my-[30px] h-[80px]'>{maquinas.nome}</h2>
                  <a className="text-sm bg-[#0F5197] text-white rounded-full px-6 py-3 sm:px-12 sm:py-3 font-medium" target="_blank" href={maquinas.link} rel="noreferrer" >Ver detalhes</a>
                  </div>
                </div>
              ))}

            </div>
          </div>
          <div className="w-full flex justify-end mt-[40px]">
            <div className="flex gap-[10px]">
              <Prev onClick={handleLeftClick} className="cursor-pointer" />
              <Next onClick={handleRightClick} className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center py-36 bg-[#F8F8FA]">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="mb-10 lg:mb-0">
              <h2 className="text-2xl text-[#343434] font-medium mb-[70px]">
                Como revendedor você terá acesso a:
              </h2>

              <div className="lg:w-[620px] h-[330px] bg-white rounded-2xl shadow-shadow-card flex flex-col justify-center pl-[50px]">
                <DocLaranja />
                <h2 className="text-xl text-[#343434] font-medium my-[30px]">
                  Planilhas de Calculo de TCO de projetos
                </h2>
                <p className="text-sm text-[#575757] mb-[30px] w-[90%]">
                  Entre com seus custos operacionais e simule a rentabilidade
                  bruta e o CPP por equipamento
                </p>
                <span className="text-sm text-[#0F5197] font-medium flex items-center gap-[10px] cursor-pointer">
                  Baixar planilha <ArrowDownload className="mt-[5px]" />
                </span>
              </div>
              <div className="lg:w-[620px] h-[330px] bg-white rounded-2xl shadow-shadow-card flex flex-col justify-center pl-[50px] mt-[30px]">
                <YoutubeLaranja />
                <h2 className="text-xl text-[#343434] font-medium my-[30px]">
                  Vídeos de demonstração de produtos para Treinamentos
                  Comerciais
                </h2>
                <span className="text-sm text-[#0F5197] font-medium flex items-center gap-[10px] cursor-pointer">
                  Acessar vídeos <ArrowDownload className="mt-[5px]" />
                </span>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between lg:w-[50%]">
              <div className="hidden lg:block">
                <img className="pt-[140px]" src={ImageRevendedor} alt="" />
              </div>

              <div>
                <img className="mb-[50px] hidden lg:block" src={ImpressoraRevenda} alt="" />
                <ButtonPrimary
                  text="Torne-se um revendedor"
                  color="ButtonPrimary"
                  onClick={toggleRevendas}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Sedes />

      <div className="mt-[150px]">
        <ContactBox
          imagem={ContactBoxImage}
          title="Gostou e quer saber mais sobre nossas soluções?"
          text="Muitos negócios e empresas estão passando por importantes mudanças, e a Comabe quer estar junto nesta transformação digital!"
          buttonText="Entre em contato e solicite uma cotação"
          contactLink={'/contato'}
          onClick={scrollToTop}
        />
      </div>

      
      <ModalRevendas onClick={toggleRevendas} classRef={`${modalRevendas ? 'scale-0' : 'scale-1'}`}/>

      <Utilities />
    <Footer />
    <WhatsappButton />
    </motion.div>
  );
}

export default Revendas;
