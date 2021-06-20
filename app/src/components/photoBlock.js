import React, { useState } from "react";

// use <=> hooks
// component name must be uppercase (UUUUseStateBasics)'
// hooks must be created/invoked in the function
// cannot call conditionally if (hook something)...

const UseStateBasics = () => {
  // console.log(useState("hello world"));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  const [text, setText] = useState("random title");
  const handleClick = () => {
    if (text === "random title") {
      setText("yoyo");
    } else {
      setText("random title");
    }
  };
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
