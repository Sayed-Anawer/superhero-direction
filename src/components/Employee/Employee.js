import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import "./Employee.css";
const Employee = (props) => {
  // Destructering the props
  const { name, img, salary, experiance, job_role } = props.employee;
  return (
    <div className="employee">
      <img src={img} alt="" />
      <div className="employee-description">
        <h3 className="name">{name}</h3>
        <p className="role">Role as a {job_role}</p>
        <h3 className="experiance">Experinace : {experiance}</h3>
        <h3 className="salary">Salary : $ {salary}</h3>
        <button
          onClick={() => props.handleAddToCart(props.employee)}
          className="add-btn"
        >
          <span className="cart-icon">
            {" "}
            <FontAwesomeIcon icon={faUserCheck} />
          </span>
          Select
        </button>
      </div>
    </div>
  );
};

export default Employee;
