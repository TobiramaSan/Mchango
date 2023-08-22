import React from "react";
import "./connectWallet.css";
import cancel from "../../assets/cancel.png";
import { NavLink } from "react-router-dom";
const ConnectWallet = () => {
  return (
    <div className="connect-wallet">
      <div className="cancels">
        <img src={cancel} alt="" />
      </div>

      <div>
        <p>Connect Your Wallet</p>
      </div>

      <NavLink to="/home">
        <button>Enter</button>
      </NavLink>
    </div>
  );
};

export default ConnectWallet;
