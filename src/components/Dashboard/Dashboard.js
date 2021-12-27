import React from "react";
import SideBar from "../SideBar/SideBar";
import TopBar from "../TopBar/TopBar";
import MainBar from '../MainBar/MainBar'
import Styles from "./Styles";

const Dashboard = () => {
  return (
    <Styles>
      <TopBar />
      <div className="Bars">
        <SideBar />
        <MainBar />
      </div>{" "}
    </Styles>
  );
};

  

export default Dashboard;
