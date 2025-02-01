import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductRow from "./ProductRow";

const ProductTable = ({ openEditModal }) => {
  const { products } = useContext(ProductContext);

  return (
    <table className="product-table border p-2.5 w-full h-96 mt-10 shadow-lg">
      <thead className="bg-white shadow-md">
        <tr className="text-gray-800">
          <th className="px-4 py-2">Image</th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Category</th>
          <th className="px-4 py-2">Commission Type</th>
          <th className="px-4 py-2">Commission Value</th>
          <th className="px-4 py-2">Label</th>
          <th className="px-4 py-2">Status</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductRow key={product.id} product={product} openEditModal={openEditModal} />
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
