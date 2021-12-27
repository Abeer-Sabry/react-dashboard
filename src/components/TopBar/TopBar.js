import React from "react";
import { Badge } from "react-bootstrap";
import TopBarStyles from "./TopBarStyles";

const TopBar = () => {
  return (
    <TopBarStyles>
      <div className="logo">Dashboard </div>
      <div className="socialIcons">
        <div className="icon1">
          <span>
            <i className="fas fa-bell"> </i>
          </span>
          <Badge className="Badge"> 2 </Badge>
        </div>
        <div className="icon2">
          <span>
            <i className="fas fa-cog"> </i>
          </span>
          <Badge className="Badge"> 6 </Badge>
        </div>
        <div className="icon3">
          <span>
            <i className="fas fa-globe"> </i>
          </span>
          <Badge className="Badge"> 10 </Badge>
        </div>
        <img
          src="https://t3.ftcdn.net/jpg/02/22/10/62/360_F_222106228_NP5f0gXi3JOCgmaTsEyg7RuyKgwDLGuY.jpg"
          alt=""
        />
      </div>
    </TopBarStyles>
  );
};

export default TopBar;
