import React, { useState } from 'react';
import { Heart, Plus, Minus, Star } from 'lucide-react';
import red from '../assets/game.png';  
import box1 from '../assets/box1.png';    
import Navbar from './Navbar';
import Footer from './Footer';

const Productdatail = () => {
  const [quantity, setQuantity] = useState(2);
  const [selectedColor, setSelectedColor] = useState('red');
  const [selectedSize, setSelectedSize] = useState('M');


  const getMainImage = () => {
    switch (selectedColor) {
      case 'red':
        return red;
      case 'blue':
        return box1;
      default:
        return box1;
    }
  };

  return (
    <>
    <Navbar />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8 max-w-[1200px] mx-auto">
      {/* Left - Main Image */}
      <div className="flex justify-center">
        <img
          src={getMainImage()}
          alt="Main product"
          className="rounded-xl w-100 bg-[#F5F5F5] px-4 object-contain"
        />
      </div>

      {/* Right - Details */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Havic HV G-92 Gamepad</h2>
        <div className="flex items-center gap-2">
          <div className="flex text-yellow-400">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400" />
            ))}
            <Star className="w-5 h-5 text-gray-300" />
          </div>
          <span className="text-sm text-gray-600">(150 Reviews)</span>
          <span className="text-sm text-green-600 ml-4">In Stock</span>
        </div>
        <p className="text-3xl font-bold">$120.00</p>
        <p className="text-gray-700">
          PlayStation 5 Controller Skin High quality vinyl with air <br />
           channel adhesive for easy bubble free install & mess <br />
           free removal. Pressure sensitive.
        </p>

        {/* Colours */}
        <div className="flex items-center gap-4 mt-4">
          <span className="font-medium">Colours:</span>
          <button
            onClick={() => setSelectedColor('red')}
            className={`w-5 h-5 rounded-full bg-[#DB4444] border-2 ${selectedColor === 'red' ? 'border-black' : 'border-gray-300'}`}
          />
          <button
            onClick={() => setSelectedColor('blue')}
            className={`w-5 h-5 rounded-full bg-blue-500 border-2 ${selectedColor === 'blue' ? 'border-black' : 'border-gray-300'}`}
          />
        </div>

        {/* Size */}
        <div className="flex items-center gap-2">
          <span className="font-medium">Size:</span>
          {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-3 py-1 border cursor-pointer rounded ${selectedSize === size ? 'bg-[#DB4444] text-white border-red-500' : 'border-gray-300'}`}>
              {size}
            </button>
          ))}
        </div>

        {/* Quantity & Buy */}
        <div className="flex items-center gap-4 mt-4">
          <div className="flex items-center border">
            <button 
              onClick={() => setQuantity((q) => Math.max(1, q - 1))} 
              className="h-8 w-8 flex items-center justify-center bg-blue-500 text-white cursor-pointer"
            >
              <Minus size={16} />
            </button>
            <span className="px-4">{quantity}</span>
            <button 
              onClick={() => setQuantity((q) => q + 1)} 
              className="h-8 w-8 flex items-center justify-center bg-[#DB4444] text-white cursor-pointer"
            >
              <Plus size={16} />
            </button>
          </div>
          <button className="bg-[#DB4444] cursor-pointer text-white px-10 py-2 rounded shadow hover:bg-black">
            Buy Now
          </button>
          <button className="p-2 border rounded hover:bg-gray-100">
            <Heart size={20} />
          </button>
        </div>

        {/* Delivery Info */}
        <div className="border w-100 rounded p-4 mt-4 space-y-2 text-sm text-gray-600">
          <p className="items-center gap-2 border-b pb-5">
            🚚<span className='text-center'>Free Delivery</span> <br />
            <a href="#" className="text-blue-600 underline ml-2 mt-4">
              Enter your postal code for Delivery Availability
            </a>
          </p>
          <p className="flex items-center gap-2">
            🔁 <span>Return Delivery</span>
            <span className="ml-2">
              Free 30 Days Delivery Returns. <a href="#" className="underline text-blue-600">Details</a>
            </span>
          </p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Productdatail;
