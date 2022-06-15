import React from 'react'
import {motion} from "framer-motion"
import {ReactComponent as ArrowDown} from '../images/ArrowDown.svg'
import {ReactComponent as Documentos} from '../images/documentos.svg'
import {ReactComponent as Fraudes} from '../images/Fraudes.svg'
import {ReactComponent as Certificado} from '../images/Certificado.svg'

import {ReactComponent as Relogio} from '../images/Relogio.svg'
import {ReactComponent as CheckHome} from '../images/CheckHome.svg'
import {ReactComponent as Shield} from '../images/Shield.svg'

import {ReactComponent as ArrowSaibaMais} from '../images/ArrowSaibaMais.svg'
import {ReactComponent as GreenCheck} from '../images/GreenCheck.svg'
import {ReactComponent as User} from '../images/User.svg'
import {ReactComponent as UserNoBorder} from '../images/UserNoBorder.svg'
import {ReactComponent as DocumentosBlog} from '../images/DocumentosBlog.svg'

import ButtonPrimary from '../components/ButtonPrimary'

import BusinessScan from '../images/BusinessScan.png'
import GridImage from '../images/GridImage.png'
import HomemSorrindo from '../images/HomemSorrindo.png'

import ImpressoraHome from '../images/ImpressoraHome.png'
import MultifuncionalHome from '../images/MultifuncionalHome.png'
import ScannerHome from '../images/ScannerHome.png'
import RotuladorHome from '../images/RotuladorHome.png'

import HomemDoDepoimento from '../images/homemdodepoimento.png'
import JordanoDepoimento from '../images/JordanoDepoimento.png'

import BlogCardImage from '../images/blogcard.png'

import { HashLink as Link } from 'react-router-hash-link'
import ReactForm from '../components/ReactForm'
import CardBlog from '../components/CardBlog'
import Tarja from '../components/Tarja'

