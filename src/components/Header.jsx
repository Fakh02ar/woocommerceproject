import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaRegHeart, FaHeart, FaRegUser, FaUser, FaShoppingCart } from 'react-icons/fa';
import { useLocation, Link } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isProfileActive = location.pathname === '/profile';
  const isCartActive = location.pathname === '/cart';
  const isWishlistActive = location.pathname === '/wishlist'; // assuming this path

  return (
    <header className="bg-white py-4 font-poppins border-b border-[#ebebeb]">
      <div className="xl:max-w-[1200px] lg:max-w-[980px] mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-[24px] font-inter font-bold">Exclusive</h1>

        {/* Nav links */}
        <nav className="hidden lg:flex gap-12 text-sm font-medium">
          <a href="/home" className="underline underline-offset-4">Home</a>
          <a href="/contact" className="hover:underline underline-offset-4">Contact</a>
          <a href="/about" className="hover:underline underline-offset-4">About</a>
          <a href="/signup" className="hover:underline underline-offset-4">Sign Up</a>
        </nav>

        {/* Search + Icons */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent outline-none text-sm px-2"
            />
            <FiSearch className="text-gray-600" />
          </div>

          {/* Wishlist */}
          <Link to="/wishlist" className="group">
            {isWishlistActive ? (
              <FaHeart className="w-5 h-5 text-red-500" />
            ) : (
              <FaRegHeart className="w-5 h-5 text-gray-600 group-hover:text-red-500 transition-colors duration-200 cursor-pointer" />
            )}
          </Link>

          {/* Cart (no icon change, just color change) */}
          <Link to="/cart" className="group">
            <FaShoppingCart
              className={`w-5 h-5 cursor-pointer transition-colors duration-200 ${
                isCartActive ? 'text-red-500' : 'text-gray-600 group-hover:text-red-500'
              }`}
            />
          </Link>

          {/* Profile */}
          <Link to="/profile" className="group">
            {isProfileActive ? (
              <FaUser className="w-5 h-5 text-red-500" />
            ) : (
              <FaRegUser className="w-5 h-5 text-gray-600 group-hover:text-red-500 transition-colors duration-200 cursor-pointer" />
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
