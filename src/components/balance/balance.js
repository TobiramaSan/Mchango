import React from "react";
import "./balance.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
// import { faArrowTrendDown } from "@fortawesome/free-solid-svg-icons";
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
// import Arrowup from "../../assets/🦆 icon _diagonal arrow right up outline_.png";
// import Arrowdown from "../../assets/🦆 icon _diagonal arrow left down_.png";
import Line from "../../assets/Line 8.png";
const Balance = () => {
  return (
    <div className="balance">
      <div className="balance_cont">
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
            <div>
              {/* <img className="arrow" src={Arrowup} alt="" /> */}
              {/* <FontAwesomeIcon icon={faArrowTrendUp} /> */}
            </div>
          </div>
          <div className="line">
            <img src={Line} alt="" />
          </div>
          <div className="expense">
            <p>Expenses</p>
            <p>$ 8.769,04</p>
            <div>
              {/* <img className="arrow" src={Arrowdown} alt="" /> */}
              {/* <FontAwesomeIcon icon={faArrowTrendDown} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
