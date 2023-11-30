import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(
      storedCartItems.map((item) => ({ ...item, quantity: item.quantity || 1 }))
    );
  }, []);

  const handleRemove = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleIncrement = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleDecrement = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId
        ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
        : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    toast.success("Checkout successful!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
    navigate("/checkout");
  };

  const handleContinueShopping = () => {
    navigate("/");
  };

   
  const calculateTotal = () => {
    const totalPrice = cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
      localStorage.setItem('totalPrice', totalPrice);
    return totalPrice;
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Your Shopping Cart</h2>

      {cartItems.map((item) => (
  <div
    key={item.id}
    className="flex items-center justify-between border-b-2 pb-4 mb-4"
  >
    <div className="flex items-center">
      <img
        src={item.image || "https://via.placeholder.com/50"}
        alt={item.name}
        className="w-12 h-12 object-cover rounded mr-4"
      />
      <div>
        <p className="text-lg font-semibold">{item.title}</p>
        <p className="text-blue-600 font-semibold">Price: ${item.price.toFixed(2)}</p>
        <p className="text-black-300 font-bold">
          Item's Total Price: ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>
    </div>

    <div className="flex items-center space-x-2">
      <button
        className="text-blue-500 hover:text-blue-700"
        onClick={() => handleDecrement(item.id)}
      >
        -
      </button>
      <span>{item.quantity}</span>
      <button
        className="text-blue-500 hover:text-blue-700"
        onClick={() => handleIncrement(item.id)}
      >
        +
      </button>
      <button
        className="text-red-500 hover:text-red-700"
        onClick={() => handleRemove(item.id)}
      >
        Remove
      </button>
    </div>
  </div>
))}


      <div className="flex justify-between items-center mt-4">
        <p className="text-lg font-bold text-yellow-900">
          Grand Total: ${calculateTotal()}
        </p>
      </div>

      <div className="flex justify-between items-center mt-6">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleContinueShopping}
        >
          Continue Shopping
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
