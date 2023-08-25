import React, { useState, useEffect } from 'react';
import { checkAndAddSepoliaNetwork } from '../../utils/AddSepolia';
// import { NavLink } from "react-router-dom";
import './landing.css';
import arrow from '../../assets/arrow_right_alt.png';

const Landing = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState('');
  const connectWallet = async (event) => {
    event.preventDefault();
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      if (accounts.length > 0) {
        setAccount(accounts[0]);
        setIsConnected(true);
        console.log(`Selected Account: ${accounts[0]}`);
      } else {
        setIsConnected(false); // Set isConnected to false if no accounts are returned
      }
    } catch (error) {
      setIsConnected(false);
      setAccount('');
      console.log(`Error: ${error.message}`);
    }
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setAccount('');
  };

  useEffect(() => {
    checkAndAddSepoliaNetwork();
  }, []);

  useEffect(() => {
    if (!isConnected) {
      console.log('Wallet disconnected');
    }
  }, [isConnected]);

  const renderWalletAddress = () => {
    if (isConnected && typeof account === 'string') {
      const firstSixDigits = account.substring(0, 6);
      const lastSixDigits = account.substring(account.length - 6);
      return <span>{`${firstSixDigits}...${lastSixDigits}`}</span>;
    }
    return null;
  };

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
            <li className="contact__btn">
              <a href="/" onClick={(event) => connectWallet(event)}>
                {isConnected ? renderWalletAddress() : 'Connect Wallet'}
              </a>
              <img src={arrow} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Landing;
