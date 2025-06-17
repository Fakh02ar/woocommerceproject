import React from 'react';

const Navbar = () => {
  return (
    <>
    <div className='bg-black'>
      <div className="xl:max-w-[1200px] lg:max-w-[980px] m-auto  text-white text-sm py-2 px-4 flex justify-between items-center relative">
        <div className="w-full lg:text-center">
        <span className="hidden md:inline text-sm font-poppins">
          Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!
        </span>

          <a href="/cart" className="font-semibold hover:underline pl-1">
            ShopNow
          </a>
        </div>
        <div className="absolute right-4">
          <select className="bg-black text-white text-sm focus:outline-none">
            <option>English</option>
            <option>Español</option>
            <option>Français</option>
          </select>
        </div>
      </div>
      </div>
    </>
  );
};

export default Navbar;
