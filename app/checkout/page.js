"use client";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { cartActions } from "@/store/cart";
import { orderHistoryActions } from "@/store/orderhistory";
import Cartitem from "../../components/cart/Cartitem";
import DeliveryCard from "../../components/MyAccount/DeliveryCard";
import DiscountCard from "../../components/MyAccount/DiscountCard";
import PaymentCard from "../../components/MyAccount/PaymentCard";
import { useState } from "react";
import React from "react";
import "./page.css";

function Checkout() {
  const user = useSelector((state) => state.userauth.user);
  const dispatch = useDispatch();
  const router = useRouter();
  const [showcards, setShowCards] = useState({
    paymentcards: false,
    deliveryaddresses: false,
    discountcoupons: false,
  });

  const cart = useSelector((state) => state.cart);
  const delivery = useSelector((state) => state.delivery.addresses);
  const cards = useSelector((state) => state.payment.cards);
  const coupons = useSelector((state) => state.discount.coupons);
  const appliedCoupon = useSelector(
    (state) => state.selectedOrderDetails.discountCouponDetails
  );
  const appliedPaymentCard = useSelector(
    (state) => state.selectedOrderDetails.paymentCardDetails
  );
  const appliedDeliveryAddress = useSelector(
    (state) => state.selectedOrderDetails.deliveryDetails
  );

  const totalAmount = cart.totalAmount;
  const totalQuantity = cart.totalCount;
  const cartItems = cart.data;
  const appliedCouponRate = appliedCoupon ? appliedCoupon.discountRate : 0;
  const appliedCouponMaxDiscount = appliedCoupon
    ? appliedCoupon.maximumDiscountAmount
    : 0;
  const finalDiscount = Math.min(
    Math.round(appliedCouponRate * totalAmount),
    appliedCouponMaxDiscount
  );
  const finalTotalAmount = Math.round(
    totalAmount - Math.min(finalDiscount, appliedCouponMaxDiscount)
  );

  const handleCards = (type) => {
    setShowCards((prevState) => ({ ...prevState, [type]: !prevState[type] }));
  };

  const placeFinalOrder = (e) => {
    e.preventDefault();
    dispatch(cartActions.emptycart(user.uid));
    dispatch(
      orderHistoryActions.addOrder({
        items: [...cartItems],
        appliedCoupon: appliedCoupon,
        paymentdetails: appliedPaymentCard,
        deliverydetails: appliedDeliveryAddress,
        totalAmount: finalTotalAmount,
        discount: finalDiscount,
      })
    );
    // console.log({
    //   items: [...cartItems],
    //   appliedCoupon: appliedCoupon,
    //   paymentdetails: appliedPaymentCard,
    //   deliverydetails: appliedDeliveryAddress,
    // });
    router.push("/");
    alert("Order Placed Successfully");
  };

  return (
    <div className="checkout_container">
      <div className="order_container">
        <div className="container_title">
          <h2>Order Summary</h2>
        </div>
        <div className="order_container_items">
          {cartItems.map((item) => (
            <Cartitem key={item.recipe_id} item={item} />
          ))}
        </div>
      </div>
      <div className="discount_container">
        <div className="container_title">
          <h2>Discount Coupons</h2>
          <button onClick={() => handleCards("discountcoupons")}>
            {showcards.discountcoupons ? "Hide Coupons" : "Show Coupons"}
          </button>
        </div>
        {showcards.discountcoupons && (
          <div className="discount_container_items">
            {coupons.map((coupon) => (
              <DiscountCard
                key={coupon.id}
                coupon={coupon}
                selected={
                  appliedCoupon && coupon.id === appliedCoupon.id
                    ? "selected"
                    : ""
                }
              />
            ))}
          </div>
        )}
      </div>
      <div className="delivery_container">
        <div className="container_title">
          <h2>Delivery Address</h2>
          <button onClick={() => handleCards("deliveryaddresses")}>
            {showcards.deliveryaddresses ? "Hide Addresses" : "Show Addresses"}
          </button>
        </div>
        {showcards.deliveryaddresses && (
          <div className="delivery_container_items">
            {delivery.map((address) => (
              <DeliveryCard
                key={address.id}
                address={address}
                selected={
                  appliedDeliveryAddress &&
                  appliedDeliveryAddress.data !== null &&
                  address.id === appliedDeliveryAddress.data.id
                    ? "selected"
                    : ""
                }
              />
            ))}
          </div>
        )}
      </div>
      <div className="payment_container">
        <div className="container_title">
          <h2>Payment Cards</h2>
          <button onClick={() => handleCards("paymentcards")}>
            {showcards.paymentcards
              ? "Hide Payment Cards"
              : "Show Payment Cards"}
          </button>
        </div>
        {showcards.paymentcards && (
          <div className="payment_container_items">
            {cards.map((card) => (
              <PaymentCard
                key={card.cardNumber}
                card={card}
                selected={
                  appliedPaymentCard &&
                  appliedPaymentCard.data !== null &&
                  card.cardNumber === appliedPaymentCard.data
                    ? "selected"
                    : ""
                }
              />
            ))}
          </div>
        )}
      </div>
      <div className="placeorder_container">
        <div className="container_title">
          <h2>Place Order</h2>
        </div>
        <div className="placeorder_container_items">
          {totalQuantity > 0 && (
            <div className="placeorder-card">
              <h2 className="placeorder-card-title">Order Summary</h2>
              <div className="placeorder-card-content">
                <p>
                  <span className="placeorder-card-label">Price:</span>{" "}
                  {totalAmount}
                </p>
                <p>
                  <span className="placeorder-card-label">Quantity:</span>{" "}
                  {totalQuantity}
                </p>
                <p>
                  <span className="placeorder-card-label">
                    Delivery Charges:
                  </span>{" "}
                  0
                </p>
                <p>
                  <span className="placeorder-card-label">Discount:</span>
                  {finalDiscount}
                </p>
                <p className="placeorder-card-total">
                  <span className="placeorder-card-label">Total Amount:</span>{" "}
                  {finalTotalAmount}
                </p>
              </div>

              {appliedDeliveryAddress && appliedPaymentCard && (
                <button
                  className="placeorder-card-button"
                  onClick={placeFinalOrder}
                >
                  Place Order
                </button>
              )}
            </div>
          )}
        </div>
        {totalQuantity === 0 && <h1 className="empty">Cart Empty !</h1>}
        {!appliedDeliveryAddress && (
          <h1 className="empty">Please Select Delivery Address</h1>
        )}
        {!appliedPaymentCard && (
          <h1 className="empty">Please Select Payment Card</h1>
        )}
      </div>
    </div>
  );
}

export default Checkout;
