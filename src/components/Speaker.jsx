import React from 'react';
import speakerImg from '../assets/speaker.png'; // Adjust path based on your project structure

const Speaker = () => {
  return (
    <div className="xl:max-w-[1200px] mx-auto bg-black text-white flex justify-center p-4">
      <div className="xl:max-w-5xl lg:px-4 xl:px-0 lg:max-w-[980px] mx-auto w-full flex flex-col lg:flex-row items-center gap-8">

        {/* Image section - appears first on small/medium, second on large screens */}
        <div className="flex justify-center xl:w-[600px] shadow-lg order-1 lg:order-2">
          <img
            src={speakerImg}
            alt="Speaker"
            className="scale-x-[-1] hover:scale-x-[1]"
          />
        </div>

        <div className="flex flex-col gap-6 order-2 lg:order-1">
          <span className="text-green-500 font-semibold">Categories</span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Enhance Your <br className="md:hidden" /> Music Experience
          </h1>

          <div className="flex flex-wrap mt-4 md:justify-between lg:justify-start lg:gap-4">

            {[
              { value: '23', label: 'Hours' },
              { value: '05', label: 'Days' },
              { value: '59', label: 'Minutes' },
              { value: '35', label: 'Seconds' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-full w-20 h-20 flex flex-col justify-center items-center font-semibold shadow-lg"
              >
                <span className="text-xl">{item.value}</span>
                <span className="text-xs">{item.label}</span>
              </div>
            ))}
          </div>

          <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md w-fit shadow-md transition duration-300">
            Buy Now!
          </button>
        </div>

      </div>
    </div>
  );
};

export default Speaker;
