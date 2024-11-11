import React from 'react'
import { MdArrowForward } from "react-icons/md";
import UX from '../assets/images/uxui.png';

export default function About() {
  return (
    <div className='container about'>
      <div className='content'>
        <i className='about-text'><li>WHAT WE DO</li></i>
        <h3 className='about-content'>Paying the road to a digital <br />change</h3>
      </div>
      <div className='about-cards'>
        <div className='sap-card'>
          <div className='sap-card-overlay'>
            <h3>SAP</h3>
            <p>Empower Your Business With Talented SAP <br />
              Solutions</p>

            <button className="contact-button">Read More <MdArrowForward /></button>
          </div>
        </div>
        <div className='about-remain-cards'>
          <div className='abut-1'>
            <img src={UX} alt=''/>
            <div className='abut-content'>
            <h3>UXUI</h3>
            <p>Transforming Ideas into Intuitive User Experiences</p>
            <button><MdArrowForward/></button>
            </div>
          </div>
          <div className='abut-2'>
          <div className='abut-content'>
            <h3>UXUI</h3>
            <p>Transforming Ideas into Intuitive User Experiences</p>
            <button><MdArrowForward/></button>
            </div>
          </div>
          <div className='abut-3'>
          <div className='abut-content'>
            <h3>UXUI</h3>
            <p>Transforming Ideas into Intuitive User Experiences</p>
            <button><MdArrowForward/></button>
            </div>
          </div>
          <div className='abut-1'>
          <img src={UX} alt=''/>
            <div className='abut-content'>
            <h3>UXUI</h3>
            <p>Transforming Ideas into Intuitive User Experiences</p>
            <button><MdArrowForward/></button>
            </div>
          </div>
        </div>
      </div>
      <div className='about-remaing-cards p-5'>
      <div className='abut-1'>
          <img src={UX} alt=''/>
            <div className='abut-content'>
            <h3>UXUI</h3>
            <p>Transforming Ideas into Intuitive User Experiences</p>
            <button><MdArrowForward/></button>
            </div>
          </div>
      <div className='abut-4'>
          <div className='abut-content'>
            <h3>UXUI</h3>
            <p>Transforming Ideas into Intuitive User Experiences</p>
            <button><MdArrowForward/></button>
            </div>
          </div>
      </div>
    </div>
  )
}