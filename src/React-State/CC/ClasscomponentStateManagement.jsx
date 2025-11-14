import { Component } from "react";

export default class ClasscomponentStateManagement extends Component {
  constructor() {
    super();
    this.state = {
      heading: "Gym Membership Dashboard",
      manager: "Priya Kumar",
      members: [
        {
          id: 1,
          name: "Ajay Singh",
          membershipType: "Gold",
          startDate: "2025-01-10",
          status: "Active"
        },
        {
          id: 2,
          name: "Meena Patel",
          membershipType: "Silver",
          startDate: "2025-03-05",
          status: "Paused"
        },
        {
          id: 3,
          name: "Vikram Rao",
          membershipType: "Bronze",
          startDate: "2024-11-20",
          status: "Active"
        }
      ],
      gymDetails: {
        location: "HSR Layout, Bengaluru",
        established: "2018",
        totalEquipment: 120,
        openStatus: "24/7"
      }
    };
  }

  render() {
    return (
      <div className="base-container">
        <div className="heading">
          <h1>{this.state.heading}</h1>
        </div>

        <div className="manager">
          <p>Managed by: {this.state.manager}</p>
        </div>

        <div className="members">
          <h4>Member List</h4>
          <table border={1}>
            <thead>
              <tr>
                <th>Serial No.</th>
                <th>Member ID</th>
                <th>Name</th>
                <th>Membership Type</th>
                <th>Start Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {this.state.members && this.state.members.length !== 0 ? (
                this.state.members.map((member, index) => (
                  <tr key={member.id}>
                    <td>{index + 1}</td>
                    <td>{member.id}</td>
                    <td>{member.name}</td>
                    <td>{member.membershipType}</td>
                    <td>{member.startDate}</td>
                    <td>{member.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6}>No Members Found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="gym-details">
          <h3>Gym Details</h3>
          <div className="details">
            <p>Location: {this.state.gymDetails.location}</p>
            <p>Established: {this.state.gymDetails.established}</p>
            <p>Total Equipment: {this.state.gymDetails.totalEquipment}</p>
            <p>Open Status: {this.state.gymDetails.openStatus}</p>
          </div>
        </div>
      </div>
    );
  }
}
