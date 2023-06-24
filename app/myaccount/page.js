"use client";
// const deliveryAddresses = [
//   {
//     id: 1,
//     name: "John Doe",
//     address: "123 Main Street",
//     city: "City",
//     state: "State",
//     zipCode: "12345",
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     address: "456 Elm Avenue",
//     city: "Town",
//     state: "Province",
//     zipCode: "67890",
//   },
//   {
//     id: 3,
//     name: "Robert Johnson",
//     address: "789 Oak Drive",
//     city: "Village",
//     state: "County",
//     zipCode: "13579",
//   },
// ];
// const CarddummydataData = [
//   {
//     bankName: "State Bank Of India",
//     cardNumber: "1234 5678 9012 3456",
//     cardHolder: "John Doe",
//     expirationDate: "12/24",
//     cardChip: "MasterCard",
//     cvv: "123",
//   },
//   {
//     bankName: "Axis Bank",
//     cardNumber: "9876 5432 1098 7654",
//     cardHolder: "Jane Smith",
//     expirationDate: "09/23",
//     cardChip: "Visa",
//     cvv: "456",
//   },
//   {
//     bankName: "HDFC Bank",
//     cardNumber: "5555 1234 5678 9012",
//     cardHolder: "Robert Johnson",
//     expirationDate: "06/25",
//     cardChip: "Rupay",
//     cvv: "789",
//   },
// ];
const profileData = [
  {
    id: 1,
    name: "John Doe",
    gender: "Male",
    phone: "123-456-7890",
    age: 30,
    image: "profile-image1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    gender: "Female",
    phone: "987-654-3210",
    age: 25,
    image: "profile-image2.jpg",
  },
];
// import DeliveryCard from "@/components/MyAccount/DeliveryCard";
// import PaymentCard from "@/components/MyAccount/PaymentCard";
// import ProfileCard from "@/components/MyAccount/ProfileCard";
// import { useSelector } from "react-redux";
// import "./page.css";

// function Myaccount() {
//   const paymentdeliverydata = useSelector((state) => state.PaymentDelivery);
//   const deliverydata = paymentdeliverydata.delivery.addresses;
//   const paymentdata = paymentdeliverydata.payment.cards;
//   console.log(paymentdeliverydata, "check");

//   return (
//     <div className="Myaccount_items">
//       <div className="main_title">
//         <h1>My Account</h1>
//       </div>

//       <div className="myaccount_containers">
//         <div className="title">
//           <h2>My Profiles</h2>
//         </div>
//         <div className="profile_items">
//           {profileData.map((profile) => (
//             <ProfileCard key={profile.id} profile={profile} />
//           ))}
//         </div>
//       </div>

//       <div className="myaccount_containers">
//         <div className="title">
//           <h2>Delivery Addressess</h2>
//         </div>
//         <div className="delivery_items">
//           {deliverydata.map((address) => (
//             <DeliveryCard key={address.id} address={address} />
//           ))}
//         </div>
//       </div>

//       <div className="myaccount_containers">
//         <div className="title">
//           <h2>Payment Cards</h2>
//         </div>
//         <div className="payment_items">
//           {paymentdata.map((card) => (
//             <PaymentCard key={card.cardNumber} card={card} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Myaccount;

import DeliveryCard from "@/components/MyAccount/DeliveryCard";
import PaymentCard from "@/components/MyAccount/PaymentCard";
import ProfileCard from "@/components/MyAccount/ProfileCard";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/app/firebase.config";
import "./page.css";

function Myaccount() {
  const [deliverydata, setDeliverydata] = useState([]);
  const [paymentdata, setPaymentdata] = useState([]);
  const [profileData, setProfileData] = useState([]);
  const user = useSelector((state) => state.userauth.user);
  const uid = user ? user.uid : null;

  useEffect(() => {
    let unsubscribe;

    if (uid) {
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

      const ProfileCollectionRef = collection(db, "users", uid, "Profiledata");
      unsubscribe = onSnapshot(ProfileCollectionRef, (querySnapshot) => {
        const profilecards = [];
        querySnapshot.forEach((doc) => {
          const profilecard = doc.data();
          profilecards.push(profilecard);
        });
        setProfileData(profilecards);
      });
    }

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [uid]);

  return (
    <div className="Myaccount_items">
      <div className="main_title">
        <h1>My Account</h1>
      </div>
      <div className="myaccount_containers">
        <div className="title">
          <h2>My Profiles</h2>
        </div>
        <div className="profile_items">
          {profileData.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      </div>
      <div className="myaccount_containers">
        <div className="title">
          <h2>Delivery Addressess</h2>
        </div>
        <div className="delivery_items">
          {deliverydata.map((address) => (
            <DeliveryCard key={address.id} address={address} />
          ))}
        </div>
      </div>
      <div className="myaccount_containers">
        <div className="title">
          <h2>Payment Cards</h2>
        </div>
        <div className="payment_items">
          {paymentdata.map((card) => (
            <PaymentCard key={card.cardNumber} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Myaccount;
