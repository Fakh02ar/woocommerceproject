import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { Eye, ShoppingCart } from 'lucide-react';
import laptop from '../assets/laptop.png';
import led from '../assets/led.png';
import game from '../assets/game.png';
import key from '../assets/key.png';

const products = [
  {
    id: 1,
    title: 'ASUS FHD Gaming Laptop',
    image: laptop,
    price: 960,
    originalPrice: 1160,
    badge: '-35%',
  },
  {
    id: 2,
    title: 'IPS LCD Gaming Monitor',
    image: led,
    price: 1160,
  },
  {
    id: 3,
    title: 'HAVIT HV-G92 Gamepad',
    image: game,
    price: 560,
    badge: 'NEW',
  },
  {
    id: 4,
    title: 'AK-900 Wired Keyboard',
    image: key,
    price: 200,
  },
];

const Foryou = () => {
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <section className="px-6 py-10">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-6 bg-red-500 rounded-sm" />
          <h2 className="text-xl font-semibold">Just For You</h2>
        </div>
        <button className="border border-gray-300 px-4 py-1 rounded hover:bg-gray-100">
          See All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="transition">
            <div className="relative p-4 bg-[#F5F5F5]">
              {product.badge && (
                <span className={`absolute top-2 left-2 px-2 py-0.5 text-xs rounded text-white ${
                  product.badge === 'NEW' ? 'bg-green-500' : 'bg-red-500'
                }`}>
                  {product.badge}
                </span>
              )}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-contain"
              />
              <button className="absolute top-2 right-2 p-1 bg-white rounded-full shadow">
                <Eye size={18} />
              </button>
            </div>

            <button
              onClick={() => handleAdd(product)}
              className="w-full bg-black hover:bg-[#DB4444] text-white text-sm px-4 py-2 flex items-center justify-center gap-2 cursor-pointer"
            >
              <ShoppingCart className="w-4 h-4" /> Add To Cart
            </button>

            <div className="p-4">
              <h3 className="text-sm font-medium">{product.title}</h3>
              <div className="text-red-500 font-semibold">
                ${product.price}{' '}
                {product.originalPrice && (
                  <span className="text-gray-400 line-through ml-2 text-sm">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
              <div className="flex items-center text-yellow-400 text-sm mt-1">
                {'★'.repeat(5)} <span className="text-gray-500 ml-1">(65)</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Foryou;
