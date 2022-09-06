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
import CardBlog from '../components/CardBlog'

import GridImage from '../images/GridImage.png'
import HomemSorrindo from '../images/HomemSorrindo.png'

import ImpressoraHome from '../images/ImpressoraHome.png'
import MultifuncionalHome from '../images/MultifuncionalHome.png'
import ScannerHome from '../images/ScannerHome.png'
import RotuladorHome from '../images/RotuladorHome.png'


import { HashLink } from 'react-router-hash-link'
import ReactForm from '../components/ReactForm'
import Tarja from '../components/Tarja'
import { useState } from 'react'
import ModalTrabalheConosco from '../components/ModalTrabalheConosco'
import Navbar from '../components/Navbar'
import Utilities from '../components/Utilities'
import Footer from '../components/Footer'


const Home = () => {

  
  const [modalTrabalhe, setModalTrabalhe] = useState('scale-0')

  const toggleTrabalhe = () => {
    setModalTrabalhe(!modalTrabalhe)
  }

  const scrollToTop = () => {
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }, 300)
}


  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {duration: 0.8}}}
    exit={{opacity: 0, transition: {duration: 0.1} }}
    >
    <Navbar />
    <div className='bg-hero-bg-home w-full py-32 2xl:py-52 flex items-center'>

    <div className='container mx-auto'>
    <div className='flex flex-col items-center'>
      <h2 className='text-2xl lg:text-5xl text-white text-center font-medium lg:w-95w xl:w-4/5 mb-8'>Especialistas em soluções para impressão e digitalização de documentos.</h2>
      <p className='text-sm font-medium text-white text-center w-80w sm:w-4/5 lg:w-45w 2xl:w-2/4 mb-24'>Temos soluções completas para sua empresa parar de se preocupar com impressoras ou documentos impressos.</p>
      <ArrowDown className='mb-12'/>
      <ButtonPrimary onClick={scrollToTop} text='Quero começar a economizar' color='ButtonPrimary' border='border-none' linkRef="/contato"/>
    </div>
    </div>
    </div>

    <div className='container mx-auto py-48 flex items-center'>
      <div className='flex flex-col lg:flex-row lg:justify-between'>
        <div className='w-full lg:w-45w xl:w-50w'>
          <h2 className='w-80w lg:w-auto mb-5 text-3xl text-titles font-medium'>Conheça o Business Scan</h2>
          <span className='text-xl text-[#0F5197] font-medium lg:w-70w 2xl:w-70w flex'>Nossa solução tecnológica para digitalização de documentos</span>
          <p className='mt-9 text-sm text-paragraphs font-light lg:w-80w 2xl:w-80w'>O Business Scan é o nosso serviço especializado de digitalização de documentos, através dele é possível reduzir o seu armazenamento de documentos em espaço físico com o processo de digitalização inteligente.</p>

          <div className='flex flex-wrap mt-12 mb-20 sm:gap-7 lg:gap-0 xl:gap-5 2xl:gap-0'>
            <span className='flex items-center text-sm text-titles font-light w-full lg:w-full 2xl:w-auto 2xl:mr-14 gap-3'><Documentos className='w-9 lg:w-7 xl:w-9 2xl:w-auto'/> Documentos salvos em pdf</span>
            <span className='flex items-center text-sm text-titles font-light w-full lg:w-full 2xl:w-auto gap-3'><Fraudes className='w-9  lg:w-7 xl:w-9 2xl:w-auto'/> Seguro de fraudes</span>
            <span className='flex items-center text-sm text-titles font-light w-full lg:w-full 2xl:w-auto 2xl:mt-5 gap-3'><Certificado className='w-9  lg:w-7 xl:w-9 2xl:w-auto'/> Certificação ICP-Brasil</span>
          </div>
          <ButtonPrimary onClick={scrollToTop} linkRef="/contato" text='Quero começar a economizar' color='ButtonPrimary' border='border-none' />
        </div>
      

      <div className='w-full lg:w-50w xl:w-50w mt-24 lg:mt-0'>
        <div className='relative flex flex-col items-end'>
          <img src='https://uploaddeimagens.com.br/images/003/908/897/full/Grupo_3031.png?1655735086' alt='' />
          <p className='text-sm text-paragraphs font-light sm:w-full lg:w-90w xl:w-90w'>Simplifique a gestão de documentos da sua empresa com o <span className='text-[#FF8800] font-bold'>Business Scan</span> e automatize os processos manuais que envolvem grande fluxo de papel.</p>
        </div>
      </div>
      </div>
    </div>

    <div className='flex items-center py-20 lg:pt-36 lg:pb-24 xl:pt-48 xl:pb-14 bg-grayColor'>
    <div className='container mx-auto'>
      <div className='flex flex-col-reverse lg:flex-row lg:justify-end relative'>
        <div className='w-full lg:w-55w xl:w-2/4 lg:absolute left-0'>
          <div className='w-full xl:w-85w h-80 lg:h-64 xl:h-72 bg-white rounded-xl pt-8 xl:pt-10 px-14 shadow-shadow-card'>
              <Relogio className='w-9 lg:w-8 xl:w-7 2xl:w-auto'/>
              <h3 className='text-xl text-titles font-medium my-5'>Maior produtividade</h3>
              <p className='text-sm font-light'>Com apenas alguns cliques você tem acesso a todo o seu acervo de documentos, podendo acessá-los de qualquer lugar. </p>
          </div>
          <div className='w-full xl:w-85w h-80 lg:h-64 xl:h-72 bg-white rounded-xl pt-8 xl:pt-10 px-14 shadow-shadow-card mt-8'>
              <CheckHome className='w-9 lg:w-8 xl:w-7 2xl:w-auto'/>
              <h3 className='text-xl text-titles font-medium my-5'>Maior qualidade</h3>
              <p className='text-sm font-light'>A padronização de formatos dos seus documentos, com processos claros e definidos, traz para sua empresa uma maior agilidade na execução de tarefas simples do seu dia a dia. </p>
          </div>
          <div className='xl:w-85w h-80 lg:h-64 xl:h-72 bg-white rounded-xl pt-8 xl:pt-10 px-14 shadow-shadow-card mt-8'>
              <Shield className='w-9 lg:w-8 xl:w-7 2xl:w-auto'/>
              <h3 className='text-xl text-titles font-medium my-5'>Maior segurança</h3>
              <p className='text-sm font-light'>Você quem libera os acessos aos documentos digitalizados e define quem poderá editá-los e acessar seus históricos. </p>
          </div>
          <div className='block lg:hidden mt-12'><ButtonPrimary onClick={scrollToTop} text='Quero começar a economizar' color='ButtonPrimary' border='border-none' linkRef="/contato"/></div>
        </div>

        <div className='sm:w-full lg:w-40w xl:w-50w'>
          <div className='relative'>
            <h2 className='text-2xl text-titles font-medium mb-14'>Porque sua empresa precisa do Business Scan</h2>
            <img className='mb-12' src={GridImage} alt='' />
            <div className='hidden lg:block'><ButtonPrimary onClick={scrollToTop} text='Quero começar a economizar' color='ButtonPrimary' border='border-none' linkRef="/contato"/></div>
          </div>
        </div>
      </div>
    </div>
    </div>

    <div className='flex items-center pt-[50px] lg:pt-64'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center gap-2'>
            <span className='flex text-[#0F5197] text-sm font-bold rounded-3xl'>SOLUÇÕES</span>
            <h2 className='text-2xl lg:text-3xl text-titles font-medium text-center w-4/5 lg:w-full'>Descubra a melhor solução para sua empresa</h2>
        </div>

        <div className='flex gap-16 lg:gap-0 flex-col lg:flex-row justify-between sm:mt-8 lg:mt-28'>

            <div className='flex justify-center lg:hidden'>
              <img src={HomemSorrindo} alt='' />
            </div>


            <div className='w-full lg:w-2/4 xl:w-1/3'>
                <div>
                  <span className='flex items-center text-xl font-medium gap-3'><GreenCheck />Business Scan</span>
                  <p className='text-sm font-light text-paragraphs leading-8 my-7'>A Comabe tem soluções personalizadas para as mais diversas áreas de atuação, desenvolvendo estratégias eficientes para auxiliar a sua empresa.</p>
                  <HashLink onClick={scrollToTop} to={'/business-scan'}><span className='flex items-center gap-2 text-[#0F5197] text-sm font-medium'>Saiba Mais <ArrowSaibaMais className='mt-2' /></span>  </HashLink>
                  
                </div>
                <div className='mt-14 lg:mt-24'>
                  <span className='flex items-center text-xl font-medium gap-3'><GreenCheck />Outsourcing</span>
                  <p className='text-sm font-light text-paragraphs leading-8 my-7'>Com o aluguel de impressoras da Comabe, você conta com planos mensais personalizados que visam otimizar a estrutura de operação do seu negócio através de soluções ajustáveis, como o acesso de arquivos e de impressão.</p>
                  <HashLink onClick={scrollToTop} to="/solu%C3%A7%C3%B5es"><span className='flex items-center gap-2 text-[#0F5197] text-sm font-medium'>Saiba Mais <ArrowSaibaMais className='mt-2' /></span>  </HashLink>
                  
                </div>
            </div>

            <div className='hidden lg:block'>
              <img src={HomemSorrindo} alt='' />
            </div>

            <div className='w-full lg:w-2/4 xl:w-1/3'>
                <div>
                  <span className='flex items-center text-xl font-medium gap-3'><GreenCheck />Revendas Comabe</span>
                  <p className='text-sm font-light text-paragraphs leading-8 my-7'>O revendedor Comabe tem vantagens exclusivas, ferramentas e informações que vão ajudá-lo a trazer mais valor e rentabilidade para o seu negócio!</p>
                  <HashLink onClick={scrollToTop} to={'/revendas'}><span className='flex items-center gap-2 text-[#0F5197] text-sm font-medium'>Saiba Mais <ArrowSaibaMais className='mt-2' /></span>  </HashLink>
                  
                </div>
                <div className='mt-14 lg:mt-24'>
                  <span className='flex items-center text-xl font-medium gap-3'><GreenCheck />Produtos</span>
                  <p className='text-sm font-light text-paragraphs leading-8 my-7'>Conheça as melhores linhas de produtos no ramo de impressão e digitalização oferecidas pela Comabe para atender às suas necessidades e otimizar o tempo do seu negócio.</p>
                  <HashLink onClick={scrollToTop} to={'/produtos'}><span className='flex items-center gap-2 text-[#0F5197] text-sm font-medium'>Saiba Mais <ArrowSaibaMais className='mt-2' /></span>  </HashLink>
                  
                </div>
            </div>
        </div>

        <div className='w-full bg-[#0F5197] h-80 lg:h-64 rounded-2xl flex flex-col lg:flex-row justify-center lg:justify-start gap-10 lg:gap-0 items-center px-5 lg:px-16 mt-24 mb-20'>
          <div className='lg:w-2/3 xl:w-2/3 2xl:w-3/4'>
            <h2 className='text-white text-2xl font-medium mb-5'>Fale com nosso time de consultores</h2>
            <span className='flex items-center gap-5 text-white text-sm font-light'><User className='w-24 lg:w-auto'/> <p className='lg:w-3/5 xl:w-3/5 2xl:w-2/4'>Agende uma reunião para descobrir todos os serviços que podemos oferecer para sua empresa.</p></span>
          </div>

          <div className='xl:w-1/3 2xl:w-1/4'>
            <ButtonPrimary onClick={scrollToTop} text='Fale com um consultor' color='tranparent' border='border' linkRef="/contato" />
          </div>

        </div>
      </div>
    </div>

    <div className='flex items-center py-20 lg:py-0 lg:pt-40 lg:pb-72 bg-cover w-full bg-bg-form'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:justify-between relative gap-20 lg:gap-0'>
          <div className='w-full lg:w-2/4 xl:w-2/5 2xl:w-40w'>
        <h2 className='text-white text-3xl font-medium mb-8 sm:w-4/5 md:w-9/12 lg:w-auto'>Acelere seu crescimento digital com as soluções Comabe</h2>
        <p className='text-white text-sm font-light leading-7 w-90w'>Para atingir todos os seus objetivos de negócio e crescer digitalmente com velocidade, você precisa do melhor em criatividade, performance e tecnologia.</p>
          </div>

          <div className='lg:absolute right-0 md:flex lg:w-50w xl:w-auto md:justify-center lg:block'>
              <ReactForm />

          </div>
        </div>
      </div>
    </div>

    <div className='flex items-center py-40 lg:py-64'>
      <div className='container mx-auto'>
      <div className='flex flex-col items-center gap-5'>
            <span className='flex text-[#0F5197] text-sm font-bold rounded-3xl'>PRODUTOS</span>
            <h2 className='text-2xl lg:text-3xl text-titles font-medium text-center lg:w-4/5'>Conheça nossa linha completa de produtos com o melhor custo-benefício do mercado</h2>
        </div>

        <div className='flex flex-wrap gap-3 lg:gap-5 lg:w-4/5 mx-auto xl:gap-0 xl:w-full justify-between mt-24'>
          <div className='w-full sm:w-2/4 lg:w-48w xl:w-24w 2xl:w-24w py-5 shadow-shadow-card rounded-2xl flex flex-col items-center justify-center'>
            <div className='h-44 flex items-center justify-center'><img className='w-70w xl:w-4/5 2xl:w-auto' src={ImpressoraHome} alt='' /></div>
            <h3 className='text-xl text-titles font-medium mb-8'>Impressoras</h3>
            
            <HashLink className='text-sm text-[#0F5197] font-medium' to={"/produtos#impressora"}>VER IMPRESSORAS</HashLink>
          </div>
          <div className='w-full sm:w-2/4 lg:w-48w xl:w-24w 2xl:w-24w py-5 shadow-shadow-card rounded-2xl flex flex-col items-center justify-center'>
            <div className='h-44 flex items-center justify-center'><img className='w-70w xl:w-4/5 2xl:w-auto' src={MultifuncionalHome} alt='' /></div>
            <h3 className='text-xl text-titles font-medium mb-8'>Multifuncionais</h3>
            
            <HashLink className='text-sm text-[#0F5197] font-medium' to={'/produtos#multifuncional'}>VER MULTIFUNCIONAIS</HashLink>
          </div>
          <div className='w-full sm:w-2/4 lg:w-48w xl:w-24w 2xl:w-24w py-5 shadow-shadow-card rounded-2xl flex flex-col items-center justify-center'>
            <div className='h-44 flex items-center justify-center'><img className='w-70w xl:w-4/5 2xl:w-auto' src={ScannerHome} alt='' /></div>
            <h3 className='text-xl text-titles font-medium mb-8'>Scanners</h3>
            
            <HashLink className='text-sm text-[#0F5197] font-medium' to={'/produtos#scanner'}>VER SCANNERS</HashLink>
          </div>
          <div className='w-full sm:w-2/4 lg:w-48w xl:w-24w 2xl:w-24w py-5 shadow-shadow-card rounded-2xl flex flex-col items-center justify-center'>
            <div className='h-44 flex items-center justify-center'><img className='w-70w xl:w-4/5 2xl:w-auto' src={RotuladorHome} alt='' /></div>
            <h3 className='text-xl text-titles font-medium mb-8'>Rotuladores</h3>
            
            <HashLink className='text-sm text-[#0F5197] font-medium' to={'/produtos#rotulador'}>VER ROTULADORES</HashLink>
          </div>
        </div>
      </div>
    </div>

    <div className='w-full flex bg-gradiente-blue pb-20 lg:pb-0 lg:h-600'>
        <div className='container mx-auto relative'>
        <div className='flex flex-col gap-5 pt-100'>
            <span className='flex self-start bg-[#0F5197] py-2 px-5 text-white text-sm font-medium rounded-3xl'>DEPOIMENTO</span>
            <div className='w-full flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-0 lg:justify-between'>
            <h2 className='text-3xl font-medium w-90w lg:w-4/6 text-white'>Veja o que dizem sobre nós</h2>
            <span className='text-white text-sm font-medium flex items-center gap-5'><UserNoBorder className='lg:w-5 xl:w-auto'/> Já atendemos +15.000 clientes</span>
            </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between lg:absolute -bottom-16 mt-16 mt- lg:mt-0'>
          <div className='w-full lg:w-2/4 bg-white pb-16 rounded-3xl shadow-shadow-card  pt-[30px] lg:pt-[30px] pl-[30px] lg:pl-[40px] pr-[30px] lg:pr-[70px] xl:pt-[50px] xl:pl-[60px] xl:pr-[40px]'>
            <div className='flex items-center gap-[20px] mb-5'>
                <img className='w-[60px] h-[60px] rounded-full lg:w-[50px] xl:w-auto' src='https://media-exp1.licdn.com/dms/image/C4E03AQFLdd-kH9BSmw/profile-displayphoto-shrink_200_200/0/1628251687566?e=1661385600&v=beta&t=Z-cjqoKcl-3flRaAMB3Axmz4L2-v7cUrH2T0Tz2iDTg' alt='' />
                <div className='flex flex-col'>
                <h3 className='lg:text-[15px] xl:text-[16px] 2xl:text-sm font-medium text-titles'>Marlon Veiga</h3>
                <span className='text-[#EF7F00] font-light lg:text-[15px] xl:text-[16px]'>CEO - DocService</span>
                </div>
            </div>
            <p className='lg:text-[15px] xl:text-[16px] 2xl:text-sm text-paragraphs font-light'>"A parceria entre a Comabe e a DocService tem sólidas metas para ofertar soluções que trazem melhorias aos negócios, onde acreditamos que a implantação deste projeto foi mais um importante passo para automatização de processos, além de reforçar a integridade e validade jurídica de documentos no mercado corporativo."</p>
          </div>
          <div className='w-full lg:w-[49%] bg-white pb-16 rounded-3xl shadow-shadow-card  pt-[30px] lg:pt-[30px] pl-[30px] lg:pl-[40px] pr-[30px] lg:pr-[70px] xl:pt-[50px] xl:pl-[60px] xl:pr-[40px]'>
            <div className='flex items-center gap-[20px] mb-5'>
              {/*   <img className='w-[40px] lg:w-[50px] xl:w-auto' src={JordanoDepoimento} alt='' /> */}
                <div className='flex flex-col'>
                <h3 className='lg:text-[15px] xl:text-[16px] 2xl:text-sm font-medium text-titles'>Marcos Oscar Wassem</h3>
                <span className='text-[#EF7F00] font-light lg:text-[15px] xl:text-[16px]'>Desenvolvedor - Cooperativa Ouro Branco RS</span>
                </div>
            </div>
            <p className='lg:text-[15px] xl:text-[16px] 2xl:text-sm text-paragraphs font-light'>"Desde 2017, a Comabe é nossa parceira confiável para impressão e desenvolvimento de ferramentas de integração de equipamentos com nossos sistemas internos, estamos extremamente satisfeitos com os serviços, com a agilidade e flexibilidade em atender as nossas necessidades."</p>
          </div>

        </div>


        </div>
    </div>

      <div className='w-full flex flex-col py-20 lg:py-0'>
      <div className='container mx-auto'>
      <div className='flex flex-col gap-[20px] lg:pt-[200px] xl:pt-[250px]'>
            <span id='blog' className='flex self-start bg-[#0088FF] py-2 px-5 text-white lg:text-[15px] xl:text-[16px] 2xl:text-sm font-medium rounded-3xl'>BLOG</span>
            <div className='w-full gap-10 lg:gap-0 flex flex-col lg:flex-row lg:items-center justify-between'>
            <h2 className='text-3xl font-medium lg:w-[70%] text-titles]'>Veja nossas últimas publicações</h2>
            <span className='text-white bg-[#FF8800] w-50w lg:w-auto flex items-center p-3 pl-[20px] pr-[20px] rounded-full lg:text-[15px] xl:text-[16px] 2xl:text-sm font-medium gap-[10px]'><DocumentosBlog className='w-[18px] xl:w-[20px] 2xl:w-auto'/> Ver novidades</span>
            </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-12 mt-14'>
          <CardBlog onClick={scrollToTop} BlogLink='/blog/um-metodo-de-gestao-empresarial-para-ganhar-tempo' Image="https://uploaddeimagens.com.br/images/003/975/887/full/capa_artigo%28_M%C3%A9todo_de_Gest%C3%A3o%29.png?1660152340" Title='Um método de gestão empresarial para ganhar tempo' Text='Conforme a tecnologia avança, diversos documentos tornam-se digitais. Bibliotecas inteiras podem ser encontradas na internet.'/>
          <CardBlog onClick={scrollToTop} BlogLink='/blog/paperless-a-cultura-de-eficiencia' Image="https://uploaddeimagens.com.br/images/003/993/154/full/capa_artigo_%28Paperless-Cultura_da_eficiencia%29.png?1661278376" Title='Paperless: A cultura da eficiência' Text='Nos últimos anos, diversas empresas depararam-se com a necessidade de se digitalizar.'/>
          <CardBlog onClick={scrollToTop} BlogLink='/blog/organizacao-empresarial-maior-eficiencia-com-rotuladores' Image="https://uploaddeimagens.com.br/images/003/987/090/full/rotulador.png?1660910184" Title='Organização empresarial: Maior eficiência com rotuladores' Text='A organização é importante para eficiência e fluidez de processos em um ambiente profissional.'/>
        </div>

      </div>
       </div>
      

      <Tarja 
      Background='bg-bg-tarja-home' 
      Text='Interessados enviar currículo para: jordano@comabe.com.br ou preencher os dados do formulário através do botão ao lado.' 
      Title='O que acha de fazer parte do grupo Comabe?' 
      ButtonText='Quero fazer parte'
      onClick={toggleTrabalhe}
      />

   
      <ModalTrabalheConosco onClick={toggleTrabalhe} classRef={`${modalTrabalhe ? 'scale-0' : 'scale-1'}`}/>
      <Utilities />
      <Footer />
 
   
  

    
    
 
    </motion.div>
  )
}

export default Home