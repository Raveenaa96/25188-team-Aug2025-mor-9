import { Component,Fragment } from "react";

export default class MultipleObjectStateUpdatecc extends Component{
     constructor() {
        super();
        this.state = {
          employees: [
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
          ],
        };

       // this.handleDelete = this.handleDelete.bind(this)
     }
     handleUpdate(profileIndex) {

         const updatedEmployeeData = this.state.employees.map(
            (values,index) => {
                if(index === profileIndex ) {
                    values.empName = "Pavithra"
                    values.empSalary = 50000
                    values.employeeLocation = "pune"
                    values.employeedes = "quality Engineer"
                    values.empid = 1111
 
                }

                return values
            }
        )

        this.setState({employees:updatedEmployeeData})
     }


     handleDelete (profileIndex){
        
        const updateEmployeeState = this.state.employees.filter(
            (value,index) => index !== profileIndex
        )

        this.setState({employees:updateEmployeeState})
     }
    
      render() {
        return (
          <div className="base-container">
            <div className="heading">
              <h1> TCS Employee mangement System </h1>
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
                  {this.state.employees && this.state.employees.length != 0 ? (
                    this.state.employees.map((value, index) => {
                      const {
                        empName,
                        empSalary,
                        empid,
                        employeeLocation,
                        employeedes,
                      } = value;
    
                      return (
                        <Fragment key={index}>
                          <tr>
                            <td>{index + 1} </td>
                            <td>{empid} </td>
                            <td>{empName} </td>
                            <td>{empSalary} </td>
                            <td>{employeedes} </td>
                            <td>{employeeLocation} </td>
                            <td>
                                <button onClick={()=>this.handleUpdate(index)}>update</button>
                                <button onClick={()=>this.handleDelete(index)}>delete</button>
                            </td>
                          </tr>
                        </Fragment>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={7}><center>Currently No Employee Found </center> </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        );
      }

}