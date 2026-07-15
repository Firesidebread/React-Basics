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
  useEffect(() => {
    axios.get("/api/cart-items?expand=product").then((rand) => {
      setCart(rand.data);
    });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Homepage cart={cart} />}></Route>
      <Route path="checkout" element={<Checkout cart={cart} />}></Route>
      <Route path="orders" element={<Orders cart={cart} />}></Route>
      <Route path="track" element={<Track cart={cart} />}></Route>
    </Routes>
  );
}

export default App;
