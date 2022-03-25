import React from "react";
import './PageDeleted.scss';
import icon from '../../assets/Icons/collections_major.svg';
import shopy from '../../assets/Icons/page2icon.svg';

const page2 = () => {
  return (
    <section>
      <div className="title">
        <img src={icon}/>
        <h1>What are you selling?</h1>
      </div>
      <select>
        <option disabled hidden value="">Other</option>
        <option type="text" value="Accessiories">Accessiories</option>
        <option type="text" value="Art">Art</option>
        <option type="text" value="Clothing">Clothing</option>
        <option type="text" value="Cosmetics">Cosmetics</option>
        <option type="text" value="Electronics">Electronics</option>
        <option type="text" value="Food & Resuturants">Food & Resuturants</option>
        <option type="text" value="Home & Decor">Home & Decor</option>
        <option type="text" value="Services">Services</option>
        <option type="text" value="Sports">Sports</option>
        <option type="text" value="Toys">Toys</option>
      </select>
      <img src={shopy} className='shopy'/>
    </section>
  );
};

export default page2;
