export default function Conditon() {
  /**
   *   In JSX Template if conditon like (&&)
   *   In JSX Template if Else like (Ternary Operator)
   */

  const isMentorAvailable = true;

  return (
    <div>
      <div className="heading">
        <h1> Conditons Learnings </h1>
      </div>

      <div className="simpleifstatment">
        <h3> Simple if condition : </h3>
        {isMentorAvailable && <p> Saravana is Today Present </p>}
      </div>

      <div className="ternaryOperator">
        <h3> Ternary Operator : </h3>

        {isMentorAvailable ? (
          <p> Saravana is Today Present </p>
        ) : (
          <p> Saravana is Today Absent </p>
        )}
      </div>
    </div>
  );
}
