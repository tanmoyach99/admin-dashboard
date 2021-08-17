import React from "react";
import { Link, useParams } from "react-router-dom";
import "./User.css";

const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User </h1>
        <Link to="newUser">
          <button className="userAddButton">Create User</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://i.ibb.co/f0kK5w2/IMG-20201121-232938-removebg-preview.png"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUserName">tanmoy Acharjee</span>
              <span className="userShowUserTitle">Web Developer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <h5 className="userShowTitle">Account Details</h5>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">Tanmoy</span>
            </div>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">28th July,1971</span>
            </div>

            <h5 className="userShowTitle">Contact Details</h5>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">+8801887991199</span>
            </div>

            <div className="userShowInfo">
              <span className="userShowInfoTitle">Tanmoy@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <span className="userShowInfoTitle">
                Raozan,Sultanpur,Chiitagong
              </span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form action="" className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>UserName</label>
                <input
                  type="text"
                  name="userName"
                  placeholder="Tanmoy"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  name="userName"
                  placeholder="Tanmoy Acharjee "
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  name="userName"
                  placeholder="Tanmoy@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  name="userName"
                  placeholder="address"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Contact No</label>
                <input
                  type="text"
                  name="userName"
                  placeholder="+8801887991199"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>BirthDate</label>
                <input
                  type="text"
                  name="userName"
                  placeholder="28th July,1971"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="https://i.ibb.co/f0kK5w2/IMG-20201121-232938-removebg-preview.png"
                  alt=""
                  className="userUploadImg"
                />
                <label htmlFor="file">Publish</label>
                <input
                  type="file"
                  name=""
                  id="file"
                  style={{ display: "none" }}
                />
                <button className="userUpdateButton">Update</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
