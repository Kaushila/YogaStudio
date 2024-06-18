import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>YOGA STYLE</h3>
        <p>Anusara</p>
        <p>Ashtanga</p>
        <p>Bikram</p>
        <p>Hatha</p>
      </div>
      <div className="footer-section">
        <h3>Hot Yoga</h3>
        <p>Lyenger</p>
        <p>Restorative</p>
        <p>Vinyasa</p>
      </div>
      <div className="footer-section">
        <h3>SerenityYoga</h3>
        <p>
         Join us today and embark on a journey towards better
         health and well-being.
        </p>
      </div>
      <div className="footer-section">
        <h3>CONTACT INFO</h3>
        <p>Elvitigala Mawatha,<br></br>Colombo 08,<br></br> Sri Lanka. </p>
        <p>+94 704202647</p>
        <p>Serenityyoga@gmail.com</p>
       
      </div>
    </footer>
  );
};

export default Footer;
