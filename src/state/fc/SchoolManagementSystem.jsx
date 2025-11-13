import { useState } from "react";

export default function SchoolManagementSystem() {
  const [students, setStudents] = useState([
    {
      studId: 12,
      studName: "Jesi",
      marks: {
        Tamil: 78,
        English: 65,
        Maths: 89,
        Science: 72,
        Social: 80,
      },
    },
    {
      studId: 22,
      studName: "Pavi",
      marks: {
        Tamil: 45,
        English: 55,
        Maths: 39,
        Science: 48,
        Social: 51,
      },
    },
    {
      studId: 33,
      studName: "Laxmi",
      marks: 
      {
        Tamil: 90,
        English: 88,
        Maths: 92,
        Science: 85,
        Social: 87,
      },
    },
  ]);

  return (
    <div>
      <h2>School Management System (Functional Component)</h2>

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
          {students.length !== 0 ? 
          (
            students.map((value, index) => {
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
