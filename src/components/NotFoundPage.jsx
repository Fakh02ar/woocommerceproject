import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="py-14 max-w-[1200px] mx-auto  bg-white  px-4">
      <div className="text-sm text-gray-500 mb-4">
        <a href="/home"><span className="mr-1 hover:text-red-400">Home</span></a> / <span className="ml-1">404 Error</span>
      </div>

      <h1 className="text-[110px] font-[500] pt-10 text-black text-center mb-4">404 Not Found</h1>
      <p className="text-gray-600 mb-8 text-center">
        Your visited page not found. You may go home page.
      </p>
     <div className='text-center'>
     <Link
        to="/home"
        className="bg-[#DB4444] hover:bg-[#000] text-white py-2 px-6 rounded transition duration-300"
      >
        Back to home page
      </Link>
     </div>
     
    </div>
  );
};

export default NotFoundPage;
