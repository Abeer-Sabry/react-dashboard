import React from "react";
import Button from "../../../Button/Button";
import SmWidgetStyles from "./SmWidgetStyles";

const SmWidget = () => {
  return (
    <SmWidgetStyles>
      <div className="widget">
        <h5>New Join Members</h5>
        <ul className="list">
          <li className="item">
            <img
              src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <div className="users">
              <p className="userName">Anna Keller</p>
              <p className="userJob">Software Engineer</p>
            </div>
            <div className="widgButton">
              <Button>Display</Button>
            </div>
          </li>
          <li className="item">
            <img
              src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <div className="users">
              <p className="userName">Anna Keller</p>
              <p className="userJob">Software Engineer</p>
            </div>
            <div className="widgButton">
              <Button>Display</Button>
            </div>
          </li>
          <li className="item">
            <img
              src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <div className="users">
              <p className="userName">Anna Keller</p>
              <p className="userJob">Software Engineer</p>
            </div>
            <div className="widgButton">
              <Button>Display</Button>
            </div>
          </li>
          <li className="item">
            <img
              src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <div className="users">
              <p className="userName">Anna Keller</p>
              <p className="userJob">Software Engineer</p>
            </div>
            <div className="widgButton">
              <Button>Display</Button>
            </div>
          </li>
        </ul>
      </div>
    </SmWidgetStyles>
  );
};

export default SmWidget;
