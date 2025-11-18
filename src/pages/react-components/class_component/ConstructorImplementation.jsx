import { Component, Fragment } from "react";

export default class ConstructorImplementation extends Component {
  constructor() {
    super();
    this.state = {
      username: "Jesintha",
      age: "22",
      degree: "B.SC Computer Science",
      university: "Alagappa University",
      objective: "Full Stack Developer",
      place: "Aranthangi",
    };
  }

  render() {
    return (
      <Fragment>
        <h1>This is Class Component</h1>
        <h1>============================</h1>
        <h1>Name: {this.state.username}</h1>
        <h1>Age: {this.state.age}</h1>
        <h1>Degree: {this.state.degree}</h1>
        <h1>University: {this.state.university}</h1>
        <h1>Objective: {this.state.objective}</h1>
        <h1>Place: {this.state.place}</h1>
        <h1>==============================</h1>
      </Fragment>
    );
  }
}
