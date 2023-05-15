import React, { useEffect, useState } from "react";

export function MyCounter() {
  /**
   * componentDidMount --> first render
   * componentDidUpdate
   * ----------------------
   * No second Params -->component Did Mount ,
   *  1- [] --> component Did Mount
   *  2- [stateName] --> component Did Mount , componentDidUpdate[stateName]
   *
   */
  /** Mange state inside function component */
  let [count, setCount] = useState(0);
  let [title, setTitle] = useState("Counter Component");
  let [show, setShow] = useState(true);

  // componentDidMount , componentDidUpdate
  useEffect(() => {
    console.log("3-Component Did Mount");
  });

  //   useEffect(() => {
  //     console.log("Test USe Effect");
  //   }, []);

  let increase = () => {
    setCount(count + 1);
  };
  let decrease = () => {
    setCount(count - 1);
  };
  let changeTitle = () => {
    setTitle("python track");
  };
  let toggle = () => {
    setShow(!show);
  };
  return (
    <div className="bg-light p-5 text-center">
      {console.log("1-Render Method")}
      {false && <h1>Welcome From ITI</h1>}
      <h4>{title}</h4>
      <p className="lead">Count : {count}</p>
      <button onClick={increase} className="btn btn-outline-success mx-2">
        Increase
      </button>
      <button onClick={decrease} className="btn btn-outline-danger mx-2">
        decrease
      </button>
      <button onClick={changeTitle} className="btn btn-outline-dark mx-2">
        Change Title
      </button>
      <button onClick={toggle} className="btn btn-outline-dark mx-2">
        Toggle
      </button>
    </div>
  );
}

// function useState(param){
//     return [param,function(){

//         // code
//         param
//     }]
// }
// let [show, setShow] = useState(false);
