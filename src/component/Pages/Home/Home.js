import React from 'react';
import '../Home/Home.css';
import homeImage from '../../../assets/home.png';
import yogaVideo from '../../../assets/yoga_video.mp4';
import instructor1 from '../../../assets/1.jpg';
import instructor2 from '../../../assets/2.png';
import instructor3 from '../../../assets/3.png';
import instructor4 from '../../../assets/4.jpg';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-content">
        <div className="home-text">
          <h1>Yoga <br></br>Studio</h1>
          <p>
            Join us today and embark on a journey towards better <br></br>health and well-being. Experience the myriad benefits <br></br> of yoga, from improved flexibility and strength to reduced <br></br>stress and enhanced mental clarity. Our welcoming community <br></br>is here to support you every step of the way.
          </p>
          <div className="home-buttons">
            <a href="/JoinClassForm" className="join-button">Join Class Today</a>
          </div>
        </div>
        <div className="home-image">
          <img src={homeImage} alt="Yoga Pose" />
        </div>
      </div>

      <div className="yoga-styles">
        <div className="styles-sections">
          <div>
            <h2>Many Styles Of Yoga <br></br>To Suit Everyone</h2>
            <p>Whether you want a physically <br></br>demanding yoga class,<br></br> or a relaxing, meditative one,<br></br> there are plenty of different<br></br> yoga styles to suit a variety <br></br>of skill levels and needs.</p>
            <Link to="/yogatypes">
              <button className="learn-more-btn">Learn More</button>
            </Link>
          </div>
          <div className="style-column">
            <h3>ANUSARA</h3>
            <p>Anusara Yoga is a modern form of Hatha Yoga that emphasises alignment principles, heart-centred philosophy, and the celebration of the intrinsic goodness within each individual.</p>
            <h3>ASHTANGA</h3>
            <p> Ashtanga is a very dynamic and athletic form of hatha yoga, made up of six series or levels, with a fixed order of postures.</p>
            <h3>BIKRAM</h3>
            <p> Bikram yoga is a great way to stretch, relieve stress, tone, and heal</p>
            <h3>HATHA</h3>
            <p>Hatha yoga is a branch of yoga that uses physical techniques to try to preserve and channel vital force or energy.</p>
          </div>
          <div className="style-column">
            <h3>HOT YOGA</h3>
            <p>Hot yoga is a form of yoga as exercise performed under hot and humid conditions, resulting in considerable sweating.</p>
            <h3>IYENGAR</h3>
            <p>Iyengar Yoga is structured yet highly customizable, precise yet creative. It can help with back pain, boost mood, or focus attention.</p>
            <h3>RESTORATIVE</h3>
            <p>Restorative yoga is a relaxing style of yoga used to heal and help relieve stress. Learn some of the benefits, poses, and what to expect.</p>
            <h3>VINYASA</h3>
            <p>Vinyasa yoga, also called flow, is one of the most popular types of yoga because of its fast-paced, fitness-based approach.</p>
          </div>
        </div>
      </div>

      <div className="video-section">
        <h2>Watch Our Yoga Session</h2>
        <video width="100%" controls>
          <source src={yogaVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
};

export default Home;
