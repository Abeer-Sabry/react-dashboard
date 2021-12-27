import React from "react";
import { NavLink } from "react-router-dom";
import Styles from "./AnchorsStyles";

const SidebarAnchor = props => {
  return (
    <Styles>
          <NavLink to={props.to}>
            <span>{props.span}</span>
            {props.spanName}
          </NavLink>
    </Styles>
  );
};

export default SidebarAnchor;
