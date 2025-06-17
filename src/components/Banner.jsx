import React from 'react';
import iphoneImg from '../assets/iphone.jpeg';
import appleIcon from '../assets/apple.png';

const categories = [
  "Woman's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

const Banner = () => {
  return (
    <>
      <div className="xl:max-w-[1200px] flex lg:max-w-[980px] m-auto">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-[#ebebeb] p-4 hidden lg:block space-y-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex justify-between items-center text-[16px] text-[#000000] cursor-pointer"
            >
              <span>{category}</span>
              {index < 2 && <span className="text-2xl">&#8250;</span>}
            </div>
          ))}
        </aside>

        {/* Banner */}
        <div className="w-[892px] h-[344px] mt-[30px] xl:ml-[40px] bg-black text-white items-center lg:mx-5">
          <div className="lg:flex justify-between px-12 items-center">
            <div className="lg:pl-3 pt-10 sm:pt-2">
              <div className="flex items-center gap-2 mb-3 sm:pt-5">
                <img src={appleIcon} alt="Apple" className="w-[40px]" />
                <p className="text-sm text-gray-300">iPhone 14 Series</p>
              </div>

              <h1 className="text-[30px] lg:text-[35px] font-bold mb-2 leading-[64px] sm:text-[48px]">
                Up to 10% <br className="hidden lg:block" />
                off Voucher
              </h1>

              <button className="mt-4 cursor-pointer text-white hover:border-b hover:border-[#ffffff] transition">
                <a href="/wishlist">Shop Now →</a>
              </button>
            </div>

            <div className="mt-4 hidden lg:block">
              <img
                src={iphoneImg}
                alt="iPhone 14"
                className="mx-auto xl:w-[496px] xl:h-[300px] lg:w-[400px] hidden md:flex"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
