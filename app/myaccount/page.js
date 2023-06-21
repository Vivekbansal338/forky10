// import DeliveryCard from "@/components/MyAccount/DeliveryCard";
// import PaymentCard from "@/components/MyAccount/PaymentCard";
// import ProfileCard from "@/components/MyAccount/ProfileCard";
// import "./page.css";

// function Myaccount() {
//   const deliveryAddresses = [
//     {
//       id: 1,
//       name: "John Doe",
//       address: "123 Main Street",
//       city: "City",
//       state: "State",
//       zipCode: "12345",
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       address: "456 Elm Avenue",
//       city: "Town",
//       state: "Province",
//       zipCode: "67890",
//     },
//     {
//       id: 3,
//       name: "Robert Johnson",
//       address: "789 Oak Drive",
//       city: "Village",
//       state: "County",
//       zipCode: "13579",
//     },
//   ];
//   const CarddummydataData = [
//     {
//       bankName: "State Bank Of India",
//       cardNumber: "1234 5678 9012 3456",
//       cardHolder: "John Doe",
//       expirationDate: "12/24",
//       cardChip: "MasterCard",
//       cvv: "123",
//     },
//     {
//       bankName: "Axis Bank",
//       cardNumber: "9876 5432 1098 7654",
//       cardHolder: "Jane Smith",
//       expirationDate: "09/23",
//       cardChip: "Visa",
//       cvv: "456",
//     },
//     {
//       bankName: "HDFC Bank",
//       cardNumber: "5555 1234 5678 9012",
//       cardHolder: "Robert Johnson",
//       expirationDate: "06/25",
//       cardChip: "Rupay",
//       cvv: "789",
//     },
//   ];
//   const profileData = [
//     {
//       id: 1,
//       name: "John Doe",
//       gender: "Male",
//       phone: "123-456-7890",
//       age: 30,
//       image: "profile-image1.jpg",
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       gender: "Female",
//       phone: "987-654-3210",
//       age: 25,
//       image: "profile-image2.jpg",
//     },
//   ];

//   return (
//     <div className="Myaccount_container">
//       <div className="title_container">
//         <h1>My Account</h1>
//       </div>

//       <div className="profile_container">
//         {profileData.map((profile) => (
//           <ProfileCard key={profile.id} profile={profile} />
//         ))}
//       </div>
//       <div className="delivery_container">
//         {deliveryAddresses.map((address) => (
//           <DeliveryCard key={address.id} address={address} />
//         ))}
//       </div>
//       <div className="payment_container">
//         {CarddummydataData.map((card) => (
//           <PaymentCard key={card.cardNumber} card={card} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Myaccount;

// <div>
//   <div className="title">
//     <h1>Delivery Address</h1>
//   </div>
//   <div className="delivery_container">
//     {deliveryAddresses.map((address) => (
//       <DeliveryCard key={address.id} address={address} />
//     ))}
//   </div>
// </div>;

import DeliveryCard from "@/components/MyAccount/DeliveryCard";
import PaymentCard from "@/components/MyAccount/PaymentCard";
import ProfileCard from "@/components/MyAccount/ProfileCard";
import "./page.css";

function Myaccount() {
  const deliveryAddresses = [
    {
      id: 1,
      name: "John Doe",
      address: "123 Main Street",
      city: "City",
      state: "State",
      zipCode: "12345",
    },
    {
      id: 2,
      name: "Jane Smith",
      address: "456 Elm Avenue",
      city: "Town",
      state: "Province",
      zipCode: "67890",
    },
    {
      id: 3,
      name: "Robert Johnson",
      address: "789 Oak Drive",
      city: "Village",
      state: "County",
      zipCode: "13579",
    },
  ];
  const CarddummydataData = [
    {
      bankName: "State Bank Of India",
      cardNumber: "1234 5678 9012 3456",
      cardHolder: "John Doe",
      expirationDate: "12/24",
      cardChip: "MasterCard",
      cvv: "123",
    },
    {
      bankName: "Axis Bank",
      cardNumber: "9876 5432 1098 7654",
      cardHolder: "Jane Smith",
      expirationDate: "09/23",
      cardChip: "Visa",
      cvv: "456",
    },
    {
      bankName: "HDFC Bank",
      cardNumber: "5555 1234 5678 9012",
      cardHolder: "Robert Johnson",
      expirationDate: "06/25",
      cardChip: "Rupay",
      cvv: "789",
    },
  ];
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
          {deliveryAddresses.map((address) => (
            <DeliveryCard key={address.id} address={address} />
          ))}
        </div>
      </div>

      <div className="myaccount_containers">
        <div className="title">
          <h2>Payment Cards</h2>
        </div>
        <div className="payment_items">
          {CarddummydataData.map((card) => (
            <PaymentCard key={card.cardNumber} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Myaccount;
