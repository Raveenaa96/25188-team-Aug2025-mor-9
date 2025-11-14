import { useState } from "react";

export default function FunctionComponentStateManagement() {
  const [teacherName, setTeacherName] = useState("Anita Sharma");
  const [teacherExperience, setTeacherExperience] = useState(12);
  const [teacherSubjects, setTeacherSubjects] = useState([
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology"
  ]);

  return (
    <div className="base-container">
      <div className="heading">
        <h1> Function Component: Teacher Profile </h1>
      </div>

      <div className="teacher">
        <p>Teacher Name: {teacherName}</p>
        <p>Years of Experience: {teacherExperience}</p>
      </div>

      <div className="subjects">
        <h5>Subjects Taught</h5>

        <ol type="1">
          {teacherSubjects && teacherSubjects.length !== 0 ? (
            teacherSubjects.map((subject, index) => (
              <li key={index}>{subject}</li>
            ))
          ) : (
            <li>No Subjects Assigned</li>
          )}
        </ol>
      </div>
    </div>
  );
}
