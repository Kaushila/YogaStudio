import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/component/Pages/Home';
import AboutUs from '../src/component/Pages/AboutUs';
import Classes from '../src/component/Pages/Classes';
import Testimonials from '../src/component/Pages/Testimonials';
import ContactUs from '../src/component/Pages/ContactUs';
import NavigationBar from '../src/component/NavBar/Navbar';
import Footer from '../src/component/Footer/Footer';
import YogaTypes from '../src/component/Pages/yogaTypes';  

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/yogaTypes" element={<YogaTypes />} />
        </Routes>
        <Footer />  
      </div>
    </Router>
  );
}

export default App;
