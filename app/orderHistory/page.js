"use client";
import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, Table } from "react-bootstrap";
import "./page.css";

const OrderHistory = () => {
  const orders = useSelector((state) => state.orderHistory.orders);

  return (
    <Container className="OrderHistory_container">
      <h2 className="my-4">Order History</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Order #</th>
              <th>Date</th>
              <th>Total Amount</th>
              <th>Discount Given</th>
              <th>Delivery Details</th>
              <th>Items</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{order.date}</td>
                <td>₹{order.totalAmount.toFixed(2)}</td>
                <td>₹{order.discount.toFixed(2)}</td>
                <td>
                  <ul className="list-unstyled">
                    <li>Name: {order.deliverydetails.data.name}</li>
                    <li>Address: {order.deliverydetails.data.address}</li>
                    <li>City: {order.deliverydetails.data.city}</li>
                    <li>State: {order.deliverydetails.data.state}</li>
                    <li>Zip Code: {order.deliverydetails.data.zipCode}</li>
                  </ul>
                </td>
                <td>
                  <ul className="list-unstyled">
                    {order.items.map((item, i) => (
                      <li key={i}>
                        <p>Title: {item.title}</p>
                        <p>Price: ₹{item.price.toFixed(2)}</p>
                        <p>Quantity: {item.quantity}</p>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default OrderHistory;
