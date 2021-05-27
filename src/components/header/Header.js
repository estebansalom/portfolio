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
        {/* <Link
          to="#contact"
          href="#contact"
          activeClassName="selected"
          className="header__link--base"
        >
          Contact
        </Link> */}
        <Link
          to="/docs/EstebanSalomCastillo-SoftwareDeveloper.docx"
          activeClassName="selected"
          className="header__link--base"
          target="_blank"
          download
        >
          Resume <FontAwesomeIcon icon={faFileDownload}></FontAwesomeIcon>
        </Link>
      </div>
    </div>
  );
}
