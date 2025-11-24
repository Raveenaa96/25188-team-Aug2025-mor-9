import React from 'react';
import ReactDOM from 'react-dom/client';
import ExampleFetchgetMethod from './pages/Fetch/ExampleFetchgetMethod';
import ExampleAxiosget from './pages/axios/ExampleAxiosget';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      
      {/* <ExampleFetchgetMethod /> */}
      <ExampleAxiosget />
     

    </React.StrictMode>
   
);

