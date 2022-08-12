import classes from "./ProductItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";
const ProductItemForm = (props) => {
  //Used to view the error input
  const [isAmountValid, setIsAmountValid] = useState(true);
  //Connected the Entered Amount Using Ref in ProductItemForm.js
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    //value: is always string number so + make it number
    const enteredAmount = +amountInputRef.current.value;

    if (
      amountInputRef.current.value.trim().length === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 100
    ) {
      setIsAmountValid(false);
      return;
    }
    props.onAddToCart(enteredAmount);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: 1,
          max: 100,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button>+ Add</button>
      {!isAmountValid && <p>Please, enter a valid amount (1-100)!</p>}
    </form>
  );
};

export default ProductItemForm;
