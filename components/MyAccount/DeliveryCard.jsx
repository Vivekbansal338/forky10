"use client";
import React from "react";
import "./DeliveryCard.css";
import { useDispatch } from "react-redux";
import { selectedOrderDetailsSliceActions } from "@/store/selectedorderdetails";

function DeliveryCard(props) {
  const dispatch = useDispatch();
  const { name, address, city, state, zipCode } = props.address;

  const applydeliveryaddress = (event, data) => {
    event.preventDefault();
    dispatch(
      selectedOrderDetailsSliceActions.setDeliveryDetails({
        data,
      })
    );
  };
  return (
    <div
      className={`deliverycard ${props.selected ? "abcdselected" : ""}`}
      // className="deliverycard"
      onClick={(e) => applydeliveryaddress(e, props.address)}
    >
      <h2 className="deliverycard-title">Delivery Address</h2>
      <div className="deliverycard-content">
        <p className="address-line">{name}</p>
        <p className="address-line">{address}</p>
        <p className="address-line">{`${city}, ${state} ${zipCode}`}</p>
      </div>
      <div className="deliverycardbutton">
        {/* <button className="deliverycardbutton-edit">Edit</button> */}
        {/* <button className="deliverycardbutton-delete">Delete</button> */}
      </div>
    </div>
  );
}

export default DeliveryCard;
