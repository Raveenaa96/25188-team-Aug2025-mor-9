import React from "react";
import ConstructorImplementation from "./components/class_component/ConstructorImplementation";
import InsituteProfile from "./components/class_component/InstituteProfile";
import ReactDOM from "react-dom/client";
import MovieDetails from "./state/fc/MovieDetails";
import SchoolManagement from "./state/cc/SchoolManagement";
import MovieCard from "./components/function_component/MovieCard";
import FoodMenu from "./state/cc/FoodMenu";
import Employee from "./state/cc/Employee";
import EmployeeManagement from "./state/fc/EmployeeManagement";
import SchoolManagementSystem from "./state/fc/SchoolManagementSystem";
import ButtonOnClick from "./events/ButtonOnClick";
import InputOnChange from "./events/InputOnChange";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ButtonOnClick/>
    <InputOnChange/>
    <SchoolManagementSystem/>
    <FoodMenu/>
    <EmployeeManagement/>
    <MovieDetails/>
    <MovieCard />
    <Employee/>
    <InsituteProfile />
    <SchoolManagement/>
    <ConstructorImplementation/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
