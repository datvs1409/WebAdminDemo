// EditProductForm.js

import React, { useState } from "react";
import "./EditProductForm.css";

const EditProductForm = ({ product, onSave, onCancel }) => {
  const [editedProduct, setEditedProduct] = useState(product);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedProduct);
  };

  return (
    <div className="edit-product-form">
      <h3>Edit Product</h3>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={editedProduct.name}
          onChange={handleChange}
        />
        {/* Add other fields as needed */}
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditProductForm;
