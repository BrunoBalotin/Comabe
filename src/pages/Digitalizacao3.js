import React, { useRef, useState } from 'react'
import { ContainerLP } from '../components/ContainerLP'

import InputMask from 'react-input-mask';
import { Link } from 'react-router-dom'

function Digitalizacao3() {


  const nameInput = useRef(null)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [business, setBusiness] = useState('')

  const selected = useRef(null)

  const onSubmitForm = (e) => {

   

    if (phone.length < 16) {
      console.log(phone.length)
      e.preventDefault()
    }

     else if (selected.current.value === '0') {
      console.log("Valor nulo")
      e.preventDefault()

    } else {

      
      setTimeout(() => {
        setName('')
        setEmail('')
        setPhone('')
        setBusiness('')
      }, 5000)
  }
    }   

  const formBtn = useRef(null)



  return (
   <>
    <div className='bg-lp-3'>
      <ContainerLP>
        <div className='flex justify-center pt-10'>
          <Link to='/'>
          <img src='https://static.wixstatic.com/media/0c951b_2bcbb988c7cf489ba9487b9f6cfc26d4~mv2.png/v1/fill/w_143,h_25,al_c,q_85,enc_auto/0c951b_2bcbb988c7cf489ba9487b9f6cfc26d4~mv2.png' alt='logo'/>
          </Link>
        </div>
        <div className='sm:pt-[30px] md:pt-[40px] 2xl:pt-[100px]'>
        <div className='flex flex-col-reverse lg:flex-row justify-between'>
            <div className='mt-16 sm:mt-0'>
              <div className='sm:w-[40%] mx-auto lg:mx-0 md:h-[490px] 2xl:h-[680px] md:w-[400px] 2xl:w-[400px] bg-white rounded-xl lp-shadow overflow-hidden flex flex-col'>
                <div className='w-full py-3 2xl:py-6 bg-[#F5F5F5] px-[35px] flex justify-center flex-col gap-3'>
                  <span className='text-[#00529c] text-[1.3rem] sm:text-[1.063rem] font-bold'>
                    BAIXE AGORA O EBOOK
                  </span>
                  <p className='text-[#3a3a3a] text-[1.2rem] sm:text-[1.063rem] lg:w-[90%]'>
                    Guia descomplicado para digitalização de documentos 
                  </p>
                </div>

                <div className='h-full w-full flex-1 px-[35px] mt-3 2xl:mt-8'>
                  <p className='text-[#3a3a3a] text-[1.2rem] sm:text-[1.063rem]'>
                    4 passos para reduzir em <span className='font-bold text-[#fe7c1a]'>80%</span> a utilização de <span className='font-bold text-[#fe7c1a]'>papéis</span> na sua empresa
                  </p>

                  
                  <form onSubmit={onSubmitForm} action='https://submit-form.com/cnhQrmCF' className='mt-8 flex flex-col gap-3 form-lp'>

                  <input type="hidden" name="_email.template.title" value="Contato - LandingPage - Digitalização - Sem Scroll" />
                  <input type="hidden" name="_email.template.footer" value="false" />
                  <input type="hidden" name="_email.from" value="Contato - LandingPage - Digitalização - Sem Scroll" />
                  <input type="hidden" name="_email.subject" value="Novo Lead! - Digitalização - Sem Scroll" />
                  <input type="hidden" name="_redirect" value={`https://grupocomabe.com.br/obrigado?=user-${email}`} />

                      <div>
                        <input
                        onChange={event => setName(event.target.value)}
                        value={name}
                        ref={nameInput} className='w-full h-[35px] sm:h-[40px] 2xl:h-[55px] border border-[#6969699e] rounded-lg px-3 focus:border-[#fe7c1a] outline-none text-[#3a3a3a] text-[1.3rem] sm:text-[0.938rem]' type='text' name='Nome' placeholder='Nome' required/>
                      </div>

                      <div>
                        <input
                        onChange={event => setEmail(event.target.value)}
                        value={email}
                        className='w-full h-[35px] sm:h-[40px] 2xl:h-[55px] border border-[#6969699e] rounded-lg px-3 focus:border-[#fe7c1a] outline-none text-[#3a3a3a] text-[1.3rem] sm:text-[0.938rem]' type='email' name='Email' placeholder='Email' required/>
                      </div>

                      <div>
                        <InputMask
                        maskChar={null}
                        minlength="27"
                        mask='(99) 9 9999-9999'
                        onChange={event => setPhone(event.target.value)}
                        value={phone}
                        className='w-full h-[35px] sm:h-[40px] 2xl:h-[55px] border border-[#6969699e] rounded-lg px-3 focus:border-[#fe7c1a] outline-none text-[#3a3a3a] text-[1.3rem] sm:text-[0.938rem]' type='tel' name='Telefone' placeholder='Telefone' required/>
                      </div>

                      <div>
                        <select ref={selected} id='setor' name='Setor/Cargo' className='w-full h-[35px] sm:h-[40px] 2xl:h-[55px] border border-[#6969699e] rounded-lg px-3 bg-transparent focus:border-[#fe7c1a] outline-none text-[#3a3a3a] text-[1.3rem] sm:text-[0.938rem]'>
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
                        className='w-full h-[35px] sm:h-[40px] 2xl:h-[55px] border border-[#6969699e] rounded-lg px-3 focus:border-[#fe7c1a] outline-none text-[#3a3a3a] text-[1.3rem] sm:text-[0.938rem]' type='text' name='Empresa' placeholder='Empresa' required/>
                      </div>

                      <div className='mb-5'>
                        <button onClick={() => localStorage.setItem('token', 'valid')} ref={formBtn} className={`w-full flex justify-center items-center  bg-green-600 h-[35px] sm:h-[40px] 2xl:h-[55px] text-white font-bold text-[1.125rem] rounded-lg`} type='submit'>
                          {'QUERO BAIXAR AGORA'}
                        </button>
                      </div>

                  </form>
                </div>
              </div>
            </div>

            <div className='sm:w-[55%] 2xl:w-[45%] flex lg:block mt-6 sm:mt-16 lg:mt-0 justify-between'>
              <div className='sm:w-[60%] lg:w-full'>
              <h1 className='text-[2.75rem] text-white font-bold lg:w-[85%]'>CHEGA DE <strong className='text-[#fe7c1a]'>RASGAR</strong> DINHEIRO</h1>
              <h2 className='text-[1.25rem] text-white font-light lg:w-[90%] mt-5'>Reduza até <strong className='font-bold'>R$50.000,00</strong> por ano dos custos com <strong className='font-bold'>IMPRESSÕES DE DOCUMENTOS</strong> da sua empresa</h2>
              </div>
              <div className='hidden sm:block 2xl:pt-10 2xl:max-w-[585px] w-full'>
                <img className='2xl:max-w-[585px] w-[80%] 2xl:w-full object-cover 2xl:h-[460px] relative right-8' src='https://static.wixstatic.com/media/0c951b_1e8ea8a00c85466195016e9eaf46bbb8~mv2.png/v1/fill/w_585,h_414,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0c951b_1e8ea8a00c85466195016e9eaf46bbb8~mv2.png' alt='ebook' />
              </div>
            </div>
        </div>
        </div>
      </ContainerLP>
      <div className='2xl:py-4 mt-10 sm:mt-0'>
    <ContainerLP>
      <div className='flex flex-row'>
        <div className='flex-1 hidden sm:block'>
          <Link to='/'>
          <img src='https://static.wixstatic.com/media/0c951b_2bcbb988c7cf489ba9487b9f6cfc26d4~mv2.png/v1/fill/w_143,h_25,al_c,q_85,enc_auto/0c951b_2bcbb988c7cf489ba9487b9f6cfc26d4~mv2.png' alt='' />
          </Link>
        </div>

        <div className='flex items-center gap-28 sm:gap-3'>
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
    </div>
   </>
  )
}

export default Digitalizacao3