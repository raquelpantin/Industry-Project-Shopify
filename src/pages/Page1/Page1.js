import React from "react";
import "./Page1.scss";
import { Link } from "react-router-dom";
import children from "../../assets/Images/children-preparing-their-backpack/amico.svg";
import cool from "../../assets/Images/coolness/amico.svg";
import people from "../../assets/Images/people-talking/amico.svg";
import wedding from "../../assets/Images/wedding-planner/amico.svg";

const Page1 = () => {
  return (
    <div className="testing">
      <h1>What is your marketing skill level?</h1>
      <div>
        <Link className="test" to="/marketing">
          <img className="test" src={children} />
        </Link>
        <Link to="/marketing">
          <img src={cool} />
        </Link>
        <Link to="/marketing">
          <img src={people} />
        </Link>
        <Link to="/marketing">
          <img src={wedding} />
        </Link>
      </div>
    </div>
  );
};

export default Page1;
