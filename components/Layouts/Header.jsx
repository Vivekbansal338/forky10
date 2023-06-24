"use client";
import { useCallback, useRef } from "react";
import "./header.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { searchResultsActions } from "@/store/searchresults";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

function Header(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userauth.user);
  const searchInputRef = useRef(null);
  const cartcount = props.cartcount;
  const router = useRouter();
  const loggedin = useSelector((state) => state.userauth.user);

  const performSearch = useCallback(async () => {
    router.push("/searchresults");
    if (searchInputRef.current.value.length > 0) {
      const apiUrl = `https://forkify-api.herokuapp.com/api/search?q=${searchInputRef.current.value}`;
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.error) {
          console.log("An error occurred:", data.error);
          return;
        }
        dispatch(searchResultsActions.setSearchResults(data.recipes));
        searchInputRef.current.value = "";
        searchInputRef.current.blur();
      } catch (error) {
        console.log("An error occurred:", error);
      }
    }
  }, [dispatch]);

  const handleSearchFormSubmit = useCallback(
    (event) => {
      event.preventDefault();
      performSearch();
    },
    [performSearch]
  );

  const handleshowcart = () => {
    if (user) {
      props.onshowcart();
    } else {
      router.push("/login");
    }
  };

  return (
    <header className="header_container">
      <div className="left_options_container">
        <Link href="/" className="imglink">
          <img src="https://i.ibb.co/fnXStt2/bibimbap.png" alt="Forkify" />
        </Link>
        <button className="sidebar_button" onClick={props.onshownavbar}>
          <AiOutlineMenu className="left_sidebar_icon" />
        </button>
        <Link href="/" className="sidebar_button">
          <FaHome className="left_sidebar_icon" />
        </Link>
      </div>
      <div className="header_search_container">
        <form onSubmit={handleSearchFormSubmit}>
          <input
            className="header__search_input"
            type="text"
            placeholder="Search over 1,000,000 recipes..."
            ref={searchInputRef}
          />
          <div className="header_search-button_container">
            <button className="header_search-button" type="submit">
              <BiSearchAlt2 className="header_search-icon" />
            </button>
          </div>
        </form>
      </div>
      <div className="right_options_container">
        {loggedin && (
          <img src={loggedin.photoURL} alt="profile" className="profileimg" />
        )}
        {!loggedin && (
          <img
            src="https://i.ibb.co/frY3nDs/pngwing-png.png"
            alt="profile"
            className="profileimg"
            onClick={() => router.push("/login")}
          />
        )}

        <button className="sidebar_button_right" onClick={props.onshowcart}>
          <AiOutlineShoppingCart className="right_cart_icon" />
          {cartcount > 0 && <span className="cartcount">{cartcount}</span>}
        </button>
      </div>
    </header>
  );
}

export default Header;
