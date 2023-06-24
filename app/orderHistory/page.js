"use client";
import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import {
  collection,
  doc,
  onSnapshot,
  deleteDoc,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/app/firebase.config";
import "./page.css";

const OrderHistory = () => {
  const user = useSelector((state) => state.userauth.user);
  const uid = user ? user.uid : null;
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    let unsubscribe;

    if (uid) {
      const orderhistoryRef = collection(db, "users", uid, "orderhistory");
      unsubscribe = onSnapshot(orderhistoryRef, (querySnapshot) => {
        const orders = [];
        querySnapshot.forEach((doc) => {
          const order = doc.data();
          orders.push(order);
        });
        orders.sort((a, b) => b.Date.seconds - a.Date.seconds);
        setOrders(orders);
        console.log(orders, "hello");
      });
    }

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [uid]);

  return (
    <Container className="OrderHistory_container">
      <h2 className="my-4">Order History</h2>
      <div className="table_container">
        {orders.length === 0 ? (
          <p className="my-3">No orders found.</p>
        ) : (
          <Table striped bordered hover responsive>
            <thead className="table_head">
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
                  <td>{order.Date.toDate().toLocaleString("en-GB")}</td>
                  <td>₹{order.totalamountpaid.toFixed(2)}</td>
                  <td>₹{order.discountgiven.toFixed(2)}</td>
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
      </div>
    </Container>
  );
};

export default OrderHistory;
