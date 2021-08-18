import React from "react";
import { Link } from "react-router-dom";
import { productData } from "../../../Data";
import Charts from "../Charts/Charts";
import "./product.css";

const Product = () => {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Charts
            data={productData}
            dataKey="sales"
            title="sales Performance"
          />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-select-2019-family?wid=882&hei=1058&fmt=jpeg&qlt=80&.v=1567022175704"
              alt=""
              className="productInfoImg"
            />
            <span className="productName"> Apple Iphone 11 pro</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">key:</span>
              <span className="productInfoValue">111</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">$11167</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active:</span>
              <span className="productInfoValue">yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">No</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label> product name</label>
            <input type="text" placeholder="iphone 11" />
            <label htmlFor=""> In stock</label>
            <select name="inStock" id="inStock">
              <option value="yes"> Yes</option>
              <option value="no"> No</option>
            </select>
            <label htmlFor=""> Active</label>
            <select name="active" id="active">
              <option value="yes"> Yes</option>
              <option value="no"> No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-select-2019-family?wid=882&hei=1058&fmt=jpeg&qlt=80&.v=1567022175704"
                alt=""
                className="productUploadImg"
              />
              <label for="file"> upload</label>
              <input type="file" name="file" id="file" />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
