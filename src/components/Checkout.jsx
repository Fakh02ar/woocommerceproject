import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../features/cartSlice'; // Make sure path is correct

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const [discount, setDiscount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('cod');

  useEffect(() => {
    console.log('🛒 Checkout Page - cartItems from Redux:', cartItems);
  }, [cartItems]);

  const getSubtotal = (item) => {
    const quantity = item.quantity || 1;
    return Number(item.price) * quantity;
  };

  const subtotal = Array.isArray(cartItems)
    ? cartItems.reduce((acc, item) => acc + getSubtotal(item), 0)
    : 0;

  const total = subtotal - discount;

  const applyCoupon = () => {
    if (coupon.trim().toLowerCase() === 'save10') {
      setDiscount(subtotal * 0.1);
      alert('✅ Coupon applied!');
    } else {
      alert('❌ Invalid coupon');
      setDiscount(0);
    }
  };

  const handlePlaceOrder = () => {
    if (!cartItems || cartItems.length === 0) {
      alert('🛒 Your cart is empty!');
      return;
    }

    if (paymentMethod === 'online') {
      alert('💳 Online payment processed! (Demo)');
    } else {
      alert('✅ Order placed with Cash on Delivery!');
    }

    dispatch(clearCart());
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10 px-4 py-10 max-w-[1200px] mx-auto">
      {/* Billing Details */}
      <div className="w-full lg:w-2/3">
        <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>
        <form className="space-y-4">
          {[
            { label: 'First Name', required: true },
            { label: 'Company Name' },
            { label: 'Street Address', required: true },
            { label: 'Apartment, floor, etc. (optional)' },
            { label: 'Town/City', required: true },
            { label: 'Phone Number', required: true, type: 'tel' },
            { label: 'Email Address', required: true, type: 'email' },
          ].map((field, idx) => (
            <div key={idx}>
              <label className="block mb-1 font-medium">
                {field.label}
                {field.required && <span className="text-red-500">*</span>}
              </label>
              <input
                type={field.type || 'text'}
                required={field.required}
                className="w-[80%] p-2 bg-[#F5F5F5] rounded"
              />
            </div>
          ))}
          <div className="flex items-center mt-2">
            <input type="checkbox" id="save" className="mr-2" />
            <label htmlFor="save" className="text-sm">
              Save this info for next time
            </label>
          </div>
        </form>
      </div>

      {/* Order Summary */}
      <div className="w-full lg:w-1/3 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">Order Summary</h2>

        {/* Cart Items */}
        <div className="space-y-4">
          {cartItems?.length > 0 ? (
            cartItems.map((item, i) => (
              <div key={i} className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-contain border rounded"
                  />
                  <div>
                    <p className="font-medium">{item.title}</p>
                    {item.originalPrice && (
                      <p className="text-sm line-through text-gray-400">
                        ${item.originalPrice}
                      </p>
                    )}
                    <p className="text-sm text-gray-500">Qty: {item.quantity || 1}</p>
                  </div>
                </div>
                <span className="font-semibold">${getSubtotal(item).toFixed(2)}</span>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500">Your cart is empty.</p>
          )}
        </div>

        {/* Pricing */}
        {cartItems?.length > 0 && (
          <>
            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Discount:</span>
                  <span>- ${discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Payment Options */}
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={paymentMethod === 'cod'}
                  onChange={() => setPaymentMethod('cod')}
                />
                Cash on Delivery
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="online"
                  checked={paymentMethod === 'online'}
                  onChange={() => setPaymentMethod('online')}
                />
                Pay Online
              </label>

              {paymentMethod === 'online' && (
                <div className="bg-[#f5f5f5] p-4 rounded space-y-3">
                  <p className="text-sm text-gray-600">* This is a demo. No real payment processing connected.</p>
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="w-full p-2 rounded bg-white border"
                  />
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-1/2 p-2 rounded bg-white border"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      className="w-1/2 p-2 rounded bg-white border"
                    />
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={handlePlaceOrder}
              className="w-[40%] hover:bg-black bg-[#DB4444] text-white py-3 rounded font-medium"
            >
              Place Order
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
