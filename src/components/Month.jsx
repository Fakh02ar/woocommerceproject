import React from 'react';
import { Heart, Eye } from 'lucide-react';
import hood from '../assets/hood.png';
import bag from '../assets/bag.png';
import sound from '../assets/sound.png';
import table from '../assets/table.png';





const products = [
  {
    title: "The north coat",
    oldPrice: "$360",
    price: "$260",
    rating: 5,
    image: hood,
  },
  {
    title: "Gucci duffle bag",
    oldPrice: "$1160",
    price: "$960",
    rating: 4.5,
    image:bag,
  },
  {
    title: "RGB liquid CPU Cooler",
    oldPrice: "$170",
    price: "$160",
    rating: 4,
    image: sound,
  },
  {
    title: "Small BookSelf",
    oldPrice: "",
    price: "$360",
    rating: 4.5,
    image:table ,
  },
];

const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  return (
    <div className="flex text-yellow-500">
      {[...Array(fullStars)].map((_, i) => (
        <span key={i}>★</span>
      ))}
      {halfStar && <span>☆</span>}
    </div>
  );
};

const Month = () => {
  return (
    <section className="py-12">
      <div className="xl:max-w-[1200px] lg:max-w-[980px] md:max-w-[750px] mx-auto">
        <div className="mb-6 flex px-4 justify-between items-center">
          <div>
          <div className="flex items-center gap-2 text-red-500 mb-2">
        <div className="w-3 h-6 bg-[#DB4444] rounded-sm"></div>
        <span className="font-semibold text-[#DB4444]">This Month</span>
      </div>
            <h2 className="text-3xl font-bold pt-2">Best Selling Products</h2>
          </div>
          <button className="bg-[#DB4444] hover:bg-[#000] text-white px-4 py-2 rounded">
            View All
          </button>
        </div>
        <div className="grid px-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {products.map((product, index) => (
            <div key={index} className="relative  overflow-hidden">
              <div className="">
                <img
                  src={product.image}
                  
                  className="w-full h-48 object-contain py-4 mb-4 bg-[#F5F5F5]"
                />
                <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
                <div className='flex items-center gap-3'>
                <div className="text-red-600 font-bold text-lg">{product.price}</div>
                {product.oldPrice && (
                  <div className="text-gray-500 line-through text-sm">
                    {product.oldPrice}
                  </div>
                )}
                </div>
                
                <div className="mt-2 flex items-center space-x-2">
                  <RatingStars rating={product.rating} />
                  <span className="text-sm text-gray-600">(65)</span>
                </div>
              </div>
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button className="bg-white hover:bg-[#DB4444]  rounded-full p-1 shadow">
                  <Heart className="w-4 h-4 text-gray-600 hover:text-white" />
                </button>
                <button className="bg-white  hover:bg-[#DB4444] rounded-full p-1 shadow">
                  <Eye className="w-4 h-4  text-gray-600 hover:text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Month;
