import React, { createContext, useState, useEffect } from "react";

// Create Context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch initial data (Replace with API call if needed)
    const initialProducts = [
      {
        id: 1,
        name: "Personal Loan",
        category: "Loan",
        commissionType: "VARIABLE",
        commissionValue: "5%",
        label: "Popular",
        status: true,
      },
      {
        id: 2,
        name: "Home Loan",
        category: "Loan",
        commissionType: "VARIABLE",
        commissionValue: "0.7%",
        label: "",
        status: true,
      },
      {
        id: 3,
        name: "Business Loan",
        category: "Loan",
        commissionType: "VARIABLE",
        commissionValue: "2%",
        label: "",
        status: true,
      },
      {
        id: 4,
        name: "Credit Card",
        category: "Credit Card",
        commissionType: "FIXED",
        commissionValue: "₹500",
        label: "",
        status: true,
      },
      {
        id: 5,
        name: "ABCD app",
        category: "Application",
        commissionType: "FIXED",
        commissionValue: "₹50",
        label: "Earn more",
        status: true,
      },
      {
        id: 6,
        name: "ABCD app test",
        category: "Application",
        commissionType: "VARIABLE",
        commissionValue: "5%",
        label: "ABCD",
        status: false,
      },
    ];
    setProducts(initialProducts);
  }, []);

  // Function to toggle product status
  const toggleStatus = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, status: !product.status } : product
      )
    );
  };

  // Function to add a new product
  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
  };

  // Function to edit a product
  const editProduct = (updatedProduct) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  return (
    <ProductContext.Provider
      value={{ products, toggleStatus, addProduct, editProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
