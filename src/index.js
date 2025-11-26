import React from 'react';
import ReactDOM from 'react-dom/client';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ExampleForm from './pages/react-basic-form/ExampleForm';
import ExampleApicall from './pages/react-basic-form/ExampleFormApicall';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      
      {/* <ExampleForm /> */}
      <ExampleApicall/>
    
     

    </React.StrictMode>
   
);

