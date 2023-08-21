import React from "react";
import "./balance.css";
import Arrowup from "../../assets/🦆 icon _diagonal arrow right up outline_.png";
import Arrowdown from "../../assets/🦆 icon _diagonal arrow left down_.png";
const Balance = () => {
  return (
    <div className="balance">
      <div className="balance_main">
        <div className="balance_output">
          <p>Balance</p>
          <p>$ 68,789.44</p>
        </div>
        <div className="rate">
          <span>4.8%</span>
        </div>
      </div>
      <div className="income_expense">
        <div className="income">
          <p>Income</p>
          <p>$ 21.548,44</p>
          <img src={Arrowup} alt="" />
        </div>
        <div className="expense">
          <p>Expenses</p>
          <p>$ 8.769,04</p>
          <img src={Arrowdown} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Balance;
