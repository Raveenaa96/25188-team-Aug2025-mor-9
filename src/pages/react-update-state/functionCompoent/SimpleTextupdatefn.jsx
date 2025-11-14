import { useState } from "react";

export default function SimpleTextupdatefn() {
  const [text, setText] = useState("Hello Saravanan");

  return (
    <div className="base-container">
        <div className="heading">
             <h1>Simple Text Handling Function Comp</h1>
        </div>
        <div className="show-text">
            <h3> Current Text : <span> {text} </span>  </h3>
        </div>
        <div className="action">
            <button onClick = { ()=> setText( "Hello Sripal !!! ") } > Change Text </button>
        </div>
    </div>
  );
}
