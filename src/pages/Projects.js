import React from "react";
import Project from "../components/project/Project.js";

const Projects = (props) => {
  return (
    <div className="projects__page--base">
      <h1>Projects</h1>
      <div className="projects__link-underline--base title-underline">
        <div className="projects__link-container--base row">
          {props.data
            ? props.data.map((d, i) => (
                <a className="projects__link--base" href={"#" + d.name} i={i}>
                  {d.name}
                </a>
              ))
            : "Loading..."}
        </div>
      </div>
      {props.data
        ? props.data.map((d, i) => <Project data={d} i={i}></Project>)
        : "Loading..."}
    </div>
  );
};

export default Projects;
