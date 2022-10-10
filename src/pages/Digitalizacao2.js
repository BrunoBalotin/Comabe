import React, { useEffect, useRef, useState } from 'react'
import { ContainerLP } from '../components/ContainerLP'
import { StyledBox } from '../components/StyledBox'

import InputMask from 'react-input-mask';

import Tinta from '../static/svg/Tinta'
import DownloadArrow from '../static/svg/DownloadArrow'
import Sicredi from '../static/svg/Sicredi'

import { IconCheck } from '@tabler/icons';
import { Link } from 'react-router-dom'
import { WhatsappButton } from '../components/WhatsappButton';

function Digitalizacao2() {


  const nameInput = useRef(null)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [business, setBusiness] = useState('')
  
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

   

    if (phone.length < 16) {
      console.log(phone.length)
      setMessage("Por favor digite um número de telefone válido")
      e.preventDefault()
    }

     else if (selected.current.value === '0') {
      console.log("Valor nulo")
      e.preventDefault()

      setMessage("Por favor escolha um setor")

      setTimeout(() => {
        setMessage('')
      }, 5000)

    } else {
      
      setMessage("Você será redirecionado para a página de download em breve!")

      
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


 // const [countdown, setCountdown] = useState(5)



 // const [buttonDisabled, setButtonDisabled] = useState(false)

{/*   const disableButton = () => {
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
   
  } */}



  return (
   <>
    <div className='bg-lp'>
      <ContainerLP>
        <div className='flex justify-center pt-12'>
          <Link to='/'>
          <img src='https://static.wixstatic.com/media/0c951b_2bcbb988c7cf489ba9487b9f6cfc26d4~mv2.png/v1/fill/w_143,h_25,al_c,q_85,enc_auto/0c951b_2bcbb988c7cf489ba9487b9f6cfc26d4~mv2.png' alt='logo'/>
          </Link>
        </div>
        <div className='sm:pt-[30px] md:pt-[100px]'>
        <div className='flex flex-col-reverse lg:flex-row justify-between'>
            <div className='mt-16 sm:mt-0'>
              <div className='sm:w-[60%] mx-auto lg:mx-0 sm:h-[680px] lg:w-[400px] bg-white rounded-xl lp-shadow overflow-hidden flex flex-col'>
                <div className='w-full h-[100px] sm:h-[140px] bg-[#F5F5F5] px-[35px] flex justify-center flex-col gap-3'>
                  <span className='text-[#00529c] text-[1.3rem] sm:text-[1.063rem] font-bold'>
                    BAIXE AGORA O EBOOK
                  </span>
                  <p className='text-[#3a3a3a] text-[1.2rem] sm:text-[1.063rem] lg:w-[90%]'>
                    Guia descomplicado para digitalização de documentos 
                  </p>
                </div>

                <div className='h-full w-full flex-1 px-[35px] mt-8'>
                  <p className='text-[#3a3a3a] text-[1.2rem] sm:text-[1.063rem]'>
                    4 passos para reduzir em <span className='font-bold text-[#fe7c1a]'>80%</span> a utilização de <span className='font-bold text-[#fe7c1a]'>papéis</span> na sua empresa
                  </p>

                  
                  <form onSubmit={onSubmitForm} action='https://submit-form.com/GAcGWkBu' className='mt-8 flex flex-col gap-3 form-lp'>

                  <input type="hidden" name="_email.template.title" value="Contato - LandingPage - Digitalização - Removida 2 Seções" />
                  <input type="hidden" name="_email.template.footer" value="false" />
                  <input type="hidden" name="_email.from" value="Contato - LandingPage - Digitalização - Removida 2 Seções" />
                  <input type="hidden" name="_email.subject" value="Novo Lead! - Digitalização - Removida 2 Seções" />
                  <input type="hidden" name="_redirect" value={`https://grupocomabe.com.br/obrigado?=user-${email}`} />

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
                        <InputMask
                        maskChar={null}
                        minlength="27"
                        mask='(99) 9 9999-9999'
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
                        <button onClick={() => localStorage.setItem('token', 'valid')} ref={formBtn} className={`w-full flex justify-center items-center  bg-green-600 h-[55px] text-white font-bold text-[1.125rem] rounded-lg`} type='submit'>
                          {'QUERO BAIXAR AGORA'}
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
              <h1 className='text-[2.75rem] text-white font-bold lg:w-[85%]'>DIGITALIZAÇÃO DE <strong className='text-[#fe7c1a]'>DOCUMENTOS</strong> PARA EMPRESAS</h1>
              </div>
              <div className='hidden sm:block lg:pt-10 max-w-[400px] lg:max-w-[585px] w-full'>
                <img className='lg:max-w-[585px] w-full object-cover lg:h-[460px] relative right-8' src='https://static.wixstatic.com/media/0c951b_1e8ea8a00c85466195016e9eaf46bbb8~mv2.png/v1/fill/w_585,h_414,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0c951b_1e8ea8a00c85466195016e9eaf46bbb8~mv2.png' alt='ebook' />
              </div>
            </div>
        </div>
        </div>
      </ContainerLP>
    </div>

    <div className='py-32 mt-20'>
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

  
    <WhatsappButton />
   </>
  )
}

export default Digitalizacao2