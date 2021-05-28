import React from "react";
import { NavLink as Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className="row header__container--base">
      <div className="header__home-container--base">
        <Link
          exact
          to="/"
          activeClassName="selected"
          className="header__home--base"
        >
          Portfolio
        </Link>
      </div>
      <div className="header__link-container--base">
        <Link
          to="/projects"
          activeClassName="selected"
          className="header__home--base"
        >
          Projects
        </Link>
        <a
          href="https://res.cloudinary.com/esalomc/image/upload/v1622169320/EstebanSalomCastillo-SoftwareDeveloper.pdf"
          activeClassName="selected"
          className="header__link--base"
          target="_blank"
        >
          View CV
        </a>
      </div>
    </div>
  );
}
