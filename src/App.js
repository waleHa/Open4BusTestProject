import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandle = () => {
    setCartIsShown(true);
  };
  const hideCartHandle = () => {
    setCartIsShown(false);
  };
  //Cart Shows Window with Items and Total Amount
  //Header shows header and cart button
  //Products show  <AvailableProducts /> and <ProductSummary />
  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandle} />}
      <Header onShowCart={showCartHandle} />
      <main>
        <Products />
      </main>
    </CartProvider>
  );
}

export default App;
