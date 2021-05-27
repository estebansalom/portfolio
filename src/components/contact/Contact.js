import { useState } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationArrow,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";
const initialState = {
  name: "",
  email: "",
  message: "",
};
const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm(
        "service_i2jqsja",
        "template_qgclajl",
        e.target,
        "user_ILIpR7l6aN7HnbwOQkHhO"
      )
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact">
      <h2>Contact Me</h2>
      <div className="row">
        <div className="col-md-8">
          <div className="contact__main--base">
            <div className="contact__title--base">
              <p>
                Please fill out the form with accurate and complete information,
                and I will be contacting you as soon as posible.
              </p>
            </div>
            <form name="sentMessage" validate onSubmit={handleSubmit}>
              <div className="row contact__input-row--base">
                <div className="form-group contact__input--base">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    required
                    onChange={handleChange}
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group contact__input--base">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    required
                    onChange={handleChange}
                  />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  rows="6"
                  placeholder="Message"
                  required
                  onChange={handleChange}
                ></textarea>
                <p className="help-block text-danger"></p>
              </div>
              <div id="success"></div>
              <button
                type="submit"
                className="btn-custom contact__button--base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <h3>Contact Information</h3>
            <p>
              <span>
                <FontAwesomeIcon
                  icon={faLocationArrow}
                  className="fa"
                ></FontAwesomeIcon>{" "}
                Address
              </span>
              {props.data ? props.data.address : "loading"}
            </p>
          </div>
          <div className="contact-item">
            <p>
              <span>
                <FontAwesomeIcon
                  icon={faPhone}
                  className="fa fa-phone"
                ></FontAwesomeIcon>{" "}
                Phone
              </span>{" "}
              {props.data ? props.data.phone : "loading"}
            </p>
          </div>
          <div className="contact-item">
            <p>
              <span>
                <FontAwesomeIcon
                  icon={faEnvelopeOpen}
                  className="fa fa-envelope-o"
                ></FontAwesomeIcon>{" "}
                Email
              </span>{" "}
              <a href="mailto:esteban.salom@gmail.com">
                {props.data ? props.data.email : "loading"}
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-12">
        <div className="row">
          <div className="social">
            <ul>
              <li>
                <a target="_blank" href={props.data ? props.data.github : "/"}>
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="fa"
                  ></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href={props.data ? props.data.linkedin : "/"}
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="fa"
                  ></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href={props.data ? props.data.whatsapp : "/"}
                >
                  <FontAwesomeIcon
                    icon={faWhatsappSquare}
                    className="fa"
                  ></FontAwesomeIcon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
