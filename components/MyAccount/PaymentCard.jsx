"use client";
import React from "react";
import "./PaymentCard.css";
import { useDispatch } from "react-redux";
import { selectedOrderDetailsSliceActions } from "@/store/selectedorderdetails";

function PaymentCard(props) {
  const dispatch = useDispatch();
  const { cardNumber, cardHolder, expirationDate, cvv, cardChip, bankName } =
    props.card;

  const applypaymentcard = (event, data) => {
    event.preventDefault();
    dispatch(selectedOrderDetailsSliceActions.setPaymentCardDetails({ data }));
  };

  return (
    <div
      // className={`credit-card ${props.selected ? "selectedfront" : ""}`}

      className="credit-card"
      onClick={(e) => applypaymentcard(e, cardNumber)}
    >
      <div
        // className="card-front"
        className={`card-front ${props.selected ? "selectedfront" : ""}`}
      >
        <div className="card-logo">
          {/* <img src="card-logo.png" alt="Card Logo"> */}
          <h1>{bankName}</h1>
        </div>
        <div className="card-chip">
          {/* <img src="card-chip.png" alt="Card Chip"> */}
          <h1>{cardChip}</h1>
        </div>
        <div className="card-number">
          <div className="card-number-group">
            <span>{cardNumber.slice(0, 4)}</span>
            <span>{cardNumber.slice(5, 9)}</span>
            <span>{cardNumber.slice(10, 14)}</span>
            <span>{cardNumber.slice(15, 19)}</span>
          </div>
        </div>
        <div className="card-details">
          <div className="card-holder">
            <label>Card Holder</label>
            <span>{cardHolder}</span>
          </div>
          <div className="card-expiry">
            <label>Expires</label>
            <span>{expirationDate}</span>
          </div>
        </div>
      </div>
      <div
        // className="card-back"
        className={`card-back ${props.selected ? "selectedback" : ""}`}
      >
        <div className="card-signature">
          <label>Signature</label>
          <div className="card-signature-box"></div>
        </div>
        <div className="card-cvv">
          <label>CVV</label>
          <span>{cvv}</span>
        </div>
      </div>
    </div>
  );
}

export default PaymentCard;
