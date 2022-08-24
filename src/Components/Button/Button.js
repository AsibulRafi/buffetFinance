import React from "react";

import "./button.css";
const Button = ({ button1, button2 }) => {
  return (
    <div className="button-container">
      <a href="https://web-trader.online/" className="button1">
        {button1}
      </a>
      <a href="https://web-trader.online/" className="button2">
        {button2}
      </a>
    </div>
  );
};

export default Button;
