"use client";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Cartitem from "@/components/Cart/Cartitem";
import DeliveryCard from "../../components/MyAccount/DeliveryCard";
import DiscountCard from "../../components/MyAccount/DiscountCard";
import PaymentCard from "../../components/MyAccount/PaymentCard";
import { clearcart } from "@/firestorefunctions/allfunctionsnew";
import { useState, useEffect } from "react";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { db } from "@/app/firebase.config";
import React from "react";
import "./page.css";

function Checkout() {
  const [totalamount, settotalamount] = useState(0);
  const [totalquantity, settotalquantity] = useState(0);
  const [cartitems, setcartitems] = useState([]);
  const [deliverydata, setDeliverydata] = useState([]);
  const [paymentdata, setPaymentdata] = useState([]);
  const user = useSelector((state) => state.userauth.user);
  const uid = user ? user.uid : null;
  const dispatch = useDispatch();
  const router = useRouter();
  const [showcards, setShowCards] = useState({
    paymentcards: false,
    deliveryaddresses: false,
    discountcoupons: false,
  });
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

  useEffect(() => {
    let unsubscribe;

    if (uid) {
      const cartRef = collection(db, "users", uid, "cartdata");
      unsubscribe = onSnapshot(cartRef, (querySnapshot) => {
        const cart = [];
        let totalamount = 0;
        let totalquantity = 0;
        querySnapshot.forEach((doc) => {
          if (doc.id === "carttotals") {
            totalamount = doc.data().totalamount;
            totalquantity = doc.data().totalcount;
          } else {
            cart.push(doc.data());
          }
        });
        settotalamount(totalamount);
        settotalquantity(totalquantity);
        setcartitems(cart);
      });

      const PaymentCollectionRef = collection(
        db,
        "users",
        uid,
        "PaymentCarddata"
      );
      unsubscribe = onSnapshot(PaymentCollectionRef, (querySnapshot) => {
        const paymentcards = [];
        querySnapshot.forEach((doc) => {
          const paymentcard = doc.data();
          paymentcards.push(paymentcard);
        });
        setPaymentdata(paymentcards);
      });

      const DeliveryCollectionRef = collection(
        db,
        "users",
        uid,
        "deliverydata"
      );
      unsubscribe = onSnapshot(DeliveryCollectionRef, (querySnapshot) => {
        const deliverycards = [];
        querySnapshot.forEach((doc) => {
          const deliverycard = doc.data();
          deliverycards.push(deliverycard);
        });
        setDeliverydata(deliverycards);
      });
    }

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [uid]);

  const handleCards = (type) => {
    setShowCards((prevState) => ({ ...prevState, [type]: !prevState[type] }));
  };

  const calculateFinalDiscount = () => {
    const appliedCouponRate = appliedCoupon ? appliedCoupon.discountRate : 0;
    const appliedCouponMaxDiscount = appliedCoupon
      ? appliedCoupon.maximumDiscountAmount
      : 0;
    return Math.min(
      Math.round(appliedCouponRate * totalamount),
      appliedCouponMaxDiscount
    );
  };

  const calculateFinalTotalAmount = (finalDiscount) => {
    const appliedCouponMaxDiscount = appliedCoupon
      ? appliedCoupon.maximumDiscountAmount
      : 0;
    return Math.round(
      totalamount - Math.min(finalDiscount, appliedCouponMaxDiscount)
    );
  };

  const placeFinalOrder = (e) => {
    e.preventDefault();
    const finalDiscount = calculateFinalDiscount();
    const finaltotalamount = calculateFinalTotalAmount(finalDiscount);
    console.log(new Date(Math.floor(Math.random() * Date.now())));
    const start = new Date("2020-01-01").getTime();
    const end = new Date("2023-12-31").getTime();

    const orderhistoryref = addDoc(
      collection(db, "users", uid, "orderhistory"),
      {
        Date: new Date(),
        // Date: new Date(Math.floor(Math.random() * (end - start + 1)) + start),
        items: [...cartitems],
        appliedCoupon: appliedCoupon,
        paymentdetails: appliedPaymentCard,
        deliverydetails: appliedDeliveryAddress,
        totalamountpaid: finaltotalamount,
        discountgiven: finalDiscount,
      }
    );

    router.push("/");
    clearcart(uid);
  };

  return (
    <div className="checkout_container">
      <div className="order_container">
        <div className="container_title">
          <h2>Order Summary</h2>
        </div>
        <div className="order_container_items">
          {cartitems.map((item) => (
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
            {deliverydata.map((address) => (
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
            {paymentdata.map((card) => (
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
          {totalquantity > 0 && (
            <div className="placeorder-card">
              <h2 className="placeorder-card-title">Order Summary</h2>
              <div className="placeorder-card-content">
                <p>
                  <span className="placeorder-card-label">Price:</span>{" "}
                  {totalamount}
                </p>
                <p>
                  <span className="placeorder-card-label">Quantity:</span>{" "}
                  {totalquantity}
                </p>
                <p>
                  <span className="placeorder-card-label">
                    Delivery Charges:
                  </span>{" "}
                  0
                </p>
                <p>
                  <span className="placeorder-card-label">Discount:</span>
                  {calculateFinalDiscount()}
                </p>
                <p className="placeorder-card-total">
                  <span className="placeorder-card-label">Total Amount:</span>{" "}
                  {calculateFinalTotalAmount(calculateFinalDiscount())}
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
        {totalquantity === 0 && <h1 className="empty">Cart Empty !</h1>}
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
