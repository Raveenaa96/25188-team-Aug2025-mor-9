import React from 'react';
import ReactDOM from 'react-dom/client';
import FunctionComponentStateManagement from './React-State/FC/FunctionComponentStateMangement';
import EmployeeManagement from './React-State/CC/EmployeeManagement';
import ClasscomponentStateManagement from './React-State/CC/ClasscomponentStateManagement';
import ButtonOnClick from './React-events/ButtonOnClick';
import ExampleofFunctionComp from './React-Components/FunctionalComponents/ExampleofFunctionComp';
import Exampleclasscomp from './React-Components/ClassComponents/Exampleclasscomp';
import ConstrustorImplementation from './React-Components/ClassComponents/ConstrustorImplemnetation';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ButtonOnClick/>
    <ClasscomponentStateManagement/>
    <Exampleclasscomp/>
    <ConstrustorImplementation/>
    <FunctionComponentStateManagement/>
    <ExampleofFunctionComp/>
    <EmployeeManagement/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

