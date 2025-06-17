import React, { useState } from 'react';
import {
  Phone,
  Monitor,
  Watch,
  Camera as CameraIcon,
  Headphones,
  Gamepad2,
} from 'lucide-react';

const categories = [
  { name: 'Phones', icon: Phone },
  { name: 'Computers', icon: Monitor },
  { name: 'SmartWatch', icon: Watch },
  { name: 'Camera', icon: CameraIcon },
  { name: 'HeadPhones', icon: Headphones },
  { name: 'Gaming', icon: Gamepad2 },
];

const Catagories = () => {
  const [selected, setSelected] = useState('Camera');

  return (
    <div className="py-6 xl:max-w-[1200px] px-2 lg:max-w-[980px] md:max-w-[750px] mx-auto border-b border-gray-200 pb-12 pt-14">
      <div className="flex items-center gap-2 text-red-500 mb-2">
        <div className="w-3 h-6 bg-[#DB4444] rounded-sm"></div>
        <span className="font-semibold text-[#DB4444]">Categories</span>
      </div>
      <h2 className="text-[36px] font-bold mb-6 mt-3">Browse By Category</h2>

      <div className="flex flex-wrap gap-6 justify-between px-2 mt-14">
        {categories.map(({ name, icon: Icon }) => (
          <div
            key={name}
            onClick={() => setSelected(name)}
            className={`w-42 h-32 flex flex-col items-center justify-center border border-gray-300  cursor-pointer transition-all ${
              selected === name
                ? 'hover:bg-[#DB4444] hover:text-white'
                : 'hover:bg-[#DB4444] hover:text-white'
            }`}
          >
            <Icon size={32} />
            <p className="mt-2 text-sm font-medium">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catagories;
