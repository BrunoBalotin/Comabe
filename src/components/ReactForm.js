import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ReactForm({fullWidth}) {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6ynobrb', 'template_od0nfuc', form.current, '9TBgpNU-cpK5tjtNc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

 
  
  return (
    
    <div className='bg-white p-10 w-full md:w-[60%] lg:w-95w xl:w-[480px] rounded-3xl shadow-shadow-card'>
    <form ref={form} className='flex flex-col' onSubmit={sendEmail}>
      <input className='border-b text-[16px] lg:text-[15px] xl:text-[16px] pb-[15px] lg:pb-[15px] xl:pb-[15px] 2xl:pb-[30px] outline-none' type="text" placeholder="Nome" name="nome" />
      <input className='border-b text-[16px] lg:text-[15px] xl:text-[16px] pb-[15px] lg:pb-[15px] xl:pb-[15px] 2xl:pb-[30px] mt-[20px] lg:mt-[20px] 2xl:mt-[30px] outline-none' type="text" placeholder="Sobrenome" name="sobrenome"  />
      <input className='border-b text-[16px] lg:text-[15px] xl:text-[16px] pb-[15px] lg:pb-[15px] xl:pb-[15px] 2xl:pb-[30px] mt-[20px] lg:mt-[20px] 2xl:mt-[30px] outline-none' type="text" placeholder="E-mail" name="email" />
      <select className='border-b text-[16px] lg:text-[15px] xl:text-[16px] h-[60px] lg:h-[50px] xl:h-[60px] 2xl:h-[100px] mt-[0px] bg-transparent outline-none' name="departamento">
        <option value="Departamento" disabled defaultValue='Departamento'>Departamento</option>
        <option value="Administração">Administração</option>
        <option value="Comercial Externo">Comercial Externo</option>
        <option value="Comercial Interno">Comercial Interno</option>
        <option value="Distribuição">Distribuição</option>
        <option value="Assistência Técnica">Assistência Técnica</option>
        <option value="T.I">T.I</option>
        <option value="Logística">Logística</option>
      </select>
      <input className='border-b text-[16px] lg:text-[15px] xl:text-[16px] pb-[15px] lg:pb-[10px] xl:pb-[15px] 2xl:pb-[30px] mt-[20px] lg:mt-[20px] 2xl:mt-[30px] outline-none' type="tel" placeholder="Telefone" name="telefone" />

      <input className='border-b text-[16px] lg:text-[15px] xl:text-[16px] pb-[15px] lg:pb-[10px] xl:pb-[15px] 2xl:pb-[30px] mt-[20px] lg:mt-[20px] 2xl:mt-[30px] mb-[50px] outline-none' type="text" name='cidade' placeholder="Cidade"  />
 

      <label>
      {/* <ButtonPrimary fullWidth={fullWidth} text='Entrar em contato' color='ButtonPrimary' linkRef='' border='border-none'/> */}
      <input className='cursor-pointer bg-[#0F5197] text-white py-3 px-10 text-sm font-bold rounded-3xl' type="submit" value='Enviar' />
      </label>
    </form>
    </div>

    
  );
}