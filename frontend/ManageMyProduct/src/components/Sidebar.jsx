import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar2 from "../components/Sidebar2";

const Sidebar = () => {
  const [showProductSidebar, setShowProductSidebar] = useState(false);
  const navigate = useNavigate();

  const handleProductsClick = () => {
    setShowProductSidebar(!showProductSidebar);
    navigate("/products"); // Navigate to /products
  };

  return (
    <div className="sidebar bg-red-600 text-white w-64 h-screen p-5">
      <h2 className="text-2xl font-bold mb-5">Dashboard</h2>
      <ul>
        <li
          className="cursor-pointer p-2 hover:bg-red-700 flex items-center gap-3"
          onClick={() => navigate("/")}
        >
          <img src="https://img.icons8.com/ios/50/000000/dashboard.png" alt="Dashboard Icon" className="w-5 h-5" />
          Dashboard
        </li>
        <li
          className="cursor-pointer p-2 hover:bg-red-700 flex justify-between items-center gap-3"
          onClick={handleProductsClick}
        >
          <img src="https://img.icons8.com/ios/50/000000/product.png" alt="Products Icon" className="w-5 h-5" />
          Products
          <span>{showProductSidebar ? "▲" : "▼"}</span>
        </li>
        {showProductSidebar && <Sidebar2 />}
        <li className="cursor-pointer p-2 hover:bg-red-700 flex items-center gap-3">
          <img src="https://img.icons8.com/ios/50/000000/user.png" alt="Merchant Management Icon" className="w-5 h-5" />
          Merchant Management
        </li>
        <li className="cursor-pointer p-2 hover:bg-red-700 flex items-center gap-3">
          <img src="https://img.icons8.com/ios/50/000000/user.png" alt="Lead Management Icon" className="w-5 h-5" />
          Lead Management
        </li>
        <li className="cursor-pointer p-2 hover:bg-red-700 flex items-center gap-3">
          <img src="https://img.icons8.com/ios/50/000000/user.png" alt="User Management Icon" className="w-5 h-5" />
          User Management
        </li>
        <li className="cursor-pointer p-2 hover:bg-red-700 flex items-center gap-3">
          <img src="https://img.icons8.com/ios/50/000000/banner.png" alt="Banners Icon" className="w-5 h-5" />
          Banners
        </li>
        <li className="cursor-pointer p-2 hover:bg-red-700 flex items-center gap-3">
          <img src="https://img.icons8.com/ios/50/000000/training.png" alt="Training Management Icon" className="w-5 h-5" />
          Training Management
        </li>
        <li className="cursor-pointer p-2 hover:bg-red-700 flex items-center gap-3">
          <img src="https://img.icons8.com/ios/50/000000/code.png" alt="Code Upload Management Icon" className="w-5 h-5" />
          Code Upload Management
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
