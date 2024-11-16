import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <div>
        <hr></hr>
      <footer className="about-section">
        <div className="container">
            <div className="about-content">
                <h2>Conative IT Services</h2>
                <p>Conative IT Solutions is an established web development 
                    and design company that works with companies in all sectors 
                    of business. We combine the latest technologies, tools and 
                    frameworks with years of experience to deliver customized, reliable, 
                    and efficient solutions.
                </p>
            </div>
            <div className="company-info">
                <h2>Our Company</h2>
                <ul>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Contact Us</li>
                    <li>Our Culture</li>
                    <li>Our Team</li>
                    <li>Testiomonials</li>
                </ul>
            </div>

            <div className="services">
                <h2>Services</h2>
                <ul>
                    <li>Website Design & Development</li>
                    <li>Mobile App Development</li>
                    
                </ul>
            </div>

            <div className="portfolio">
                <h2>Portfolio</h2>
                <ul>
                    <li>Website Desgin</li>
                    <li>Graphic Desgin</li>
                    <li>Logo Desgin</li>
                
                </ul>
            </div>

            <div className="contact-info">
                <h2>Contact Information</h2>
                <ul>
                    <li>+91 46512154512</li>
                    <li>infor@conative.in</li>
                    <li>hr@conative.in</li>
                    <li>conativesolutions.com</li>
                </ul>
            </div>


        </div>
      </footer>
    </div>
  )
}

export default Footer;
