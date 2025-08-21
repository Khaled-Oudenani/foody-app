import "../styles/Footer.css";
// MUI
import AddCallIcon from "@mui/icons-material/AddCall";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div id="contact" className="footer">
      <div className="contact-info">
        <div className="contact-item">
          <AddCallIcon />
          <p>+213541929912</p>
        </div>
        <div className="contact-item">
          <EmailIcon />
          <p>khaoud1234@gmail.com</p>
        </div>
      </div>

      <div className="social-icons">
        <a
          href="https://github.com/Khaled-Oudenani"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.facebook.com/kha.led.342487/"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/khaled-oudenani/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
      <p className="copyright">
        © 2025 <i>KHALED</i>. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