const Home = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {duration: 0.8}}}
    exit={{opacity: 0, transition: {duration: 0.1} }}
    >
    <div className='bg-hero-bg-home w-full h-[640px] xl:h-[600px] 2xl:h-[90vh] flex items-center'>

    <div className='container mx-auto'>
    <div className='flex flex-col items-center'>
      <h2 className='text-[28px] sm:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[48px] text-white text-center font-medium sm:w-[95%] 2xl:w-[80%] mb-[30px]'>Até quando a sua empresa vai continuar rasgando dinheiro com impressões de documentos?</h2>
      <p className='text-[14px] sm:text-[16px] lg:xl:text-[16px] 2xl:text-[18px] font-medium text-white text-center w-full sm:w-[80%] lg:w-[60%] 2xl:w-[50%] mb-[90px]'>Fornecemos soluções completas para sua empresa parar de se preocupar com impressoras ou documentos impressos.</p>
      <ArrowDown className='mb-[50px]'/>
      <ButtonPrimary text='Quero começar a economizar' color='ButtonPrimary' border='border-none' linkRef="/Contato"/>
    </div>
    </div>
    </div>

    <div className='container mx-auto sm:h-[1200px] lg:h-[850px] flex items-center'>
      <div className='flex sm:flex-col lg:flex-row lg:justify-between'>
        <div className='sm:w-full lg:w-[39%]'>
          <h2 className='mb-[22px] sm:text-[30px] lg:text-[32px] xl:text-[38px] 2xl:text-[42px] text-[#343434] font-medium'>Descubra o Business Scan</h2>
          <span className='sm:text-[20px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] text-comabeblue font-medium'>Nossa solução tecnológica para digitalização de documentos</span>
          <p className='mt-[36px] sm:text-[16px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] text-[#575757] font-light'>O Business Scan é o nosso serviço especializado de digitalização de documentos, através dele é possível reduzir o seu armazenamento de documentos em espaço físico com o processo de digitalização inteligente.</p>

          <div className='flex flex-wrap mt-[50px] mb-[80px] sm:gap-[30px] lg:gap-0 xl:gap-[20px] 2xl:gap-0'>
            <span className='flex items-center lg:text-[15px] xl:text-[16px] 2xl:text-[18px] text-[#343434] font-light lg:w-full 2xl:w-auto 2xl:mr-[55px] gap-[10px]'><Documentos className='sm:w-[30px] lg:w-[30px] xl:w-[35px] 2xl:w-auto'/> Documentos salvos em pdf</span>
            <span className='flex items-center lg:text-[15px] xl:text-[16px] 2xl:text-[18px] text-[#343434] font-light lg:w-full 2xl:w-auto gap-[10px]'><Fraudes className='sm:w-[30px]  lg:w-[30px] xl:w-[35px] 2xl:w-auto'/> Seguro de fraudes</span>
            <span className='flex items-center lg:text-[15px] xl:text-[16px] 2xl:text-[18px] text-[#343434] font-light lg:w-full 2xl:w-auto 2xl:mt-[20px] gap-[10px]'><Certificado className='sm:w-[30px]  lg:w-[30px] xl:w-[35px] 2xl:w-auto'/> Certificação ICP-Brasil</span>
          </div>
          <ButtonPrimary linkRef="/Contato#header" text='Quero começar a economizar' color='ButtonPrimary' border='border-none' />
        </div>
      

      <div className='sm:w-full lg:w-[50%] sm:mt-[100px]'>
        <div className='relative flex flex-col items-end'>
          <img src={BusinessScan} alt='' />
          <p className='sm:text-[16px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] text-[#575757] font-light sm:w-[100%] lg:w-[88%] xl:w-[90%]'>Simplifique a gestão de documentos da sua empresa com o <span className='text-comabeorange font-bold'>Business Scan</span> e automatize os processos manuais que envolvem grande fluxo de papel.</p>
        </div>
      </div>
      </div>
    </div>

    <div className='flex items-center sm:h-[1650px] lg:h-[900px] bg-[#F8F8FA]'>
    <div className='container mx-auto'>
      <div className='flex sm:flex-col-reverse lg:flex-row lg:justify-end relative'>
        <div className='sm:w-full lg:w-[50%] xl:w-[45%] lg:absolute left-0'>
          <div className='xl:w-[90%] 2xl:w-[95%] sm:min-h-[230px] lg:min-h-[240px] xl:min-h-[280px] bg-white rounded-xl sm:pt-[20px] lg:pt-[20px] xl:pt-[40px] px-[55px] shadow-shadow-card'>
              <Relogio className='sm:w-[25px] lg:w-[25px] xl:w-[30px] 2xl:w-auto'/>
              <h3 className='sm:text-[20px] xl:text-[22px] 2xl:text-[24px] text-[#343434] font-medium my-[20px]'>Maior produtividade</h3>
              <p className='sm:text-[16px] lg:text-[15px] xl:text-[16px]  2xl:text-[18px] font-light'>Com apenas alguns cliques você tem acesso a todo o seu acervo de documentos, podendo acessá-los de qualquer lugar. </p>
          </div>
          <div className='xl:w-[90%] 2xl:w-[95%] sm:min-h-[230px] lg:min-h-[240px] xl:min-h-[280px] bg-white rounded-xl sm:pt-[20px] lg:pt-[20px] xl:pt-[40px] px-[55px] shadow-shadow-card my-[30px]'>
              <CheckHome className='sm:w-[25px]  lg:w-[25px] xl:w-[30px] 2xl:w-auto'/>
              <h3 className='sm:text-[20px] xl:text-[22px]  2xl:text-[24px] text-[#343434] font-medium my-[20px]'>Maior qualidade</h3>
              <p className='sm:text-[16px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-light'>A padronização de formatos dos seus documentos, com processos claros e definidos, traz para sua empresa uma maior qualidade na execução de tarefas simples do seu dia a dia. </p>
          </div>
          <div className='xl:w-[90%] 2xl:w-[95%] sm:min-h-[230px] lg:min-h-[240px] xl:min-h-[280px] bg-white rounded-xl sm:pt-[20px] lg:pt-[20px] xl:pt-[40px] px-[55px] shadow-shadow-card'>
              <Shield className='sm:w-[25px]  lg:w-[25px] xl:w-[30px] 2xl:w-auto'/>
              <h3 className='sm:text-[20px] xl:text-[22px] 2xl:text-[24px] text-[#343434] font-medium my-[20px]'>Maior segurança</h3>
              <p className='sm:text-[16px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-light'>Você quem libera os acessos aos documentos digitalizados e define quem poderá editá-los e acessar seus históricos. </p>
          </div>
          <div className='sm:block lg:hidden mt-[50px]'><ButtonPrimary text='Quero começar a economizar' color='ButtonPrimary' border='border-none' linkRef="/Contato#header"/></div>
        </div>

        <div className='sm:w-full lg:w-[45%] xl:w-[52%] 2xl:w-[48%]'>
          <div className='relative'>
            <h2 className='sm:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[32px] text-[#343434] font-medium mb-[60px]'>Porque sua empresa precisa do Business Scan</h2>
            <img className='mb-[50px]' src={GridImage} alt='' />
            <div className='sm:hidden lg:block'><ButtonPrimary text='Quero começar a economizar' color='ButtonPrimary' border='border-none' linkRef="/Contato#header"/></div>
          </div>
        </div>
      </div>
    </div>
    </div>

    <div className='flex items-center sm:py-[100px] lg:h-[1400px] xl:h-[1680px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center gap-[20px]'>
            <span className='flex bg-[#0088FF] py-2 px-5 text-white sm:text-[16px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-medium rounded-3xl'>SOLUÇÕES</span>
            <h2 className='sm:text-[30px] lg:text-[32px] xl:text-[38px] 2xl:text-[42px] text-[#343434] font-medium text-center sm:w-[80%] lg:w-full'>Descubra a melhor solução para sua empresa</h2>
        </div>

        <div className='flex sm:gap-[60px] lg:gap-0 sm:flex-col lg:flex-row justify-between sm:mt-[30px] lg:mt-[120px]'>

            <div className='sm:flex justify-center lg:hidden'>
              <img src={HomemSorrindo} alt='' />
            </div>


            <div className='sm:w-full lg:w-[45%] xl:w-[30%]'>
                <div>
                  <span className='flex items-center sm:text-[20px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-medium gap-[10px]'><GreenCheck />Business Scan</span>
                  <p className='lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-light text-[#575757] leading-8 my-[30px]'>A Comabe tem soluções personalizadas para as mais diversas áreas de atuação, desenvolvendo métodos eficientes para auxiliar a sua empresa.</p>
                  <Link to={'/Business-Scan'}><span className='flex items-center gap-[10px] text-[#0F5197] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-medium'>Saiba Mais <ArrowSaibaMais className='mt-[7px]' /></span>  </Link>
                  
                </div>
                <div className='sm:mt-[60px] lg:mt-[100px]'>
                  <span className='flex items-center sm:text-[20px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-medium gap-[10px]'><GreenCheck />Outsourcing</span>
                  <p className='lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-light text-[#575757] leading-8 my-[30px]'>Com o aluguel de impressoras da Comabe, você conta com planos mensais personalizados que visam otimizar a estrutura de operação do seu negócio através de soluções ajustáveis, como o acesso de arquivos e de impressão.</p>
                  <Link to={'/Business-Scan'}><span className='flex items-center gap-[10px] text-[#0F5197] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-medium'>Saiba Mais <ArrowSaibaMais className='mt-[7px]' /></span>  </Link>
                  
                </div>
            </div>

            <div className='sm:hidden lg:block'>
              <img src={HomemSorrindo} alt='' />
            </div>

            <div className='sm:w-full  lg:w-[45%] xl:w-[30%]'>
                <div>
                  <span className='flex items-center sm:text-[20px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-medium gap-[10px]'><GreenCheck />Revendas Comabe</span>
                  <p className='lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-light text-[#575757] leading-8 my-[30px]'>O revendedor Comabe tem vantagens exclusivas, ferramentas e informações que vão ajudá-lo a trazer mais valor e rentabilidade para o seu negócio!</p>
                  <Link to={'/Business-Scan'}><span className='flex items-center gap-[10px] text-[#0F5197] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-medium'>Saiba Mais <ArrowSaibaMais className='mt-[7px]' /></span>  </Link>
                  
                </div>
                <div className='sm:mt-[60px] lg:mt-[100px]'>
                  <span className='flex items-center sm:text-[20px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-medium gap-[10px]'><GreenCheck />Produtos</span>
                  <p className='lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-light text-[#575757] leading-8 my-[30px]'>Conheça as melhores linhas de produtos no ramo de impressão e digitalização oferecidas pela Comabe para atender às suas necessidades e otimizar o tempo do seu negócio.</p>
                  <Link to={'/Business-Scan'}><span className='flex items-center gap-[10px] text-[#0F5197] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-medium'>Saiba Mais <ArrowSaibaMais className='mt-[7px]' /></span>  </Link>
                  
                </div>
            </div>
        </div>

        <div className='w-full bg-[#0088FF] h-[260px] rounded-2xl flex sm:flex-col lg:flex-row sm:justify-center lg:justify-start sm:gap-10 lg:gap-0 items-center px-[60px] mt-[100px]'>
          <div className='lg:w-[70%] xl:w-[70%] 2xl:w-[75%]'>
            <h2 className='text-white sm:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[32px] font-medium mb-[20px]'>Fale com nosso time de consultores</h2>
            <span className='flex items-center gap-[20px] text-white sm:text-[16px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-light'><User className='sm:w-[60px] lg:w-auto'/> <p className='lg:w-[60%] xl:w-[60%] 2xl:w-[48%]'>Agende uma reunião para descobrir todos os serviços que podemos oferecer para sua empresa.</p></span>
          </div>

          <div className='xl:w-[30%] 2xl:w-[25%]'>
            <ButtonPrimary text='Fale com um consultor' color='tranparent' border='border' linkRef="/Contato#header" />
          </div>

        </div>
      </div>
    </div>

    <div className='flex items-center sm:h-[950px] lg:h-[600px] xl:h-[600px] 2xl:h-[800px] bg-cover w-full bg-bg-form'>
      <div className='container mx-auto'>
        <div className='flex sm:flex-col lg:flex-row lg:justify-between relative sm:gap-10 lg:gap-0'>
          <div className='sm:w-full lg:w-[45%] xl:w-[40%] 2xl:w-[34%]'>
        <h2 className='text-white sm:text-[30px] lg:text-[32px] xl:text-[38px] 2xl:text-[42px] font-medium mb-[30px] sm:w-[80%] md:w-[70%] lg:w-auto'>Acelere seu crescimento digital com as soluções Comabe</h2>
        <p className='text-white sm:text-[16px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-light leading-7 sm:w-[100%] md:w-[85%] lg:w-auto'>Para atingir todos os seus objetivos de negócio e crescer digitalmente com velocidade, você precisa do melhor em criatividade, performance e tecnologia.</p>
          </div>

          <div className='lg:absolute right-0 md:flex md:justify-center lg:block'>
              <ReactForm />

          </div>
        </div>
      </div>
    </div>

    <div className='flex items-center sm:h-[1300px] lg:h-[1400px] xl:h-[1200px]'>
      <div className='container mx-auto'>
      <div className='flex flex-col items-center gap-[20px]'>
            <span className='flex bg-[#0088FF] py-2 px-5 text-white sm:text-[16px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-medium rounded-3xl'>PRODUTO</span>
            <h2 className='sm:text-[30px] lg:text-[32px] xl:text-[38px] 2xl:text-[42px] text-[#343434] font-medium text-center w-[80%]'>Conheça nossa linha completa de produtos com o melhor custo-benefício do mercado</h2>
        </div>

        <div className='flex flex-wrap sm:gap-[10px] lg:gap-[20px] lg:max-w-[70%] mx-auto xl:gap-0 xl:max-w-full justify-between mt-[100px]'>
          <div className='sm:w-[49%] lg:w-[48%] xl:w-[24%] 2xl:w-[23%] sm:h-[385px] lg:h-[430px] shadow-shadow-card rounded-2xl flex flex-col items-center justify-center'>
            <div className='h-[180px] flex items-center justify-center'><img className='xl:w-[80%] 2xl:w-auto' src={ImpressoraHome} alt='' /></div>
            <h3 className='sm:text-[20px] xl:text-[22px] 2xl:text-[24px] text-[#343434] font-medium mb-[30px]'>Impressoras</h3>
            <p className='text-center w-[90%] sm:text-[16px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] text-[#575757] font-light mb-[30px] leading-8'>​ A Comabe conta com uma linha completa de impressoras. </p>
            <Link className='text-[16px] text-[#0F5197] font-medium' to={'/Produtos#produtos'}>VER IMPRESSORAS</Link>
          </div>
          <div className='sm:w-[49%] lg:w-[48%] xl:w-[24%] 2xl:w-[23%] sm:h-[385px] lg:h-[430px] shadow-shadow-card rounded-2xl flex flex-col items-center justify-center'>
            <div className='h-[180px] flex items-center justify-center'><img className='xl:w-[80%] 2xl:w-auto' src={MultifuncionalHome} alt='' /></div>
            <h3 className='sm:text-[20px] xl:text-[22px] 2xl:text-[24px] text-[#343434] font-medium mb-[30px]'>Multifuncionais</h3>
            <p className='text-center w-[90%] sm:text-[16px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] text-[#575757] font-light mb-[30px] leading-8'>​ A Comabe conta com uma linha completa de multifuncionais. </p>
            <Link className='text-[16px] text-[#0F5197] font-medium' to={'/Produtos#produtos'}>VER MULTIFUNCIONAIS</Link>
          </div>
          <div className='sm:w-[49%] lg:w-[48%] xl:w-[24%] 2xl:w-[23%] sm:h-[385px] lg:h-[430px] shadow-shadow-card rounded-2xl flex flex-col items-center justify-center'>
            <div className='h-[180px] flex items-center justify-center'><img className='xl:w-[80%] 2xl:w-auto' src={ScannerHome} alt='' /></div>
            <h3 className='sm:text-[20px] xl:text-[22px] 2xl:text-[24px] text-[#343434] font-medium mb-[30px]'>Scanners</h3>
            <p className='text-center w-[90%] sm:text-[16px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] text-[#575757] font-light mb-[30px] leading-8'>​ A Comabe conta com uma linha completa de scanners. </p>
            <Link className='text-[16px] text-[#0F5197] font-medium' to={'/Produtos#produtos'}>VER SCANNERS</Link>
          </div>
          <div className='sm:w-[49%] lg:w-[48%] xl:w-[24%] 2xl:w-[23%] sm:h-[385px] lg:h-[430px] shadow-shadow-card rounded-2xl flex flex-col items-center justify-center'>
            <div className='h-[180px] flex items-center justify-center'><img className='xl:w-[80%] 2xl:w-auto' src={RotuladorHome} alt='' /></div>
            <h3 className='sm:text-[20px] xl:text-[22px] 2xl:text-[24px] text-[#343434] font-medium mb-[30px]'>Rotuladores</h3>
            <p className='text-center w-[90%] sm:text-[16px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] text-[#575757] font-light mb-[30px] leading-8'>​ A Comabe conta com uma linha completa de rotuladores. </p>
            <Link className='text-[16px] text-[#0F5197] font-medium' to={'/Produtos#produtos'}>VER ROTULADORES</Link>
          </div>
        </div>
      </div>
    </div>

    <div className='w-full flex bg-gradiente-blue sm:h-[900px] lg:h-[556px]'>
        <div className='container mx-auto relative'>
        <div className='flex flex-col gap-[20px] sm:pt-[100px] lg:pt-[120px]'>
            <span className='flex self-start bg-[#0088FF] py-2 px-5 text-white sm:text-[16px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-medium rounded-3xl'>DEPOIMENTO</span>
            <div className='w-full flex items-center justify-between'>
            <h2 className='sm:text-[30px] lg:text-[32px] xl:text-[38px] 2xl:text-[42px] font-medium sm:w-[50%] lg:w-[70%] text-white'>Veja o que dizem sobre nós</h2>
            <span className='text-white sm:text-[16px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-medium flex items-center gap-[10px]'><UserNoBorder className='lg:w-[20px] xl:w-auto'/> Já atendemos +15.000 clientes</span>
            </div>
        </div>

        <div className='flex sm:flex-col lg:flex-row sm:gap-[20px] lg:gap-0 justify-between lg:absolute -bottom-[70px] sm:mt-[70px] lg:mt-0'>
          <div className='sm:w-full lg:w-[49%] bg-white sm:h-[240px] lg:h-[260px] xl:h-[310px] rounded-3xl shadow-shadow-card  sm:pt-[30px] lg:pt-[30px] sm:pl-[30px] lg:pl-[40px] sm:pr-[30px] lg:pr-[70px] xl:pt-[50px] xl:pl-[60px] xl:pr-[110px]'>
            <div className='flex items-center gap-[20px] mb-[20px]'>
                <img className='lg:w-[50px] xl:w-auto' src={HomemDoDepoimento} alt='' />
                <div className='flex flex-col'>
                <h3 className='lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-medium text-[#343434]'>Nome completo</h3>
                <span className='text-[#EF7F00] font-light lg:text-[15px] xl:text-[16px]'>Cargo - Empresa</span>
                </div>
            </div>
            <p className='lg:text-[15px] xl:text-[16px] 2xl:text-[18px] text-[#575757] font-light'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat".</p>
          </div>
          <div className='sm:w-full lg:w-[49%] bg-white sm:h-[240px] lg:h-[260px] xl:h-[310px] rounded-3xl shadow-shadow-card  sm:pt-[30px] lg:pt-[30px] sm:pl-[30px] lg:pl-[40px] sm:pr-[30px] lg:pr-[70px] xl:pt-[50px] xl:pl-[60px] xl:pr-[110px]'>
            <div className='flex items-center gap-[20px] mb-[20px]'>
                <img className='lg:w-[50px] xl:w-auto' src={JordanoDepoimento} alt='' />
                <div className='flex flex-col'>
                <h3 className='lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-medium text-[#343434]'>Nome completo</h3>
                <span className='text-[#EF7F00] font-light lg:text-[15px] xl:text-[16px]'>Cargo - Empresa</span>
                </div>
            </div>
            <p className='lg:text-[15px] xl:text-[16px] 2xl:text-[18px] text-[#575757] font-light'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat".</p>
          </div>

        </div>


        </div>
    </div>

    <div className='w-full flex flex-col lg:h-[1300px] xl:h-[1650px]'>
      <div className='container mx-auto'>
      <div className='flex flex-col gap-[20px] lg:pt-[200px] xl:pt-[250px]'>
            <span className='flex self-start bg-[#0088FF] py-2 px-5 text-white lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-medium rounded-3xl'>BLOG</span>
            <div className='w-full flex items-center justify-between'>
            <h2 className='lg:text-[32px] xl:text-[38px] 2xl:text-[42px] font-medium w-[70%] text-[#343434]]'>Veja nossas últimas publicações</h2>
            <span className='text-white bg-[#FF8800] flex items-center p-3 pl-[20px] pr-[20px] rounded-full lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-medium gap-[10px]'><DocumentosBlog className='lg:w-[18px] xl:w-[20px] 2xl:w-auto'/> Ver novidades</span>
            </div>
        </div>

        <div className='flex justify-between mt-[60px]'>
          <CardBlog Image={BlogCardImage} Title='Monitoramento Comabe' Text='A Comabe ajuda sua empresa e ter mais controle sobre o seu parque de impressão e facilidade em diversos processos que vão tornar a rotina mais ágil e dinâmica'/>
          <CardBlog Image={BlogCardImage} Title='Monitoramento Comabe' Text='A Comabe ajuda sua empresa e ter mais controle sobre o seu parque de impressão e facilidade em diversos processos que vão tornar a rotina mais ágil e dinâmica'/>
          <CardBlog Image={BlogCardImage} Title='Monitoramento Comabe' Text='A Comabe ajuda sua empresa e ter mais controle sobre o seu parque de impressão e facilidade em diversos processos que vão tornar a rotina mais ágil e dinâmica'/>
        </div>

      </div>

      <Tarja 
      Background='bg-bg-tarja-home' 
      Text='Interessados enviar currículo para: jordano@comabe.com.br ou preencher os dados do formulário através do botão ao lado' 
      Title='O que acha de fazer parte do grupo Comabe?' 
      ButtonText='Quero fazer parte' 
      />

    </div>

   
  

    
    
 
    </motion.div>
  )
}

export default Home