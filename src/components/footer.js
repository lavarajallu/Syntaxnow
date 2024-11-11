import React from 'react'

export default function Footer() {
  return (
    <div>
         <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <div className="footer-logo">Logo</div>
          <ul>
            <li>About Us</li>
            <li>Our Approach</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contact us</li>
          </ul>
          <div className="social-icons">
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-facebook"></i>
          </div>
          <p>info@syntaxnow.com</p>
        </div>

        <div className="footer-column">
          <h4>SERVICES</h4>
          <div className="services">
            <ul>
              <li>Consulting</li>
              <li>Product Discovery</li>
              <li>Solution Discovery</li>
              <li>UX / UI Design</li>
              <li>Technology Advisory</li>
            </ul>
            <ul>
              <li>Cloud</li>
              <li>Cloud Consulting</li>
              <li>Cloud Migration</li>
              <li>Cloud Development</li>
              <li>Kubernetes Services</li>
            </ul>
            <ul>
              <li>Technology</li>
              <li>Big Data Engineering</li>
              <li>AI & Machine Learning</li>
            </ul>
            <ul>
              <li>Teams</li>
              <li>Staff Augmentation</li>
              <li>Managed Team</li>
            </ul>
          </div>
        </div>

        <div className="footer-column">
          <h4>INDUSTRIES</h4>
          <ul>
            <li>Telecom</li>
            <li>FMCG</li>
            <li>Mining</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Copyright 2024 Syntaxnow. All Rights Reserved</p>
        <div className="footer-links">
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>Cookies Policy</p>
        </div>
      </div>
    </footer>
    </div>
  )
}
