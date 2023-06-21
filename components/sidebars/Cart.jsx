import React from "react";
import "./Cart.css";
import { FaTimes } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Cartitem from "../Cart/Cartitem";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

function Cart(props) {
  const router = useRouter();
  const classNames = `cart-overlay ${props.ishidden ? "hidden" : ""}`;
  const cart = useSelector((state) => state.cart);
  const totalamount = cart.totalAmount;
  const totalquantity = cart.totalCount;
  const cartitems = cart.data;

  const handlerouter = () => {
    props.onshowcart();
    router.push(`/checkout`);
  };

  return (
    <div className={classNames}>
      <button className="close_cart_button" onClick={props.onshowcart}>
        <FaTimes className="close_cart_icon" />
      </button>
      <div className="cart_title">
        <AiOutlineShoppingCart className="cart_title_icon" />
        <h2>Cart</h2>
        {totalamount > 0 && <h2>{totalquantity}</h2>}
      </div>
      <div className="orderitems_container">
        {cartitems.map((item) => (
          <Cartitem key={item.recipe_id} item={item} />
        ))}
      </div>

      {totalquantity > 0 && (
        <div className="cart_footer">
          <h3>Total Amount : &#8377; {totalamount}</h3>
          <button className="cart_checkout_button" onClick={handlerouter}>
            Checkout
          </button>
        </div>
      )}

      {totalquantity === 0 && <h1 className="cartempty">Cart Empty</h1>}
    </div>
  );
}

export default Cart;

//
//
//
//
//
// import React, { useState, useEffect } from "react";
// import "./Cart.css";
// import { FaTimes } from "react-icons/fa";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import Cartitem from "../Cart/Cartitem";
// import { useRouter } from "next/navigation";
// import { getCartData } from "@/app/tempcart.js";
// import { useSelector } from "react-redux";

// function Cart(props) {
//   const user = useSelector((state) => state.userauth.user);
//   const uid = user ? user.uid : null;
//   const router = useRouter();
//   const classNames = `cart-overlay ${props.ishidden ? "hidden" : ""}`;
//   const [cart, setCart] = useState({ data: [], totalAmount: 0, totalCount: 0 });

//   useEffect(() => {
//     if (!uid) return;
//     async function loadCartData(uid) {
//       const cartData = await getCartData(uid);
//       setCart(cartData);
//     }
//     loadCartData(uid);
//   }, []);

//   const totalamount = cart.totalAmount;
//   const totalquantity = cart.totalCount;
//   const cartitems = cart.data;

//   const handlerouter = () => {
//     props.onshowcart();
//     router.push(`/checkout`);
//   };

//   return (
//     <div className={classNames}>
//       <button className="close_cart_button" onClick={props.onshowcart}>
//         <FaTimes className="close_cart_icon" />
//       </button>
//       <div className="cart_title">
//         <AiOutlineShoppingCart className="cart_title_icon" />
//         <h2>Cart</h2>
//         {totalamount > 0 && <h2>{totalquantity}</h2>}
//       </div>
//       <div className="orderitems_container">
//         {cartitems.map((item) => (
//           <Cartitem key={item.recipe_id} item={item} />
//         ))}
//       </div>

//       {totalquantity > 0 && (
//         <div className="cart_footer">
//           <h3>Total Amount : &#8377; {totalamount}</h3>
//           <button className="cart_checkout_button" onClick={handlerouter}>
//             Checkout
//           </button>
//         </div>
//       )}

//       {totalquantity === 0 && <h1 className="cartempty">Cart Empty</h1>}
//     </div>
//   );
// }

// export default Cart;