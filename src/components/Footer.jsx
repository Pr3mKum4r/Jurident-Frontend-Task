import "./Footer.css";
import Logo from "../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="socials-footer">
        <div className="socials">
          <div className="logo-text">
            <img src={Logo} alt="logo" className="footer-logo" />
            <h4>StructuraWorks</h4>
          </div>
          <div className="social-links">
            <FontAwesomeIcon
              className="faicon"
              icon={faFacebookF}
              style={{
                color: "#1264f3",
                margin: "20px",
                height: "3vh",
                width: "3vh",
                cursor: "pointer",
              }}
            />
            <FontAwesomeIcon
              icon={faTwitter}
              style={{
                color: "#5fc1f2",
                margin: "20px",
                height: "3vh",
                width: "3vh",
                cursor: "pointer",
              }}
            />
            <FontAwesomeIcon
              icon={faInstagram}
              style={{
                color: "#cf21f2",
                margin: "20px",
                height: "3vh",
                width: "3vh",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
        <div className="footer-about-text-container">
          <div className="programs">
            <h4>Programs</h4>
            <h5 style={{ cursor: "pointer" }}>About Us</h5>
            <h5 style={{ cursor: "pointer" }}>Team</h5>
            <h5 style={{ cursor: "pointer" }}>Blog</h5>
            <h5 style={{ cursor: "pointer" }}>Contact Us</h5>
          </div>
          <div className="resources">
            <h4>Resources</h4>
            <h5 style={{ cursor: "pointer" }}>Features</h5>
            <h5 style={{ cursor: "pointer" }}>Pricing</h5>
            <h5 style={{ cursor: "pointer" }}>Login</h5>
            <h5 style={{ cursor: "pointer" }}>Signup</h5>
          </div>
          <div className="legal">
            <h4>Legal</h4>
            <h5 style={{ cursor: "pointer" }}>Terms of Use</h5>
            <h5 style={{ cursor: "pointer" }}>Privacy Policy</h5>
            <h5 style={{ cursor: "pointer" }}>Legal Notice</h5>
          </div>
        </div>
      </div>
      <div className="end-footer">
        <p>Terms Of Service | Privacy Policy</p>
        <p>Copyright 2023. All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
