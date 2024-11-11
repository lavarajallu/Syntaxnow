import React from 'react'
import AI from '../assets/images/blog3.png';
import DT from '../assets/images/blog2.png';
import RPA from '../assets/images/blog1.png';


export default function Blogs() {
  return (
    <div className='blogs'>
      <div className='blog-card'>
        <img src={AI} alt='' />
        <div className='blog-content1'>
          <p>Blog</p>
          <h5>AI in the Finance Sector: <br />How to Benifit from <br />Conversational AI</h5>
          <p>AI in the Finance Sector : How to Benefit <br /> from Conversational AI? Facebook <br />Twitter Linkedin Human intelligence <br />has been unparalleled...</p>
        </div>
      </div>
      <div className='blogs-card'>
        <div className='blog-content2'>
          <p>News</p>
          <h5>FT ranking: Vishakapatnam's Fastest Growing Companies 2023</h5>
          <p>AI in the Finance Sector : How to Benefit from Conversational AI? Facebook <br />Twitter Linkedin Human intelligence has been unparalleled...</p>
        </div>
      </div>
      <div className='blog-card'>
        <div className='blog-content3'>
          <p>Blog</p>
          <h5>AI in the Finance Sector: <br />How to Benifit from <br />Conversational AI</h5>
          <p>AI in the Finance Sector : How to Benefit <br /> from Conversational AI? Facebook <br />Twitter Linkedin Human intelligence <br />has been unparalleled...</p>
        </div>
        <img src={DT} alt='' />
      </div>
      <div className='blog-card'>
        <img src={RPA} alt='' />
        <div className='blog-content4'>
          <p>Blog</p>
          <h5>AI in the Finance Sector: <br />How to Benifit from <br />Conversational AI</h5>
          <p>AI in the Finance Sector : How to Benefit <br /> from Conversational AI? Facebook <br />Twitter Linkedin Human intelligence <br />has been unparalleled...</p>
        </div>
      </div>
    </div>
  )
}
