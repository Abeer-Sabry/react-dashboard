import React from "react";
import styled from "styled-components";
import SideBar from "../SideBar/SideBar";
import TopBar from "../TopBar/TopBar";

const Home = () => {
    return (
      
            <HomeStyles>
                <TopBar />
                <div className="Bars">
                    
                 <SideBar />
                 another div
                    
                </div>
            </HomeStyles>
      
    );
};
const HomeStyles = styled.div`

  .Bars {
    display: grid;
    grid-template-columns:3fr 9fr;
    grid-column-gap:30px;
  }
`;
export default Home;
