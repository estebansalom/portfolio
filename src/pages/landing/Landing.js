import React from "react";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faAngular, faJava } from "@fortawesome/free-brands-svg-icons";
import Portfolio from "../../components/portfolio/Portfolio";
import Contact from "../../components/contact/Contact";
import { FormattedMessage } from "react-intl";

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
        <div className="landing__subtitle--base"><FormattedMessage id="app.personal.job" defaultMessage="Software Developer"/></div>
        <a href="#about" className="landing__button--base page-scroll">
        <FormattedMessage id="app.parallax.button" defaultMessage="More Info"/>
        </a>{" "}
      </div>
      <div id="about" className="landing__about--base section">
        <div className="title-underline">
          <h2 className="section-title"><FormattedMessage id="app.titles.aboutme" defaultMessage="About Me"/></h2>
        </div>
        <div className="row landing__about-info--base">
          <div className="landing__about-image--base">
            <img src="img/profile-pic.jpg" alt="" />
          </div>
          <div className="landing__about-description--base">
            
            {props.data.Personal
              ? <FormattedMessage id="app.personal.description" defaultMessage={props.data.Personal.description}/> 
              : "Loading..."}
          </div>
        </div>
      </div>
      <div id="skills" className="landing__skills--base section dark">
        <div className="title-underline">
          <h2 className="section-title dm-text"><FormattedMessage id="app.titles.skills" defaultMessage="Skills"/></h2>
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
            <h3>Java Spring</h3>
          </div>
          <div className="landing__skill-icon--base">
            <FontAwesomeIcon
              icon={faAngular}
              className="circle-icon"
            ></FontAwesomeIcon>
            <h3>Angular 12</h3>
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
                      <h3 className="dm-text"><FormattedMessage id={"app.soft_skills."+(j+(i*3)+1)} defaultMessage={s.name}/></h3>
                    ))}
                  </ul>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
      <div id="formation" className="landing__formation--base section">
        <div className="title-underline">
          <h2 className="section-title"><FormattedMessage id="app.titles.formation" defaultMessage="Education"/></h2>
        </div>
        <div className="landing__degrees--base">
          {props.data.Formation
            ? props.data.Formation.map((f, i) => (
                <div
                  key={f.name + "-" + i}
                  className="row landing__degree--base"
                >
                  <h3 className="center">
                  <FormattedMessage id={"app.formation.degree."+f.i18n} defaultMessage={f.degree}/> <FormattedMessage id="app.general.at" defaultMessage="at"/> {f.place}
                  </h3>{" "}
                  <h5 className="center">
                  <FormattedMessage id={"app.formation.start_date."+f.i18n} defaultMessage={f.from} /> - <FormattedMessage id={"app.formation.end_date."+f.i18n} defaultMessage={f.to} />
                  </h5>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
      <div id="portfolio" className="landing__portfolio--base section">
        <div className="title-underline">
          <h2 className="section-title"><FormattedMessage id="app.titles.portfolio" defaultMessage="Portfolio"/></h2>
        </div>
        <p className="landing__portfolio-description--base">
        <FormattedMessage id="app.portfolio.description" defaultMessage="Below you can find some of my most outstanding projects. Click on any
          one of them for more information about it."/>
          
        </p>
        <div className="landing__portfolio-items--base">
          {props.data.Projects
            ? props.data.Projects.map((p, i) => <Portfolio data={p} />)
            : "Loading..."}
        </div>
      </div>
      <div id="languages" className="landing__languages--base section dark">
        <div className="title-underline">
          <h2 className="section-title dm-text"><FormattedMessage id="app.titles.languages" defaultMessage="Languages"/></h2>
        </div>

        {props.data.Languages
          ? props.data.Languages.map((l, i) => (
              <div key={l.name + "-" + i} className="landing__language--base">
                <h3 className="dm-text"> <FormattedMessage id={"app.languages."+l.name.toLowerCase()} defaultMessage={l.name}/></h3>
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
          <h2 className="section-title"><FormattedMessage id="app.titles.experience" defaultMessage="Experience"/></h2>
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
                    <FormattedMessage id={"app.experience.title."+e.i18n} defaultMessage={e.title} /> <FormattedMessage id="app.general.at" defaultMessage="at"/> {e.place}
                    </h3>{" "}
                    <h5 className="center">
                    <FormattedMessage id={"app.experience.start_date."+e.i18n} defaultMessage={e.from} /> - <FormattedMessage id={"app.experience.end_date."+e.i18n} defaultMessage={e.to} />
                    </h5>
                    <div className=" row landing__job-info--base">
                      <img
                        src={e.image}
                        alt=""
                        className="landing__job-logo--base"
                      />
                      <div className="landing__job-description--base">
                        <FormattedMessage id={"app.experience.description."+e.i18n} defaultMessage={e.description} />
                        <ul>
                          {e.tasks.map((t, j) => (
                            <li><FormattedMessage id={"app.experience.tasks."+e.i18n+"."+(j+1)} defaultMessage={t.name} /></li>
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
