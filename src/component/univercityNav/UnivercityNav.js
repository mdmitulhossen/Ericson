import React from 'react';
import DashboardIcon from "@mui/icons-material/Dashboard";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import DoorbellIcon from "@mui/icons-material/Doorbell";

import "./UnivercityNav.css";
import { Link } from "react-router-dom";

const UnivercityNav = () => {
    return (
        <div>
            <div className="LeftNavItem">
        <div className="ItemNav">
          <Link className="i" to="dashboad">
            <div className="items">
              <DashboardIcon />
              <p>Dashboard</p>
            </div>
          </Link>
          <Link className="i" to="professor">
            <div className="items">
              <EmojiPeopleIcon />
              <p>Professors</p>
            </div>
          </Link>
          <Link className="i" to="staff">
            <div className="items">
              <AccountCircleIcon />
              <p>Staff</p>
            </div>
          </Link>
          <Link className="i" to="students">
            <div className="items">
              <PeopleOutlineIcon />
              <p>Students</p>
            </div>
          </Link>
          <Link className="i" to="department">
            <div className="items">
              <Diversity3Icon />
              <p>Department</p>
            </div>
          </Link>
          <Link className="i" to="courses">
            <div className="items">
              <CastForEducationIcon />
              <p>Courses</p>
            </div>
          </Link>
          <Link className="i" to="library">
            <div className="items">
              <LocalLibraryIcon />
              <p>Library</p>
            </div>
          </Link>
          <Link className="i" to="holidays">
            <div className="items">
              <DoorbellIcon />
              <p>Holidays</p>
            </div>
          </Link>
        </div>

        <h4 className="extra">Extra</h4>

        <div className="ItemNav">
          <Link className="i" to="">
            <div className="items">
              <DashboardIcon />
              <p>Dashboard</p>
            </div>
          </Link>
          <Link className="i" to="">
            <div className="items">
              <EmojiPeopleIcon />
              <p>Professors</p>
            </div>
          </Link>
          <Link className="i" to="">
            <div className="items">
              <AccountCircleIcon />
              <p>Staff</p>
            </div>
          </Link>
          <Link className="i" to="">
            <div className="items">
              <PeopleOutlineIcon />
              <p>Students</p>
            </div>
          </Link>
          <Link className="i" to="">
            <div className="items">
              <Diversity3Icon />
              <p>Department</p>
            </div>
          </Link>
          <Link className="i" to="">
            <div className="items">
              <CastForEducationIcon />
              <p>Courses</p>
            </div>
          </Link>
          <Link className="i" to="">
            <div className="items">
              <LocalLibraryIcon />
              <p>Library</p>
            </div>
          </Link>
          <Link className="i" to="">
            <div className="items">
              <DoorbellIcon />
              <p>Holidays</p>
            </div>
          </Link>
        </div>
      </div>
        </div>
    );
};

export default UnivercityNav;