import React from 'react';
import { useForm } from 'react-hook-form';
import ButtonPrimary from './ButtonPrimary';

export default function ReactForm({fullWidth}) {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    
    <div className='bg-white p-10 sm:w-full md:w-[60%] lg:w-[400px] xl:w-[480px] rounded-3xl shadow-shadow-card'>
    <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
      <input className='border-b sm:text-[16px] lg:text-[15px] xl:text-[16px] sm:pb-[15px] lg:pb-[15px] xl:pb-[15px] 2xl:pb-[30px] outline-none' type="text" placeholder="Nome" {...register("Nome", {required: true, maxLength: 80})} />
      <input className='border-b sm:text-[16px] lg:text-[15px] xl:text-[16px] sm:pb-[15px] lg:pb-[15px] xl:pb-[15px] 2xl:pb-[30px] sm:mt-[20px] lg:mt-[20px] 2xl:mt-[30px] outline-none' type="text" placeholder="Sobrenome" {...register("Sobrenome", {required: true, maxLength: 100})} />
      <input className='border-b sm:text-[16px] lg:text-[15px] xl:text-[16px] sm:pb-[15px] lg:pb-[15px] xl:pb-[15px] 2xl:pb-[30px] sm:mt-[20px] lg:mt-[20px] 2xl:mt-[30px] outline-none' type="text" placeholder="E-mail" {...register("E-mail", {required: true, pattern: /^\S+@\S+$/i})} />
      <select className='border-b sm:text-[16px] lg:text-[15px] xl:text-[16px] sm:h-[60px] lg:h-[50px] xl:h-[60px] 2xl:h-[100px] mt-[0px] bg-transparent outline-none' {...register("Departamento", { required: true })}>
        <option value="Departamento" disabled selected>Departamento</option>
        <option value="Administração">Administração</option>
        <option value="Comercial Externo">Comercial Externo</option>
        <option value="Comercial Interno">Comercial Interno</option>
        <option value="Distribuição">Distribuição</option>
        <option value="Assistência Técnica">Assistência Técnica</option>
        <option value="T.I">T.I</option>
        <option value="Logística">Logística</option>
      </select>
      <input className='border-b sm:text-[16px] lg:text-[15px] xl:text-[16px] sm:pb-[15px] lg:pb-[10px] xl:pb-[15px] 2xl:pb-[30px] sm:mt-[20px] lg:mt-[20px] 2xl:mt-[30px] outline-none' type="tel" placeholder="Telefone" {...register("Telefone", {required: true, pattern: /^\S+@\S+$/i})} />

      <input className='border-b sm:text-[16px] lg:text-[15px] xl:text-[16px] sm:pb-[15px] lg:pb-[10px] xl:pb-[15px] 2xl:pb-[30px] sm:mt-[20px] lg:mt-[20px] 2xl:mt-[30px] mb-[50px] outline-none' type="text" name='Cidade' placeholder="Cidade" {...register("Cidade", {required: true, minLength: 3})} />
      {errors.Cidade && <span>Invalid last name</span>}

      <label>
      <ButtonPrimary fullWidth={fullWidth} text='Entrar em contato' color='ButtonPrimary' linkRef='' border='border-none'/>
      <input type="submit" value='' />
      </label>
    </form>
    </div>

    
  );
}