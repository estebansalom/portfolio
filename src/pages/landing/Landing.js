import React from "react";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faAngular, faJava } from "@fortawesome/free-brands-svg-icons";
import Portfolio from "../../components/portfolio/Portfolio";
import Contact from "../../components/contact/Contact";

const Landing = (props) => {
  return (
    <div className="landing__container--base">
      <div
        className="landing__parallax-container--base"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/esalomc/image/upload/v1622167864/parallax5.jpg)`,
        }}
      >
        <div className="landing__title--base">
          {props.data.Personal ? props.data.Personal.name : "Esteban Salom"}
        </div>
        <div className="landing__subtitle--base">Software Developer</div>
        <a href="#about" className="landing__button--base page-scroll">
          More Info
        </a>{" "}
      </div>
      <div id="about" className="landing__about--base section">
        <div className="title-underline">
          <h2 className="section-title">About Me</h2>
        </div>
        <div className="row landing__about-info--base">
          <div className="landing__about-image--base">
            <img src="img/profile-pic.jpg" alt="" />
          </div>
          <div className="landing__about-description--base">
            {props.data.Personal
              ? props.data.Personal.description
              : "Loading..."}
          </div>
        </div>
      </div>
      <div id="skills" className="landing__skills--base section dark">
        <div className="title-underline">
          <h2 className="section-title dm-text">Skills</h2>
        </div>
        <div className="landing__skill-icons--base">
          <div className="landing__skill-icon--base">
            <FontAwesomeIcon
              icon={faReact}
              className="circle-icon"
            ></FontAwesomeIcon>
            <h3>React</h3>
          </div>
          <div className="landing__skill-icon--base">
            <FontAwesomeIcon
              icon={faJava}
              className="circle-icon"
            ></FontAwesomeIcon>
            <h3>Spring Boot</h3>
          </div>
          <div className="landing__skill-icon--base">
            <FontAwesomeIcon
              icon={faAngular}
              className="circle-icon"
            ></FontAwesomeIcon>
            <h3>Angular</h3>
          </div>
        </div>
        {props.data.Programming
          ? props.data.Programming.map((l, i) => (
              <div key={l.name + "-" + i} className="landing__language--base">
                <h3 className="dm-text">{l.name}</h3>
                <Progress
                  theme={{
                    active: {
                      color: l.color,
                    },
                  }}
                  percent={l.percentage}
                  className="dm-text"
                />
              </div>
            ))
          : "Loading..."}
        <div className="row landing__soft-skills--base">
          {props.data.SoftSkills
            ? props.data.SoftSkills.map((sk, i) => (
                <div
                  key={"skill-group-" + i}
                  className="landing__skill-group--base"
                >
                  <ul className="landing__soft-skills-list--base">
                    {sk.map((s, j) => (
                      <h3 className="dm-text">{s.name}</h3>
                    ))}
                  </ul>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
      <div id="formation" className="landing__formation--base section">
        <div className="title-underline">
          <h2 className="section-title">Education</h2>
        </div>
        <div className="landing__degrees--base">
          {props.data.Formation
            ? props.data.Formation.map((f, i) => (
                <div
                  key={f.name + "-" + i}
                  className="row landing__degree--base"
                >
                  <h3 className="center">
                    {f.degree} at {f.place}
                  </h3>{" "}
                  <h5 className="center">
                    {f.from} - {f.to}
                  </h5>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
      <div id="portfolio" className="landing__portfolio--base section">
        <div className="title-underline">
          <h2 className="section-title">Portfolio</h2>
        </div>
        <p className="landing__portfolio-description--base">
          Below you can find some of my most outstanding projects. Click on any
          one of them for more information about it.
        </p>
        <div className="landing__portfolio-items--base">
          {props.data.Projects
            ? props.data.Projects.map((p, i) => <Portfolio data={p} />)
            : "Loading..."}
        </div>
      </div>
      <div id="languages" className="landing__languages--base section dark">
        <div className="title-underline">
          <h2 className="section-title dm-text">Languages</h2>
        </div>

        {props.data.Languages
          ? props.data.Languages.map((l, i) => (
              <div key={l.name + "-" + i} className="landing__language--base">
                <h3 className="dm-text">{l.name}</h3>
                <Progress
                  theme={{
                    active: {
                      color: l.color,
                    },
                  }}
                  percent={l.percentage}
                  className="dm-text"
                />
              </div>
            ))
          : "Loading..."}
      </div>
      <div id="experience" className="landing__experience--base section">
        <div className="title-underline">
          <h2 className="section-title">Experience</h2>
        </div>
        <div className="landing__experiences--base">
          {props.data.Experience
            ? props.data.Experience.map((e, i) => (
                <div className="landing__position-underline--base">
                  <div
                    key={e.place + "-" + i}
                    className="landing__position--base"
                  >
                    <h3 className="center">
                      {e.title} at {e.place}
                    </h3>{" "}
                    <h5 className="center">
                      {e.from} - {e.to}
                    </h5>
                    <div className=" row landing__job-info--base">
                      <img
                        src={e.image}
                        alt=""
                        className="landing__job-logo--base"
                      />
                      <div className="landing__job-description--base">
                        <p>{e.description}</p>
                        <ul>
                          {e.tasks.map((t, j) => (
                            <li>{t.name}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
      <div id="contact" className="landing__contact--base section">
        <Contact data={props.data.Contact ? props.data.Contact : {}} />
      </div>
    </div>
  );
};

export default Landing;
