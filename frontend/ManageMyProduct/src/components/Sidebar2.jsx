import React from "react";

const Sidebar2 = ({ onNavChange }) => {
  return (
    <div className="sidebar2 bg-red-700 text-white w-fit h-full p-5 mt-2 rounded-lg shadow-lg">
      <ul>
        <li>
          <a
            href="#"
            className="cursor-pointer p-3 hover:bg-red-800 rounded-md flex items-center gap-2 mb-2"
            onClick={() => onNavChange("products")}
          >
            <img 
              src="https://img.icons8.com/ios/50/ffffff/dashboard.png" 
              alt="Product Icon" 
              className="w-5 h-5"
            />
            Product Management
          </a>
        </li>
        <li>
          <a
            href="#"
            className="cursor-pointer p-3 hover:bg-red-800 rounded-md flex items-center gap-2 mb-2"
            onClick={() => onNavChange("create-product")}
          >
            <img 
              src="https://img.icons8.com/ios/50/ffffff/create.png" 
              alt="Create Product Icon" 
              className="w-5 h-5"
            />
            Create Product
          </a>
        </li>
        <li>
          <a
            href="#"
            className="cursor-pointer p-3 hover:bg-red-800 rounded-md flex items-center gap-2"
            onClick={() => onNavChange("categories")}
          >
            <img 
              src="https://img.icons8.com/ios/50/ffffff/category.png" 
              alt="Categories Icon" 
              className="w-5 h-5"
            />
            Categories
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar2;
