import React from 'react';
import './WelcomePage.scss';
import {Link} from 'react-router-dom';
import shopier from '../../assets/Icons/page2icon.svg';
import shopify from '../../assets/Icons/shopify.svg';

export default function WelcomePage() {
  return (
    <main>
        <div className='left'>
            <img src={shopier} alt="shopify mascot" className='mascot'/>
        </div>
        <div className='right'>
          <h1 className='title'>Shopy - Your Marketing Assistant</h1>
          <h3 className='sub-title'>Customize you goals and needs to get the perfect marketing tool for you!</h3>
          <div className='buttons'>
            <Link to='/marketing' className='btn'><button className='btn-get'>Get Started</button></Link>
            <button className='btn-learn'>Learn More</button>
          </div>
          <footer>
            <p>Powered by Shopify</p>
            <img src={shopify} className="icon"/>
          </footer>
        </div>
    </main>
  )
}
