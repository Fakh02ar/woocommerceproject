import React, { useState } from 'react';
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaArrowLeft,
  FaArrowRight,
} from 'react-icons/fa';

import man from '../assets/man.png';
import ledy from '../assets/ledy.png';
import big from '../assets/big.png';

const team = [
  {
    name: 'Tom Cruise',
    role: 'Founder & Chairman',
    image: man,
    socials: [<FaTwitter />, <FaInstagram />, <FaLinkedin />],
  },
  {
    name: 'Emma Watson',
    role: 'Managing Director',
    image: ledy,
    socials: [<FaTwitter />, <FaInstagram />, <FaLinkedin />],
  },
  {
    name: 'Will Smith',
    role: 'Product Designer',
    image: big,
    socials: [<FaTwitter />, <FaInstagram />, <FaLinkedin />],
  },
  {
    name: 'Robert Downey Jr.',
    role: 'Technical Advisor',
    image: man,
    socials: [<FaTwitter />, <FaInstagram />, <FaLinkedin />],
  },
  {
    name: 'Scarlett Johansson',
    role: 'Creative Head',
    image: ledy,
    socials: [<FaTwitter />, <FaInstagram />, <FaLinkedin />],
  },
];

const Management = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 3;

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex < team.length - cardsPerView) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const getVisibleTeam = () => {
    return team.slice(currentIndex, currentIndex + cardsPerView);
  };

  return (
    <section className="py-12 bg-white max-w-[1200px] mx-auto">
      <div className="max-w-[1200px] mx-auto px-4 relative">
        <h2 className="text-3xl font-semibold text-center mb-12">Management Duplicate</h2>

        {/* Navigation Buttons */}
        <div className="absolute top-[50%] left-0 z-10 transform -translate-y-1/2">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="text-2xl text-gray-700 hover:text-black disabled:opacity-30 -rotate-12"
          >
            <FaArrowLeft />
          </button>
        </div>
        <div className="absolute top-[50%] right-0 z-10 transform -translate-y-1/2">
          <button
            onClick={nextSlide}
            disabled={currentIndex >= team.length - cardsPerView}
            className="text-2xl text-gray-700 hover:text-black disabled:opacity-30 rotate-12"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ease-in-out">
          {getVisibleTeam().map((member, index) => (
            <div key={index} className="flex flex-col items-center text-left">
              {/* Image Section */}
              <div className="bg-gray-100 pt-6 px-10 rounded-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-[236px] h-[391px] object-cover rounded-md mx-auto"
                />
              </div>
              {/* Text Section */}
              <div className="w-full px-4 pl-8 mt-4">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{member.role}</p>
                <div className="flex gap-4 text-gray-700 text-lg">
                  {member.socials.map((Icon, idx) => (
                    <span key={idx} className="hover:text-black cursor-pointer">
                      {Icon}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Management;
