import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <h1>Our Pro developers are here</h1>
      <p>
        When to use iterative development? You should use iterative development
        only on projects that you want to succeed
      </p>
      <h2>
        Total Budget : <span className="budget">300 Million</span>
      </h2>
    </div>
  );
};

export default Header;
