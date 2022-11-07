import React, { useState } from "react";
import GridViewIcon from "@mui/icons-material/GridView";

import "./LeftNav.css";
import { Link } from "react-router-dom";
import UnivercityNav from "../univercityNav/UnivercityNav";

const LeftNav = () => {
  const [admin, setAdmin] = useState(false);
  const [univercity, setUnivercity] = useState(true);

  return (
    <div className="Leftnav">
      <div className="head">
        <h2>Ericsson</h2>
        <Link className="i" to="/toggle">
          <GridViewIcon className="toggleIcon"></GridViewIcon>
        </Link>
      </div>
      <ul className="adminNav">
        <li>
          <button
            onClick={() => {
              setUnivercity(true);
              setAdmin(false);
            }}
            type="submit"
            className="univercity"
          >
            University
          </button>
        </li>

        <li>
          <button
            onClick={() => {
              setAdmin(true);
              setUnivercity(false);
            }}
            type="submit"
            className="univercity"
          >
            Admin
          </button>
        </li>
      </ul>

      {/* nav Items functionality */}
      {admin ? <h1>Admin</h1> : <UnivercityNav />}
    </div>
  );
};

export default LeftNav;
