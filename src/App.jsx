import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Banner from './components/Banner';
import Today from './components/Today';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Catagories from './components/Catagories';
import Month from './components/Month';
import Speaker from './components/Speaker';
import Cart from './components/Cart';
import Products from './components/Products';
import Sports from './components/Sports';
import Features from './components/Features';
import { Keyboard as KeyboardIcon, LogInIcon } from 'lucide-react';
import Login from './components/Login';
import Story from './components/Story';
import Selling from './components/Selling';
import Management from './components/Management';
import Service from './components/Service';
import Footer from './components/Footer';
import Wishlist from './components/Wishlist';
import Foryou from './components/Foryou';
import Profile from './components/Profile';
import Checkout from './components/Checkout';
import Productdatail from './components/Productdatail';
import NotFoundPage from './components/NotFoundPage';
import Keyboard from './components/Keyboard';
import ProductForm from './components/ProductForm'; // ✅ Added ProductForm

function App() {
  return (
    <div className="opacity-0 animate-fadeIn">
      <Navbar />
      <Header />
      <Routes>
        <Route path="/about" element={<><Story /><Selling /><Management /><Service /></>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/productdetail" element={<Productdatail />} />
        <Route path="/keyboard" element={<Keyboard />} />
        <Route path="/notfoundpage" element={<NotFoundPage />} />
        <Route path="/wishlist" element={<><Wishlist /><Foryou /></>} />

        {/* ✅ New Route for Add Product Page */}
        <Route path="/add-product" element={<ProductForm />} />

        <Route
          path="/"
          element={
            <>
              <Banner />
              <Today />
              <Catagories />
              <Month />
              <Speaker />
              <Products />
              <Sports />
              <Features />
              <Service />
            </>
          }
        />

        <Route
          path="/home"
          element={
            <>
              <Banner />
              <Today />
              <Catagories />
              <Month />
              <Speaker />
              <Products />
              <Sports />
              <Features />
              <Service />
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App; 