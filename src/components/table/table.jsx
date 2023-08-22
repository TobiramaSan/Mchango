import React from "react";
import "./table.css";
import Grouppic from "../../assets/GroupPic.png";
import Eth from "../../assets/Eth.png";
const Table = () => {
  return (
    <div className="table">
      <div className="table-cont">
        <div className="top-active">
          <div>
            <p>Top Groups</p>
          </div>
          <div className="active-num">
            <p>Active Groups</p>
            <span className="num">5</span>
          </div>
        </div>
        <div className="long-line"></div>

        <input
          type="text"
          id="mini-search"
          name="search"
          placeholder="Search"
        />
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
      </div>
    </div>
  );
};

export default Table;
