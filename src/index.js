import React from 'react';
import ReactDOM from 'react-dom/client';
import Conditon from './react/react-condition/Condition';
import Calculation from './react/react-data-Binding/Calculation';
import Helloworld from './react/react-jsx/Helloworld';
import Looping from './react/react-loop/Looping';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Conditon/>
    <Calculation/>
    <Helloworld/>
    <Looping/>






  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

