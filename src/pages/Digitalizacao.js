import React from 'react'

function Digitalizacao() {

  setTimeout(() => {
    const navbar = document.getElementById('header')
    const utilities = document.getElementById('utilities')
    const footer = document.getElementById('footer')
    navbar.style.display = 'none'
    utilities.style.display = 'none'
    footer.style.display = 'none'

  }, 1000)
  


  return (
    <div>
      <div className='bg-[#00529C] lg:bg-inherit relative h-[800px] lg:h-[950px] w-full'>
      <img className='hidden lg:block absolute w-full h-full -z-10' src='https://static.wixstatic.com/media/0c951b_0ec78eb7774f459f965b9584af94a4a8~mv2.png/v1/fill/w_1306,h_946,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/0c951b_0ec78eb7774f459f965b9584af94a4a8~mv2.png' />
      <div className='container mx-auto' >
      <div className='py-12'><a target='_blank' href='https://grupocomabe.com.br'><img src='https://static.wixstatic.com/media/0c951b_2bcbb988c7cf489ba9487b9f6cfc26d4~mv2.png/v1/fill/w_143,h_25,al_c,q_85,enc_auto/0c951b_2bcbb988c7cf489ba9487b9f6cfc26d4~mv2.png' alt='' /></a></div>
      <div className='flex flex-col-reverse lg:flex-row justify-center gap-12 lg:gap-28 mt-5 lg:mt-48'>
      <div className='lg:w-[35%]'>
        <form className='bg-white flex flex-col px-12 py-16 rounded-xl shadow-xl shadow-gray-500' id='form'>
          <h2 className='text-[#00529C] text-[20px] text-center mb-10'>4 passos para reduzir em <span className='text-[#FE7C1A]'>80%</span> a utilização de <span className='text-[#FE7C1A]'>papéis</span> na sua empresa</h2>
          <div className='flex flex-col gap-3'>
            <input className='h-[55px] border border-[#00529C] px-5 rounded-lg text-[18px] outline-[#FE7C1A]' placeholder='Nome'/>
            <input className='h-[55px] border border-[#00529C] px-5 rounded-lg text-[18px] outline-[#FE7C1A]' placeholder='Email'/>
            <input className='h-[55px] border border-[#00529C] px-5 rounded-lg text-[18px] outline-[#FE7C1A]' placeholder='Telefone'/>
            <input className='h-[55px] border border-[#00529C] px-5 rounded-lg text-[18px] outline-[#FE7C1A]' placeholder='Empresa'/>
            <button className='bg-[#00bb60] hover:bg-[#00529C] duration-500 py-5 rounded-lg text-white font-bold text-[18px]' type='submit'>QUERO BAIXAR AGORA</button>
          </div>
        </form>
      </div>

      <div className='lg:w-[40%]'>
        <h1 className='text-white text-4xl mb-5 text-center lg:text-left'>Chega de <span className='text-[#FE7C1A] font-bold'>rasgar</span> o dinheiro da <span className='text-[#FE7C1A] font-bold'>sua empresa</span> com <span className='text-[#FE7C1A] font-bold'>impressões de documentos</span></h1>
        <p className='text-white text-sm lg:w-[70%] text-center'>Baixe agora o <b>guia descomplicado para digitalização de documentos</b></p>
      </div>
      </div>
      </div>
      </div>
      <div className='py-48 mt-32 lg:mt-0'>
        <div className='container mx-auto flex flex-col items-center'>
        <h2 className='text-center text-[#00529C] text-4xl mb-12'><span className='text-[#FE7C1A] font-bold'>30 mil</span> cópias por mês</h2>
        <p className='text-center text-[#00529C] text-lg lg:w-[70%] mb-5'>Essa é a quantidade de impressões realizada todos os meses em uma empresa de médio porte.</p>
         <p className='text-center text-[#00529C] text-lg lg:w-[70%]'> O custo do papel pode parecer irrelevante, mas quando somado a outros itens como:</p>

         <div className='flex flex-wrap lg:flex-nowrap gap-5 mt-16'>
          <div className='border w-[150px] lg:w-[260px] border-[#FE7C1A] flex flex-col justify-center items-center gap-5 rounded-3xl py-10 px-12'>
            <div><svg className='w-[48px] h-[48px]' fill='#FE7C1A' preserveAspectRatio="none" data-bbox="0 0 569.83 560.063" viewBox="0 0 569.83 560.063" height="560.064" width="569.83" xmlns="http://www.w3.org/2000/svg" data-type="shape"  aria-labelledby="svgcid-9gqhfohy5h6l"><title id="svgcid-9gqhfohy5h6l"></title><g><path d="M49.125 412.636S0 484.847 0 515.796a46.89 46.89 0 0 0 49.125 44.21 46.884 46.884 0 0 0 49.121-44.211c0-30.945-49.121-103.16-49.121-103.16Z"/><path d="M206.315 412.636s-49.121 72.211-49.121 103.16a46.884 46.884 0 0 0 49.121 44.21 46.885 46.885 0 0 0 49.125-44.211c0-30.945-49.125-103.16-49.125-103.16Z"/><path d="M363.515 412.636s-49.125 72.211-49.125 103.16a46.885 46.885 0 0 0 49.125 44.21 46.884 46.884 0 0 0 49.121-44.211c0-30.945-49.121-103.16-49.121-103.16Z"/><path d="M520.705 412.636s-49.121 72.211-49.121 103.16a49.4 49.4 0 0 0 98.246 0c0-30.945-49.125-103.16-49.125-103.16Z"/><path d="M19.653.006h58.945a9.832 9.832 0 0 1 9.824 9.824v109.23a95.645 95.645 0 0 0-34.262 16.18c-3.652 2.406-7.32 4.832-11.168 7.039a37.193 37.193 0 0 1-33.164-.8V9.825A9.832 9.832 0 0 1 19.652 0Zm58.945 363.51H19.653a9.829 9.829 0 0 1-9.824-9.824v-191.2a63.088 63.088 0 0 0 18.746 2.992 48.252 48.252 0 0 0 24.207-6.156c4.191-2.4 8.211-5.043 12.191-7.68a89.927 89.927 0 0 1 23.449-12.422v214.47a9.829 9.829 0 0 1-9.824 9.824Z"/><path d="M176.845.006h58.949a9.837 9.837 0 0 1 9.821 9.824v256.61a95.541 95.541 0 0 0-34.262 16.176c-3.656 2.406-7.32 4.836-11.168 7.043a37.226 37.226 0 0 1-33.168-.8V9.834a9.834 9.834 0 0 1 9.827-9.828Zm58.949 363.51h-58.949a9.832 9.832 0 0 1-9.824-9.824v-43.836a62.982 62.982 0 0 0 18.746 2.992 48.249 48.249 0 0 0 24.207-6.152c4.191-2.406 8.215-5.047 12.2-7.68a90.011 90.011 0 0 1 23.441-12.426v67.1a9.834 9.834 0 0 1-9.824 9.824Z"/><path d="M334.035.006h58.949a9.834 9.834 0 0 1 9.824 9.824v150.03a95.687 95.687 0 0 0-34.27 16.184c-3.656 2.41-7.32 4.836-11.148 7.035a37.189 37.189 0 0 1-33.18-.8V9.833a9.837 9.837 0 0 1 9.824-9.827Zm58.949 363.51h-58.949a9.834 9.834 0 0 1-9.824-9.824v-150.41a63.113 63.113 0 0 0 18.75 2.992 48.224 48.224 0 0 0 24.2-6.152c4.2-2.406 8.207-5.047 12.2-7.676a89.908 89.908 0 0 1 23.449-12.434v173.68a9.832 9.832 0 0 1-9.824 9.824Z"/>
            <path d="M491.235.006h58.945a9.832 9.832 0 0 1 9.824 9.824v32.137a95.688 95.688 0 0 0-34.27 16.184c-3.656 2.41-7.32 4.836-11.148 7.035a37.18 37.18 0 0 1-33.176-.8V9.831a9.832 9.832 0 0 1 9.824-9.825Zm58.945 363.51h-58.945a9.829 9.829 0 0 1-9.824-9.824v-268.3a63.108 63.108 0 0 0 18.746 2.992 48.249 48.249 0 0 0 24.207-6.152c4.191-2.406 8.2-5.047 12.2-7.676a89.9 89.9 0 0 1 23.445-12.434v291.57a9.829 9.829 0 0 1-9.824 9.824Z"/></g></svg>
            </div>
            <h2 className='text-lg font-bold text-[#00529C] text-center'>Tinta da impressora</h2>
          </div>
          <div className='border w-[150px] lg:w-[260px] border-[#FE7C1A] flex flex-col justify-center items-center gap-5 rounded-3xl py-10 px-12'>
            <div><svg className='w-[48px] h-[48px]' preserveAspectRatio="xMidYMid meet" fill='#FE7C1A' data-bbox="0 0 15.27 27" viewBox="0 0 15.27 27" height="27" width="15.27" xmlns="http://www.w3.org/2000/svg" data-type="shape" aria-labelledby="svgcid-r6lgzp83e47p"><title id="svgcid-r6lgzp83e47p"></title>
    <g>
        <path d="M8.22 11.85c-3.4-.885-4.5-1.8-4.5-3.225 0-1.635 1.515-2.775 4.05-2.775 2.67 0 3.66 1.275 3.75 3.15h3.315a5.979 5.979 0 0 0-4.815-5.715V0h-4.5v3.24C2.61 3.87.27 5.76.27 8.655c0 3.465 2.865 5.19 7.05 6.2 3.75.9 4.5 2.22 4.5 3.615 0 1.035-.735 2.685-4.05 2.685-3.09 0-4.305-1.38-4.47-3.15H0c.18 3.285 2.64 5.13 5.52 5.745V27h4.5v-3.225c2.925-.555 5.25-2.25 5.25-5.325 0-4.26-3.65-5.715-7.05-6.6Z"/>
    </g>
</svg>
            </div>
            <h2 className='text-lg font-bold text-[#00529C] text-center'>Valor das máquinas</h2>
          </div>
          <div className='border w-[150px] lg:w-[275px] border-[#FE7C1A] flex flex-col justify-center items-center gap-5 rounded-3xl py-10 px-12'>
            <div><svg className='w-[48px] h-[48px]' fill='#FE7C1A' preserveAspectRatio="xMidYMid meet" data-bbox="0.002 0 516.468 516.575" viewBox="0.002 0 516.468 516.575" height="516.575" width="516.47" xmlns="http://www.w3.org/2000/svg" data-type="shape" aria-labelledby="svgcid-nqw1vg-pnh0re"><title id="svgcid-nqw1vg-pnh0re"></title>
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
            <h2 className='text-lg font-bold text-[#00529C] text-center'>Custo de manutenção</h2>
          </div>
          <div className='border w-[150px] lg:w-[260px] border-[#FE7C1A] flex flex-col justify-center items-center gap-5 rounded-3xl'>
            <div><svg className='w-[48px] h-[48px]' fill='#FE7C1A' preserveAspectRatio="xMidYMid meet" data-bbox="0.002 0 402.503 419.646" viewBox="0.002 0 402.503 419.646" height="419.646" width="402.505" xmlns="http://www.w3.org/2000/svg" data-type="shape" aria-labelledby="svgcid--bel5cc-91ldzr"><title id="svgcid--bel5cc-91ldzr"></title>
    <g>
        <path d="M332.681 280.084a69.781 69.781 0 1 0 69.824 69.738 69.868 69.868 0 0 0-69.824-69.738Zm31.148 67.375-28 10.586a9.86 9.86 0 0 1-3.148.527 8.712 8.712 0 0 1-4.9-1.488 8.958 8.958 0 0 1-3.852-7.262v-49.086a8.75 8.75 0 0 1 17.5 0v36.488l16.188-6.125a8.75 8.75 0 1 1 6.211 16.359Z"/>
        <path d="M232.751 0h-80.5a49.029 49.029 0 0 0-49 49v12.949h17.5V49a31.594 31.594 0 0 1 31.5-31.5h80.5a31.594 31.594 0 0 1 31.5 31.5v12.949h17.5V49a49.029 49.029 0 0 0-49-49Z"/>
        <path d="M161.001 200.194h63v63h-63Z"/>
        <path d="M385.001 90.824v80.5a51.673 51.673 0 0 1-51.625 51.625h-91.875v-40.25h-98v40.25H51.626a51.615 51.615 0 0 1-42.352-22.137c-.7-1.051-1.4-2.1-2.1-3.238a51.341 51.341 0 0 1-7.172-26.25v-80.5a11.409 11.409 0 0 1 11.375-11.375h362.25a11.409 11.409 0 0 1 11.375 11.375Z"/>
        <path d="m374.591 226.804-3.5 44.625a87.4 87.4 0 0 0-125.472 72.277H29.929a11.546 11.546 0 0 1-11.461-11.9l-8.051-105a68.531 68.531 0 0 0 41.211 13.648h91.875v40.25h98v-40.25h91.875a68.533 68.533 0 0 0 41.211-13.648Z"/>
    </g>
</svg>
            </div>
            <h2 className='text-lg font-bold text-[#00529C] text-center w-[100%]'>Horas dos colaboradores envolvidos com impressão</h2>
          </div>
         </div>
        </div>

        <p className='text-center text-[#00529C] text-lg my-16'>Sua empresa pode estar <span className='text-[#FE7C1A] font-bold'>rasgando dinheiro</span> com impressões se não estiver avaliando esses quesitos!</p>
        <div className='flex justify-center'>
        <a href='#form' className='text-white font-bold bg-[#00529C] hover:bg-[#002d55] duration-500 py-6 px-20 text-lg rounded-2xl'>BAIXAR MEU EBOOK</a>
        </div>
      </div>

      <div className='py-40 bg-gray-200'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-center gap-10 items-center'>
          <div className='lg:w-[45%]'><img className='w-full' src='https://static.wixstatic.com/media/0c951b_b053799b6c3b4f838151061609156599~mv2.png/v1/fill/w_499,h_465,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Grupo%2010.png' alt='' /></div>

          <div className='lg:w-[45%]'>
            <h2 className='text-4xl text-[#00529C] mb-20'>O que você vai <span className='text-[#FE7C1A] font-bold'>encontrar</span> neste guia</h2>
            <div className='flex flex-col gap-5'>
            <span className='flex items-center text-lg font-thin gap-3'><svg className='w-[25px] h-[25px] flex-none' preserveAspectRatio="xMidYMid meet" data-bbox="0 0 33 33" viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg" data-type="ugc"><g><path fill="#c9ffd3" d="M33 16.5C33 25.613 25.613 33 16.5 33S0 25.613 0 16.5 7.387 0 16.5 0 33 7.387 33 16.5z"/><path stroke-width="3" stroke-linejoin="round" stroke-linecap="round" stroke="#00a21b" fill="none" d="M25.045 10.725 13.536 22.234l-5.231-5.231"/></g></svg> Os 4 passos necessários para você reduzir em até 80% os seus custos com impressões de documentos da sua empresa</span>
            <span className='flex items-center text-lg font-thin gap-3'><svg className='w-[25px] h-[25px] flex-none' preserveAspectRatio="xMidYMid meet" data-bbox="0 0 33 33" viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg" data-type="ugc"><g><path fill="#c9ffd3" d="M33 16.5C33 25.613 25.613 33 16.5 33S0 25.613 0 16.5 7.387 0 16.5 0 33 7.387 33 16.5z"/><path stroke-width="3" stroke-linejoin="round" stroke-linecap="round" stroke="#00a21b" fill="none" d="M25.045 10.725 13.536 22.234l-5.231-5.231"/></g></svg> O fluxo otimizado completo para digitalização de todos os seus documentos</span>
            <span className='flex items-center text-lg font-thin gap-3'><svg className='w-[25px] h-[25px] flex-none' preserveAspectRatio="xMidYMid meet" data-bbox="0 0 33 33" viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg" data-type="ugc"><g><path fill="#c9ffd3" d="M33 16.5C33 25.613 25.613 33 16.5 33S0 25.613 0 16.5 7.387 0 16.5 0 33 7.387 33 16.5z"/><path stroke-width="3" stroke-linejoin="round" stroke-linecap="round" stroke="#00a21b" fill="none" d="M25.045 10.725 13.536 22.234l-5.231-5.231"/></g></svg>O formato ideal para organização de seu acervo documental</span>
            <span className='flex items-center text-lg font-thin gap-3'><svg className='w-[25px] h-[25px] flex-none' preserveAspectRatio="xMidYMid meet" data-bbox="0 0 33 33" viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg" data-type="ugc"><g><path fill="#c9ffd3" d="M33 16.5C33 25.613 25.613 33 16.5 33S0 25.613 0 16.5 7.387 0 16.5 0 33 7.387 33 16.5z"/><path stroke-width="3" stroke-linejoin="round" stroke-linecap="round" stroke="#00a21b" fill="none" d="M25.045 10.725 13.536 22.234l-5.231-5.231"/></g></svg>Um checklist para você acompanhar todo o passo a passo do seu processo de digitalização</span>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className='py-32'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-center gap-20'>
          <div className='lg:w-[50%] '>
            <h2 className='text-3xl text-[#00529C] font-bold mb-10'>Porque você precisa digitalizar seus documentos com urgência?</h2>
            <h3 className='text-lg font-medium text-[#00529C] mb-4'>Maior produtividade</h3>
            <p className='text-sm font-light border-b border-gray-200 pb-6'>Com apenas alguns cliques você tem acesso a todo o seu acervo de documentos, podendo acessá-los de qualquer lugar.</p>
            <h3 className='text-lg font-medium text-[#00529C] mt-4 mb-4'>Maior qualidade</h3>
            <p className='text-sm font-light border-b border-gray-200 pb-6'>A padronização de formatos dos seus documentos, com processos claros e definidos, traz para sua empresa uma maior qualidade na execução de tarefas simples do seu dia a dia.</p>
            <h3 className='text-lg font-medium text-[#00529C] mt-4 mb-4'>Maior segurança</h3>
            <p className='text-sm font-light border-b border-gray-200 pb-6'>Você quem libera os acessos aos documentos digitalizados e define quem poderá editá-los e acessar seus históricos.</p>
          </div>
          <div>
            <img src='https://static.wixstatic.com/media/0c951b_c371855c783d402eb5260eb29e564f44~mv2.png/v1/fill/w_405,h_636,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Grupo%202073.png' />
          </div>
        </div>
      </div>
      </div>

      <div className='py-32 bg-[#00529C]'>
      <div className='container mx-auto flex flex-col items-center'>
        <div className='flex justify-center'>
      <h2 className='text-2xl lg:text-4xl text-white text-center lg:w-[75%]'>A nossa solução de <span className='text-[#FE7C1A] font-bold'>digitalização</span> pode ser aplicada nos mais diferentes tipos de negócio.</h2>
      </div>
      <div className='flex flex-wrap justify-center gap-5 lg:w-[90%] mt-20'>
      <img src='https://static.wixstatic.com/media/0c951b_7b869c3a9ea245bf8348b10ae9ff7dc4~mv2.png/v1/fill/w_149,h_119,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Grupo%201536.png' />
      <img src='https://static.wixstatic.com/media/0c951b_e8a69fe2d7ce4799abb38fc2d421589d~mv2.png/v1/fill/w_149,h_119,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Grupo%201526.png' />
      <img src='https://static.wixstatic.com/media/0c951b_1e5246168bdd48f69f5bb597592429d4~mv2.png/v1/fill/w_149,h_119,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Grupo%201527.png' />
      <img src='https://static.wixstatic.com/media/0c951b_93c77de359c94b7fa472a6484d0c15f3~mv2.png/v1/fill/w_149,h_119,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Grupo%201528.png' />
      <img src='https://static.wixstatic.com/media/0c951b_fbac372d9d3d4e9a83cfd8c57a67605b~mv2.png/v1/fill/w_149,h_119,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Grupo%201529.png' />
      <img src='https://static.wixstatic.com/media/0c951b_b0ade15a74af4d3596fa952c746d3b0d~mv2.png/v1/fill/w_149,h_119,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Grupo%201530.png' />
      <img src='https://static.wixstatic.com/media/0c951b_46c7584856d04536b7c1619365144855~mv2.png/v1/fill/w_149,h_119,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Grupo%201535.png' />
      <img src='https://static.wixstatic.com/media/0c951b_ff13b961c8f54bc7b670807ea5b3d757~mv2.png/v1/fill/w_149,h_119,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Grupo%201534.png' />
      <img src='https://static.wixstatic.com/media/0c951b_eb2b5f0910974d8a8ebabb45e146825f~mv2.png/v1/fill/w_149,h_119,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Grupo%201533.png' />
      <img src='https://static.wixstatic.com/media/0c951b_378a2e31373b400e98279d83bda60090~mv2.png/v1/fill/w_149,h_119,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Grupo%201532.png' />
      <img src='https://static.wixstatic.com/media/0c951b_c162b61728c4445ba8276f1c1f83ab07~mv2.png/v1/fill/w_149,h_119,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Grupo%201531.png' />

      </div>
      </div>
      </div>

      <div className='py-32'>
      <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row justify-center items-center'>
      <div className='lg:w-[45%]'><img className='w-full' src='https://static.wixstatic.com/media/0c951b_b053799b6c3b4f838151061609156599~mv2.png/v1/fill/w_499,h_465,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Grupo%2010.png' alt='' /></div>
      <div className='lg:w-[55%]'>
      <h2 className='text-3xl lg:text-4xl text-[#00529C] mb-10'>Gostou e quer saber como eliminar até <span className='text-[#FE7C1A] font-bold'>80%</span> dos <span className='text-[#FE7C1A] font-bold'>documentos impressos</span> de seu escritório?</h2>
      <p className='text-sm mb-20'>Faça o download do e-book através do botão abaixo</p>
      <a href='#form' className='text-white font-bold bg-[#00529C] hover:bg-[#002d55] duration-500 py-6 px-20 text-lg rounded-2xl'>BAIXAR MEU EBOOK</a>
      </div>
      </div>
      </div>
      </div>

      <footer className='py-16 bg-[#00529C]'>
      <div className='container mx-auto'>
      <div className='flex items-center justify-between'>
      <div><a target='_blank' href='https://grupocomabe.com.br'><img src='https://static.wixstatic.com/media/0c951b_2bcbb988c7cf489ba9487b9f6cfc26d4~mv2.png/v1/fill/w_143,h_25,al_c,q_85,enc_auto/0c951b_2bcbb988c7cf489ba9487b9f6cfc26d4~mv2.png' alt='' /></a></div>
      <div className='flex flex-col lg:flex-row justify-between items-center w-[50%] lg:w-[25%]'>
      <p className='text-white'>Comabe - 2022</p>
      <p className='text-white'>Desenvolvido por Eagles</p>
      </div>
      </div>
      </div>
      </footer>
    </div>
  )
}

export default Digitalizacao