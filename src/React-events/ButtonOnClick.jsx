import { Welcome } from "react";

export default function ButtonOnClick() {
  const showAlert = () => {
    alert("You clicked the button!");
  };

  const greetUser = (userName) => {
    alert("Hello " + userName + ", welcome to our site!");
  };

  return (
    <div className="base-container">
      <div className="heading">
        <h1> Button Interaction Example </h1>
      </div>

      <div className="button-group">
        <button onClick={showAlert}>Click for Alert</button>
        <button onClick={() => greetUser("Anita")}>Greet Anita</button>
      </div>
    </div>
  );
}
