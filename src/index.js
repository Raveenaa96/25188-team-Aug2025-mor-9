import React from 'react';
import ReactDOM from 'react-dom/client';
import SimpleFormik from './pages/ep-8/formik/SimpleFormik';
import "bootstrap/dist/css/bootstrap.min.css";
import FormikValidation from './pages/ep-8/formik/FormikValidation';
import HelloWorld from './pages/ep-1/1-jsx/HelloWorld';
import DataBinding from './pages/ep-1/2-dataBinding/DataBinding';
import Condition from './pages/ep-1/3-condition/Condition';
import Looping from './pages/ep-1/4-looping/Looping';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <SimpleFormik/> */}
    {/* <FormikValidation/> */}
    <Looping/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals