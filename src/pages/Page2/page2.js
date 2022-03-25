import './Page2.scss';
import icon from '../../assets/Icons/colors_major.svg';
import shopy from '../../assets/Images/ShopyReverse.svg';
import img1 from '../../assets/Images/traditional.jpg';
import img2 from '../../assets/Images/nft.jpg';
import img3 from '../../assets/Images/custom.jpg';
import img4 from '../../assets/Images/digitalPrints.jpg';
import img5 from '../../assets/Images/collabs.jpg';
import img6 from '../../assets/Images/handcarfts.jpg';
import img7 from '../../assets/Images/merchandise.jpg';
import img8 from '../../assets/Images/limitedPrints.jpg';
import img9 from '../../assets/Images/3dArt.jpg';
import React, { useState, Component } from "react";
import shopify from '../../assets/Icons/shopify.svg';


class Page2 extends Component  {
    state = { isActive: false, isActive2: false, isActive3: false  };

    handleToggle = () => {
        this.setState({ isActive: !this.state.isActive });
      };
    handleToggle2 = () => {
        this.setState({ isActive2: !this.state.isActive2 });
      };
    handleToggle3 = () => {
        this.setState({ isActive3: !this.state.isActive3 });
      };
render(){
    const isActive = this.state.isActive;
    const isActive2 = this.state.isActive2;
    const isActive3 = this.state.isActive3;

  return (
    <section>
      <img src={shopy} className="reverseIcon" />  
      <div className="title">
        <img src={icon}/>
        <h1>Arts</h1>
      </div>
      <div className="subtitle">What kind of art do you plan to sell?</div>
      <article className="images">
          <div className="image-box">
              <img src={img1} className="image"></img>
              <p>TRADITIONAL</p>
          </div>
          <div className="image-box">
              <img src={img2} className={`image ${isActive ? 'active' : ''} `} onClick={this.handleToggle}></img>
              <p>NFT</p>
          </div>
          <div className="image-box">
              <img src={img3} className="image"></img>
              <p>CUSTOM</p>
          </div>
          <div className="image-box">
              <img src={img4} className={`image ${isActive2 ? 'active' : ''} `} onClick={this.handleToggle2}></img>
              <p>DIGITAL PRINITS</p>
          </div>
          <div className="image-box">
              <img src={img5} className="image"></img>
              <p>COLLABS</p>
          </div>
          <div className="image-box">
              <img src={img6} className="image"></img>
              <p>HANDCRAFTS</p>
          </div>
          <div className="image-box">
              <img src={img7} className="image"></img>
              <p>MERCHANDISE</p>
          </div>
          <div className="image-box">
              <img src={img8} className="image"></img>
              <p>LIMITED PRINTS</p>
          </div>
          <div className="image-box">
              <img src={img9} className={`image ${isActive3 ? 'active' : ''} `} onClick={this.handleToggle3}></img>
              <p>3D ART</p>
          </div>
      </article>
        <div className="footer">
            <p>Powered by Shopify</p>
            <img className="icon" src={shopify} />
        </div>
    </section>
  );
}};

export default Page2;
