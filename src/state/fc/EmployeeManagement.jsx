import { useState } from "react";

export default function EmployeeManagement() {
  const [employees, setEmployees] = useState([
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
  ]);

  return (
    <div>
      <h2>Employee Management System (Functional Component)</h2>

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
          {employees.length !== 0 ? (
            employees.map((value, index) => {
              const { empId, empName, empDept, empSalary, empLocation } = value;

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
