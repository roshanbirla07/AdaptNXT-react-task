import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const Header = ({ openAddModal }) => {
  return (
    <div className="bg-gray-100 p-4 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Products</h1>

        <div className="flex gap-4">
          <button
            onClick={() => window.location.reload()}
            className="bg-red-400 text-white rounded-3xl px-4 py-2 hover:bg-red-500 transition"
          >
            Refresh
          </button>
          <button
            onClick={openAddModal}
            className="bg-red-400 text-white rounded-3xl px-4 py-2 hover:bg-red-500 transition"
          >
            + Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
