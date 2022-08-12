import classes from "./Input.module.css";
import React from "react";
// wrap the component func with
//and passed ref to allow to read entered value in submit handler func
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
