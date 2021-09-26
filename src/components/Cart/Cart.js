import React from "react";

import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;

  // This nameArr collect all the unique name
  let nameArr = [];

  // This employeeNameArr collect all the name how many times user cliked on button
  let employeeNameArr = [];
  // Here in this arr unique salary are collecting same as name
  let totalCountArr = [];

  // Here this for loop check the unique name and salary for display
  for (const employee of cart) {
    employeeNameArr.push(employee.name);
    if (!nameArr.includes(employee.name))
      nameArr.push(employee.name) && totalCountArr.push(employee.salary);
  }

  // Counting total Amount in Cart
  let total = totalCountArr.reduce((previous, next) => previous + next, 0);
  return (
    <div>
      <h2>Total Developer Hired : {nameArr.length}</h2>
      <hr />
      <h2>Total : $ {total} </h2>
      <hr />
      <h2>Selected Developers Name : </h2>
      {nameArr.map((name) => (
        // Here I pass name as a key.
        <p key={name} className="cart-employee">
          {name}
        </p>
      ))}
    </div>
  );
};

export default Cart;
