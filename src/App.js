import React, { Fragment, useState } from "react";
import Header from "./Components/Layout/Header";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandle = () => {
    setCartIsShown(true);
  };
  const hideCartHandle = () => {
    setCartIsShown(false);
  };
  return (
    <Fragment>
      {cartIsShown && <Cart onHideCart={hideCartHandle}/>}
      <Header onShowCart={showCartHandle} />
      <main>
        <Products />
      </main>
    </Fragment>
  );
}

export default App;
