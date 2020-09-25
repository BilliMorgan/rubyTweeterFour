import React from "react";

const test = (props) => {
  console.log(props);
  return (
    <div>
      <p>test props {props.test1}</p>
    </div>
  );
};

export default test;
