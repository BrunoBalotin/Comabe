import React, { useEffect, useRef, useState } from 'react'
import { ContainerLP } from '../components/ContainerLP'
import { StyledBox } from '../components/StyledBox'

import Tinta from '../static/svg/Tinta'
import DownloadArrow from '../static/svg/DownloadArrow'
import Sicredi from '../static/svg/Sicredi'

import { IconCheck } from '@tabler/icons';
import { Link } from 'react-router-dom'

function Digitalizacao2() {

  useEffect(() => {
    
  }, [])

  const nameInput = useRef(null)
  
  const scrollToForm = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    setTimeout(() => {
      nameInput.current.focus()
    }, 1000)
    
  }

  const [message, setMessage] = useState('')

  const selected = useRef(null)

  const onSubmitForm = (e) => {

    if (selected.current.value === '0') {
      console.log("Valor nulo")
      e.preventDefault()

      setMessage("Por favor escolha um setor")

      setTimeout(() => {
        setMessage('')
      }, 5000)

    } else {
      
      setMessage("O download de seu E-book começará em breve!")

      
      setTimeout(() => {
        setMessage('')
        setName('')
        setEmail('')
        setPhone('')
        setBusiness('')
      }, 5000)
  }
    }

      

  const formBtn = useRef(null)


  const [countdown, setCountdown] = useState(5)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [business, setBusiness] = useState('')

  const [buttonDisabled, setButtonDisabled] = useState(false)

  const disableButton = () => {
    setButtonDisabled(true)

    setTimeout(() => {
      setButtonDisabled(false)
    }, 5000);

   let interval = setInterval(function () {
      
        console.log("Ainda não é 0")
        setCountdown(state => state - 1)

        setTimeout(() => {
          clearInterval(interval)
          setCountdown(5)
        }, 4000)
      

    }, 1000)
   
  }



  return (
   <>
    <div className='bg-lp'>
      <ContainerLP>
        <div className='flex justify-center pt-12'>
          <Link to='/'>
          <img src='https://static.wixstatic.com/media/0c951b_2bcbb988c7cf489ba9487b9f6cfc26d4~mv2.png/v1/fill/w_143,h_25,al_c,q_85,enc_auto/0c951b_2bcbb988c7cf489ba9487b9f6cfc26d4~mv2.png' alt='logo'/>
          </Link>
        </div>
        <div className='pt-[100px]'>
        <StyledBox>
            <div>
              <div className='sm:w-[60%] mx-auto lg:mx-0 lg:w-[400px] h-[680px] bg-white rounded-xl lp-shadow overflow-hidden flex flex-col'>
                <div className='w-full h-[140px] bg-[#F5F5F5] px-[35px] flex justify-center flex-col gap-3'>
                  <span className='text-[#00529c] text-[1.063rem] font-bold'>
                    BAIXE AGORA O EBOOK
                  </span>
                  <p className='text-[#3a3a3a] text-[1.063rem] lg:w-[90%]'>
                    Guia descomplicado para digitalização de documentos 
                  </p>
                </div>

                <div className='h-full w-full flex-1 px-[35px] mt-8'>
                  <p className='text-[#3a3a3a] text-[1.063rem]'>
                    4 passos para reduzir em <span className='font-bold text-[#fe7c1a]'>80%</span> a utilização de <span className='font-bold text-[#fe7c1a]'>papéis</span> na sua empresa
                  </p>

                  
                  <form onSubmit={onSubmitForm} action='https://submit-form.com/W1mVX6hd' className='mt-8 flex flex-col gap-3'>

                  <input type="hidden" name="_email.template.title" value="Formulário - Landing Page - Digitalização" />
                  <input type="hidden" name="_email.template.footer" value="false" />
                  <input type="hidden" name="_email.from" value="Comabe - Landing Page Digitalização" />
                  <input type="hidden" name="_email.subject" value="Novo Lead! - Digitalização" />
                  <input type="hidden" name="_redirect" value='https://drive.google.com/u/0/uc?id=1OHGVk2AOl-WsKXWk2xB9G1t4L2NdGDGX&export=download' />

                      <div>
                        <input
                        onChange={event => setName(event.target.value)}
                        value={name}
                        ref={nameInput} className='w-full h-[55px] border border-[#6969699e] rounded-lg px-3 focus:border-[#fe7c1a] outline-none text-[#3a3a3a] text-[0.938rem]' type='text' name='Nome' placeholder='Nome' required/>
                      </div>

                      <div>
                        <input
                        onChange={event => setEmail(event.target.value)}
                        value={email}
                        className='w-full h-[55px] border border-[#6969699e] rounded-lg px-3 focus:border-[#fe7c1a] outline-none text-[#3a3a3a] text-[0.938rem]' type='email' name='Email' placeholder='Email' required/>
                      </div>

                      <div>
                        <input
                        onChange={event => setPhone(event.target.value)}
                        value={phone}
                        className='w-full h-[55px] border border-[#6969699e] rounded-lg px-3 focus:border-[#fe7c1a] outline-none text-[#3a3a3a] text-[0.938rem]' type='tel' name='Telefone' placeholder='Telefone' required/>
                      </div>

                      <div>
                        <select ref={selected} id='setor' name='Setor/Cargo' className='w-full h-[55px] border border-[#6969699e] rounded-lg px-3 bg-transparent focus:border-[#fe7c1a] outline-none text-[#3a3a3a] text-[0.938rem]'>
                          <option value='0' className='hidden' selected disabled>
                            Setor/Cargo
                          </option>
                          <option value='Direção'>
                            Direção
                          </option>
                          <option value='TI'>
                            TI
                          </option>
                          <option value='RH'>
                            RH
                          </option>
                          <option value='Compras'>
                            Compras
                          </option>
                          <option value='Outros'>
                            Outros
                          </option>
                        </select>
                      </div>

                      <div>
                        <input 
                        onChange={event => setBusiness(event.target.value)}
                        value={business}
                        className='w-full h-[55px] border border-[#6969699e] rounded-lg px-3 focus:border-[#fe7c1a] outline-none text-[#3a3a3a] text-[0.938rem]' type='text' name='Empresa' placeholder='Empresa' required/>
                      </div>

                      <div className='mb-5'>
                        <button onClick={disableButton} ref={formBtn} className={`w-full flex justify-center items-center ${buttonDisabled? 'bg-gray-400' : 'bg-green-600'} h-[55px] text-white font-bold text-[1.125rem] rounded-lg`} type='submit' disabled={buttonDisabled}>
                          {buttonDisabled? `Aguarde ${countdown} segundos` : 'QUERO BAIXAR AGORA'}
                        </button>

                        <div>
                          <span className='text-[#fe7c1a]'>
                          {message}
                          </span>
                        </div>
                      </div>

                  </form>
                </div>
              </div>
            </div>

            <div className='lg:w-[45%] flex lg:block mt-16 lg:mt-0 justify-between'>
              <div className='sm:w-[60%] lg:w-full'>
              <h1 className='text-[2.75rem] text-white font-bold lg:w-[85%]'>CHEGA DE <strong className='text-[#fe7c1a]'>RASGAR</strong> DINHEIRO</h1>
              <h2 className='text-[1.25rem] text-white font-light lg:w-[90%] mt-5'>Reduza até <strong className='font-bold'>R$50.000,00</strong> por ano dos custos com <strong className='font-bold'>IMPRESSÕES DE DOCUMENTOS</strong> da sua empresa</h2>
              </div>
              <div className='hidden sm:block lg:pt-10 max-w-[400px] lg:max-w-[585px] w-full'>
                <img className='lg:max-w-[585px] w-full object-cover lg:h-[460px] relative right-8' src='https://static.wixstatic.com/media/0c951b_1e8ea8a00c85466195016e9eaf46bbb8~mv2.png/v1/fill/w_585,h_414,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0c951b_1e8ea8a00c85466195016e9eaf46bbb8~mv2.png' alt='ebook' />
              </div>
            </div>
        </StyledBox>
        </div>
      </ContainerLP>
    </div>

    <div className='pt-60 pb-40'>
      <ContainerLP>
        <div className='flex flex-col items-center'>
          <h3 className='text-[2.25rem] text-[#3a3a3a] font-medium mb-8'><strong className='font-bold text-[#fe7c1a]'>30 mil</strong> cópias por mês</h3>
          <p className='text-[1.125rem] text-[#3a3a3a] mb-5 text-center'>Essa é a quantidade de impressões realizada todos os meses em uma empresa de médio porte.</p>
          <p className='text-[1.125rem] text-[#3a3a3a] text-center'>O custo do papel pode parecer irrelevante, mas quando somado a outros itens como:</p>
        </div>
        <div className='flex flex-wrap sm:flex-nowrap gap-5 mt-8 justify-center'>
          <div className='flex flex-col w-[45%] sm:w-auto items-center border border-[#fe7c1a] p-9 rounded-xl'>
            <div className='icon'>
              <Tinta />
            </div>

            <span className='text-[#00529c] text-[1.125rem] font-medium block mt-[10px] text-center'>
              Tinta da impressora
            </span>
          </div>

          <div className='flex flex-col w-[45%] sm:w-auto items-center border border-[#fe7c1a] p-9 rounded-xl'>
            <div className='icon'>
            <svg className='w-[48px] h-[48px]' preserveAspectRatio="xMidYMid meet" fill='#FE7C1A' data-bbox="0 0 15.27 27" viewBox="0 0 15.27 27" height="27" width="15.27" xmlns="http://www.w3.org/2000/svg" data-type="shape" aria-labelledby="svgcid-r6lgzp83e47p"><title id="svgcid-r6lgzp83e47p"></title>
    <g>
        <path d="M8.22 11.85c-3.4-.885-4.5-1.8-4.5-3.225 0-1.635 1.515-2.775 4.05-2.775 2.67 0 3.66 1.275 3.75 3.15h3.315a5.979 5.979 0 0 0-4.815-5.715V0h-4.5v3.24C2.61 3.87.27 5.76.27 8.655c0 3.465 2.865 5.19 7.05 6.2 3.75.9 4.5 2.22 4.5 3.615 0 1.035-.735 2.685-4.05 2.685-3.09 0-4.305-1.38-4.47-3.15H0c.18 3.285 2.64 5.13 5.52 5.745V27h4.5v-3.225c2.925-.555 5.25-2.25 5.25-5.325 0-4.26-3.65-5.715-7.05-6.6Z"/>
    </g>
</svg>
            </div>

            <span className='text-[#00529c] text-[1.125rem] font-medium block mt-[10px] text-center'>
              Valor das máquinas
            </span>
          </div>

          <div className='flex flex-col items-center w-[45%] sm:w-auto  border border-[#fe7c1a] p-9 rounded-xl'>
            <div className='icon'>
            <svg className='w-[48px] h-[48px]' fill='#FE7C1A' preserveAspectRatio="xMidYMid meet" data-bbox="0.002 0 516.468 516.575" viewBox="0.002 0 516.468 516.575" height="516.575" width="516.47" xmlns="http://www.w3.org/2000/svg" data-type="shape" aria-labelledby="svgcid-nqw1vg-pnh0re"><title id="svgcid-nqw1vg-pnh0re"></title>
    <g>
        <path d="M177.17 397.575a43.373 43.373 0 0 1 0 61.262l-44.406 44.418a45.535 45.535 0 0 1-55.75 6.746l35.844-35.852a32.479 32.479 0 0 0 0-45.938L91.42 406.762a32.479 32.479 0 0 0-45.938 0L9.048 443.196a45.508 45.508 0 0 1 4.273-59.4l44.406-44.418a43.3 43.3 0 0 1 61.25 0l3.828 3.828a10.826 10.826 0 0 0 15.312 0l38.09-38.094a98.6 98.6 0 0 0 41.9 36.2l-40.938 40.949a10.823 10.823 0 0 0 0 15.312Z"/>
        <path d="M273.36 280.215c0 9.637-8.41 16.375-20.465 16.375a48.919 48.919 0 0 1-26.547-7.93l-2.91-1.937-6.551 18.3 1.672 1.2c6.879 4.91 17.895 8.324 28.68 8.98v12.3a77.655 77.655 0 0 1-6.738-1.3 74.316 74.316 0 0 1-12.48-4.18 76.326 76.326 0 0 1-39.277-39.2 76.165 76.165 0 0 1-2.77-53.32 73.781 73.781 0 0 1 3.141-8.18 76.2 76.2 0 0 1 43.6-40.227 74.773 74.773 0 0 1 15.891-3.8v12.349c-17.961 3.8-29.434 16.8-29.434 33.656 0 20.191 16.3 29.367 33.863 36.258 14.445 5.848 20.328 11.828 20.328 20.656Z"/>
        <path d="M516.47 415.945a45.16 45.16 0 0 1-6.574 23.594l-35.844-35.844a32.479 32.479 0 0 0-45.938 0l-21.438 21.449a32.479 32.479 0 0 0 0 45.938l36.422 36.434a45.478 45.478 0 0 1-59.39-4.265l-44.406-44.418a43.373 43.373 0 0 1 0-61.262l3.828-3.828a10.816 10.816 0 0 0 0-15.312l-39.625-39.637a98.7 98.7 0 0 0 39.635-38.469l39.035 39.047a10.826 10.826 0 0 0 15.312 0 43.3 43.3 0 0 1 61.25 0l44.408 44.413a45.165 45.165 0 0 1 13.324 32.156Z"/>
        <path d="M334.04 252.485a75.866 75.866 0 0 1-4.406 25.551 78.122 78.122 0 0 1-3.434 8.082 75.617 75.617 0 0 1-61.2 41.871v-13.738c18.516-3.961 30.789-17.938 30.789-35.406 0-17.652-9.539-29.082-31.895-38.2-17.434-7.219-22.477-11.637-22.477-19.7 0-6.477 4.691-14.031 17.914-14.031a44.435 44.435 0 0 1 23.211 6.266l2.777 1.6 6.824-18.023-1.992-1.172a53.883 53.883 0 0 0-23.984-7.055v-11.445a74.977 74.977 0 0 1 22.4 5.918q3.053 1.33 5.949 2.922a75.713 75.713 0 0 1 39.524 66.56Z"/>
        <path d="M516.47 100.625a45.147 45.147 0 0 1-13.32 32.16l-44.41 44.414a43.3 43.3 0 0 1-61.25 0 10.813 10.813 0 0 0-15.312 0L347.04 212.34a98.592 98.592 0 0 0-36.2-41.891l32.3-32.309a10.816 10.816 0 0 0 0-15.312L339.312 119a43.318 43.318 0 0 1 0-61.262l44.406-44.418a45.478 45.478 0 0 1 59.39-4.265l-36.428 36.43a32.522 32.522 0 0 0 0 45.938l21.438 21.462a32.493 32.493 0 0 0 45.938-.012L509.9 77.032a45.193 45.193 0 0 1 6.57 23.594Z"/>
        <path d="M210.42 167.575a98.61 98.61 0 0 0-38.48 39.625l-33.82-33.828a10.79 10.79 0 0 0-7.656-3.172c-5.129 0-8.191 3.707-11.484 7a43.3 43.3 0 0 1-61.25 0l-44.403-44.415a45.508 45.508 0 0 1-4.273-59.4l36.434 36.434a32.479 32.479 0 0 0 45.938 0l21.438-21.449a32.522 32.522 0 0 0 0-45.938L77.02 6.575a45.535 45.535 0 0 1 55.75 6.746l44.406 44.418a43.318 43.318 0 0 1 0 61.262 10.816 10.816 0 0 0 0 15.312Z"/>
    </g>
</svg>
            </div>

            <span className='text-[#00529c] text-[1.125rem]  font-medium block mt-[10px] max-w-[219px] w-full text-center'>
              Custo de manutenção
            </span>
          </div>

          <div className='flex flex-col w-[45%] sm:w-auto  items-center border border-[#fe7c1a] py-6 rounded-xl lg:max-w-[245px]'>
            <div className='icon'>
            <svg className='w-[48px] h-[48px]' fill='#FE7C1A' preserveAspectRatio="xMidYMid meet" data-bbox="0.002 0 402.503 419.646" viewBox="0.002 0 402.503 419.646" height="419.646" width="402.505" xmlns="http://www.w3.org/2000/svg" data-type="shape" aria-labelledby="svgcid--bel5cc-91ldzr"><title id="svgcid--bel5cc-91ldzr"></title>
    <g>
        <path d="M332.681 280.084a69.781 69.781 0 1 0 69.824 69.738 69.868 69.868 0 0 0-69.824-69.738Zm31.148 67.375-28 10.586a9.86 9.86 0 0 1-3.148.527 8.712 8.712 0 0 1-4.9-1.488 8.958 8.958 0 0 1-3.852-7.262v-49.086a8.75 8.75 0 0 1 17.5 0v36.488l16.188-6.125a8.75 8.75 0 1 1 6.211 16.359Z"/>
        <path d="M232.751 0h-80.5a49.029 49.029 0 0 0-49 49v12.949h17.5V49a31.594 31.594 0 0 1 31.5-31.5h80.5a31.594 31.594 0 0 1 31.5 31.5v12.949h17.5V49a49.029 49.029 0 0 0-49-49Z"/>
        <path d="M161.001 200.194h63v63h-63Z"/>
        <path d="M385.001 90.824v80.5a51.673 51.673 0 0 1-51.625 51.625h-91.875v-40.25h-98v40.25H51.626a51.615 51.615 0 0 1-42.352-22.137c-.7-1.051-1.4-2.1-2.1-3.238a51.341 51.341 0 0 1-7.172-26.25v-80.5a11.409 11.409 0 0 1 11.375-11.375h362.25a11.409 11.409 0 0 1 11.375 11.375Z"/>
        <path d="m374.591 226.804-3.5 44.625a87.4 87.4 0 0 0-125.472 72.277H29.929a11.546 11.546 0 0 1-11.461-11.9l-8.051-105a68.531 68.531 0 0 0 41.211 13.648h91.875v40.25h98v-40.25h91.875a68.533 68.533 0 0 0 41.211-13.648Z"/>
    </g>
</svg>
            </div>

            <span className='text-[#00529c] text-[1.125rem] font-medium block mt-[10px] text-center w-[80%] lg:w-auto'>        
              Horas dos colaboradores envolvidos com impressão
            </span>
          </div>
        </div>

        <div>
        <p className='text-[1.125rem] text-[#3a3a3a] text-center mt-10'>Sua empresa pode estar <strong className='text-[#fe7c1a]'>rasgando dinheiro</strong> com impressões se não estiver avaliando esses quesitos!</p>
        </div>

        <div className='flex justify-center mt-12'>
            <span onClick={scrollToForm} className='flex items-center gap-3 lp-button text-white cursor-pointer py-4 px-6 font-bold'>
              BAIXAR MEU EBOOK
              <span>
                <DownloadArrow />
              </span>
            </span>
        </div>
      </ContainerLP>
    </div>


    <div className='bg-[#FAFAFA] py-32'>
      <ContainerLP>
        <StyledBox>
          <div className='lg:w-[65%]'>
            <img src='https://static.wixstatic.com/media/0c951b_b053799b6c3b4f838151061609156599~mv2.png/v1/fill/w_527,h_491,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Grupo%2010.png' alt=''/>
          </div>

          <div className='lg:w-[80%] mt-20 lg:mt-0'>
            <h2 className='text-[#3a3a3a] text-[2.25rem] font-medium w-[80%]'>
              O que você vai <strong className='text-[#fe7c1a]'>encontrar</strong> neste guia
            </h2>

            <div className='flex flex-col mt-10 gap-5'>
                <div className='flex items-center gap-3'>
                  <span>
                    <span className='bg-[#C9FFD3] flex w-[26px] h-[26px] justify-center items-center rounded-full'>
                      <IconCheck className='w-[60%] flex-none opacity-80'/>
                    </span>
                  </span>
                  
                  <p className='text-[#575757] text-[1.125rem]'>Os 4 passos necessários para você reduzir em até 80% os seus custos com impressões de documentos da sua empresa.</p>
                </div>

                <div className='flex items-center gap-3'>
                  <span>
                    <span className='bg-[#C9FFD3] flex w-[26px] h-[26px] justify-center items-center rounded-full'>
                      <IconCheck className='w-[60%] flex-none opacity-80'/>
                    </span>
                  </span>
                  
                  <p className='text-[#575757] text-[1.125rem]'>O fluxo otimizado completo para digitalização de todos os seus documentos.</p>
                </div>

                <div className='flex items-center gap-3'>
                  <span>
                    <span className='bg-[#C9FFD3] flex w-[26px] h-[26px] justify-center items-center rounded-full'>
                      <IconCheck className='w-[60%] flex-none opacity-80'/>
                    </span>
                  </span>
                  
                  <p className='text-[#575757] text-[1.125rem]'>O formato ideal para organização de seu acervo documental.</p>
                </div>

                <div className='flex items-center gap-3'>
                  <span>
                    <span className='bg-[#C9FFD3] flex w-[26px] h-[26px] justify-center items-center rounded-full'>
                      <IconCheck className='w-[60%] flex-none opacity-80'/>
                    </span>
                  </span>
                  
                  <p className='text-[#575757] text-[1.125rem]'>Um checklist para você acompanhar todo o passo a passo do seu processo de digitalização.</p>
                </div>
            </div>
          </div>
        </StyledBox>
      </ContainerLP>
    </div>

    <div className='py-32'>
      <ContainerLP>
          <StyledBox>
            <div className='lg:w-[50%]'>
              <h2 className='text-[#3a3a3a] text-[2rem] font-bold'>
                Porque você precisa digitalizar seus documentos com <strong className='text-[#fe7c1a]'>urgência?</strong>
              </h2>

              <div className='border-b pb-6 border-gray-300 mt-16'>
                <span className='text-[1.25rem] text-[#fe7c1a] font-medium'>Maior produtividade</span>
                <p className='text-[1.125rem] text-[#575757] lg:w-[100%] mt-3'>Com apenas alguns cliques você tem acesso a todo o seu acervo de documentos, podendo acessá-los de qualquer lugar. </p>
              </div>

              <div className='border-b pb-6 border-gray-300 mt-6'>
                <span className='text-[1.25rem] text-[#fe7c1a] font-medium'>Maior qualidade</span>
                <p className='text-[1.125rem] text-[#575757] lg:w-[100%] mt-3'>A padronização de formatos dos seus documentos, com processos claros e definidos, traz para sua empresa uma maior qualidade na execução de tarefas simples do seu dia a dia. </p>
              </div>

              <div className='mt-6'>
                <span className='text-[1.25rem] text-[#fe7c1a] font-medium'>Maior segurança</span>
                <p className='text-[1.125rem] text-[#575757] lg:w-[100%] mt-3'>Você quem libera os acessos aos documentos digitalizados e define quem poderá editá-los e acessar seus históricos. </p>
              </div>
            </div>

            <div>
              <img src='https://static.wixstatic.com/media/0c951b_c371855c783d402eb5260eb29e564f44~mv2.png/v1/fill/w_405,h_636,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Grupo%202073.png' alt=''/>
            </div>
          </StyledBox>
      </ContainerLP>
    </div>

    <div className='py-32 bg-gradiente'>
      <ContainerLP>
        <div className='flex justify-center'>
          <h2 className='text-[2.25rem] md:text-[2.25rem] text-center w-full md:w-[85%] text-white font-medium'>
            A nossa solução de <span className='text-[#fe7c1a]'>digitalização</span> pode ser aplicada nos mais diferentes tipos de negócio
          </h2>
        </div>

        <div className='flex md:flex-wrap md:justify-center gap-5 mt-24 overflow-x-auto pb-10 md:pb-0 styled-scrollbar'>
        <img src='https://static.wixstatic.com/media/0c951b_7b869c3a9ea245bf8348b10ae9ff7dc4~mv2.png/v1/fill/w_149,h_119,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Grupo%201536.png' alt='' />
        <img src='https://static.wixstatic.com/media/0c951b_e8a69fe2d7ce4799abb38fc2d421589d~mv2.png/v1/fill/w_149,h_119,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Grupo%201526.png' alt='' />
        <img src='https://static.wixstatic.com/media/0c951b_1e5246168bdd48f69f5bb597592429d4~mv2.png/v1/fill/w_149,h_119,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Grupo%201527.png' alt='' />
        <img src='https://static.wixstatic.com/media/0c951b_93c77de359c94b7fa472a6484d0c15f3~mv2.png/v1/fill/w_149,h_119,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Grupo%201528.png' alt='' />
        <img src='https://static.wixstatic.com/media/0c951b_fbac372d9d3d4e9a83cfd8c57a67605b~mv2.png/v1/fill/w_149,h_119,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Grupo%201529.png' alt='' />
        <img src='https://static.wixstatic.com/media/0c951b_b0ade15a74af4d3596fa952c746d3b0d~mv2.png/v1/fill/w_149,h_119,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Grupo%201530.png' alt='' />
        <img src='https://static.wixstatic.com/media/0c951b_46c7584856d04536b7c1619365144855~mv2.png/v1/fill/w_149,h_119,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Grupo%201535.png' alt='' />
        <img src='https://static.wixstatic.com/media/0c951b_ff13b961c8f54bc7b670807ea5b3d757~mv2.png/v1/fill/w_149,h_119,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Grupo%201534.png' alt='' />
        <img src='https://static.wixstatic.com/media/0c951b_eb2b5f0910974d8a8ebabb45e146825f~mv2.png/v1/fill/w_149,h_119,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Grupo%201533.png' alt='' />
        <img src='https://static.wixstatic.com/media/0c951b_378a2e31373b400e98279d83bda60090~mv2.png/v1/fill/w_149,h_119,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Grupo%201532.png' alt='' />
        <img src='https://static.wixstatic.com/media/0c951b_c162b61728c4445ba8276f1c1f83ab07~mv2.png/v1/fill/w_149,h_119,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Grupo%201531.png' alt='' />  
        </div>
      </ContainerLP>
    </div>

    <div className='py-36'>
      <ContainerLP>
      <div className='flex justify-center'>
          <h2 className='text-[2.25rem] md:text-[2.25rem] text-center w-full text-[#3a3a3a] font-medium lg:w-[75%]'>
            +de <span className='text-[#fe7c1a]'>1500 clientes</span> ativos também confiam nas nossas soluções
          </h2>
        </div>
      </ContainerLP>


<ContainerLP>

      <div className='gap-4 mt-10 w-full flex sm:flex-wrap sm:justify-center overflow-x-auto styled-scrollbar pb-10 sm:pb-0'>
        <div className='w-[177px] h-[111px] flex-none border border-[#FFD19D] rounded-lg flex justify-center items-center'>
          <Sicredi />
        </div>

        <div className='w-[177px] flex-none h-[111px] border border-[#FFD19D] rounded-lg flex justify-center items-center'>
          <img src='https://uploaddeimagens.com.br/images/003/951/940/full/logo2-min.png?1658486417' alt='' />
        </div>

        <div className='w-[177px] flex-none h-[111px] border border-[#FFD19D] rounded-lg flex justify-center items-center'>
          <img src='https://uploaddeimagens.com.br/images/003/951/942/full/Imagem-2021-10-13T170820.469-1.png?1658486685' alt='' />
        </div>

        <div className='w-[177px] flex-none h-[111px] border border-[#FFD19D] rounded-lg flex justify-center items-center p-8'>
          <img src='https://uploaddeimagens.com.br/images/003/951/943/thumb/%C3%ADndice.png?1658486812' alt='' />
        </div>

        <div className='w-[177px] flex-none h-[111px] border border-[#FFD19D] rounded-lg flex justify-center items-center p-6'>
          <img src='https://uploaddeimagens.com.br/images/003/951/944/full/81466d139498995.6230beb04cc63.png?1658486925' alt='' />
        </div>

        <div className='w-[177px] flex-none h-[111px] border border-[#FFD19D] rounded-lg flex justify-center items-center p-6'>
          <img src='https://uploaddeimagens.com.br/images/003/951/949/full/unnamed.png?1658487440' alt='' />
        </div>

        <div className='w-[177px] flex-none h-[111px] border border-[#FFD19D] rounded-lg flex justify-center items-center p-6'>
          <img src='https://uploaddeimagens.com.br/images/003/951/953/full/%C3%ADndice.png?1658487583' alt='' />
        </div>

        <div className='w-[177px] flex-none h-[111px] border border-[#FFD19D] rounded-lg flex justify-center items-center p-6'>
          <img src='https://uploaddeimagens.com.br/images/003/951/955/full/98ad1-unimed-vale-das-antas-rs-coop-de-assistencia.png?1658487736' alt='' />
        </div>

        <div className='w-[177px] flex-none h-[111px] border border-[#FFD19D] rounded-lg flex justify-center items-center p-6'>
          <img src='https://uploaddeimagens.com.br/images/003/951/956/thumb/partner_008.png?1658487825' alt='' />
        </div>

        <div className='w-[177px] flex-none h-[111px] border border-[#FFD19D] rounded-lg flex justify-center items-center p-6'>
          <img src='https://uploaddeimagens.com.br/images/003/951/957/full/logo-2022011810345206600.png?1658487911' alt='' />
        </div>

        <div className='w-[177px] flex-none h-[111px] border border-[#FFD19D] rounded-lg flex justify-center items-center p-6'>
          <img src='https://uploaddeimagens.com.br/images/003/951/967/full/%C3%ADndice.png?1658488893' alt='' />
        </div>

        <div className='w-[177px] flex-none h-[111px] border border-[#FFD19D] rounded-lg flex justify-center items-center p-6'>
          <img src='https://uploaddeimagens.com.br/images/003/951/971/full/1602773950496.png?1658489031' alt='' />
        </div>

        <div className='w-[177px] flex-none h-[111px] border border-[#FFD19D] rounded-lg flex justify-center items-center p-4'>
          <img src='https://uploaddeimagens.com.br/images/003/951/972/full/tumelero-ja.png?1658489141' alt='' />
        </div>
      </div>
      </ContainerLP>
    </div>

    <div className='py-36 bg-semifooter'>
        <ContainerLP>
        <div className='flex justify-center'>
          <h2 className='text-[2.25rem] md:text-[2.25rem] text-center w-full lg:w-[75%] text-white'>
            Gostou e quer saber como eliminar até <span className='text-[#fe7c1a] font-bold'>80%</span>  dos <strong className='text-[#fe7c1a] font-bold'>documentos impressos</strong> de seu escritório?
          </h2>
        </div>
        <div className='flex justify-center mt-5'>
          <p className='text-white text-[1.125rem]'>
          Faça o <strong>download</strong> do e-book através do botão abaixo
          </p>
        </div>

        <div className='flex justify-center mt-12'>
            <span onClick={scrollToForm} className='flex items-center gap-3 lp-button text-white cursor-pointer py-4 px-6 font-bold'>
              BAIXAR MEU EBOOK
              <span>
                <DownloadArrow />
              </span>
            </span>
        </div>
        </ContainerLP>
    </div>

    <div className='bg-gradiente py-10'>
    <ContainerLP>
      <div className='flex flex-col sm:flex-row'>
        <div className='flex-1'>
          <Link to='/'>
          <img src='https://static.wixstatic.com/media/0c951b_2bcbb988c7cf489ba9487b9f6cfc26d4~mv2.png/v1/fill/w_143,h_25,al_c,q_85,enc_auto/0c951b_2bcbb988c7cf489ba9487b9f6cfc26d4~mv2.png' alt='' />
          </Link>
        </div>

        <div className='flex items-center gap-3'>
          <span className='text-white font-bold'>
          © Comabe - 2022
          </span>

          <span className='flex items-center gap-2 text-white'>
            Desenvolvido por <span> <img className='w-[60px] mt-1' src='https://uploaddeimagens.com.br/images/003/952/072/full/Logo_Eagles_Branco.png?1658492660' alt='' /> </span>
          </span>
        </div>
      </div>
    </ContainerLP>
    </div>

  

   </>
  )
}

export default Digitalizacao2