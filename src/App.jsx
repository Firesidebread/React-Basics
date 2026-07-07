import { useState } from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import { Track } from "./pages/Tracking";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="checkout" element={<Checkout />}></Route>
      <Route path="orders" element={<Orders />}></Route>
      <Route path="track" element={<Track />}></Route>
    </Routes>
  );
}

export default App;
