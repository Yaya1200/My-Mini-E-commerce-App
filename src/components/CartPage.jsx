import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../featchers/cart/cartSlice";

function CartPage() {
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const now = new Date();
  const DayOfTheWeek = now.toLocaleString("en-US", { weekday: "long" });
  const shippingPerItem = 4.99;
  const shippingTotal = cartItems.length * shippingPerItem;
  const totalWithShipping = totalPrice + shippingTotal;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="cart-item border rounded-lg shadow-md p-4 bg-white flex flex-col"
            >
              <img
                src={item.thumbnail}
                alt={item.title || item.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />

              <h2 className="font-semibold text-lg mb-2">{item.name}</h2>

              <p className="text-gray-600 mb-1">
                Price: ${ (item.price).toFixed(2) }
              </p>
              <p className="text-gray-600 mb-2">Quantity: {item.quantity}</p>

              <p className="text-gray-500 text-sm mb-2">
                Delivery date: {DayOfTheWeek}, {now.toLocaleDateString()}
              </p>
              <p className="text-gray-500 text-sm mb-2">
                Delivery time: {now.toLocaleTimeString()} <br />
                Shipping: ${shippingPerItem.toFixed(2)}
              </p>

              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="mt-auto bg-red-600 hover:bg-red-500 text-white px-3 py-2 rounded-md transition"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="mt-6 p-4 bg-blue-50 rounded-md text-right">
          <p className="text-gray-700 mb-1">
            Subtotal: ${totalPrice.toFixed(2)}
          </p>
          <p className="text-gray-700 mb-1">
            Shipping: ${shippingTotal.toFixed(2)}
          </p>
          <h3 className="text-xl font-bold">
            Total: ${totalWithShipping.toFixed(2)}
          </h3>
        </div>
      )}
    </div>
  );
}

export default CartPage;