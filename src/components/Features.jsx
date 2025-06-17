import React from 'react'
import tools from '../assets/tools.png'
import girl from '../assets/girl.jpeg'
const Features = () => {
  return (
    <>

<div className='w-[100%] mt-10 pb-10'>
    <div className='xl:max-w-[1200px] flex mx-auto justify-between'>
    <div
  className="px-6 w-[40%] h-[420px] bg-[#000] bg-cover bg-no-repeat bg-center flex flex-col justify-end pb-6"
  style={{ backgroundImage: `url(${tools})` }}
>
  <h2 className="text-white text-[24px]">PlayStation 5</h2>
  <p className="text-white font-[100] text-[14px]">
    Black and White version of the PS5 <br />
    coming out on sale.
  </p>
  <a href="/cart" className="text-white text-[16px] pt-4 hover:border-b hover:border-white inline w-fit">
  Shop Now
</a>

</div>



        <div className=' w-[50%] h-[200px] bg-[#000] bg-contain bg-no-repeat bg-center' style={{ backgroundImage: `url(${girl})` }}>
            <div className='' >

            </div>
            <div></div>
        </div>
    </div>
</div>
     
    </>
    
  )
}

export default Features