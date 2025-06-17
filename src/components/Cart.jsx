import React, { useState } from 'react';
import led from '../assets/led.png';
import game from '../assets/game.png';

const QuantityInput = ({ value, onChange }) => {
  const increment = () => onChange(value + 1);
  const decrement = () => {
    if (value > 1) onChange(value - 1);
  };

  return (
    <div className="flex items-center justify-between w-20 h-10 border border-[#cfcfcf] rounded px-2">
      <span className="w-6 text-center font-mono text-sm">
        {String(value).padStart(2, '0')}
      </span>
      <div className="flex flex-col items-center justify-center gap-1">
        <button onClick={increment} className="text-gray-700 hover:text-black focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 15 12 9 18 15" />
          </svg>
        </button>
        <button onClick={decrement} className="text-gray-700 hover:text-black focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'LCD Monitor', price: 650, quantity: 1, image: led },
    { id: 2, name: 'HI Gamepad', price: 550, quantity: 2, image: game },
  ]);
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);

  const handleQuantityChange = (id, quantity) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: Number(quantity) } : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleUpdateCart = () => {
    alert('Cart updated!');
  };

  const applyCoupon = () => {
    if (coupon.toLowerCase() === 'save10') {
      setDiscount(0.1); // 10% off
      alert('Coupon applied: 10% discount!');
    } else {
      setDiscount(0);
      alert('Invalid coupon code');
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal - subtotal * discount;

  return (
    <div className="py-6 mt-8 px-4 max-w-[1200px] mx-auto">
      <h2 className="text-lg font-medium text-gray-600 mb-4">
        Home / <span className="font-bold text-black">Cart</span>
      </h2>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500 py-10">
          Your cart is empty. <a href="/home" className="text-[#DB4444] underline">Go Shopping</a>
        </div>
      ) : (
        <>
          <div className="">
            <div className="grid grid-cols-4 font-semibold shadow-sm rounded-lg bg-white p-4">
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Subtotal</span>
            </div>
            {cartItems.map(item => (
              <div key={item.id} className="grid grid-cols-4 items-center shadow-sm rounded-lg bg-white mt-3 p-4">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16">
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="absolute top-0 left-0 bg-red-500 text-white p-1 rounded-full text-[5px] z-10"
                    >
                      ✖
                    </button>
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded" />
                  </div>
                  <span>{item.name}</span>
                </div>

                <span>${item.price}</span>

                <QuantityInput
                  value={item.quantity}
                  onChange={(qty) => handleQuantityChange(item.id, qty)}
                />

                <span>${item.price * item.quantity}</span>
              </div>
            ))}
          </div>

          <div className='flex justify-between mt-6'>
            <a href="/home"><button className="border border-[#cfcfcf] px-6 py-2 rounded w-fit hover:bg-[#DB4444] hover:text-white">Return To Shop</button></a>
            <button onClick={handleUpdateCart} className="border border-[#cfcfcf] hover:bg-[#DB4444] hover:text-white px-6 py-2 rounded w-fit">Update Cart</button>
          </div>

          <div className="flex flex-col md:flex-row justify-between mt-6 gap-4">
            <div className="flex flex-col gap-4 w-full md:w-1/2">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className="border px-4 py-2 w-70"
                />
                <button
                  onClick={applyCoupon}
                  className="bg-[#DB4444] hover:bg-[#000] text-white px-6 py-2 rounded"
                >
                  Apply Coupon
                </button>
              </div>
            </div>

            <div className="border rounded-lg p-6 w-full md:w-1/3 shadow">
              <h3 className="text-lg font-semibold mb-4">Cart Total</h3>
              <div className="flex justify-between mb-2">
                <span>Subtotal:</span><span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping:</span><span>Free</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between mb-2 text-green-600">
                  <span>Discount:</span><span>-{(discount * 100).toFixed(0)}%</span>
                </div>
              )}
              <div className="flex justify-between font-semibold text-lg border-t pt-2">
                <span>Total:</span><span>${total.toFixed(2)}</span>
              </div>
              <a href="/checkout">
                <button className="w-full bg-[#DB4444] text-white mt-4 py-2 rounded hover:bg-[#000] hover:text-white cursor-pointer">
                  Proceed to checkout
                </button>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
