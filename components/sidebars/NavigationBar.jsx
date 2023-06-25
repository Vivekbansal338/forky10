import React from "react";
import {
  FaUser,
  FaBookmark,
  FaHistory,
  FaChartPie,
  FaSignOutAlt,
  FaSignInAlt,
  FaTimes,
  FaHome,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import "./NavigationBar.css";
import { useDispatch } from "react-redux";
import { signOut } from "@/store/userauth";
import { useSelector } from "react-redux";
import { getUserData } from "@/firestorefunctions/allfunctions/all.js";
import { useEffect } from "react";

function NavigationBar(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const classNames = `navigationbar-overlay ${props.ishidden ? "hidden" : ""}`;
  const user = useSelector((state) => state.userauth.user);

  // useEffect(() => {
  //   if (user) {
  //     async function loadData(uid) {
  //       const userDoc = await getUserData(uid);
  //       // dispatch(BookmarkActions.loadBookmarks(userDoc.bookmarkData.bookmarks));
  //       // dispatch(cartActions.loadcart(userDoc.cart));
  //     }
  //     // loadData(user.uid);
  //   } else {
  //     // dispatch(BookmarkActions.clearBookmarkslogout());
  //     // dispatch(cartActions.emptycartlogout());
  //     // dispatch(PaymentDeliveryActions.clearPaymentDeliverylogout());
  //   }
  // }, [user]);

  function handlelogin() {
    router.push("/login");
    props.onshownavbar();
  }

  async function handlelogout() {
    dispatch(signOut());
    router.push("/");
    props.onshownavbar();
  }

  function handleClick(path) {
    if (user || path === "/") {
      router.push(path);
    } else {
      router.push("/login");
    }
    props.onshownavbar();
  }

  return (
    <div className={classNames}>
      <button className="close_navbar_button" onClick={props.onshownavbar}>
        <FaTimes />
      </button>
      <ul>
        <li>
          <div onClick={() => handleClick("/")}>
            <FaHome />
            <span>Home</span>
          </div>
        </li>

        <li>
          <div onClick={() => handleClick("/myaccount")}>
            <FaUser />
            <span>My Account</span>
          </div>
        </li>
        <li>
          <div onClick={() => handleClick("/mybookmarks")}>
            <FaBookmark />
            <span>Bookmarks</span>
          </div>
        </li>
        <li>
          <div onClick={() => handleClick("/orderHistory")}>
            <FaHistory />
            <span>Order History</span>
          </div>
        </li>
        <li>
          <div onClick={() => handleClick("/spentanalysis")}>
            <FaChartPie />
            <span>Spent Analysis</span>
          </div>
        </li>

        {user && (
          <li>
            <div onClick={handlelogout}>
              <FaSignOutAlt />
              <span>Logout</span>
            </div>
          </li>
        )}
        {!user && (
          <li>
            <div onClick={handlelogin}>
              <FaSignInAlt />
              <span>Login</span>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
}

export default NavigationBar;
