import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { starData } from "../content/content";
const Header = ({ history }) => {
  // const pathname = window.location.pathname;
  // const [active, setActive] = useState(pathname);
  return (
    <>
      {/* <ul>
        <li>
          <NavLink to="/" activeClassName="red">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/demo" activeClassName="red">
            Demo
          </NavLink>
        </li>
      </ul> */}
      {/* <ul>
        <li>
          <span
            onClick={() => {
              history.push("/");
              setActive("/");
            }}
            className={`${active === "/" ? "red" : ""}`}
          >
            Home
          </span>
        </li>
        <li>
          <span
            onClick={() => {
              history.push("/demo");
              setActive("/demo");
            }}
            className={`${active === "/demo" ? "red" : ""}`}
          >
            Demo
          </span>
        </li>
        <li>
          <span
            onClick={() => {
              history.push("/about");
            }}
          >
            About
          </span>
        </li>
      </ul> */}
    </>
  );
};

export default withRouter(Header);
