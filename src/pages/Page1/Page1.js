import React, { useState } from "react";
import "./Page1.scss";
import { Link } from "react-router-dom";
import children from "../../assets/Images/children-preparing-their-backpack/amico.svg";
import cool from "../../assets/Images/coolness/amico.svg";
import people from "../../assets/Images/people-talking/amico.svg";
import wedding from "../../assets/Images/wedding-planner/amico.svg";

const Page1 = () => {
  const [isActive, setActive] = useState("false");
  const [isActive2, setActive2] = useState("false");
  const [isActive3, setActive3] = useState("false");
  const [isActive4, setActive4] = useState("false");

  const ToggleClass = () => {
    setActive(!isActive);
  };
  const ToggleClass2 = () => {
    setActive2(!isActive2);
  };
  const ToggleClass3 = () => {
    setActive3(!isActive3);
  };
  const ToggleClass4 = () => {
    setActive4(!isActive4);
  };

  return (
    <div className="page1-container">
      <div className="page1-layout">
        <h1 className="page1-title">What is your marketing skill level?</h1>
        <div className="page1-images">
          <div
            onClick={ToggleClass}
            className={isActive ? "page1-image-container" : "active"}
          >
            <img className="page1-singleimage" src={children} alt="" />
            <p
              onClick={ToggleClass}
              className={isActive ? "page1-level" : "active-font"}
            >
              Beginner
            </p>
          </div>
          <div
            onClick={ToggleClass2}
            className={isActive2 ? "page1-image-container2" : "active2"}
          >
            <img className="page1-singleimage" src={cool} alt="" />
            <p
              onClick={ToggleClass}
              className={isActive2 ? "page1-level" : "active-font"}
            >
              Intermediate
            </p>
          </div>
          <div
            onClick={ToggleClass3}
            className={isActive3 ? "page1-image-container3" : "active3"}
          >
            <img className="page1-singleimage" src={people} alt="" />
            <p
              onClick={ToggleClass}
              className={isActive3 ? "page1-level" : "active-font"}
            >
              Advanced
            </p>
          </div>
          <div
            onClick={ToggleClass4}
            className={isActive4 ? "page1-image-container4" : "active4"}
          >
            <img className="page1-singleimage" src={wedding} alt="" />
            <p
              onClick={ToggleClass}
              className={isActive4 ? "page1-level" : "active-font"}
            >
              Expert
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
