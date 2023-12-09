import React from "react";
import { Link } from "react-router-dom";
import Table from "../components/table/Table";

const storageLocations = {
  head: ["ID", "Tên Kho", "Sức Chứa", "Số Lượng Sản Phẩm"],
  body: [
    {
      id: 1,
      name: "Kho A",
      capacity: 1000,
      quantity: 750,
    },
    {
      id: 2,
      name: "Kho B",
      capacity: 1500,
      quantity: 1200,
    },
    
  ],
};

const renderStorageHead = (item, index) => <th key={index}>{item}</th>;

const renderStorageBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.capacity}</td>
    <td>{item.quantity}</td>
  </tr>
);

const Storage = () => {
  return (
    <div className="container">
      <h2 className="page-header">Quản lý vị trí lưu trữ</h2>
      <div className="card">
        <div className="card__header">
          <h3>Danh sách vị trí lưu trữ</h3>
        </div>
        <div className="card__body">
          <Table
            headData={storageLocations.head}
            renderHead={(item, index) => renderStorageHead(item, index)}
            bodyData={storageLocations.body}
            renderBody={(item, index) => renderStorageBody(item, index)}
          />
        </div>
        <div className="card__footer">
          <Link to="/">Xem tất cả</Link>
        </div>
      </div>
    </div>
  );
};

export default Storage;
