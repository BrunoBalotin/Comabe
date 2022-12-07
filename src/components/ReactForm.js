import React, { useRef, useState } from 'react';

export default function ReactForm({fullWidth}) {

  const urlReturn = window.location.href

  console.log(urlReturn)

  const [message, setMessage] = useState('')

  const selected = useRef(null)

  const onSubmitForm = (e) => {
      console.log(selected.current.value)
      if (selected.current.value === "Departamento") {
        e.preventDefault()
        setMessage("Por favor selecione um departamento")

        setTimeout(() => {
          setMessage('')
        }, 5000)
      } else {
        setMessage("Seu contato foi enviado com sucesso!")

        setTimeout(() => {
          setMessage('')
        }, 5000)
      }
      
  }

  
  return (
    
    <div className='bg-white p-10 w-full md:w-[60%] lg:w-95w xl:w-[480px] rounded-3xl shadow-shadow-card'>
    <form onSubmit={onSubmitForm} action='https://submit-form.com/dG764t6U' className='flex flex-col'>

      <input type="hidden" name="_email.template.title" value="Formulário de Contato - Geral" />
      <input type="hidden" name="_email.template.footer" value="false" />
      <input type="hidden" name="_email.from" value="Comabe - Site" />
      <input type="hidden" name="_email.subject" value="Novo Contato! - Formulário - Geral" />
      <input type="hidden" name="_redirect" value={urlReturn} />

      <input required className='border-b text-[16px] lg:text-[15px] xl:text-[16px] pb-[15px] lg:pb-[15px] xl:pb-[15px] 2xl:pb-[30px] outline-none' type="text" placeholder="Nome" name="Nome" />
      <input required className='border-b text-[16px] lg:text-[15px] xl:text-[16px] pb-[15px] lg:pb-[15px] xl:pb-[15px] 2xl:pb-[30px] mt-[20px] lg:mt-[20px] 2xl:mt-[30px] outline-none' type="text" placeholder="Sobrenome" name="Sobrenome"  />
      <input required className='border-b text-[16px] lg:text-[15px] xl:text-[16px] pb-[15px] lg:pb-[15px] xl:pb-[15px] 2xl:pb-[30px] mt-[20px] lg:mt-[20px] 2xl:mt-[30px] outline-none' type="text" placeholder="E-mail" name="Email" />
      <select ref={selected} required className='border-b text-[16px] lg:text-[15px] xl:text-[16px] h-[60px] lg:h-[50px] xl:h-[60px] 2xl:h-[100px] mt-[0px] bg-transparent outline-none' name="Departamento">
        <option className='hidden' value="Departamento" disabled selected>Departamento</option>
        <option value="Administração">Administração</option>
        <option value="RH">RH</option>
        <option value="Comercial Externo">Comercial Externo</option>
        <option value="Comercial Interno">Comercial Interno</option>
        <option value="Distribuição">Distribuição</option>
        <option value="Assistência Técnica">Assistência Técnica</option>
        <option value="T.I">T.I</option>
        <option value="Logística">Logística</option>
        <option value="Outros">Outros</option>
      </select>
      <input required className='border-b text-[16px] lg:text-[15px] xl:text-[16px] pb-[15px] lg:pb-[10px] xl:pb-[15px] 2xl:pb-[30px] mt-[20px] lg:mt-[20px] 2xl:mt-[30px] outline-none' type="tel" placeholder="Telefone" name="Telefone" />

      <input required className='border-b text-[16px] lg:text-[15px] xl:text-[16px] pb-[15px] lg:pb-[10px] xl:pb-[15px] 2xl:pb-[30px] mt-[20px] lg:mt-[20px] 2xl:mt-[30px] outline-none' type="text" name='Cidade' placeholder="Cidade"  />
 
      <textarea required className='border text-[16px] lg:text-[15px] xl:text-[16px] mt-[20px] mb-[20px] rounded p-3 outline-none' name='Descrição do Problema' placeholder="Descrição do Problema"  />


      <label className='flex flex-col'>
      <span className='text-[red]'>
      {message}
      </span>
      {/* <ButtonPrimary fullWidth={fullWidth} text='Entrar em contato' color='ButtonPrimary' linkRef='' border='border-none'/> */}
      <button className='cursor-pointer bg-[#0F5197] text-white py-3 px-10 text-sm font-bold rounded-3xl' type="submit" value='Enviar'>Enviar</button>
      </label>
    </form>

    </div>

    
  );
}