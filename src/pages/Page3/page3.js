import React, { useState, Component } from "react";
import budget from '../../assets/Icons/cash-dollar_major.svg'
import './Page3.scss';
import shopify from '../../assets/Icons/shopify.svg';
import slider from '../../assets/Images/Budget.png';
import shopy from '../../assets/Images/shopy-bottom.svg';


class Page3 extends Component {
  state = { isActive: false, isActive2: false, isActive3: false, isActive4: false   };

    handleToggle = () => {
        this.setState({ isActive: !this.state.isActive });
      };
    handleToggle2 = () => {
        this.setState({ isActive2: !this.state.isActive2 });
      };
    handleToggle3 = () => {
        this.setState({ isActive3: !this.state.isActive3 });
      };
    handleToggle4 = () => {
        this.setState({ isActive4: !this.state.isActive4 });
      };

  render(){
    const isActive = this.state.isActive;
    const isActive2 = this.state.isActive2;
    const isActive3 = this.state.isActive3;
    const isActive4 = this.state.isActive4;
  return ( 
  <section>
    <div className="title">
        <img src={budget}/>
        <h1>Budget</h1>
    </div>
    <div className="subtitle">What is your budget?</div>
    <div className="header-box">
      <div className={`sub-box ${isActive ? 'active1' : ''} `} onClick={this.handleToggle}><p className="sub-box-text">BI-WEEKLEY</p></div>
      <div className={`sub-box ${isActive2 ? 'active1' : ''} `} onClick={this.handleToggle2}><p className="sub-box-text">MONTHLY</p></div>
      <div className={`sub-box ${isActive3 ? 'active1' : ''} `} onClick={this.handleToggle3}><p className="sub-box-text">HALF YEAR</p></div>
      <div className={`sub-box ${isActive4 ? 'active1' : ''} `} onClick={this.handleToggle4}><p className="sub-box-text">ANNUAL</p></div>
    </div>
    <img src={slider} className="slider" />
    <p className="note">Suggested budget for bi-weekly is $1000. 
Change your marketing budget accordingly in the future!</p>
    <img src={shopy} className="shopy"/>
    <div className="footer">
            <p>Powered by Shopify</p>
            <img className="icon" src={shopify} />
        </div>
  </section>

  )}
};

export default Page3;