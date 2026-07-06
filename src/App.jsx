import { useState } from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import { Routes, Route } from "react-router";
import Checkout from "./components/Checkout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="checkout" element={<Checkout />}></Route>
    </Routes>
  );
}

export default App;
