import React, { useState, useEffect } from "react";
import { checkAndAddSepoliaNetwork } from "../../utils/AddSepolia";
import "./landing.css";
import arrow from "../../assets/arrow_right_alt.png";
import logo from "../../assets/mchango logo 1.png";
import { useNavigate } from "react-router-dom";
import { useAccount } from "../../AccountContext"; // Import the custom hook

const Landing = () => {
  const navigate = useNavigate();
  const [isConnected, setIsConnected] = useState(false);
  const { account, setAccount } = useAccount(); // Use the custom hook to access account
  const userAdd = account[0];
  console.log(userAdd);
  const connectWallet = async (event) => {
    event.preventDefault();

    try {
      if (isConnected) {
        disconnectWallet();
      } else {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        if (accounts.length > 0) {
          setAccount(accounts[0]);
          setIsConnected(true);
          console.log(`Selected Account: ${accounts[0]}`);
          navigate("/home"); // Navigate to '/home' after successfully connecting the wallet
        }
      }
    } catch (error) {
      setIsConnected(false);
      setAccount("");
      console.log(`Error: ${error.message}`);
    }
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setAccount("");
  };

  useEffect(() => {
    checkAndAddSepoliaNetwork();
  }, []);

  useEffect(() => {
    if (!isConnected) {
      console.log("Wallet disconnected");
    }
  }, [isConnected]);

  return (
    <div className="landing__pg">
      <div className="landing_pg__cont">
        <div className="landing_pg__img"></div>
        <div className="landing_pg__text">
          <div className="main__text">
            <div className="bg">
              <img src={logo} alt="" />
            </div>
            <h2>Gateway to Smart Savings and Contributions</h2>
            <p>
              Join a host of forward-thinking group and start on a path of
              mutual financial progress. Create or join groups with ease,
              establish contribution objectives, and watch your money grow using
              smart contracts.
              <br /> <br />
              <span className="sm">
                Initiate saving, active participation, and fostering growth.
              </span>
            </p>
          </div>

          <ul>
            <li className="sign_up__btn">
              <a href="/signup">Sign Up</a>
            </li>
            <li className="contact__btn" style={{ backgroundColor: "#7615ba" }}>
              <button onClick={connectWallet}>
                {isConnected ? (
                  <>
                    {account.substring(0, 6)}...
                    {account.substring(account.length - 6)}
                  </>
                ) : (
                  "Connect Wallet"
                )}
              </button>

              <img src={arrow} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Landing;
