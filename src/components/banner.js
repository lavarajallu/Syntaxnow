import React from 'react';
import V from "../assets/images/Vector.png";
import Bann from "../assets/images/Group 378 1 (1).png";
import { MdArrowForward } from "react-icons/md";

const Background = () => {
  return (
    <div className="banner">
      <div className="content">
        <div className="text-content">
          <h2 className="text-togo slide-in-left">TOGETHER WE</h2>
          <h2 className="text-rev slide-in-right">
            RE
            <img className="v-img" src={V} alt="Rotating vector" />
            OLUTIONIZED
          </h2>
          <p>Shaping the future with bold ideas.</p>
        <button className="explore-button">
          Explore More <MdArrowForward />
        </button>
        </div>
        <div className='content-img'>
          <img className='content-imgg' src={ Bann} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Background;
