import React from "react";
import "./balance.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
// import { faArrowTrendDown } from "@fortawesome/free-solid-svg-icons";
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
// import Arrowup from "../../assets/🦆 icon _diagonal arrow right up outline_.png";
// import Arrowdown from "../../assets/🦆 icon _diagonal arrow left down_.png";
// import Line from "../../assets/Line 8.png";
import { Data } from "../../helpers/mockedData";
// import Data from "../../helpers/mockedData";
import { useAccount } from "../../AccountContext";

const Balance = () => {
  const { userAdd } = useAccount();
  return (
    <div className="">
      <div className="balance_cont">
        <div className="balance_main">
          <p>{userAdd}</p>
          <div className="balance_output">
            <p>Balance</p>
            <p></p>
          </div>
          <div className="rate">
            <span>{Data.rate}</span>
          </div>
        </div>
        <div className="income_expense">
          <div className="income">
            <p>Income</p>
            <p>{Data.income}</p>
            <div>
              {/* <img className="arrow" src={Arrowup} alt="" /> */}
              {/* <FontAwesomeIcon icon={faArrowTrendUp} /> */}
            </div>
          </div>
          <div className="line">{/* <img src={Line} alt="" /> */}</div>
          <div className="expense">
            <p>Expenses</p>
            <p>{Data.expense}</p>
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
