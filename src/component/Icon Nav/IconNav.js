import React from "react";
import SchoolIcon from '@mui/icons-material/School';
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import SearchIcon from "@mui/icons-material/Search";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import ShareIcon from "@mui/icons-material/Share";
import SettingsIcon from "@mui/icons-material/Settings";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import "./IconNav.css";

const IconNav = () => {
  return (
    <div className="nav">
      <div className="icons-1">
        <button className="collegeIcon">
          <SchoolIcon />
        </button>

        <button>
          <FormatAlignCenterIcon className="Icon" />
        </button>
        <button>
          <SearchIcon className="Icon" />
        </button>
        <button>
          <AllInboxIcon className="Icon" />
        </button>
        <button>
          <FolderOpenIcon className="Icon" />
        </button>
        <button>
          <ShareIcon className="Icon" />
        </button>
        <button>
          {" "}
          <SettingsIcon className="Icon" />
        </button>
      </div>

      <div className="icons-2">
        <button>
          <FormatAlignRightIcon className="Icon" />
        </button>

        <button>
          <PowerSettingsNewIcon className="Icon" />
        </button>
      </div>
    </div>
  );
};

export default IconNav;