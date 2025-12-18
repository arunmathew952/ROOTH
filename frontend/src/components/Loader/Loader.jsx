import React from 'react';
import './Loader.css';
import feedingImage from '../../assets/feeding.png';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="container">
        <div className="image">
          <img src={feedingImage} alt="Mother and Child" />
        </div>
        <div className="text">
          <h1>ROOTH</h1>
          <h1>Clothing</h1>
        </div>
      </div>
    </div>
  );
};

export default Loader;
