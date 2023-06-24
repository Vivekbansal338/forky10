"use client";
import React from "react";
import "./DiscountCard.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectedOrderDetailsSliceActions } from "@/store/selectedorderdetails";

function CouponCard({ coupon, ...props }) {
  const dispatch = useDispatch();
  const totalamount = props.totalamount;

  const {
    id,
    couponCode,
    discountRate,
    maximumDiscount,
    minimumValidityAmount,
    expirationDate,
  } = coupon;

  const applydiscountcoupon = () => {
    console.log("apply discount coupon");
    dispatch(
      selectedOrderDetailsSliceActions.setDiscountCouponDetails({
        discountRate: discountRate,
        maximumDiscountAmount: maximumDiscount,
        id: id,
      })
    );
  };

  return (
    <div
      //  className="coupon-card"
      className={`coupon-card ${
        props.selected && totalamount >= minimumValidityAmount ? "selected" : ""
      }`}
    >
      <div className="coupon-details">
        <div className="coupon-code">{couponCode}</div>
        <div className="coupon-discount">{discountRate * 100}% off</div>
        <div className="coupon-max-discount">
          Up to &#8377; {maximumDiscount} off
        </div>
        <div className="coupon-min-amount">
          Minimum purchase of &#8377;{minimumValidityAmount} required
        </div>
        {/* <div className="coupon-expiration">Expires on {expirationDate}</div> */}
      </div>
      <button
        className={`apply-button ${
          totalamount < minimumValidityAmount ? "disabled" : ""
        }`}
        onClick={applydiscountcoupon}
      >
        Apply
      </button>
    </div>
  );
}

export default CouponCard;
