import React, { useState } from "react";

const Button = (props) => {
  console.log(props.handleClick);
  return <button onClick={props.handleClick}>Increment!</button>;
};

const Parent = () => {
  const [number, setNumber] = useState(0);

  const hanleClick = () => {
    console.log("click");
  };
  return (
    <>
      <p>Du lieu ban dau: {number}</p>
      <Button handleClick={hanleClick} />
    </>
  );
};

export default Parent;

/**
 * * Thế state và props thì khác gì nhau?
 * *
 * * State:
 * *
 * *
 * *
 * * Props:
 * *
 * *
 * *
 */
