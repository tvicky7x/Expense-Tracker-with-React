import React from "react";

function CharBar(props) {
  if (props.value == NaN) {
    console.log("hello");
  }
  return (
    <div className="d-flex flex-column">
      <div
        className="m-1 bg-body-tertiary rounded-2 d-flex align-items-end overflow-hidden"
        style={{ width: "15px", height: "150px" }}
      >
        <div
          className="bg-dark w-100"
          style={{ height: `${props.value}%` }}
        ></div>
      </div>
      {props.label}
    </div>
  );
}

export default CharBar;
