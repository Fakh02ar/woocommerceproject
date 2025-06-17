import React from 'react';
import led from '../assets/led.png'
import game from '../assets/game.png'


const Checkout = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 px-4 py-10 max-w-[1200px] mx-auto">
      {/* Billing Details */}
      <div className="w-full lg:w-2/3">
        <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">
              First Name<span className="text-red-500">*</span>
            </label>
            <input className="w-[80%] p-2 bg-[#F5F5F5] rounded" type="text" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">Company Name</label>
            <input className="w-[80%] p-2 bg-[#F5F5F5] rounded" type="text" />
          </div>
          <div>
            <label className="block mb-1 font-medium">
              Street Address<span className="text-red-500">*</span>
            </label>
            <input className="w-[80%] p-2 bg-[#F5F5F5] rounded" type="text" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">
              Apartment, floor, etc. (optional)
            </label>
            <input className="w-[80%] p-2 bg-[#F5F5F5] rounded" type="text" />
          </div>
          <div>
            <label className="block mb-1 font-medium">
              Town/City<span className="text-red-500">*</span>
            </label>
            <input className="w-[80%] p-2 bg-[#F5F5F5] rounded" type="text" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input className="w-[80%] p-2 bg-[#F5F5F5] rounded" type="tel" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">
              Email Address<span className="text-red-500">*</span>
            </label>
            <input className="w-[80%] p-2  rounded bg-[#F5F5F5]" type="email" required />
          </div>
          <div className="flex items-center mt-2">
            <input type="checkbox" className="mr-2" id="saveInfo" />
            <label htmlFor="saveInfo" className="text-sm">
              Save this information for faster check-out next time
            </label>
          </div>
        </form>
      </div>

      {/* Order Summary */}
      <div className="w-full lg:w-1/3 space-y-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src={led}  className='w-20'/>
              <span>LCD Monitor</span>
            </div>
            <span>$650</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src={game}  className='w-18'/>
              <span>H1 Gamepad</span>
            </div>
            <span>$1100</span>
          </div>
        </div>

        <div className="border-t pt-4 space-y-2">
          <div className="flex justify-between">
            <span className="font-medium">Subtotal:</span>
            <span>$1750</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between font-semibold text-lg">
            <span>Total:</span>
            <span>$1750</span>
          </div>
        </div>

        {/* Payment Options */}
        <div>
          <label className="flex items-center gap-2">
            <input type="radio" name="payment" value="bank" />
            Bank
          </label>
          <label className="flex items-center gap-2 mt-2">
            <input type="radio" name="payment" value="cod" defaultChecked />
            Cash on delivery
          </label>
        </div>

        {/* Coupon Section */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Coupon Code"
            className="w-[50%] p-2 border rounded"
          />
          <button className="bg-[#DB4444] text-white px-4 py-2 rounded">
            Apply Coupon
          </button>
        </div>

        {/* Place Order */}
        <button className="w-[40%] cursor-pointer hover:bg-[#000] bg-[#DB4444] text-white py-3 rounded font-medium">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
