import React from "react";

export default function Content(props) {
  let { test } = props;

  test("python track");

  return (
    <div className={` bg-dark text-light p-5 text-center `}>
      <h1>Content Compoent</h1>
      <input type="text" placeholder="Enter Data" />
      <p className="lead">Lorem ipsum</p>
      <button className="btn btn-outline-warning">{"Show more "}</button>
    </div>
  );
}
