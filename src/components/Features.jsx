import React from 'react'
import tools from '../assets/tools.png'

const Features = () => {
  return (
    <>

<div className='w-[100%] mt-10 pb-10'>
    <div className='flex justify-between'>
    <div
  className="pl-10 w-[100%] h-[450px] bg-[#000] bg-contain bg-no-repeat bg-center flex flex-col justify-center pb-6"
  style={{ backgroundImage: `url(${tools})` }}
>
  <h2 className="text-white text-[52px]">PlayStation 5</h2>
  <p className="text-white font-[100] text-[18px]">
    Black and White version of the PS5 <br />
    coming out on sale.
  </p>
  <a href="/cart" className="text-white text-[16px] pt-4 hover:border-b hover:border-white inline w-fit">
  Shop Now
</a>

</div>


    </div>
</div>
     
    </>
    
  )
}

export default Features