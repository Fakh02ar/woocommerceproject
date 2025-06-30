import React, { useState } from 'react';
import { ShoppingCart, Trash2 } from "lucide-react";
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { useNavigate } from 'react-router-dom';

import bag from '../assets/bag.png';
import sound from '../assets/sound.png';
import box from '../assets/box.png';
import jacket from '../assets/jacket.png';

const initialWishlistItems = [
  {
    id: 1,
    title: "Gucci duffle bag",
    price: 960,
    originalPrice: 1160,
    image: bag,
    discount: "-35%",
  },
  {
    id: 2,
    title: "RGB liquid CPU Cooler",
    price: 1960,
    image: sound,
  },
  {
    id: 3,
    title: "GP11 Shooter USB Gamepad",
    price: 550,
    image: box,
  },
  {
    id: 4,
    title: "Quilted Satin Jacket",
    price: 750,
    image: jacket,
  },
];

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState(initialWishlistItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ❌ Remove item from wishlist
  const removeItemFromWishlist = (id) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  // ✅ Add single item to cart
  const handleAddToCart = (item) => {
    dispatch(addToCart({
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      quantity: 1,
      originalPrice: item.originalPrice || null,
      discount: item.discount || null,
    }));
    removeItemFromWishlist(item.id);
    navigate("/cart");
  };

  // ✅ Move all items to cart
  const moveAllToBag = () => {
    wishlistItems.forEach((item) => {
      dispatch(addToCart({
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.image,
        quantity: 1,
        originalPrice: item.originalPrice || null,
        discount: item.discount || null,
      }));
    });
    setWishlistItems([]);
    navigate("/cart");
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Wishlist ({wishlistItems.length})</h2>
        {wishlistItems.length > 0 && (
          <button
            onClick={moveAllToBag}
            className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-[#DB4444] hover:text-white transition"
          >
            Move All To Bag
          </button>
        )}
      </div>

      {/* Wishlist Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {wishlistItems.map((item) => (
          <div key={item.id} className="rounded-2xl overflow-hidden">
            <div className="relative p-4 flex justify-center items-center h-48 bg-[#F5F5F5]">
              {item.discount && (
                <span className="absolute top-2 left-2 bg-[#DB4444] text-white text-xs px-2 py-1 rounded">
                  {item.discount}
                </span>
              )}
              <img src={item.image} alt={item.title} className="h-40 object-contain" />
              <Trash2
                onClick={() => removeItemFromWishlist(item.id)}
                className="absolute top-2 bg-white right-2 w-4 h-4 text-[#000] hover:text-red-500 cursor-pointer"
              />
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={() => handleAddToCart(item)}
              className="w-full bg-black cursor-pointer hover:bg-[#DB4444] text-white text-sm px-4 py-2 flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" />
              Add To Cart
            </button>

            <div className="p-4">
              <p className="text-sm font-medium">{item.title}</p>
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
