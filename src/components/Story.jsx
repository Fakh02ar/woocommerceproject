import React from 'react';
import Female from '../assets/female.jpeg'
const Story = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between lg:px-0 md:px-20 py-16 bg-white xl:max-w-[1200px] mx-auto">
      
      <div className="md:w-1/2 xl:pr-14 sm:px-5">
        <nav className="text-sm text-gray-400 mb-4">
          Home <span className="mx-2">/</span> <span className="text-black">About</span>
        </nav>
        <h2 className="text-4xl font-semibold mb-6">Our Story</h2>
        <p className="text-gray-700 mb-4">
          Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in
          Bangladesh. Supported by a wide range of tailored marketing, data and service solutions, Exclusive has 10,500
          sellers and 300 brands and serves 3 million customers across the region.
        </p>
        <p className="text-gray-700">
          Exclusive has more than 1 million products to offer, growing at a very fast pace. Exclusive offers a diverse
          assortment in categories ranging from consumer.
        </p>
      </div>

      
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src={Female}
          
          className="max-w-full h-[450px] rounded-l-md xl:ml-12"
        />
      </div>
    </section>
  );
};

export default Story;
