import React from 'react';
import Welcome from './React_pages/React-jsx/Welcome';
import ReactDOM from 'react-dom/client';
import Looping from './React_pages/React-loop/Looping';
import Calculation from './React_pages/React-data-Binding/Calculation';
import Conditon from './React_pages/react-conditions/Condition';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Welcome/>
    <Looping/>
    <Calculation/>
    <Conditon/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

