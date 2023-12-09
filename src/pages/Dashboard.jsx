import React from "react";
import { Link } from "react-router-dom";
import StatusCard from "../components/status-card/StatusCard";
import Table from "../components/table/Table";
import Badge from "../components/badge/Badge";
import statusCards from "../assets/JsonData/status-card-data.json";

const topCustomers = {
  head: ["Người dùng", "Tổng đơn hàng", "Tổng chi tiêu"],
  body: [
    {
      username: "Trần Đạt",
      order: "490",
      price: "$15,870",
    },
    {
      username: "Gia Hưng",
      order: "250",
      price: "$12,251",
    },
    {
      username: "Văn Thống",
      order: "120",
      price: "$10,840",
    },
    {
      username: "Tường Vy",
      order: "110",
      price: "$9,251",
    },
    {
      username: "Dũng Senpai",
      order: "80",
      price: "$8,840",
    },
  ],
};

const renderCustomerHead = (item, index) => <th key={index}>{item}</th>;

const renderCustomerBody = (item, index) => (
  <tr key={index}>
    <td>{item.username}</td>
    <td>{item.order}</td>
    <td>{item.price}</td>
  </tr>
);

const latestOrders = {
  header: ["ID Đơn hàng", "Người dùng", "Tổng giá", "Ngày", "Trạng thái"],
  body: [
    {
      id: "#OD1711",
      user: "Nhật Huy",
      date: "17 Tháng 6 2023",
      price: "$900",
      status: "Đang Giao",
    },
    {
      id: "#OD1712",
      user: "Tường Vy",
      date: "1 Tháng 6 2023",
      price: "$400",
      status: "Đã Thanh Toán",
    },
    {
      id: "#OD1713",
      user: "Gia Hưng",
      date: "27 Tháng 6 2023",
      price: "$200",
      status: "Chờ Xử Lý",
    },
    {
      id: "#OD1712",
      user: "Linh Đa",
      date: "1 Tháng 6 2023",
      price: "$400",
      status: "Đã Thanh Toán",
    },
    {
      id: "#OD1713",
      user: "Trí Nguyễn",
      date: "27 Tháng 6 2023",
      price: "$200",
      status: "Hoàn Trả",
    },
  ],
};

const orderStatus = {
  "Đang Giao": "primary",
  "Chờ Xử Lý": "warning",
  "Đã Thanh Toán": "success",
  "Hoàn Trả": "danger",
};

const renderOrderHead = (item, index) => <th key={index}>{item}</th>;

const renderOrderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.user}</td>
    <td>{item.price}</td>
    <td>{item.date}</td>
    <td>
      <Badge type={orderStatus[item.status]} content={item.status} />
    </td>
  </tr>
);

const Dashboard = () => {
  return (
    <div className="container">
      <h2 className="page-header">Admin Dashboard</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            {statusCards.map((item, index) => (
              <div className="col-md-6" key={index}>
                <StatusCard
                  icon={item.icon}
                  count={item.count}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card__header">
              <h3>Top khách hàng</h3>
            </div>
            <div className="card__body">
              <Table
                headData={topCustomers.head}
                renderHead={(item, index) => renderCustomerHead(item, index)}
                bodyData={topCustomers.body}
                renderBody={(item, index) => renderCustomerBody(item, index)}
              />
            </div>
            <div className="card__footer">
              <Link to="/">Xem tất cả</Link>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card">
            <div className="card__header">
              <h3>Đơn hàng mới nhất</h3>
            </div>
            <div className="card__body">
              <Table
                headData={latestOrders.header}
                renderHead={(item, index) => renderOrderHead(item, index)}
                bodyData={latestOrders.body}
                renderBody={(item, index) => renderOrderBody(item, index)}
              />
            </div>
            <div className="card__footer">
              <Link to="/">Xem tất cả</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
