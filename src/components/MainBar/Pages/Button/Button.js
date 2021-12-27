import React from "react";
import ButtonStyle from "./ButtonStyle";

const Button = (props) => {
  return (
    <ButtonStyle className={props.className}>{props.children}</ButtonStyle>
  );
};

export default Button;
