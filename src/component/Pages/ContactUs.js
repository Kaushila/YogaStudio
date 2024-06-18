
import React, { useState } from 'react';
import './ContactUs.css';
import ContactImage from '../../assets/aboutUs.png'; 
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form data:', formData);  
  
    try {
      const response = await fetch('http://localhost:5000/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      console.log('Response from server:', data);
  
     
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  

  return (
    <div className="contact-us-page">
      <div className="contact-us-container">
        <div className="contact-us-left">
          <h1>Contact Us</h1>
          <p>
            We'd love to hear from you! Whether you have questions about our classes,
            need assistance with your membership, or just want to say hello, feel free
            to reach out to us.
          </p>
         
          <div className="contact-info">
            <div className="contact-item">
              <h3>Our Location</h3>
              <p>Elvitigala Mawatha,Colombo 08,Sri Lanka.</p>
            </div>
            <div className="contact-item">
              <h3>Call Us</h3>
              <p>+94 704202647</p>
            </div>
            <div className="contact-item">
              <h3>Email Us</h3>
              <p>serenityyoga@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="contact-us-right">
          <img src={ContactImage} alt="Contact" />
        </div>
      </div>

      <div className="contact-form-container">
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

