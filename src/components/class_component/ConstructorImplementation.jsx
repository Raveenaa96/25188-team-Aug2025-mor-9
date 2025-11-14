import { React, Component } from "react";
export default class ConstructorImplementation extends Component {
  constructor() {
    super();
    this.state = {
      collegeName: "SRM",
      location: "Chennai",
      departments: ["CSE", "ECE", "MECH", "EEE", "CIVIL"],
    };
  }
  render() {
    return (
      <div className="college-details">
        <div className="clgname">
          <h1>College Details</h1>
        </div>
        <div className="content">
          <h4>NAME : {this.state.collegeName}</h4>
          <h4>LOCATION : {this.state.location}</h4>
          <h4>DEPARTMENTS : </h4>
          <ul>
            {this.state.departments.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
