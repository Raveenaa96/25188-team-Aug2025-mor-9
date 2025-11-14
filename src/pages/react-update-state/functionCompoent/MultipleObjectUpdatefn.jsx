import { useState, Fragment } from "react";

export default function MultipleObjectUpdatefn() {
  let employees = [
    {
      empid: 2525,
      empName: "Raja",
      empSalary: 25000,
      employeedes: "Quality Engineer",
      employeeLocation: "Chennai",
    },
    {
      empid: 2526,
      empName: "Sekar",
      empSalary: 45000,
      employeedes: "Production Engineer",
      employeeLocation: "Bangalore",
    },
  ];

  const [employeeData, setEmployeeData] = useState(employees);

  const handleUpdate = (profileIndex) => {
    const updatedEmployeeData = employeeData.map((values, index) => {
      if (index === profileIndex) {
        values.empName = "Pavithra";
        values.empSalary = 50000;
        values.employeeLocation = "pune";
        values.employeedes = "quality Engineer";
        values.empid = 1111;
      }

      return values;
    });

    setEmployeeData(updatedEmployeeData);
  };

  const handleDelete = (profileIndex) => {
    const updateEmployeeState = employeeData.filter(
      (value, index) => index !== profileIndex
    );

    setEmployeeData(updateEmployeeState);
  };

  const addnewRecord = () => {
    console.log("add new record triggred")

    let newRecord = {
      empid: 3333,
      empName: "Vinoth kumar",
      empSalary: 350000,
      employeedes: "Iot engineer",
      employeeLocation: "Mumbai",
    }

    setEmployeeData([...employeeData,newRecord])

  }

  return (
    <div className="base-container">
      <div className="heading">
        <h1> Multiple Object - State Management </h1>
      </div>
      <div className="employee-details">
        <table border={1}>
          <thead>
            <tr>
              <th> Serial Number </th>
              <th> Employee ID </th>
              <th> Employee Name </th>
              <th> Employee Salary </th>
              <th> Employee Desigination</th>
              <th> Employee Location </th>
              <th> Actions </th>
            </tr>
          </thead>
          <tbody>
            {employeeData && employeeData.length != 0 ? (
              employeeData.map((value, index) => {
                const {
                  empName,
                  empSalary,
                  empid,
                  employeeLocation,
                  employeedes,
                } = value;

                return (
                  <Fragment>
                    <tr>
                      <td>{index + 1} </td>
                      <td>{empid} </td>
                      <td>{empName} </td>
                      <td>{empSalary} </td>
                      <td>{employeedes} </td>
                      <td>{employeeLocation} </td>
                      <td>
                        <button onClick={() => handleUpdate(index)}>
                          update
                        </button>
                        <button onClick={() => handleDelete(index)}>
                          delete
                        </button>
                      </td>
                    </tr>
                  </Fragment>
                );
              })
            ) : (
              <tr>
                <td colSpan={7}>
                  {" "}
                  <center>Currently No Employee Found </center>{" "}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="add-new-record">
         <button onClick = {addnewRecord}> Add New Record </button>
      </div>
    </div>
  );
}
