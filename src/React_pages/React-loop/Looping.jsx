export default function Looping() {
  const students = ["Arun", "Divya", "Kavin", "Priya"];
  const teachers = [];

  return (
    <div>
      <div className="student-heading">
        <h1> Student List </h1>
        <div className="students">
          {students && students.length !== 0 &&
            students.map((name, index) => {
              return <p key={index}>{name}</p>;
            })}
        </div>
      </div>

      <div className="teacher-heading">
        <h1> Teacher List </h1>
        {teachers && teachers.length !== 0 ? (
          teachers.map((name, index) => {
            return <p key={index}>{name}</p>;
          })
        ) : (
          <p> Currently no teachers available </p>
        )}
      </div>
    </div>
  );
}
