import React from "react";
import Charts from "./Charts/Chart";
import FeaturedInfo from "./FeaturedInfo/FeaturedInfo";
import HomeStyles from "./HomeStyles";


const Home = () => {
  return (
    <HomeStyles>
      <FeaturedInfo />
      <Charts/>
     
    </HomeStyles>
  );
};

export default Home;
