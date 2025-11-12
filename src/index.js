import React from 'react';
import ReactDOM from 'react-dom/client';
import StudentsList from './react-basics/react-loop/StudentsList';
import ProfileCard from './react-basics/react-databinding/ProfileCard';
import Welcome from './react-basics/react-jsx/Welcome';
import Ternary from './react-basics/react-conditions/ternary-operator/Ternary';
import IfCondition from './react-basics/react-conditions/if-condition/IfCondition';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Welcome/>
    <ProfileCard/>
    <StudentsList/>
    <IfCondition/>
    <Ternary/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
