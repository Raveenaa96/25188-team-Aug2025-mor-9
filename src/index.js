import React from 'react';
import ReactDOM from 'react-dom/client';
//import 'bootstrap/dist/css/bootstrap.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import LifeCycleLearning from './pages/react-cc-life-cycle/LifeCycleLearning.jsx';
import FirstWebPageInitalPhase from './pages/react-fc-useEffect-hook/FirstWebPageInitalPhase.jsx';
import SecondWebpageDepencyArray from './pages/react-fc-useEffect-hook/SecondWebpageDependencyArray.jsx';
import ThirdWebpageUpdatePhase from './pages/react-fc-useEffect-hook/ThirdWebpageUpdatePhase.jsx';
import FourthWebpageUpdatePhase from './pages/react-fc-useEffect-hook/FourthWebpageUpdatePhase.jsx';
import FifthWebPageUnmountPhase from './pages/react-fc-useEffect-hook/FifthWebPageUnmountPhase.jsx';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>

     {/* <LifeCycleLearning /> */}
     {/* <FirstWebPageInitalPhase /> */}
     {/* <SecondWebpageDepencyArray /> */}
     {/* <ThirdWebpageUpdatePhase /> */}
     {/* <FourthWebpageUpdatePhase /> */}
     <FifthWebPageUnmountPhase />

    </div>
   
);

