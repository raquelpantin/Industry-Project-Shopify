import React from 'react';
import './WelcomePage.scss';
import {Link} from 'react-router-dom';
import shopier from '../../assets/Images/Shopyv4.png';

export default function WelcomePage() {
  return (
    <main>
        <div className='left'>
            <img src={shopier} alt="shopify mascot" className='mascot'/>
        </div>
        <div className='right'>
            
        </div>
    </main>
  )
}
