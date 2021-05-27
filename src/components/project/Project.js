import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Project = (props) => {
  return (
    <div id={props.data.name} className="project__card-border--base">
      <div
        key={`${props.data.name}-${props.data.i}`}
        className="project-card project__card--base"
      >
        <h2>{props.data.name}</h2>
        <h4>{props.data.position}</h4>
        <h5>{props.data.date}</h5>
        <p className="project__description--base">{props.data.description}</p>
        <div className="thumbnail">
          {" "}
          <Carousel>
            {props.data.images
              ? props.data.images.map((pic, j) => (
                  <div key={`${pic.name}-${j}`}>
                    <img src={pic.url} alt={pic.alt} />
                    <p className="legend">{pic.name}</p>
                  </div>
                ))
              : ""}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Project;
