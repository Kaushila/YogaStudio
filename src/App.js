// import React from 'react';
// import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
// import Home from './component/Pages/Home/Home';
// import AboutUs from './component/Pages/AboutUs/AboutUs';
// import Classes from './component/Pages/Classes/Classes';
// import Blogs from './component/Pages/Blogs/Blogs';
// import ContactUs from './component/Pages/ContactUs/ContactUs';
// import NavigationBar from '../src/component/NavBar/Navbar';
// import Footer from '../src/component/Footer/Footer';
// import YogaTypes from './component/Pages/YogaTypes/yogaTypes';
// import Login from './component/Pages/Login/Login';
// import Register from './component/Pages/Register/Register';
// import ForgetPassword from './component/Pages/ForgetPassword/ForgetPassword';
// import JoinClassForm from './component/Pages/JoinClass/JoinClassForm';
// import './App.css';

// function App() {
//   const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/ForgetPassword" element={<ForgetPassword />} /> 
          
//           <Route
//             path="*"
//             element={
//               isAuthenticated ? (
//                 <>
//                   <NavigationBar />
//                   <Routes>
//                     <Route path="/home" element={<Home />} />
//                     <Route path="/about" element={<AboutUs />} />
//                     <Route path="/classes" element={<Classes />} />
//                     <Route path="/blogs" element={<Blogs />} />
//                     <Route path="/contact" element={<ContactUs />} />
//                     <Route path="/yogaTypes" element={<YogaTypes />} />
//                     <Route path="/JoinClassForm" element={<JoinClassForm />} />
//                   </Routes>
//                   <Footer />
//                 </>
//               ) : (
//                 <Navigate to="/" />
//               )
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import Home from './component/Pages/Home/Home';
import AboutUs from './component/Pages/AboutUs/AboutUs';
import Classes from './component/Pages/Classes/Classes';
import Blogs from './component/Pages/Blogs/Blogs';
import ContactUs from './component/Pages/ContactUs/ContactUs';
import NavigationBar from '../src/component/NavBar/Navbar';
import Footer from '../src/component/Footer/Footer';
import YogaTypes from './component/Pages/YogaTypes/yogaTypes';
// import Login from './component/Pages/Login/Login';
// import Register from './component/Pages/Register/Register';
// import ForgetPassword from './component/Pages/ForgetPassword/ForgetPassword';
import JoinClassForm from './component/Pages/JoinClass/JoinClassForm';
import './App.css';
function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/yogaTypes" element={<YogaTypes />} />
          <Route path="/JoinClassForm" element={<JoinClassForm />} />
        </Routes>
        <Footer />  
      </div>
    </Router>
  );
}

export default App;