import React from 'react'
import { MdArrowForward } from "react-icons/md";


export default function Contact() {
    return (
        <div className="contact-container">
            <div className=" container contact-main">
                <div>
                <h2 className="contact-heading">Contact Us</h2>
                <h2 className="contact-subheading">Let's connect over a virtual coffee</h2>
                </div>
                <form className="contact-form">
                    <div className="contact-row">
                        <input type="text" placeholder="Your Name*" className="contact-input" />
                        <input type="text" placeholder="Phone no*" className="contact-input" />
                    </div>
                    <div className="contact-row">
                        <input type="email" placeholder="Email" className="contact-input" />
                        <input type="text" placeholder="Select service" className="contact-input" />
                    </div>
                    <textarea placeholder="Message" className="contact-textarea" />
                    <button type="submit" className="contact-explore-button">
                        Submit <MdArrowForward />
                    </button>
                </form>
            </div>
        </div>
    )
}
