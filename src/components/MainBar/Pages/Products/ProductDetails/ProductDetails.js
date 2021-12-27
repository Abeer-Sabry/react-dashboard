import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import ProductDetailsStyles from "./ProductDetailsStyles";

const ProductDetails = () => {
    return (
        <ProductDetailsStyles>
            <div className="titleInfo">
                <h4>Product</h4>
                <Link to="/newUser">
                    <Button className="create">Create</Button>
                </Link>
            </div>
            <div className="productInfo">
                <div className="productImg">
                    <img
                        src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                    <p>Apple Airpods</p>
                </div>
                <div className="details">
                    <ul>
                        <li>
                            <span className="listTile">
                                id:
                            </span>
                            <span>123</span>
                        </li>
                        <li>
                            <span className="listTile">
                                sales:
                            </span>
                            <span>5124</span>
                        </li>
                        <li>
                            <span className="listTile">
                                active:
                            </span>
                            <span>yes</span>
                        </li>
                        <li>
                            <span className="listTile">
                                in stock:
                            </span>
                            <span>no</span>
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
                        <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
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
        </ProductDetailsStyles>
    );
};

export default ProductDetails;
