import { Component } from "react";

export default class SchoolManagement extends Component {
  constructor() {
    super();
    this.state = {
      students: [
        {
          studId: 1,
          studName: "Ravi",
          marks: {
            Tamil: 78,
            English: 65,
            Maths: 89,
            Science: 72,
            Social: 80,
          },
        },
        {
          studId: 2,
          studName: "Priya",
          marks: {
            Tamil: 45,
            English: 55,
            Maths: 39,
            Science: 48,
            Social: 51,
          },
        },
        {
          studId: 3,
          studName: "Karthik",
          marks: {
            Tamil: 90,
            English: 88,
            Maths: 92,
            Science: 85,
            Social: 87,
          },
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h2>School Management System (Class Component)</h2>

        <table border={1}>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Student ID</th>
              <th>Name</th>
              <th>Tamil</th>
              <th>English</th>
              <th>Maths</th>
              <th>Science</th>
              <th>Social</th>
              <th>Grade</th>
            </tr>
          </thead>

          <tbody>
            {this.state.students && this.state.students.length !== 0 ? 
            (
              this.state.students.map((value, index) => {
                const { studId, studName, marks } = value;
                const { Tamil, English, Maths, Science, Social } = marks;

                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{studId}</td>
                    <td>{studName}</td>
                    <td>{Tamil}</td>
                    <td>{English}</td>
                    <td>{Maths}</td>
                    <td>{Science}</td>
                    <td>{Social}</td>
                    <td>
                      {Tamil < 40 ||English < 40 ||Maths < 40 ||Science < 40 ||Social < 40
                        ? "Fail"
                        : "Pass"
                    }
                    </td>
                  </tr>
                );
              })
            ) : 
            (
              <tr>
                <td>No Students Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
