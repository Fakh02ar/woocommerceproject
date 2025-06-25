import React, { useState, useEffect } from "react";
import { Heart, Eye } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";

import game from "../assets/game.png";
import key from "../assets/key.png";
import led from "../assets/led.png";
import Chair from "../assets/chair.png";

const products = [
  {
    id: 1,
    title: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    discount: 40,
    rating: 4.5,
    reviews: 88,
    image: game,
  },
  {
    id: 2,
    title: "AK-900 Wired Keyboard",
    price: 960,
    originalPrice: 1160,
    discount: 35,
    rating: 4.2,
    reviews: 75,
    image: key,
  },
  {
    id: 3,
    title: "IPS LCD Gaming Monitor",
    price: 370,
    originalPrice: 400,
    discount: 30,
    rating: 5,
    reviews: 99,
    image: led,
  },
  {
    id: 4,
    title: "S-Series Comfort Chair",
    price: 375,
    originalPrice: 400,
    discount: 25,
    rating: 4.5,
    reviews: 99,
    image: Chair,
  },
];

const Today = () => {
  const countdownTarget = new Date().getTime() + 3 * 24 * 60 * 60 * 1000;
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownTarget - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [countdownTarget]);

  return (
    <div className="py-6 xl:max-w-[1200px] lg:max-w-[980px] md:max-w-[750px] m-auto px-3 mt-20 border-b border-gray-200 pb-12">
      <div className="flex items-center gap-2 text-red-500 mb-2">
        <div className="w-3 h-6 bg-[#DB4444] rounded-sm"></div>
        <span className="font-semibold text-[#DB4444]">Today</span>
      </div>

      <div className="flex gap-10 items-center mb-4">
        <h2 className="text-2xl font-bold">Flash Sales</h2>
        <div className="flex gap-2 items-center text-sm text-black">
          <div className="text-black text-xl font-bold">Days</div>
          <div className="text-xl font-bold">{String(timeLeft.days).padStart(2, "0")}</div>
          <div className="text-xl font-bold"><span className="text-red-500">:</span></div>
          <div className="text-xl font-bold">{String(timeLeft.hours).padStart(2, "0")}</div>
          <div className="text-xl font-bold"><span className="text-red-500">:</span></div>
          <div className="text-xl font-bold">{String(timeLeft.minutes).padStart(2, "0")}</div>
          <div className="text-xl font-bold"><span className="text-red-500">:</span></div>
          <div className="text-xl font-bold">{String(timeLeft.seconds).padStart(2, "0")}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="relative rounded-lg overflow-hidden">
            <div className="absolute top-2 left-2 bg-[#DB4444] text-white text-xs px-2 py-1 rounded">
              -{product.discount}%
            </div>
            <div className="absolute top-2 right-3">
              <Heart className="w-8 h-8 p-2 text-gray-500 bg-white hover:bg-[#DB4444] rounded-full hover:text-white" />
              <Eye className="w-8 h-8 p-2 text-gray-500 bg-white rounded-full mt-3 hover:bg-[#DB4444] hover:text-white" />
            </div>

            <div className="flex justify-center bg-[#F5F5F5] transform transition-transform duration-500 hover:scale-110 cursor-pointer">
              <a href="/productdetail">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-contain p-4"
                />
              </a>
            </div>

            {/* ✅ Add to Cart Button */}
            <button
              onClick={() => {
                dispatch(addToCart({ ...product, quantity: 1 }));
                navigate("/cart");
              }}
              className="mt-1 w-full bg-[#000] text-white py-2 rounded hover:bg-[#DB4444] cursor-pointer"
            >
              Add To Cart
            </button>

            <div className="pt-2">
              <h3 className="text-sm font-semibold mb-1">{product.title}</h3>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-red-500 font-semibold">${product.price}</span>
                <span className="line-through text-gray-400 text-sm">${product.originalPrice}</span>
              </div>
              <div className="text-[#FFAD33] text-xl">
                {"★".repeat(Math.floor(product.rating))}
                {"☆".repeat(5 - Math.floor(product.rating))} ({product.reviews})
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <a href="/wishlist">
          <button className="bg-[#DB4444] cursor-pointer hover:bg-[#000] text-white py-2 px-4 rounded">
            View All Products
          </button>
        </a>
      </div>
    </div>
  );
};

export default Today;
