import React from "react";
import FeaturedStyles from "./FeaturedInfoStyles";

const FeaturedInfo = () => {
  return (
    <FeaturedStyles>
      <div className="featuredItem">
        <p className="title">Revanue</p>
        <div className="moneyContainer">
          <span className="money">$2,415</span>
          <p className="moneyRate">
            -11{" "}
            <span className="negative">
              <i className="fas fa-arrow-down"></i>
            </span>
          </p>
        </div>
        <p className="sub">compared to last month</p>
      </div>
      <div className="featuredItem">
        <p className="title">Styles</p>
        <div className="moneyContainer">
          <span className="money">$2,415</span>
          <p className="moneyRate">
            -11.4{" "}
            <span className="negative">
              <i className="fas fa-arrow-down"></i>
            </span>
          </p>
        </div>
        <p className="sub">compared to last month</p>
      </div>
      <div className="featuredItem">
        <p className="title">Cost</p>
        <div className="moneyContainer">
          <span className="money">$2,225</span>
          <p className="moneyRate">
            +2.4{" "}
            <span className="positive">
              <i className="fas fa-arrow-up"></i>
            </span>
          </p>
        </div>
        <p className="sub">compared to last month</p>
      </div>
    </FeaturedStyles>
  );
};

export default FeaturedInfo;
