"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
// import DetailImg from "@/components/DetailsSection/DetailImg";
// import DetailOther from "@/components/DetailsSection/DetailOther";
// import DetailIngredients from "@/components/DetailsSection/DetailIngredients";
// import DetailCooking from "@/components/DetailsSection/DetailCooking";
import "./page.css";

function Details(props) {
  const [clickedelementdetails, setClickedelementdetails] = useState("");
  const router = useRouter();
  const { id } = router.query;

  // console.log("Details.jsx");
  // console.log(props);
  // const id = props.id;
  // const elementdetails = props.elementdetails.details.recipe;

  function Handleclick() {
    console.log(id);
    // const apiUrl = `https://forkify-api.herokuapp.com/api/get?rId=${id}`;
    // fetch(apiUrl)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setClickedelementdetails(data);
    //   })
    //   .catch((error) => {
    //     console.log("An error occurred:", error);
    //   });
  }

  return (
    <div className="hero_recipe_detail " onClick={Handleclick}>
      {/* <DetailImg elementdetails={elementdetails} />
      <DetailOther elementdetails={props.elementdetails} />
      <DetailIngredients elementdetails={elementdetails} />
      <DetailCooking elementdetails={elementdetails} /> */}
    </div>
  );
}

export default Details;

// &#8377;

// {
//   appliedCoupon: {
//     discountRate: 0.1,
//     maximumDiscountAmount: 500,
//   },
//   deliverydetails: {
//     data: {
//       id: 2,
//       name: 'Jane Smith',
//       address: '456 Elm Avenue',
//       city: 'Town',
//       state: 'Province',
//       zipCode: '67890',
//     },
//   },
//   items: [
//     {

//       ingredients: ['ingredient1', 'ingredient2'],
//       recipe_id: '35477',
//       image_url: 'http://forkify-api.herokuapp.com/images/Pizza2BDip2B12B500c4c0a26c.jpg',
//       price: 70
//       publisher: "Closet Cooking"
//       publisher_url: "http://closetcooking.com"
//       quantity: 5
//       social_rank: 99.99999999999994
//       source_url: "http://www.closetcooking.com/2011/03/pizza-dip.html"
//       title: "Pizza Dip"
//     },
//     {
//       publisher: 'Closet Cooking',
//       ingredients: ['ingredient3', 'ingredient4'],
//       source_url: 'http://www.closetcooking.com/2013/02/cauliflower-pizza-crust-with-bbq.html',
//       recipe_id: '41470',
//       image_url: 'http://forkify-api.herokuapp.com/images/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg',
//       // ...
//     }
//   ],
//   paymentdetails: {
//     data: '1234 5678 9012 3456',
//   },
// };

// const app =
//   firebase.getApps().length > 0
//     ? firebase.getApp()
//     : firebase.initializeApp(firebaseConfig);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
