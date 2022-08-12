import { useReducer } from "react";
import CartContext from "./cart-context";

//To manage the items in the cart we user useReducer and cartReducer
//no need to create it every time CartProvider is called and it is independent
//2:initialState
const defaultCartState = { items: [], totalAmount: 0 };

//1:reducerFn: action is connected to dispatchCartAction
const cartReducer = (state, action) => {
  //***To do: check is the item part of the array??
  if (action.type === "ADD") {
    const updatedAmount =
      state.totalAmount + action.item.price * action.item.amount;
    //#####NEW The following is for checking if the item is already available
    const exitstingCartItemIndex = state.items.findIndex(
      (item) => state.id == action.item.id
    );
    const exitstingCartItem = state.items[exitstingCartItemIndex];
    let updatedItems;
    if (exitstingCartItem) {
      const updatedItem = {
        ...exitstingCartItem,
        amount: exitstingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[exitstingCartItemIndex] = updatedItem;
    } else {
      //Concat Vs Push: Concat will return a new array with the new value and does not add it to the used one
      updatedItems = state.items.concat(action.item);
    }


    return { items: updatedItems, totalAmount: updatedAmount };
  } else if (action.type == "REMOVE") {
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  //3:****************** The Base
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    //5:use dispatchFn: property to identify the action inside the reducer func- so differenct actions run depending on dispactch property
    dispatchCartAction({ type: "ADD", item: item }); //ALL CAPS //Item is forwarded
  };
  const removeItemFromCartHandler = (id) => {
    //5:use dispatchFn:
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    //4:
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
