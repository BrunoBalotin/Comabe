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
    <div className='bg-hero-bg-home w-full py-48 flex items-center'>

    <div className='container mx-auto'>
    <div className='flex flex-col items-center'>
      <h2 className='text-5xl text-white text-center font-medium w-4/5 mb-8'>Até quando a sua empresa vai continuar rasgando dinheiro com impressões de documentos?</h2>
      <p className='text-sm font-medium text-white text-center w-full sm:w-4/5 lg:w-3/5 2xl:w-2/4 mb-24'>Fornecemos soluções completas para sua empresa parar de se preocupar com impressoras ou documentos impressos.</p>
      <ArrowDown className='mb-12'/>
      <ButtonPrimary text='Quero começar a economizar' color='ButtonPrimary' border='border-none' linkRef="/Contato"/>
    </div>
    </div>
    </div>

    <div className='container mx-auto py-48 flex items-center'>
      <div className='flex sm:flex-col lg:flex-row lg:justify-between'>
        <div className='sm:w-full lg:w-2/5'>
          <h2 className='mb-5 text-3xl text-titles font-medium'>Descubra o Business Scan</h2>
          <span className='text-xl text-[#0F5197] font-medium'>Nossa solução tecnológica para digitalização de documentos</span>
          <p className='mt-9 text-sm text-paragraphs font-light'>O Business Scan é o nosso serviço especializado de digitalização de documentos, através dele é possível reduzir o seu armazenamento de documentos em espaço físico com o processo de digitalização inteligente.</p>

          <div className='flex flex-wrap mt-12 mb-20 sm:gap-7 lg:gap-0 xl:gap-5 2xl:gap-0'>
            <span className='flex items-center text-sm text-titles font-light lg:w-full 2xl:w-auto 2xl:mr-14 gap-3'><Documentos className='sm:w-7 lg:w-7 xl:w-9 2xl:w-auto'/> Documentos salvos em pdf</span>
            <span className='flex items-center text-sm text-titles font-light lg:w-full 2xl:w-auto gap-3'><Fraudes className='sm:w-7  lg:w-7 xl:w-9 2xl:w-auto'/> Seguro de fraudes</span>
            <span className='flex items-center text-sm text-titles font-light lg:w-full 2xl:w-auto 2xl:mt-5 gap-3'><Certificado className='sm:w-7  lg:w-7 xl:w-9 2xl:w-auto'/> Certificação ICP-Brasil</span>
          </div>
          <ButtonPrimary linkRef="/Contato#header" text='Quero começar a economizar' color='ButtonPrimary' border='border-none' />
        </div>
      

      <div className='sm:w-full lg:w-2/4 sm:mt-24'>
        <div className='relative flex flex-col items-end'>
          <img src={BusinessScan} alt='' />
          <p className='text-sm text-paragraphs font-light sm:w-full lg:w-5/6 xl:w-5/6'>Simplifique a gestão de documentos da sua empresa com o <span className='text-comabeorange font-bold'>Business Scan</span> e automatize os processos manuais que envolvem grande fluxo de papel.</p>
        </div>
      </div>
      </div>
    </div>

    <div className='flex items-center pt-48 pb-14 bg-grayColor'>
    <div className='container mx-auto'>
      <div className='flex sm:flex-col-reverse lg:flex-row lg:justify-end relative'>
        <div className='sm:w-full lg:w-2/4 xl:w-2/4 lg:absolute left-0'>
          <div className='xl:w-11/12 2xl:w-11/12 h-72 bg-white rounded-xl pt-10 px-14 shadow-shadow-card'>
              <Relogio className='sm:w-6 lg:w-6 xl:w-7 2xl:w-auto'/>
              <h3 className='text-xl text-titles font-medium my-5'>Maior produtividade</h3>
              <p className='text-sm font-light'>Com apenas alguns cliques você tem acesso a todo o seu acervo de documentos, podendo acessá-los de qualquer lugar. </p>
          </div>
          <div className='xl:w-11/12 2xl:w-11/12 h-72 bg-white rounded-xl pt-10 px-14 shadow-shadow-card mt-8'>
              <CheckHome className='sm:w-6 lg:w-6 xl:w-7 2xl:w-auto'/>
              <h3 className='text-xl text-titles font-medium my-5'>Maior qualidade</h3>
              <p className='text-sm font-light'>A padronização de formatos dos seus documentos, com processos claros e definidos, traz para sua empresa uma maior qualidade na execução de tarefas simples do seu dia a dia. </p>
          </div>
          <div className='xl:w-11/12 2xl:w-11/12 h-72 bg-white rounded-xl pt-10 px-14 shadow-shadow-card mt-8'>
              <Shield className='sm:w-6 lg:w-6 xl:w-7 2xl:w-auto'/>
              <h3 className='text-xl text-titles font-medium my-5'>Maior segurança</h3>
              <p className='text-sm font-light'>Você quem libera os acessos aos documentos digitalizados e define quem poderá editá-los e acessar seus históricos. </p>
          </div>
          <div className='sm:block lg:hidden mt-12'><ButtonPrimary text='Quero começar a economizar' color='ButtonPrimary' border='border-none' linkRef="/Contato#header"/></div>
        </div>

        <div className='sm:w-full md:w-2/4'>
          <div className='relative'>
            <h2 className='text-2xl text-titles font-medium mb-14'>Porque sua empresa precisa do Business Scan</h2>
            <img className='mb-12' src={GridImage} alt='' />
            <div className='sm:hidden lg:block'><ButtonPrimary text='Quero começar a economizar' color='ButtonPrimary' border='border-none' linkRef="/Contato#header"/></div>
          </div>
        </div>
      </div>
    </div>
    </div>

    <div className='flex items-center pt-64'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center gap-5'>
            <span className='flex bg-[#0F5197] py-2 px-5 text-white text-sm font-medium rounded-3xl'>SOLUÇÕES</span>
            <h2 className='text-3xl text-titles font-medium text-center sm:w-4/5 lg:w-full'>Descubra a melhor solução para sua empresa</h2>
        </div>

        <div className='flex sm:gap-16 lg:gap-0 sm:flex-col lg:flex-row justify-between sm:mt-8 lg:mt-28'>

            <div className='sm:flex justify-center lg:hidden'>
              <img src={HomemSorrindo} alt='' />
            </div>


            <div className='sm:w-full lg:w-2/4 xl:w-1/3'>
                <div>
                  <span className='flex items-center text-xl font-medium gap-3'><GreenCheck />Business Scan</span>
                  <p className='text-sm font-light text-paragraphs leading-8 my-7'>A Comabe tem soluções personalizadas para as mais diversas áreas de atuação, desenvolvendo métodos eficientes para auxiliar a sua empresa.</p>
                  <Link to={'/Business-Scan'}><span className='flex items-center gap-2 text-[#0F5197] text-sm font-medium'>Saiba Mais <ArrowSaibaMais className='mt-2' /></span>  </Link>
                  
                </div>
                <div className='sm:mt-14 mt- lg:mt-24'>
                  <span className='flex items-center text-xl font-medium gap-3'><GreenCheck />Outsourcing</span>
                  <p className='text-sm font-light text-paragraphs leading-8 my-7'>Com o aluguel de impressoras da Comabe, você conta com planos mensais personalizados que visam otimizar a estrutura de operação do seu negócio através de soluções ajustáveis, como o acesso de arquivos e de impressão.</p>
                  <Link to={'/Business-Scan'}><span className='flex items-center gap-2 text-[#0F5197] text-sm font-medium'>Saiba Mais <ArrowSaibaMais className='mt-2' /></span>  </Link>
                  
                </div>
            </div>

            <div className='sm:hidden lg:block'>
              <img src={HomemSorrindo} alt='' />
            </div>

            <div className='sm:w-full lg:w-2/4 xl:w-1/3'>
                <div>
                  <span className='flex items-center text-xl font-medium gap-3'><GreenCheck />Revendas Comabe</span>
                  <p className='text-sm font-light text-paragraphs leading-8 my-7'>O revendedor Comabe tem vantagens exclusivas, ferramentas e informações que vão ajudá-lo a trazer mais valor e rentabilidade para o seu negócio!</p>
                  <Link to={'/Business-Scan'}><span className='flex items-center gap-2 text-[#0F5197] text-sm font-medium'>Saiba Mais <ArrowSaibaMais className='mt-2' /></span>  </Link>
                  
                </div>
                <div className='sm:mt-14 lg:mt-24'>
                  <span className='flex items-center text-xl font-medium gap-3'><GreenCheck />Produtos</span>
                  <p className='text-sm font-light text-paragraphs leading-8 my-7'>Conheça as melhores linhas de produtos no ramo de impressão e digitalização oferecidas pela Comabe para atender às suas necessidades e otimizar o tempo do seu negócio.</p>
                  <Link to={'/Business-Scan'}><span className='flex items-center gap-2 text-[#0F5197] text-sm font-medium'>Saiba Mais <ArrowSaibaMais className='mt-2' /></span>  </Link>
                  
                </div>
            </div>
        </div>

        <div className='w-full bg-[#0F5197] h-64 rounded-2xl flex sm:flex-col lg:flex-row sm:justify-center lg:justify-start sm:gap-10 lg:gap-0 items-center px-16 mt-24 mb-20'>
          <div className='lg:w-2/3 xl:w-2/3 2xl:w-3/4'>
            <h2 className='text-white text-2xl font-medium mb-5'>Fale com nosso time de consultores</h2>
            <span className='flex items-center gap-5 text-white text-sm font-light'><User className='sm:w-14 lg:w-auto'/> <p className='lg:w-3/5 xl:w-3/5 2xl:w-2/4'>Agende uma reunião para descobrir todos os serviços que podemos oferecer para sua empresa.</p></span>
          </div>

          <div className='xl:w-1/3 2xl:w-1/4'>
            <ButtonPrimary text='Fale com um consultor' color='tranparent' border='border' linkRef="/Contato#header" />
          </div>

        </div>
      </div>
    </div>

    <div className='flex items-center py-52 bg-cover w-full bg-bg-form'>
      <div className='container mx-auto'>
        <div className='flex sm:flex-col lg:flex-row lg:justify-between relative sm:gap-10 lg:gap-0'>
          <div className='sm:w-full lg:w-2/4 xl:w-2/5 2xl:w-1/3'>
        <h2 className='text-white text-3xl font-medium mb-8 sm:w-4/5 md:w-9/12 lg:w-auto'>Acelere seu crescimento digital com as soluções Comabe</h2>
        <p className='text-white text-sm font-light leading-7 sm:w-full md:w-5/6 lg:w-auto'>Para atingir todos os seus objetivos de negócio e crescer digitalmente com velocidade, você precisa do melhor em criatividade, performance e tecnologia.</p>
          </div>

          <div className='lg:absolute right-0 md:flex md:justify-center lg:block'>
              <ReactForm />

          </div>
        </div>
      </div>
    </div>

    <div className='flex items-center py-64'>
      <div className='container mx-auto'>
      <div className='flex flex-col items-center gap-5'>
            <span className='flex bg-[#0F5197] py-2 px-5 text-white text-sm font-medium rounded-3xl'>PRODUTO</span>
            <h2 className='text-3xl text-titles font-medium text-center w-4/5'>Conheça nossa linha completa de produtos com o melhor custo-benefício do mercado</h2>
        </div>

        <div className='flex flex-wrap sm:gap-3 lg:gap-5 lg:w-4/5 mx-auto xl:gap-0 xl:w-full justify-between mt-24'>
          <div className='sm:w-2/4 lg:w-2/4 xl:w-1/4 2xl:w-80 py-5 shadow-shadow-card rounded-2xl flex flex-col items-center justify-center'>
            <div className='h-44 flex items-center justify-center'><img className='xl:w-4/5 2xl:w-auto' src={ImpressoraHome} alt='' /></div>
            <h3 className='text-xl text-titles font-medium mb-8'>Impressoras</h3>
            <p className='text-center w-11/12 text-sm text-paragraphs font-light mb-8 leading-8'>​ A Comabe conta com uma linha completa de impressoras. </p>
            <Link className='text-sm text-[#0F5197] font-medium' to={'/Produtos#impressoras'}>VER IMPRESSORAS</Link>
          </div>
          <div className='sm:w-2/4 lg:w-2/4 xl:w-1/4 2xl:w-80 py-5 shadow-shadow-card rounded-2xl flex flex-col items-center justify-center'>
            <div className='h-44 flex items-center justify-center'><img className='xl:w-4/5 2xl:w-auto' src={MultifuncionalHome} alt='' /></div>
            <h3 className='text-xl text-titles font-medium mb-8'>Multifuncionais</h3>
            <p className='text-center w-11/12 text-sm text-paragraphs font-light mb-8 leading-8'>​ A Comabe conta com uma linha completa de multifuncionais. </p>
            <Link className='text-sm text-[#0F5197] font-medium' to={'/Produtos#multifuncional'}>VER MULTIFUNCIONAIS</Link>
          </div>
          <div className='sm:w-2/4 lg:w-2/4 xl:w-1/4 2xl:w-80 py-5 shadow-shadow-card rounded-2xl flex flex-col items-center justify-center'>
            <div className='h-44 flex items-center justify-center'><img className='xl:w-4/5 2xl:w-auto' src={ScannerHome} alt='' /></div>
            <h3 className='text-xl text-titles font-medium mb-8'>Scanners</h3>
            <p className='text-center w-11/12 text-sm text-paragraphs font-light mb-8 leading-8'>​ A Comabe conta com uma linha completa de scanners. </p>
            <Link className='text-sm text-[#0F5197] font-medium' to={'/Produtos#scanner'}>VER SCANNERS</Link>
          </div>
          <div className='sm:w-2/4 lg:w-2/4 xl:w-1/4 2xl:w-80 py-5 shadow-shadow-card rounded-2xl flex flex-col items-center justify-center'>
            <div className='h-44 flex items-center justify-center'><img className='xl:w-4/5 2xl:w-auto' src={RotuladorHome} alt='' /></div>
            <h3 className='text-xl text-titles font-medium mb-8'>Rotuladores</h3>
            <p className='text-center w-11/12 text-sm text-paragraphs font-light mb-8 leading-8'>​ A Comabe conta com uma linha completa de rotuladores. </p>
            <Link className='text-sm text-[#0F5197] font-medium' to={'/Produtos#rotulador'}>VER ROTULADORES</Link>
          </div>
        </div>
      </div>
    </div>

    <div className='w-full flex bg-gradiente-blue h-600'>
        <div className='container mx-auto relative'>
        <div className='flex flex-col gap-5 sm:pt-100'>
            <span className='flex self-start bg-[#0F5197] py-2 px-5 text-white text-sm font-medium rounded-3xl'>DEPOIMENTO</span>
            <div className='w-full flex items-center justify-between'>
            <h2 className='text-3xl font-medium sm:w-2/4 lg:w-4/6 text-white'>Veja o que dizem sobre nós</h2>
            <span className='text-white text-sm font-medium flex items-center gap-5'><UserNoBorder className='lg:w-5 xl:w-auto'/> Já atendemos +15.000 clientes</span>
            </div>
        </div>

        <div className='flex sm:flex-col lg:flex-row sm:gap-5 lg:gap-0 justify-between lg:absolute -bottom-16 sm:mt-16 mt- lg:mt-0'>
          <div className='sm:w-full lg:w-2/4 bg-white h-300 rounded-3xl shadow-shadow-card  sm:pt-[30px] lg:pt-[30px] sm:pl-[30px] lg:pl-[40px] sm:pr-[30px] lg:pr-[70px] xl:pt-[50px] xl:pl-[60px] xl:pr-[110px]'>
            <div className='flex items-center gap-[20px] mb-5'>
                <img className='lg:w-[50px] xl:w-auto' src={HomemDoDepoimento} alt='' />
                <div className='flex flex-col'>
                <h3 className='lg:text-[15px] xl:text-[16px] 2xl:text-sm font-medium text-titles'>Nome completo</h3>
                <span className='text-[#EF7F00] font-light lg:text-[15px] xl:text-[16px]'>Cargo - Empresa</span>
                </div>
            </div>
            <p className='lg:text-[15px] xl:text-[16px] 2xl:text-sm text-paragraphs font-light'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat".</p>
          </div>
          <div className='sm:w-full lg:w-[49%] bg-white h-300 rounded-3xl shadow-shadow-card  sm:pt-[30px] lg:pt-[30px] sm:pl-[30px] lg:pl-[40px] sm:pr-[30px] lg:pr-[70px] xl:pt-[50px] xl:pl-[60px] xl:pr-[110px]'>
            <div className='flex items-center gap-[20px] mb-5'>
                <img className='lg:w-[50px] xl:w-auto' src={JordanoDepoimento} alt='' />
                <div className='flex flex-col'>
                <h3 className='lg:text-[15px] xl:text-[16px] 2xl:text-sm font-medium text-titles'>Nome completo</h3>
                <span className='text-[#EF7F00] font-light lg:text-[15px] xl:text-[16px]'>Cargo - Empresa</span>
                </div>
            </div>
            <p className='lg:text-[15px] xl:text-[16px] 2xl:text-sm text-paragraphs font-light'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat".</p>
          </div>

        </div>


        </div>
    </div>

    <div className='w-full flex flex-col lg:h-[1300px] xl:h-[1650px]'>
      <div className='container mx-auto'>
      <div className='flex flex-col gap-[20px] lg:pt-[200px] xl:pt-[250px]'>
            <span className='flex self-start bg-[#0088FF] py-2 px-5 text-white lg:text-[15px] xl:text-[16px] 2xl:text-sm font-medium rounded-3xl'>BLOG</span>
            <div className='w-full flex items-center justify-between'>
            <h2 className='lg:text-2xl xl:text-[38px] 2xl:text-3xl font-medium w-[70%] text-titles]'>Veja nossas últimas publicações</h2>
            <span className='text-white bg-[#FF8800] flex items-center p-3 pl-[20px] pr-[20px] rounded-full lg:text-[15px] xl:text-[16px] 2xl:text-sm font-medium gap-[10px]'><DocumentosBlog className='lg:w-[18px] xl:w-[20px] 2xl:w-auto'/> Ver novidades</span>
            </div>
        </div>

        <div className='flex justify-between mt-14'>
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