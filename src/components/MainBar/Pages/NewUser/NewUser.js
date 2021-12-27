import Button from "../Button/Button";
import React from "react";
import NewUserStyles from "./NewUserStyles";

const NewUser = () => {
    return (
        <NewUserStyles>
            <h5>New User</h5>
            <div className="userContainer">
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
                    <div className="userForm">
                        <div className="gendertitle">
                            <label>Gender</label>
                        </div>
                        <div className="genderInputs">
                            <div className="radios">
                                <input type="radio" name="gender" id="male" value="male" />
                                <label htmlFor="male">male</label>
                            </div>
                            <div className="radios">
                                <input
                                    className="femaleinput"
                                    type="radio"
                                    name="gender"
                                    id="female"
                                    value="female"
                                />
                                <label htmlFor="female">female</label>
                            </div>
                        </div>
                    </div>
                    <div className="userForm">
                        <label>Active</label>
                        <select className="userSelect" name="active" id="active">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                </div>
                <div className="CreateButton">
                    <Button>
                        Create
                    </Button>
                </div>
            </div>
        </NewUserStyles>
    );
};

export default NewUser;
