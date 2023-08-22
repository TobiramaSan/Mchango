import React from "react";
import "./table2.css";
const Table2 = () => {
  return (
    <div className="table2">
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
              You have not made any transaction on Mchango_. Join thrift groups
              and start transacting.
            </p>
          </div>
          <div className="image"></div>
        </div>
      </div>
    </div>
  );
};

export default Table2;
