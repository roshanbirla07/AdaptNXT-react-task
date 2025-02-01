import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ProductPage from "./pages/ProductsPages";

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-5">
          <Routes>
            <Route path="/products" element={<ProductPage />} />
            <Route path="/" element={<h1>Welcome to Dashboard</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
