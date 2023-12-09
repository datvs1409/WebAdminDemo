import React, { useState } from "react";
import Table from "../components/table/Table";
import EditProductForm from "../components/EditProductForm/EditProductForm";
import inventoryData from "../assets/JsonData/inventory.json";

const Inventory = () => {
  const [products, setProducts] = useState(inventoryData.inventory);
  const [editingProduct, setEditingProduct] = useState(null);

  const renderHead = (item, index) => <th key={index}>{item}</th>;

  const handleEdit = (id) => {
    const productToEdit = products.find((product) => product.id === id);
    setEditingProduct(productToEdit);
  };

  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const handleSaveEdit = (editedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === editedProduct.id ? editedProduct : product
    );
    setProducts(updatedProducts);
    setEditingProduct(null);
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
  };

  const renderBody = (item, index) => (
    <tr key={index}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.quantity}</td>
      <td>{item.price}</td>
      <td>
        <button style={buttonStyle} onClick={() => handleEdit(item.id)}>
          Edit
        </button>
        <button style={buttonStyle} onClick={() => handleDelete(item.id)}>
          Delete
        </button>
      </td>
    </tr>
  );

  const buttonStyle = {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginRight: "10px",
  };

  const headerStyle = {
    fontSize: "2rem",
    marginBottom: "20px",
  };

  return (
    <div>
      <h2 style={headerStyle} className="page-header">
        Inventory Management
      </h2>
      {editingProduct ? (
        <EditProductForm
          product={editingProduct}
          onSave={handleSaveEdit}
          onCancel={handleCancelEdit}
        />
      ) : (
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card__body">
                <Table
                  limit="10"
                  headData={["ID", "Name", "Quantity", "Price", "Actions"]}
                  renderHead={(item, index) => renderHead(item, index)}
                  bodyData={products}
                  renderBody={(item, index) => renderBody(item, index)}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inventory;
