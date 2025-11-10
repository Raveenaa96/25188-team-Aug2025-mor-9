import React from 'react';
import ReactDOM from 'react-dom/client';
import  HelloWorld  from './pages/react-jsx/Helloworld';
import IlovejsxMessage from './pages/react-jsx/IlovejsxMessage';
import Calculation from './pages/react-data-Binding/Calculation';
import Conditon from './pages/react-conditons/Condition';
import Looping from './pages/react-loop/Looping';








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      {/* <HelloWorld />
      <IlovejsxMessage /> */}
      {/* <Calculation /> */}
      {/* <Conditon /> */}
      <Looping />

    </React.StrictMode>
   
);

