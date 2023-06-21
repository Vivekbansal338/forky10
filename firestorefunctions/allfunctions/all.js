// data sample in db
// Collection: users

// Document ID: <userUID>

// Document Data:{
//   "bookmarkData": {
//     "bookmarks": []
//   },
//   "cart": {
//     "totalCount": 0,
//     "totalAmount": 0,
//     "data": []
//   },
//   "coupons": {
//     "coupons": [
//       {
//         "id": 1234,
//         "couponCode": "SUMMER20",
//         "discountRate": 0.2,
//         "maximumDiscount": 500,
//         "minimumValidityAmount": 400,
//         "expirationDate": "2023-08-31"
//       },
//       {
//         "id": 1235,
//         "couponCode": "SAVE10NOW",
//         "discountRate": 0.1,
//         "maximumDiscount": 500,
//         "minimumValidityAmount": 300,
//         "expirationDate": "2023-12-31"
//       },
//       {
//         "id": 1236,
//         "couponCode": "SUMMER10",
//         "discountRate": 1.0,
//         "maximumDiscount": 500,
//         "minimumValidityAmount": 200,
//         "expirationDate": null
//       },
//       {
//         "id": 1237,
//         "couponCode": "FLASHSALE25",
//         "discountRate": 0.25,
//         "maximumDiscount": 500,
//         "minimumValidityAmount": 100,
//         "expirationDate": "2023-06-30"
//       }
//     ]
//   },
//   "delivery": {
//     "addresses": [
//       {
//         "id": 1,
//         "name": "John Doe",
//         "address": "123 Main Street",
//         "city": "City",
//         "state": "State",
//         "zipCode": "12345"
//       },
//       {
//         "id": 2,
//         "name": "Jane Smith",
//         "address": "456 Elm Avenue",
//         "city": "Town",
//         "state": "Province",
//         "zipCode": "67890"
//       },
//       {
//         "id": 3,
//         "name": "Robert Johnson",
//         "address": "789 Oak Drive",
//         "city": "Village",
//         "state": "County",
//         "zipCode": "13579"
//       }
//     ]
//   },
//   "selectedOrderDetails": {
//     "deliveryDetails": null,
//     "paymentCardDetails": null,
//     "discountCouponDetails": null
//   },
//   "payment": {
//     "cards": [
//       {
//         "bankName": "State Bank Of India",
//         "cardNumber": "1234 5678 9012 3456",
//         "cardHolder": "John Doe",
//         "expirationDate": "12/24",
//         "cardChip": "MasterCard",
//         "cvv": "123"
//       },
//       {
//         "bankName": "Axis Bank",
//         "cardNumber": "9876 5432 1098 7654",
//         "cardHolder": "Jane Smith",
//         "expirationDate": "09/23",
//         "cardChip": "Visa",
//         "cvv": "456"
//       },
//       {
//         "bankName": "HDFC Bank",
//         "cardNumber": "5555 1234 5678 9012",
//         "cardHolder": "Robert Johnson",
//         "expirationDate": "06/25",
//         "cardChip": "Rupay",
//         "cvv": "789"
//       }
//     ]
//   },
//   "orderHistory": {
//     "orders": []
//   }
// }

// {
//   getUserData,
//   updateBookmarkData,
//   updateCartData,
//   updateCouponData,
//   updateDeliveryData,
//   updateSelectedOrderDetails,
//   updatePaymentData,
//   updateOrderHistory,
//   addCoupon,
//   deleteCoupon,
//   addAddress,
//   deleteAddress,
//   addPaymentCard,
//   deletePaymentCard,
//   placeOrder,
// }

// bookmarkData
// :
// bookmarks
// :
// []
// [[Prototype]]
// :
// Object
// cart
// :
// {totalCount: 0, data: Array(0), totalAmount: 0}
// coupons
// :
// {coupons: Array(0)}
// delivery
// :
// {addresses: Array(0)}
// orderHistory
// :
// {orders: Array(0)}
// payment
// :
// {cards: Array(0)}
// selectedOrderDetails
// :
// {discountCouponDetails: null, paymentCardDetails: null, deliveryDetails: null}
// [[Prototype]]
// :
// Object

