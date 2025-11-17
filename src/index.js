import React from 'react';
import ReactDOM from 'react-dom/client';
//import 'bootstrap/dist/css/bootstrap.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';





//import HomePage from './pages/react-css/home/HomePage';
//import AboutPage from './pages/react-css/about/AboutPage';
// import BlogPage from './pages/react-css/blog/BlogPage';

import Contact from './pages/react-module-css/contact/Contact';
import Gallery from './pages/react-module-css/gallery/Galllery';
import Button from './pages/react-bootstrap/button/Button.jsx';









const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      
      {/* <HomePage /> */}
      {/* <AboutPage /> */}
      {/* <BlogPage /> */}
      {/* <Contact/> */}
      {/* <Gallery /> */}
      <Button/>
      
     

    </React.StrictMode>
   
);

