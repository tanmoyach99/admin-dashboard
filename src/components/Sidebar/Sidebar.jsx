import React from "react";
import "./sidebar.css";
import LineStyleIcon from "@material-ui/icons/LineStyle";
import TimelineIcon from "@material-ui/icons/Timeline";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import LineWeightIcon from "@material-ui/icons/LineWeight";
import ReportIcon from "@material-ui/icons/Report";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sideBarWrapper">
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Dashboard</h3>
          <ul className="sideBarList">
            <Link to="/home">
              <li className="sideBarListItem">
                <LineStyleIcon className="sideBarIcon" />
                home
              </li>
            </Link>
            <li className="sideBarListItem">
              <TimelineIcon className="sideBarIcon" />
              analytics
            </li>
            <li className="sideBarListItem">
              <TrendingUpIcon className="sideBarIcon" />
              sale
            </li>
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Quick Menu</h3>
          <ul className="sideBarList">
            <Link to="/users">
              <li className="sideBarListItem">
                <PermIdentityIcon className="sideBarIcon" />
                Users
              </li>
            </Link>
            <li className="sideBarListItem">
              <LineWeightIcon className="sideBarIcon" />
              Products
            </li>
            <li className="sideBarListItem">
              <MonetizationOnIcon className="sideBarIcon" />
              Transactions
            </li>
            <li className="sideBarListItem">
              <ReportIcon className="sideBarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Dashboard</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem">
              <MailOutlineIcon className="sideBarIcon" />
              Mail
            </li>
            <li className="sideBarListItem">
              <DynamicFeedIcon className="sideBarIcon" />
              Feedback
            </li>
            <li className="sideBarListItem">
              <QuestionAnswerIcon className="sideBarIcon" />
              Message
            </li>
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Staff </h3>
          <ul className="sideBarList">
            <li className="sideBarListItem">
              <ControlPointIcon className="sideBarIcon" />
              Manage
            </li>
            <li className="sideBarListItem">
              <AccountTreeIcon className="sideBarIcon" />
              analytics
            </li>
            <li className="sideBarListItem">
              <ReportIcon className="sideBarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
