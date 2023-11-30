import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import ProductDetails from "./components/Details/ProductDetails";
import Cart from "./components/Carts/cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Navigation from "./components/Navigation/Navigation";
import OrderSuccess from "./components/OrderSuccess/ordersuccess";


function App() {
  return (
    <>
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:id" element={<ProductDetails />}></Route>
          <Route path="/cart/" element={<Cart />}></Route>
          <Route path="/checkout" element={<Checkout/>}></Route>
          <Route path="/orderSuccess" element={<OrderSuccess/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
