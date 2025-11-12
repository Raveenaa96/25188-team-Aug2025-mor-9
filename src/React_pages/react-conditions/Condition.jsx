export default function condition() {
  const hour = new Date().getHours();
  const isMorning = hour >12;

  return (
    <div>
      <div className="heading">
        <h1> Greeting Example </h1>
      </div>

      <div className="simpleifstatment">
        <h3> Simple if condition : </h3>
        {isMorning && <p> Good Morning! Have a nice day  </p>}
      </div>

      <div className="ternaryOperator">
        <h3> Ternary Operator : </h3>

        {isMorning ? (
          <p> It's Morning Time </p>
        ) : (
          <p> It's Evening Time </p>
        )}
      </div>
    </div>
  );
}
