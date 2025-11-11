import React from 'react';
import ReactDOM from 'react-dom/client';
import ExampleClassComponent from './pages/react-components/class_component/ExampleClassComponent';
import ExampleFunctionComponent from './pages/react-components/function_componet/ExampleFunctionComponent';
import ConstructorImplementation from './pages/react-components/class_component/ConstructorImplementation';
import StateManagment from './pages/react-state/cc/StateManagement';








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      
      {/* <ExampleClassComponent /> */}
      {/* <ExampleFunctionComponent /> */}
      {/* <ConstructorImplementation /> */}
      <StateManagment />

    </React.StrictMode>
   
);

