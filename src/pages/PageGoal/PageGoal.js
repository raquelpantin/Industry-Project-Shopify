import React, { useState } from "react";
import "./PageGoal.scss";
import { Link } from "react-router-dom";
import shopy from "../../assets/Images/Shopyv4.png";
import shopify from "../../assets/Icons/shopify.svg";
import flag from "../../assets/Icons/flag_major.svg";

const PageGoal = () => {
  return (
    <div className="pagegoal-container">
      <div className="size">
        <div className="pagegoal-logo">
          <p className="pagegoal-logotitle">Powered by Shopify</p>
          <img className="pagegoal-shopify" src={shopify} />
        </div>
        <div className="shopyquotecontainer">
          <p className="shopyquote">
            If you don't see a goal here, make sure to click 'More' for more
            options!
          </p>
        </div>
        <div className="pagegoalflex">
          <div className="pagegoal-headercontainer">
            <div className="pagegoal-top">
              <img src={flag} />
              <h1 className="pagegoal-header">Goal Setting</h1>
            </div>
            <p className="pagegoal-indicators">
              What are your indicators of a marketing success?
            </p>
          </div>
          <div className="pagegoal-bottom">
            <form className="pagegoalform">
              <div className="checkbox-container">
                <input type="checkbox" value="Hello"></input>
                <p className="checkbox-option">Increase Average Sales</p>
              </div>
              <div className="checkbox-container">
                <input type="checkbox" value="Hello"></input>
                <p className="checkbox-option">Expand Traffic Source</p>
              </div>
              <div className="checkbox-container">
                <input type="checkbox" value="Hello"></input>
                <p className="checkbox-option">Reduce Site Bound Rate</p>
              </div>
              <div className="checkbox-container">
                <input type="checkbox" value="Hello"></input>
                <p className="checkbox-option">Improve Email CTR</p>
              </div>
              <div className="checkbox-container">
                <input type="checkbox" value="Hello"></input>
                <p className="checkbox-option">
                  Improved Number and Quality of Product Reviews
                </p>
              </div>
              <p className="more">More</p>
            </form>
            <div className="spacer"></div>
            <div className="shopycontainer">
              <img className="shopy" src={shopy} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageGoal;
