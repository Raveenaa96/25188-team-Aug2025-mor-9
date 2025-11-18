import { Component, Fragment } from "react";

export default class StudentManagement extends Component {
  constructor() {
    super();
    this.state = {
      heading: "Student Management",
      students: [
        {
          rollno: "2701",
          studentName: "Malathi",
          department: "Computer Science",
          year: "2021-2024",
          city: "chennai",
        },
        {
          rollno: "2702",
          studentName: "Jesintha",
          department: "Computer Science",
          year: "2021-2024",
          city: "chennai",
        },
        {
          rollno: "2703",
          studentName: "Harini",
          department: "Computer Science",
          year: "2021-2024",
          city: "chennai",
        },
      ],
    };
  }

    render()
    {
      return (
        <div className="base-container">
          <h1>{this.state.heading}</h1>
          <table border={1}>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Roll Number</th>
                <th>Name</th>
                <th>Department</th>
                <th>Year</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {this.state.students && this.state.students.length !== 0 ? (
                this.state.students.map((val, index) => {
                  const { rollno, studentName, department, year, city } =
                    val;
                  return (
                    <Fragment>
                      <tr>
                        <td>{index+1}</td>
                      <td>{rollno}</td>
                      <td>{studentName}</td>
                      <td>{department}</td>
                      <td>{year}</td>
                      <td>{city}</td>
                      </tr>
                    </Fragment>
                  );
                })
              ) : 
                <tr>
                  <td colSpan={6}>No Student records found</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      );
    }
  }

