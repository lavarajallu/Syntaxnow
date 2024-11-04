import React from 'react';
import V from "../assets/images/Vector.png"
import { MdArrowForward } from "react-icons/md";

const Background = () => {
  return (
      <div className="banner">
      <div className="content">
        <div className='text-content'>
        <h2 className='text-togo'>TOGETHER WE</h2>
        <h2 className='text-rev'>RE<img className='v-img' src={V} alt='' />OLUTIONIZED</h2>
        </div>
      <button className="explore-button">Explore More <MdArrowForward /></button>
      </div>
      </div>
   

  );
};

export default Background;
