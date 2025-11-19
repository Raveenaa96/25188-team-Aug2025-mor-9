import React from 'react';
import ReactDOM from 'react-dom/client';
//import 'bootstrap/dist/css/bootstrap.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import DashboardMainPage from './pages/dashboard/DashboardMainPage.jsx';
import ExampleProps from './pages/ExampleProps/ExampleProps.jsx';
import ParentMainPage from './pages/ExampleCallback/ParentMainPage.jsx';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      
     
      {/* <ExampleProps /> */}
      <ParentMainPage />
      
     

    </React.StrictMode>
   
);

