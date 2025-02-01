import React, { useState } from "react";

import Header from "../components/Header";
import ProductTable from "../components/ProductTable";
import AddProductModal from "../components/AddProductModal";
import EditProductModal from "../components/EditProductModal";
import Sidebar2 from "../components/Sidebar2";

const ProductsPage = () => {
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  return (
    <div className="app">
      
      <div className="main-content">
        <Header openAddModal={() => setAddModalOpen(true)} />
        <ProductTable openEditModal={setEditProduct} />
      </div>

      {isAddModalOpen && (
        <AddProductModal closeModal={() => setAddModalOpen(false)} />
      )}

      {editProduct && (
        <EditProductModal 
          productToEdit={editProduct} 
          closeModal={() => setEditProduct(null)} 
        />
      )}
    </div>
  );
};

export default ProductsPage;
