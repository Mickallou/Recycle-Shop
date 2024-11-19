import React from "react";
import './AddProduct.css'
import { Link } from "react-router-dom";

const AddProduct = () => {
    return (
        <Link to="/newCard"><button className="bn632-hover bn25">New Product</button></Link>
    );
};

export default AddProduct;