import { db } from "@/app/firebase.config.js";
import { collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { arrayUnion } from "firebase/firestore";

export async function getUserData(userId) {
  const userDocRef = doc(collection(db, "users"), userId);
  const userDoc = await getDoc(userDocRef);
  return userDoc.data();
}
// Bookmarks operations start
//
//
export async function getBookmarkData(userId) {
  const userDocRef = doc(collection(db, "users"), userId);
  const userDoc = await getDoc(userDocRef);
  return userDoc.data().bookmarkData.bookmarks;
}

export async function updateBookmarkData(userId, bookmarks) {
  await updateDoc(doc(collection(db, "users"), userId), {
    "bookmarkData.bookmarks": bookmarks,
  });
}

export async function addBookmark(userId, bookmark) {
  await updateDoc(doc(collection(db, "users"), userId), {
    "bookmarkData.bookmarks": arrayUnion(bookmark),
  });
}
// Bookmarks operations end
//
//

export async function updateCartData(userId, cart) {
  await updateDoc(doc(collection(db, "users"), userId), {
    cart: cart,
  });
}

export async function updateCouponData(userId, coupons) {
  await updateDoc(doc(collection(db, "users"), userId), {
    "coupons.coupons": coupons,
  });
}

export async function updateDeliveryData(userId, addresses) {
  await updateDoc(doc(collection(db, "users"), userId), {
    "delivery.addresses": addresses,
  });
}

export async function updateSelectedOrderDetails(
  userId,
  deliveryDetails,
  paymentCardDetails,
  discountCouponDetails
) {
  await updateDoc(doc(collection(db, "users"), userId), {
    "selectedOrderDetails.deliveryDetails": deliveryDetails,
    "selectedOrderDetails.paymentCardDetails": paymentCardDetails,
    "selectedOrderDetails.discountCouponDetails": discountCouponDetails,
  });
}

export async function updatePaymentData(userId, cards) {
  await updateDoc(doc(collection(db, "users"), userId), {
    "payment.cards": cards,
  });
}

export async function updateOrderHistory(userId, orders) {
  await updateDoc(doc(collection(db, "users"), userId), {
    "orderHistory.orders": orders,
  });
}

export async function addCoupon(userId, coupon) {
  const userDoc = await getDoc(doc(collection(db, "users"), userId));
  const coupons = userDoc.data().coupons.coupons;
  coupons.push(coupon);
  await updateDoc(doc(collection(db, "users"), userId), {
    "coupons.coupons": coupons,
  });
}

export async function deleteCoupon(userId, couponId) {
  const userDoc = await getDoc(doc(collection(db, "users"), userId));
  const coupons = userDoc
    .data()
    .coupons.coupons.filter((coupon) => coupon.id !== couponId);
  await updateDoc(doc(collection(db, "users"), userId), {
    "coupons.coupons": coupons,
  });
}

export async function addAddress(userId, address) {
  const userDoc = await getDoc(doc(collection(db, "users"), userId));
  const addresses = userDoc.data().delivery.addresses;
  addresses.push(address);
  await updateDoc(doc(collection(db, "users"), userId), {
    "delivery.addresses": addresses,
  });
}

export async function deleteAddress(userId, addressId) {
  const userDoc = await getDoc(doc(collection(db, "users"), userId));
  const addresses = userDoc
    .data()
    .delivery.addresses.filter((address) => address.id !== addressId);
  await updateDoc(doc(collection(db, "users"), userId), {
    "delivery.addresses": addresses,
  });
}

export async function addPaymentCard(userId, card) {
  const userDoc = await getDoc(doc(collection(db, "users"), userId));
  const cards = userDoc.data().payment.cards;
  cards.push(card);
  await updateDoc(doc(collection(db, "users"), userId), {
    "payment.cards": cards,
  });
}

export async function deletePaymentCard(userId, cardNumber) {
  const userDoc = await getDoc(doc(collection(db, "users"), userId));
  const cards = userDoc
    .data()
    .payment.cards.filter((card) => card.cardNumber !== cardNumber);
  await updateDoc(doc(collection(db, "users"), userId), {
    "payment.cards": cards,
  });
}

export async function placeOrder(userId, order) {
  const userDoc = await getDoc(doc(collection(db, "users"), userId));
  const orders = userDoc.data().orderHistory.orders;
  orders.push(order);
  await updateDoc(doc(collection(db, "users"), userId), {
    "orderHistory.orders": orders,
  });
}
