import React from "react";
import "./notify.css";
const Notify = () => {
  return (
    <div className="notify-notification">
      <div className="notify-cont">
        <div className="main-notify">
          <div className="notify-message">
            <div className="main-message">
              <div className="message-title">
                <h1>Contribution Confirmation</h1>
                <h1>.</h1>
                <h1>Now</h1>
              </div>
              <p>New notification</p>
            </div>
            <p>
              Your contribution of $50 to the 'Wealth Builders' group has been
              successfully received.
            </p>
          </div>
          <div className="notify-message">
            <div className="main-message">
              <div className="message-title">
                <h1>Group Invitation</h1>
                <h1>.</h1>
                <h1>43 minutes ago</h1>
              </div>
              <p>New notification</p>
            </div>
            <p>
              You've been invited to join the 'Education Fund' group. Accept the
              invitation now.
            </p>
          </div>
          <div className="notify-message">
            <div className="main-message">
              <div className="message-title">
                <h1>Payment Reminder</h1>
                <h1>.</h1>
                <h1>2 hours ago</h1>
              </div>
              <p>New notification</p>
            </div>
            <p>
              Don't forget, your next contribution of $100 to the 'Philanthropy
              Circle' group is due on August 25.
            </p>
          </div>
          <div className="notify-message">
            <div className="main-message">
              <div className="message-title">
                <h1>Payment Disbursement</h1>
                <h1>.</h1>
                <h1>5 hours ago</h1>
              </div>
              <p>New notification</p>
            </div>
            <p>
              You've been invited to join the 'Education Fund' group. Accept the
              invitation now.
            </p>
          </div>
          <div className="notify-message">
            <div className="main-message">
              <div className="message-title">
                <h1>Password Change Notification</h1>
                <h1>.</h1>
                <h1>8 hours ago</h1>
              </div>
              <p>New notification</p>
            </div>
            <p>
              Your account password was changed. If this wasn't you, please
              contact support immediately.
            </p>
          </div>
          <div className="notify-message">
            <div className="main-message">
              <div className="message-title">
                <h1>Group Admin Update</h1>
                <h1>.</h1>
                <h1>1 DAY ago</h1>
              </div>
              <p>New notification</p>
            </div>
            <p>
              An admin of the 'Early Retirement Dreamers' group has updated the
              contribution plan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notify;
