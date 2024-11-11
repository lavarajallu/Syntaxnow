import React from 'react'
import { MdArrowForward } from "react-icons/md";
import IndusCard from './common/indus-card';
import telecomImage from '../assets/images/indus1.png';
import fmcgImage from '../assets/images/indus2.png';
import miningImage from '../assets/images/indus3.png';


export default function Industries() {
  const industries = [
    { title: 'Telecom', image: telecomImage },
    { title: 'FMCG', image: fmcgImage },
    { title: 'Mining', image: miningImage }
];
    return (
    <div className='container indus'>
      <i className='indus-text'><li>INDUSTRIES</li></i>
    <div className='indus-cont'>
      <div className='indus-left-cont'>
      <h3 className='indus-content'>Tailored Strategies for Every <br/>Sector</h3>
      <p>
        <button className="explore-button">Explore More <MdArrowForward /></button>  
        </p>
      </div>
      <div className='indus-right-cont'>
      {industries.map((industry, index) => (
            <IndusCard key={index} title={industry.title} image={industry.image} />
        ))}
        </div>
    </div>
    </div>
  )
}
