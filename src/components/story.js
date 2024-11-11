import React from 'react'
import { MdArrowForward } from "react-icons/md";

export default function Story() {
    return (
        <>
        <div className='story'>
            <div className='story-content'>
                <i className='story-text'><li>OUR STORY</li></i>
                <h2 className='story-head'>About Synatxnow</h2>
                <p className='story-para'>From careers to iconic moments in our history, <br />see what's current in Syntaxnow</p>
                <button className="story-explore-button">Explore More <MdArrowForward /></button>
            </div>
        </div>
        <div className='container'>
            <div>
             <ul className='story-tabs' type= "none">
                <li>Aboutus</li>
                <li>OurApproach</li>
                <li>Casestudies</li>
                <li>Blog</li>
             </ul>
            </div>
        </div>
        </>
    )
}
