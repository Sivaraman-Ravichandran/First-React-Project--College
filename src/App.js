import React from "react";
import { Routes, Route } from "react-router-dom";
import Intro from "./IntroPage/Main";
import Login from "./Authentication/login";
import Home from "./MainHome/Home";
import Signup from "./Authentication/Signup";
import Create from "./MainHome/Create";
import Payment from "./MainHome/Paymentmethod";
import Upi from "./MainHome/Upi";
import Card from "./MainHome/Card";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Upi" element={<Upi />} />
        <Route path="/Card" element={<Card />} />
      </Routes>
    </div>
  );
}

export default App;
