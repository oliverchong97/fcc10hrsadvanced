//---------------------------------     TESTING JS FILE TO PLAY AROUND WITH      ----------------------------------------------
//---------------------------------     TESTING JS FILE TO PLAY AROUND WITH      ----------------------------------------------
//---------------------------------     TESTING JS FILE TO PLAY AROUND WITH      ----------------------------------------------
//---------------------------------     TESTING JS FILE TO PLAY AROUND WITH      ----------------------------------------------
//---------------------------------     TESTING JS FILE TO PLAY AROUND WITH      ----------------------------------------------
//---------------------------------     TESTING JS FILE TO PLAY AROUND WITH      ----------------------------------------------
//---------------------------------     TESTING JS FILE TO PLAY AROUND WITH      ----------------------------------------------

import React, { useState, useEffect } from "react";

const UseStateBasics = () => {
  // console.log(useState("hello world"));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  const [text, setText] = useState("random title");
  //text is the original state value name, setText is the function name to edit the state of 'text'

  //useState is the function, and 'random title' is the original value of the state.

  useEffect(() => {
    console.log("it rendered");
  });

  useEffect(() => {
    console.log("it only mounted");
  }, []);
  const handleClick = () => {
    if (text === "random title") {
      setText("hello world");
    } else {
      setText("random title");
    }
  };
  return (
    <>
      <h1>{text}</h1>
      <button type='button' className='btn' onClick={handleClick}>
        Change Title
      </button>
    </>
  );
};

export default UseStateBasics;

//---------------------------------     TESTING JS FILE TO PLAY AROUND WITH      ----------------------------------------------
//---------------------------------     TESTING JS FILE TO PLAY AROUND WITH      ----------------------------------------------
//---------------------------------     TESTING JS FILE TO PLAY AROUND WITH      ----------------------------------------------
//---------------------------------     TESTING JS FILE TO PLAY AROUND WITH      ----------------------------------------------
//---------------------------------     TESTING JS FILE TO PLAY AROUND WITH      ----------------------------------------------
//---------------------------------     TESTING JS FILE TO PLAY AROUND WITH      ----------------------------------------------
//---------------------------------     TESTING JS FILE TO PLAY AROUND WITH      ----------------------------------------------
