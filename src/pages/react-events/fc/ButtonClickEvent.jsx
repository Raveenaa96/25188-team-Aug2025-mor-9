export default function ButtonClickEvent() {
  const greet = () => {
    alert("Hello! Have a greet Day! 😍");
  };

  const greetUser = (name) => {
    alert("Hello " + name + ",Welcome to React!");
  };

  return (
    <div className="base-container">
      <div className="heading">
        <h1>Greeting Event</h1>
      </div>
      <div className="button">
        <button onClick={greet}>General Greeting</button>
        <button onClick={() => greetUser("Jesintha")}>Personal Greeting</button>
      </div>
    </div>
  );
}
