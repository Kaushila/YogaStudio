import React from 'react';
import '../AboutUs/AboutUs.css';
import instructor1 from '../../../assets/1.jpg';
import instructor2 from '../../../assets/2.png';
import instructor3 from '../../../assets/3.png';
import instructor4 from '../../../assets/4.jpg';
import aboutusImage from '../../../assets/aboutUs.png';

const AboutUs = () => {
  return (
    <div className="aboutus-page">
    <div className="yoga-studio">
      <div className="yoga-studio-left">
        <h1>Yoga Studio <br></br>in the City<br></br> of Colombo</h1>
      </div>
      <div className="yoga-studio-right">
        <p>
        Welcome to Srenity Yoga Studio, a serene sanctuary where mind, body,
        and spirit unite. Nestled in the heart of Colombo city, our studio offers 
        a peaceful escape from the hustle and bustle of daily life. We are dedicated to 
        providing a welcoming environment for practitioners of all levels, from beginners to 
        advanced yogis.
        </p>
        </div>
        <div className="yoga-studio-right">
        <p>
        Our team of experienced and passionate instructors is committed to guiding you
         on your yoga journey. Each instructor brings their unique style and expertise, 
         offering a diverse range of classes that cater to different needs and preferences. 
         Whether you're looking for a vigorous Vinyasa flow, a calming Yin practice, or a dynamic 
         Ashtanga session, you'll find the perfect class to suit your goals.
        </p>
      </div>
    </div>


  
        <div className="Quote">
          <div className="aboutusImage">
            <img src={aboutusImage} alt="girl" />
          
          </div>
          
          <div className="QuoteText">
            <p>“Yoga is not a workout; it is a work-in. And this is the point of spiritual 
              practice; to make us teachable, to open up our hearts, and focus our 
              awareness so that we can know what we already know and be who we already are.” 
              – Rolf Gates.</p>
          </div>
        </div>
  

    
    <div className="yoga-instructors">
        <h2>Yoga Instructors</h2>
        <div className="instructors">
          <div className="instructor">
            <img src={instructor2} alt="Ellen Sherman" />
            <h3>Ellen Sherman</h3>
            <div className="social-icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>
          <div className="instructor">
            <img src={instructor3} alt="Christina Latham" />
            <h3>Christina Latham</h3>
            <div className="social-icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>
          <div className="instructor">
            <img src={instructor1} alt="Luke Stryker" />
            <h3>Luke Stryker</h3>
            <div className="social-icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>
          <div className="instructor">
            <img src={instructor4} alt="Gloria Benner" />
            <h3>Gloria Benner</h3>
            <div className="social-icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>
        </div>
      </div>
      
      </div>


   
  );
}

export default AboutUs;
