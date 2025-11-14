import { useState } from "react";

export default function InputChangeEvent() {
  const [text, setText] = useState("Hello Saravanan");

  return (
    <div className="base-container">
        <div className="heading">
             <h1>Simple Text Handling Function Comp</h1>
        </div>
        <div className="user-input">
             <input type="text" onChange = {(event)=>setText(event.target.value)} />
        </div>
        <div className="show-text">
            <h3> Current Text : <span> {text} </span>  </h3>
        </div>
       
    </div>
  );
}
