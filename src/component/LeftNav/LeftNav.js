import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import DoorbellIcon from "@mui/icons-material/Doorbell";

import "./LeftNav.css";
import { Link } from "react-router-dom";

const LeftNav = () => {
  return (
    <div className="Leftnav">
      <div className="head">
        <h2>Ericsson</h2>
        <Link to="/toggle">
          <GridViewIcon className="toggleIcon"></GridViewIcon>
        </Link>
      </div>
      <ul className="adminNav">
        <li>
          <Link to="/univercity" className="univercity">
            University
          </Link>
        </li>
        <li>
          <Link to="/admin" className="univercity">
            Admin
          </Link>
        </li>
      </ul>

      <div className="LeftNavItem">
        <div className="ItemNav">
          <div className="items">
            <DashboardIcon />
            <p>Dashboard</p>
          </div>
          <div className="items">
            <EmojiPeopleIcon />
            <p>Professors</p>
          </div>
          <div className="items">
            <AccountCircleIcon />
            <p>Staff</p>
          </div>
          <div className="items">
            <PeopleOutlineIcon />
            <p>Students</p>
          </div>
          <div className="items">
            <Diversity3Icon />
            <p>Department</p>
          </div>
          <div className="items">
            <CastForEducationIcon />
            <p>Courses</p>
          </div>
          <div className="items">
            <LocalLibraryIcon />
            <p>Library</p>
          </div>
          <div className="items">
            <DoorbellIcon />
            <p>Holidays</p>
          </div>
        </div>

        <h4 className="extra">Extra</h4>

        <div className="ItemNav">
          <div className="items">
            <DashboardIcon />
            <p>Dashboard</p>
          </div>
          <div className="items">
            <EmojiPeopleIcon />
            <p>Professors</p>
          </div>
          <div className="items">
            <AccountCircleIcon />
            <p>Staff</p>
          </div>
          <div className="items">
            <PeopleOutlineIcon />
            <p>Students</p>
          </div>
          <div className="items">
            <Diversity3Icon />
            <p>Department</p>
          </div>
          <div className="items">
            <CastForEducationIcon />
            <p>Courses</p>
          </div>
          <div className="items">
            <LocalLibraryIcon />
            <p>Library</p>
          </div>
          <div className="items">
            <DoorbellIcon />
            <p>Holidays</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
