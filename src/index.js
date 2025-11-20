import React from 'react';
import ReactDOM from 'react-dom/client';
//import 'bootstrap/dist/css/bootstrap.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import LifeCycleLearning from './pages/react-life-cycle/LifeCycleLearning.jsx';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
     
     <LifeCycleLearning />

    </div>
   
);

