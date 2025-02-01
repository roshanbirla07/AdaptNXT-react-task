import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const ProductRow = ({ product, openEditModal }) => {
  const { toggleStatus } = useContext(ProductContext);

  return (
    <tr className="text-center">
      <td>📷</td>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td>{product.commissionType}</td>
      <td>{product.commissionValue}</td>
      <td>{product.label}</td>
      <td>
      <button
  onClick={() => toggleStatus(product.id)}
  style={{
    borderRadius: '0.375rem',
    backgroundColor: product.status ? '#4CAF50' : '#f44336', // Green if active, Red if inactive
    padding: '0.375rem 1rem',
    margin: '0.375rem',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  }}
>
  {product.status ? "Active" : "Inactive"}
</button>

      </td>
      <td>
        <button onClick={() => openEditModal(product)}>✏️ </button>
      </td>
    </tr>
  );
};

export default ProductRow;
