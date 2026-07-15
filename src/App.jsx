import { useEffect, useState } from "react";
import "./App.css";
import Homepage from "./pages/home/Homepage";
import { Routes, Route } from "react-router";
import Checkout from "./pages/checkout/Checkout";
import Orders from "./pages/orders/Orders";
import { Track } from "./pages/Tracking";
import axios from "axios";

function App() {
  const [cart, setCart] = useState([]);
  const getApiCartItems = async () => {
    const rand = await axios.get("/api/cart-items?expand=product");
    setCart(rand.data);
  };
  useEffect(() => {
    getApiCartItems();
  }, []);
  return (
    <Routes>
      <Route
        path="/"
        element={<Homepage cart={cart} loadCart={getApiCartItems} />}
      ></Route>
      <Route path="checkout" element={<Checkout cart={cart} />}></Route>
      <Route path="orders" element={<Orders cart={cart} />}></Route>
      <Route path="track" element={<Track cart={cart} />}></Route>
    </Routes>
  );
}

export default App;
