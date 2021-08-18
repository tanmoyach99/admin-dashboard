import React from "react";
import "./newProduct.css";

const NewProduct = () => {
  return (
    <div className="newProduct">
      <div className=" addProduct">
        <h1 className=" addProductTitle">new user</h1>
        <form className=" addProductForm">
          <div className=" addProductItem">
            <label>Image</label>
            <input type="file" placeholder="file" />
          </div>
          <div className=" addProductItem">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Iphone" />
          </div>
          <div className=" addProductItem">
            <label htmlFor="">Stock</label>
            <input type="email" placeholder="111" />
          </div>

          <div className=" addProductItem">
            <label htmlFor="">active</label>
            <select className=" addProductSelect" name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <button className=" addProductButton">Create</button>
        </form>
      </div>
    </div>
  );
};

export default NewProduct;
