import React from "react";
import logo from "../assets/icons/logo.png";
import searchButton from "../assets/icons/search.png";
import accountIcon from "../assets/icons/account.png";
import cart from "../assets/icons/cart.png";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={logo} alt="logo" className={classes.logo} />
      <div className={classes.searchBox}>
        <img src={searchButton} alt="search button" />
        <input type="text" />
      </div>
      <div className={classes.userBox}>
        <img src={accountIcon} alt="account icon" className={classes.account} />
        <img src={cart} alt="cart" className={classes.cart} />
      </div>
    </header>
  );
};

export default Header;
