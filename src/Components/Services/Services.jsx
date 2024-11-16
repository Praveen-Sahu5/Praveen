import React from 'react';
import './Services.css'; 


const Services = () => {
  return (
    
    <section id="services" class="services">
        <div class="container">
            <div class="title-heading">
                <h2>OUR SERVICES</h2>
            </div>
            <div class="service-tiers">
                <div class="tier-item">
                    <h2>WEB DESGIN</h2>
                    <p>
                    Thrive builds custom, mobile-ready and search engine optimized websites that help
                    you meet your business objectives and support your digital marketing campaigns. 
                    We create a visual hierarchy to highlight your important site elements and encourage
                    page visitors to take your desired action. Our web design experts utilize clear 
                    calls-to-action (CTAs), avoid carousels and rotating sliders, simplify form fields 
                    and create content for your persona.
                    </p>
                </div>

                <div class="tier-item">
                    <h2>DIGITAL MARKETING</h2>
                    <p>
                    Our internet marketing company takes a 360-degree approach to online marketing. 
                    We review your current marketing strategies and digital presence, set key performance
                    indicators (KPIs), identify your brand personality and integrate your customer experience
                     in all levels of your strategy-building. In doing so, we create a structured marketing framework
                      that optimizes all your digital touchpoints.
                    </p>
                </div>

                <div class="tier-item">
                    <h2>CONTANT WRITING</h2>
                    <p>
                    Your website's content is crucial: it's the foundation of your SEO
                    and the reason many people visit your site. Entrust your content 
                    creation with Thrive, and we'll write it with precision. Our content 
                    specialists stay abreast of the latest news and market trends to ensure 
                    we adhere to Google standards when developing content. We write headlines 
                    that pack a punch, utilize high-performing keywords, incorporate imagery 
                    and structure your posts to promote easy reading.
                    </p>
                </div>

                
            </div>
        </div>
    </section>

    
  );
};

export default Services;