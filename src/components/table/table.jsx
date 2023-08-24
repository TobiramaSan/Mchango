import React, { useState } from "react";
import "./table.css";
import Grouppic from "../../assets/GroupPic.png";
import Eth from "../../assets/Eth.png";
import { useNavigate } from "react-router-dom";

const Table = () => {
  const navigation = useNavigate();
  const [showCreate, setShowCreate] = useState("Top");
  return (
    <div className="table">
      <div className="table-cont">
        <div className="top-active">
          <div className="top-num">
            <p
              onClick={() => {
                setShowCreate("Top");
              }}
            >
              Top Groups
            </p>
          </div>
          <div className="active-num">
            <p
              onClick={() => {
                setShowCreate("Active");
              }}
            >
              Active Groups
            </p>
          </div>

          <button
            className="Button"
            onClick={() => {
              navigation("/create-group");
            }}
          >
            Create New Group
          </button>
        </div>
        <div className="long-line"></div>

        <input
          type="text"
          id="mini-search"
          name="search"
          placeholder="Search"
        />
        {showCreate === "Top" ? (
          <ul className="main-table">
            <li>
              <div>
                <h1>Thrift name</h1>
                <div className="name main ">
                  <div className="name-pic">
                    <img src={Grouppic} alt="" />
                    <p>Adventure Fund</p>
                  </div>
                  <div className="name-pic">
                    <img src={Grouppic} alt="" />
                    <p>Adventure Fund</p>
                  </div>
                  <div className="name-pic">
                    <img src={Grouppic} alt="" />
                    <p>Adventure Fund</p>
                  </div>
                  <div className="name-pic">
                    <img src={Grouppic} alt="" />
                    <p>Adventure Fund</p>
                  </div>
                  <div className="name-pic">
                    <img src={Grouppic} alt="" />
                    <p>Adventure Fund</p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div>
                <h1>Revenue Generated</h1>
                <div className="ether-table main">
                  <div className="ether">
                    <img src={Eth} alt="" />
                    <p>
                      13.6k ETH <span>(113.34%)</span>
                    </p>
                  </div>
                  <div className="ether">
                    <img src={Eth} alt="" />
                    <p>
                      13.6k ETH <span>(113.34%)</span>
                    </p>
                  </div>
                  <div className="ether">
                    <img src={Eth} alt="" />
                    <p>
                      13.6k ETH <span>(113.34%)</span>
                    </p>
                  </div>
                  <div className="ether">
                    <img src={Eth} alt="" />
                    <p>
                      13.6k ETH <span>(113.34%)</span>
                    </p>
                  </div>
                  <div className="ether">
                    <img src={Eth} alt="" />
                    <p>
                      13.6k ETH <span>(113.34%)</span>
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div>
                <h1>Next Contribution Day</h1>
                <div className="date-main main">
                  <div className="date">
                    <p>31st August, 2023.</p>
                  </div>
                  <div className="date">
                    <p>31st August, 2023.</p>
                  </div>
                  <div className="date">
                    <p>31st August, 2023.</p>
                  </div>
                  <div className="date">
                    <p>31st August, 2023.</p>
                  </div>
                  <div className="date">
                    <p>31st August, 2023.</p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div>
                <h1>No of Members</h1>
                <div className="number-main main">
                  <div className="number">
                    <p>350</p>
                  </div>
                  <div className="number">
                    <p>350</p>
                  </div>
                  <div className="number">
                    <p>350</p>
                  </div>
                  <div className="number">
                    <p>350</p>
                  </div>
                  <div className="number">
                    <p>350</p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div>
                <h1>Date Created</h1>
                <div className="last-date-main main">
                  <div className="date">
                    <p>31st August, 2023.</p>
                  </div>
                  <div className="date">
                    <p>31st August, 2023.</p>
                  </div>
                  <div className="date">
                    <p>31st August, 2023.</p>
                  </div>
                  <div className="date">
                    <p>31st August, 2023.</p>
                  </div>
                  <div className="date">
                    <p>31st August, 2023.</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        ) : showCreate === "Active" ? (
          <div className="active-group">
            <div className="table2-cont">
              <div className="transact">
                <div className="main-transact">
                  <p>Recent Transactions</p>
                  <span>See all</span>
                </div>
                <ul className="list">
                  <li>Thrift name</li>
                  <li>Date</li>
                  <li>Status</li>
                  <li>Amount</li>
                  <li>Action</li>
                </ul>
              </div>
              <div className="text-img">
                <div className="text">
                  <h1>Oops!</h1>
                  <p>
                    You have not made any transaction on Mchango_. Join thrift
                    groups and start transacting.
                  </p>
                </div>
                <div className="image"></div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Table;
