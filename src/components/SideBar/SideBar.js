import React from "react";
import SidebarAnchor from "./SidebarAnchors/SidebarAnchors";
import SideBarStyles from "./SideBarStyles";

const SideBar = () => {
  return (
    <SideBarStyles>
      <div className="section">
        <h6>Dashboard</h6>
        <ul>
          <li>
            <SidebarAnchor
              to="/"
              span={<i className="fas fa-sliders-h"></i>}
              spanName="Home"
            />
          </li>
          <li>
            <SidebarAnchor
              to="/home"
              span={<i className="fas fa-chart-line"></i>}
              spanName="Analytics"
            />
          </li>
          <li>
            <SidebarAnchor
              to="/home"
              span={<i className="far fa-chart-bar"></i>}
              spanName="Sales"
            />
          </li>
        </ul>
      </div>
      <div className="section">
        <h6>Quick Menu</h6>
        <ul>
          <li>
            <SidebarAnchor
              to="/user"
              span={<i className="far fa-user"></i>}
              spanName="Users"
            />
          </li>
          <li>
            <SidebarAnchor
              to="/products"
              span={<i className="fas fa-shopping-basket"></i>}
              spanName="Products"
            />
          </li>
          <li>
            <SidebarAnchor
              to="/home"
              span={<i className="fas fa-comment-dollar"></i>}
              spanName="Transactions"
            />
          </li>
        </ul>
      </div>
      <div className="section">
        <h6>Notifications</h6>
        <ul>
          <li>
            <SidebarAnchor
              to="/home"
              span={<i className="far fa-envelope"></i>}
              spanName="Mail"
            />
          </li>
          <li>
            <SidebarAnchor
              to="/home"
              span={<i className="far fa-comments"></i>}
              spanName="Feedback"
            />
          </li>
          <li>
            <SidebarAnchor
              to="/home"
              span={<i className="far fa-sticky-note"></i>}
              spanName="Message"
            />
          </li>
        </ul>
      </div>
      <div className="section">
        <h6>Staff</h6>
        <ul>
          <li>
            <SidebarAnchor
              to="/home"
              span={<i className="fas fa-briefcase"></i>}
              spanName="Manage"
            />
          </li>
          <li>
            <SidebarAnchor
              to="/home"
              span={<i className="fas fa-chart-line"></i>}
              spanName="Analytics"
            />
          </li>
          <li>
            <SidebarAnchor
              to="/home"
              span={<i className="far fa-chart-bar"></i>}
              spanName="Reports"
            />
          </li>
        </ul>
      </div>
    </SideBarStyles>
  );
};

export default SideBar;
