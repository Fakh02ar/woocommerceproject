import React, { useState } from 'react';
import { ShoppingCart, Trash2 } from "lucide-react";
import bag from '../assets/bag.png';
import sound from '../assets/sound.png';
import box from '../assets/box.png';
import jacket from '../assets/jacket.png'; // Make sure this file exists in the 'assets' folder

// Initial wishlist data
const initialWishlistItems = [
  {
    id: 1,
    name: "Gucci duffle bag",
    price: 960,
    originalPrice: 1160,
    image: bag,
    discount: "-35%",
  },
  {
    id: 2,
    name: "RGB liquid CPU Cooler",
    price: 1960,
    image: sound,
  },
  {
    id: 3,
    name: "GP11 Shooter USB Gamepad",
    price: 550,
    image: box,
  },
  {
    id: 4,
    name: "Quilted Satin Jacket",
    price: 750,
    image: jacket,
  },
];

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState(initialWishlistItems);
  const [Cart, setCart] = useState([]); 

  
  const removeItemFromWishlist = (id) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  
  const addItemToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

 
  const moveAllToBag = () => {
    setCart((prevCart) => [...prevCart, ...wishlistItems]);
    setWishlistItems([]); 
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Wishlist ({wishlistItems.length})</h2>
        <button
          onClick={moveAllToBag}
          className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-[#DB4444] hover:text-white transition"
        >
          Move All To Bag
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {wishlistItems.map((item) => (
          <div key={item.id} className="rounded-2xl overflow-hidden">
            <div className="relative bg-[#F5F5F5] p-4 flex justify-center items-center h-48">
              {item.discount && (
                <span className="absolute top-2 left-2 bg-[#DB4444] text-white text-xs px-2 py-1 rounded">
                  {item.discount}
                </span>
              )}
              <img src={item.image} alt={item.name} className="h-40 object-contain" />
              <Trash2
                onClick={() => removeItemFromWishlist(item.id)}
                className="absolute top-2 bg-white right-2 w-4 h-4 text-[#000] hover:text-red-500 cursor-pointer"
              />
            </div>
            <div
              onClick={() => addItemToCart(item)}
              className="bg-black hover:bg-[#DB4444] text-white text-sm px-4 py-2 flex items-center justify-center gap-2 cursor-pointer"
            >
              <ShoppingCart className="w-4 h-4" /><a href="/cart">Add To Cart</a> 
            </div>
            <div className="p-4">
              <p className="text-sm font-medium">{item.name}</p>
              <div className="text-red-600 font-semibold">
                ${item.price.toLocaleString()}
                {item.originalPrice && (
                  <span className="text-gray-400 line-through ml-2">
                    ${item.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
