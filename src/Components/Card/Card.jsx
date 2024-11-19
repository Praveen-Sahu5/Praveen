import React from "react";
import "./Card.css";
import card1 from '../Assets/card1.png';
import card2 from '../Assets/card2.jpg';
import card3 from '../Assets/card3.jpg';

const Card = () => {
  return (

    <div className="card-container">
      <h1 className="page-title">Our Projects</h1>
      <div className="card">
        <img
          src={card1}
          alt="Card1"
          className="card-image"
        />
        <div className="card-content">
          <h2 className="card-title">BharatDarshan.com</h2>
          <p className="card-description">
          BharatDarshan.com revolutionizes Tirth Yatra experiences 
          with comfortable transport, nutritious meals, 24/7 medical 
          support, and specialized packages. With 5-star reviews, it 
          aims to expand and make spiritual journeys safer and enriching.
          </p>
          <button className="card-button">Learn More</button>
        </div>
      </div>

      <div className="card">
        <img
          src={card2}
          alt="Card"
          className="card-image"
        />
        <div className="card-content">
          <h2 className="card-title">Responsive Gym Website</h2>
          <p className="card-description">
          Inspired by a local gym's lack of digital presence, 
          I created a responsive website using HTML, CSS, and JavaScript, 
          featuring workout plans and a contact form integrated with Google Forms. 
          This project connects the fitness community with the gym, enhancing accessibility 
          and engagement.
          </p>
          <button className="card-button">Learn More</button>
        </div>
      </div>

      <div className="card">
        <img
          src={card3}
          alt="Card"
          className="card-image"
        />
        <div className="card-content">
          <h2 className="card-title">Our Portfolio</h2>
          <p className="card-description">
          Launched a personal portfolio website built with HTML, 
          CSS, and JavaScript, featuring a responsive design, project 
          showcases, and interactive elements. It highlights my achievements 
          and is open to feedback!
          </p>
          <button className="card-button">Learn More</button>
        </div>
      </div>

       
    </div>
  );
};

export default Card;
