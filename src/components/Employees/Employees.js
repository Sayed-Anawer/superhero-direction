import React from "react";
import { useState, useEffect } from "react";
import Cart from "../Cart/Cart";
import Employee from "../Employee/Employee";
import "./Employees.css";
const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [cart, setCart] = useState([]);

  // Collect data from employee.JSON in public folder.
  useEffect(() => {
    fetch("./employee.JSON")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);

  // Handle onclick select button from Employee.js file
  const handleAddToCart = (data) => {
    const newCart = [...cart, data];
    setCart(newCart);
  };
  return (
    <>
      <div className="container">
        <div className="employee-section">
          {employees.map((employee) => (
            <Employee
              key={employee.emp_id}
              employee={employee}
              handleAddToCart={handleAddToCart}
            ></Employee>
          ))}
        </div>
        <div className="cart-section">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </>
  );
};

export default Employees;
