import React, { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
//Header
//Image
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Market</h1>

        <img
          src=" https://ik.imagekit.io/ofb/ofb/dev/OFBLogo_ccxPqKWYrw.png?tr=dpr-2,pr-true,f-auto,w-180"
          alt="Open4Business Logo"
        />
        <HeaderCartButton onClick={props.onShowCart} />
        {/* <button>Cart</button> */}
      </header>
      <div className={classes["main-image"]}>
        <img
          src="https://ik.imagekit.io/ofb/store/main/store/20180522154/assets/category/images/food.jpg"
          alt="Market Backgroung!"
        />
      </div>
    </Fragment>
  );
};

export default Header;
