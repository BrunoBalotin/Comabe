import React from 'react'

function Tarja( { Background, Title, Text, ButtonText } ) {
  return (
      <div className='container mx-auto py-20 flex items-center mt-0 lg:mt-32'>
    <div className={`w-full flex flex-col lg:flex-row items-center py-10 lg:py-0 lg:h-[300px] xl:h-[360px] rounded-2xl bg-cover ${Background}`}>
        <div className='flex flex-col lg:flex-row justify-between items-center px-5 lg:px-16 w-full'>
            <div className='w-full lg:w-[50%] xl:w-[45%] 2xl:w-[40%]'>
                <h2 className='text-white text-2xl lg:text-3xl font-medium mb-[30px]'>{Title}</h2>
                <p className='text-white lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-light'>{Text}</p>
            </div>

            <div className='lg:w-[50%] flex lg:justify-end mt-10 lg:mt-0'>
                <button className='text-white lg:text-[15px] xl:text-[16px] 2xl:text-[18px] border px-11 py-3 rounded-full duration-700 hover:bg-[#0F5197] hover:border-[#0F5197]'>{ButtonText}</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Tarja