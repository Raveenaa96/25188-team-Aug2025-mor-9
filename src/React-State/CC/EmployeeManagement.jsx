import { React, Component, Fragment } from "react";

export default class EmployeeManagement extends Component {
  constructor() {
    super();
    this.state = {
      students: [
        {
          studentId: 101,
          studentName: "Anitha",
          studentAge: 20,
          studentCourse: "Computer Science",
          studentLocation: "Chennai",
        },
        {
          studentId: 102,
          studentName: "Rahul",
          studentAge: 22,
          studentCourse: "Mechanical Engineering",
          studentLocation: "Bangalore",
        },
        {
          studentId: 103,
          studentName: "Deepa",
          studentAge: 21,
          studentCourse: "Information Technology",
          studentLocation: "Coimbatore",
        },
      ],
    };
  }

  render() {
    return (
      <div className="base-container">
        <div className="heading">
          <h1> College Student Management System </h1>
        </div>

        <div className="student-details">
          <table border={1}>
            <thead>
              <tr>
                <th> Serial Number </th>
                <th> Student ID </th>
                <th> Student Name </th>
                <th> Age </th>
                <th> Course </th>
                <th> Location </th>
              </tr>
            </thead>
            <tbody>
              {this.state.students && this.state.students.length !== 0 ? (
                this.state.students.map((value, index) => {
                  const {
                    studentId,
                    studentName,
                    studentAge,
                    studentCourse,
                    studentLocation,
                  } = value;

                  return (
                    <Fragment key={studentId}>
                      <tr>
                        <td>{index + 1}</td>
                        <td>{studentId}</td>
                        <td>{studentName}</td>
                        <td>{studentAge}</td>
                        <td>{studentCourse}</td>
                        <td>{studentLocation}</td>
                      </tr>
                    </Fragment>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={6}> Currently No Students Found </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
