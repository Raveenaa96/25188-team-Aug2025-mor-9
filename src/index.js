import React from 'react';
import ReactDOM from 'react-dom/client';
import Countercc from './pages/react-update-state/classComponent/Countercc';
import Counterfn from './pages/react-update-state/functionCompoent/Counterfn';
import SimpleTextupdatefn from './pages/react-update-state/functionCompoent/SimpleTextupdatefn';
import InputChangeEvent from './pages/react-update-state/functionCompoent/InputChangeEvent';
import InputChangeEventcc from './pages/react-update-state/classComponent/InputChangeEventcc';
import SimpleObjectUpdatefn from './pages/react-update-state/functionCompoent/SimpleObjectUpdatefn';
import MultipleObjectUpdatefn from './pages/react-update-state/functionCompoent/MultipleObjectUpdatefn';
import MultipleObjectStateUpdatecc from './pages/react-update-state/classComponent/MultipleObjectStateUpdatecc';








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      
      {/* <Countercc /> */}
      {/* <InputChangeEventcc /> */}
      {/* <MultipleObjectStateUpdatecc /> */}




      {/* <Counterfn /> */}
      {/* <SimpleTextupdatefn /> */}
      {/* <InputChangeEvent /> */}
      {/* <SimpleObjectUpdatefn /> */}
      <MultipleObjectUpdatefn />
     

    </React.StrictMode>
   
);

