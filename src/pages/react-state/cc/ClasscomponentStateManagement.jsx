import { Component } from "react";

export default class ClasscomponentStateManagement extends Component {
  constructor() {
    super();
    this.state = {

      heading: "Student Information Dashboard",

      studentDetails: {
        name: "Jesintha",
        age: 22,
        course: "BSc Computer Science",
        college: "Alagappa University",
      },
      subjects: ["C Programming", "Java", "Python", "DBMS"],

      marks: {
        c: 85,
        java: 90,
        python: 88,
        dbms: 92,
      },
    };
  }
  render()
  
    {
        
        return(
            <div className="base-container">
            <div className="heading">
            <h1>{this.state.heading}</h1>
            </div>
            <div>
            <h1>Student Details</h1>
            <p>Name:{this.state.studentDetails.name}</p>
             <p>Age:{this.state.studentDetails.age}</p>
              <p>Course:{this.state.studentDetails.course}</p>
               <p>College:{this.state.studentDetails.college}</p>
            </div>
            <div className="subjects">
            <h3>Subjects</h3>
            <ol>
            {
                this.state.subjects && this.state.length!==0 ?
                this.state.subjects.map((value,index)=>
                {
                   return <li key={index}>{value}</li>
                })
                :
                <li>No subject Found</li>
            }
            </ol>
        
            </div>
            <div className="marks">
                <h1>Marks</h1>
                <h3>{this.state.subjects[0] } {this.state.marks.c}</h3>
                <h3>{this.state.subjects[1] } {this.state.marks.java}</h3>
                <h3>{this.state.subjects[2] } {this.state.marks.python}</h3>
                <h3>{this.state.subjects[3] } {this.state.marks.dbms}</h3>


            </div>
            
            </div>
        )
    }
  
}
