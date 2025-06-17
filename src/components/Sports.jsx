import React from 'react';
import { Heart, Eye } from "lucide-react";
import car from "../assets/car.png";
import shoes from "../assets/shoes.png";
import box from "../assets/box.png";
import jacket from "../assets/jacket.png";

const products = [
  {
    id: 1,
    title: "HAVIT HV-G92 Gamepad",
    price: 960,
    discount: 40,
    rating: 4.5,
    reviews: 88,
    image: car,
  },
  {
    id: 2,
    title: "AK-900 Wired Keyboard",
    price: 1160,
    discount: 35,
    rating: 4.2,
    reviews: 75,
    image: shoes,
  },
  {
    id: 3,
    title: "IPS LCD Gaming Monitor",
    price: 670,
    discount: 30,
    rating: 5,
    reviews: 99,
    image: box,
  },
  {
    id: 4,
    title: "S-Series Comfort Chair",
    price: 510,
    discount: 25,
    rating: 4.5,
    reviews: 99,
    image: jacket,
  },
];

const Sports = () => {
  return (
    <div className="xl:max-w-[1200px] m-auto px-3 border-b border-gray-200 pb-12">
      <div className="flex items-center gap-2 text-red-500 mb-2">
        {/* Removed any heading or section label */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="relative rounded-lg overflow-hidden"
          >
            {/* Show discount only for the first and third product */}
            {(index === 0 || index === 2) && (
              <div className="absolute top-2 left-2 bg-[#00FF66] text-white text-xs px-2 py-1 rounded">
                -{product.discount}%
              </div>
            )}
            <div className="absolute top-2 right-3">
              <Heart className="w-8 h-8 p-2 text-gray-500 bg-white hover:bg-[#DB4444] rounded-full hover:text-white" />
              <Eye className="w-8 h-8 p-2 text-gray-500 bg-white rounded-full mt-3 hover:bg-[#DB4444] hover:text-white" />
            </div>

            <div className="flex justify-center bg-[#F5F5F5]">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-contain p-4"
              />
            </div>

            <a href="/cart">
              <button className="mt-1 w-full bg-[#000] text-white py-2 rounded hover:bg-[#DB4444] cursor-pointer">
                Add To Cart
              </button>
            </a>

            <div className="pt-2">
              <h3 className="text-sm font-semibold mb-1">{product.title}</h3>
              <div className="flex items-center gap-4 mb-1">
                <span className="text-red-500 font-semibold">${product.price}</span>
                <div className="text-[#FFAD33] text-xl">
                  {"★".repeat(Math.floor(product.rating))}
                  {"☆".repeat(5 - Math.floor(product.rating))} 
                  <span className="text-gray-400 text-[15px] pl-1">({product.reviews})</span>
                </div>
              </div>

              {/* Adding radio buttons below the rating section */}
              <div className="flex gap-2 mt-2">
                <input type="radio" name={`rating-${product.id}`} value="1" className="h-4 w-4" />
                <input type="radio" name={`rating-${product.id}`} value="2" className="h-4 w-4 fill" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button className="bg-[#DB4444] hover:bg-[#000] text-white py-2 px-4 rounded">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Sports;
