import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../features/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems); // ✅ Ensure cartItems is an array

  const getSubtotal = (item) => item.price * (item.quantity || 1);

  const totalPrice = Array.isArray(cartItems)
    ? cartItems.reduce((total, item) => total + getSubtotal(item), 0)
    : 0;

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2">
            <div className="hidden md:grid grid-cols-4 font-semibold text-lg border-b pb-3 mb-4">
              <div className="col-span-2">Product</div>
              <div>Quantity</div>
              <div className="text-right">Subtotal</div>
            </div>

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-1 md:grid-cols-4 items-center bg-white p-4 rounded-lg mb-4 shadow"
              >
                {/* Product Info */}
                <div className="flex items-center gap-4 col-span-2 mb-4 md:mb-0">
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-red-600 font-bold hover:scale-110 transition"
                  >
                    ❌
                  </button>
                  <img
                    src={item.image || "https://via.placeholder.com/64"}
                    alt={item.title}
                    className="w-16 h-16 object-contain"
                  />
                  <span className="font-medium text-sm md:text-base">
                    {item.title}
                  </span>
                </div>

                {/* Quantity Selector */}
                <div className="mb-2 md:mb-0">
                  <select
                    value={item.quantity || 1}
                    onChange={(e) =>
                      dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
                    }
                    className="border rounded px-3 py-1 w-full"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num < 10 ? `0${num}` : num}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Subtotal */}
                <div className="text-right font-semibold">
                  ${getSubtotal(item).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          {/* Cart Total Summary */}
          <div className="border rounded-lg p-6 shadow-sm h-fit">
            <h3 className="text-xl font-semibold mb-4">Cart Total</h3>
            <div className="flex justify-between mb-2 text-sm md:text-base">
              <span>Subtotal:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2 text-sm md:text-base">
              <span>Shipping:</span>
              <span className="text-green-600 font-medium">Free</span>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between text-lg font-bold mb-4">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <a href="/checkout" >
              <button className="bg-red-500 hover:bg-red-600 text-white w-full py-3 rounded-lg text-sm md:text-base transition">
                Proceed to checkout
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
