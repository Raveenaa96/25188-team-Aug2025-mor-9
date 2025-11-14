import { Component } from "react";

export default class ConstrustorImplementation extends Component {
  constructor(props) {
    super(props);
    console.log("ProfileCard constructor called…");
    this.state = {
      heading: "Profile Card Overview",
      name: "Alex Johnson",
      role: "Software Engineer",
      details: {
        joinedDate: "01-10-2020",
        location: "Bengaluru",
        experience: "5 years",
      }
    };
  }

  render() {
    const { heading, name, role, details } = this.state;
    return (
      <div className="base-container">
        <div className="heading">
          <h2>{heading}</h2>
        </div>

        <div className="profile">
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Role:</strong> {role}</p>
        </div>

        <div className="profile-details">
          <h3>Details</h3>
          <p><strong>Joined Date:</strong> {details.joinedDate}</p>
          <p><strong>Location:</strong> {details.location}</p>
          <p><strong>Experience:</strong> {details.experience}</p>
        </div>
      </div>
    );
  }
}