import React from 'react';
import ReactDOM from 'react-dom/client';
import ExampleClassComponent from './pages/react-components/class_component/ExampleClassComponent';
import ExampleFunctionComponent from './pages/react-components/function_componet/ExampleFunctionComponent';
import ConstructorImplementation from './pages/react-components/class_component/ConstructorImplementation';
import ClasscomponentStateManagement from './pages/react-state/cc/ClasscomponentStateManagement';
import FunctionComponentState from './pages/react-state/fc/FunctionComponentStateMangement';
import FunctionComponentStateMangement from './pages/react-state/fc/FunctionComponentStateMangement';
import EmployeeManagemenet from './pages/react-state/cc/EmployeeManagement';
import ButtonClickEvent from './pages/react-events/fc/ButtonClickEvent';
import InputChangeEvent from './pages/react-events/fc/InputChangeEvent';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      
      {/* <ExampleClassComponent /> */}
      {/* <ExampleFunctionComponent /> */}
      {/* <ConstructorImplementation /> */}
      {/* <ClasscomponentStateManagement /> */}
      {/* <FunctionComponentStateMangement /> */}
      {/* <EmployeeManagemenet /> */}
      {/* < ButtonClickEvent/> */}
      <InputChangeEvent />

    </React.StrictMode>
   
);

