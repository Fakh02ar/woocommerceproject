import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Qr from '../assets/Qr.jpeg'
import play from '../assets/play.png'
// import store from '../assets/store.png'
import  Icon  from '../assets/icon-send.png';


const Footer = () => {
  return (
    <footer className=" bg-black text-white px-6 py-10">
      <div className="xl:max-w-[1200px] px-2 mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 pb-5">

        <div>
          <h2 className="text-xl font-semibold mb-4">Exclusive</h2>
          <p className="mb-2">Subscribe</p>
          <p className="mb-4 text-sm">Get 10% off your first order</p>
          <div className="flex items-center border  border-white rounded overflow-hidden">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-transparent px-3 py-2 text-sm flex-1 outline-none"
            />
            <button className="">

               <img src={Icon} className="w-[50px]"/>     
              
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <p className="text-sm">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p className="text-sm mt-4">exclusive@gmail.com</p>
          <p className="text-sm mt-1">+88015-88888-9999</p>
        </div>

     
        <div>
          <h3 className="text-lg font-semibold mb-4">Account</h3>
          <ul className="space-y-2  text-sm">
         <li> <a href="/profile" className="pb-3 hover:text-gray-300" >My Account</a></li>
          <li><a href="/signup" className="mb-1 hover:text-gray-300">Login / Register</a></li>  
           <li><a href="/cart" className="mb-1 hover:text-gray-300">Cart</a></li>
          <li> <a href="/wishlist" className="mb-3 hover:text-gray-300">Wishlist</a> </li>
          <li> <a href="" className="mb-2 hover:text-gray-300">Shop</a></li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/notfoundpage">Privacy Policy</a></li>
            <li><a href="/notfoundpage">Terms Of Use</a></li>
            <li><a href="/notfoundpage">FAQ</a></li>
            <li><a href="/contact">Contac</a>t</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Download App</h3>
          <p className="text-sm mb-4">Save $3 with App New User Only</p>
          <div className="flex items-start space-x-3 mb-4">
  <img src={Qr} className="w-16 h-16 border border-white" />
  <div className="flex flex-col justify-between h-16">
    <img src={play} alt="Google Play" className="w-[104px] h-[100px]" />
   
  </div>
</div>
<div className="flex space-x-4 text-lg">
  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
    <FaFacebookF className="hover:text-blue-400" />
  </a>
  <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
    <FaTwitter className="hover:text-blue-400" />
  </a>
  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="hover:text-purple-400" />
  </a>
  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
    <FaLinkedinIn className="hover:text-blue-400" />
  </a>
</div>
        </div>
      </div>
      <hr className="mx-5 text-gray-400"/>

      <div className="text-center text-sm text-gray-400 mt-10">
        <p>© Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
