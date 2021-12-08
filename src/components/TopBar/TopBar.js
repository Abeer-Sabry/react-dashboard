import React from "react";
import { Badge } from "react-bootstrap";
import styled from "styled-components";

const TopBar = () => {
    return <TopBarStyles>
        <div className="logo">
            Dashboard
        </div>
        <div className="socialIcons">
            <div className="icon1">
                <span><i className="fas fa-bell"></i></span>
                <Badge className="Badge">2</Badge>
            </div>
            <div className="icon2">
                <span><i className="fas fa-cog"></i></span>
                <Badge className="Badge">6</Badge>
            </div>
            <div className="icon3">
                <span><i className="fas fa-globe"></i></span>
                <Badge className="Badge">10</Badge>
            </div>
            <img src="https://t3.ftcdn.net/jpg/02/22/10/62/360_F_222106228_NP5f0gXi3JOCgmaTsEyg7RuyKgwDLGuY.jpg" alt=""/>
        </div>

    </TopBarStyles>;
};
const TopBarStyles = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  .logo{
      color: darkblue;
      font-weight: bold;
      font-size: 22px;
  }
  .socialIcons{
      display: flex;
      align-items: center;
     
      .icon1,.icon2,.icon3{
        position: relative;
      }
      span{
          font-size:25px;
          display: inline-block;
          margin-right:20px;
      }
      .Badge{
          border-radius: 50%;
          width:18px;
          height:18px;
          line-height:9px;
          display: flex;
          justify-content: center;
          font-size:13px;
          position:absolute;
          top: 0;
          left: 10px;
          color: white;
      }
      img{
          width: 40px;
          height: 40px;
          border-radius: 50%;
      }
  }
`;
export default TopBar;
