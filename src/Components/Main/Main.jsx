import React from 'react'
import './Main.css';


const Main = () => {
  return (
    <div className="container">
        <div className="header">
            <div className="heading">We are a</div>
            <h1 className="tech-company">Tech Company</h1>
        </div>
        <div className="paragraph">
            <p>
              Conative IT Solutions has worked with various
              businesses and organizations to provide instant 
              services ad web solutions that enable clients to 
              quickly reconfigure and develop new business potential.  
            </p>
            <ul class="bullet-points">
                <li><span class="bullet-point-symbol">.</span>Learninig Ambience</li>
                <li><span class="bullet-point-symbol">.</span>Building Realtionships</li>
                <li><span class="bullet-point-symbol">.</span>Client Satisfaction</li>
                <li><span class="bullet-point-symbol">.</span>Brand Exposure</li>
            </ul>   
        </div>
        
      
    </div>
  )
}

export default Main;
