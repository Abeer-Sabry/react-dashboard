import React from "react";
import UserDetailsStyles from "./UserDetailsStyles";
import Button from "../../../Button/Button";
import { Link } from "react-router-dom";

const UserDetails = () => {
  return (
    <UserDetailsStyles>
      <div className="titleInfo">
        <h4>Edit User</h4>
        <Link to="/newUser">
          <Button className="create">Create</Button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userContent">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <div className="ShowInfo">
              <span className="name">Anna Becker</span>
              <span className="title">Software Engineer</span>
            </div>
          </div>
          <div className="userDetails">
            <ul>
              <h6>Account Detail</h6>
              <li>
                <span>
                  <i className="far fa-user"></i>
                </span>
                <p>annabeck99</p>
              </li>
              <li>
                <span>
                  <i className="far fa-calendar"></i>
                </span>
                <p>0.12.1999</p>
              </li>
              <h6 className="contact">Contact Detail</h6>
              <li>
                <span>
                  <i className="fas fa-mobile-alt"></i>
                </span>
                <p>+1 123 456 67</p>
              </li>
              <li>
                <span>
                  <i className="far fa-envelope"></i>
                </span>
                <p>annabeck99@gmail.com</p>
              </li>
              <li>
                <span>
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <p>New York | USA</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="userUpdate">
          <div className="forminfo">
            <div className="userForm">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" />
            </div>
            <div className="userForm">
              <label htmlFor="email">Email</label>
              <input id="email" type="text" />
            </div>
            <div className="userForm">
              <label htmlFor="phone">Phone</label>
              <input id="phone" type="text" />
            </div>
            <div className="userForm">
              <label htmlFor="address">Address</label>
              <input id="address" type="text" />
            </div>
          </div>
          <div className="upinfo">
            <div className="content">
              <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
              <div className="file">
                <label htmlFor="file">
                  <i className="fas fa-upload"></i>
                </label>
                <input id="file" type="file" style={{ display: "none" }} />
              </div>
            </div>
            <div>
              <Button>Update</Button>
            </div>
          </div>
        </div>
      </div>
    </UserDetailsStyles >
  );
};

export default UserDetails;
