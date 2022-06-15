import React from 'react'

function Tarja( { Background, Title, Text, ButtonText } ) {
  return (
      <div className='container mx-auto h-[800px] flex items-center'>
    <div className={`w-full flex items-center lg:h-[300px] xl:h-[360px] rounded-2xl bg-cover ${Background}`}>
        <div className='flex justify-between items-center px-16 w-full'>
            <div className='lg:w-[50%] xl:w-[45%] 2xl:w-[40%]'>
                <h2 className='text-white lg:text-[32px] xl:text-[38px] 2xl:text-[42px] font-medium mb-[30px]'>{Title}</h2>
                <p className='text-white lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-light'>{Text}</p>
            </div>

            <div className='w-[50%] flex justify-end'>
                <button className='text-white lg:text-[15px] xl:text-[16px] 2xl:text-[18px] border px-11 py-3 rounded-full duration-700 hover:bg-comabeblue hover:border-comabeblue'>{ButtonText}</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Tarja