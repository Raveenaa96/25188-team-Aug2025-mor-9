import { Component } from "react";

export default class Employee extends Component {
  constructor() {
    super();
    this.state = {
      employees: [
        {
          empId: 101,
          empName: "Anand",
          empDept: "HR",
          empSalary: 35000,
          empLocation: "Chennai",
        },
        {
          empId: 102,
          empName: "Kavya",
          empDept: "Finance",
          empSalary: 42000,
          empLocation: "Bangalore",
        },
        {
          empId: 103,
          empName: "Suresh",
          empDept: "IT",
          empSalary: 55000,
          empLocation: "Hyderabad",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h2>Employee Management System (Class Component)</h2>
        <table border={1}>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Location</th>
            </tr>
          </thead>

          <tbody>
            {this.state.employees.length !== 0 ? (
              this.state.employees.map((value, index) => {
                const { empId, empName, empDept, empSalary, empLocation } =
                  value;
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{empId}</td>
                    <td>{empName}</td>
                    <td>{empDept}</td>
                    <td>{empSalary}</td>
                    <td>{empLocation}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td>No Employees Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
