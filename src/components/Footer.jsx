// Bringing in the required import from 'react-router-dom'
import { Link } from "react-router-dom";
import FooterLinks from "./UI/FooterLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  // The Navbar UI component will render each of the Link elements in the links prop

  return (
    <div>
      <FooterLinks
        links={[
          <Link key={1} className="nav-link text-light" to="tel:+61402393645">
            <FontAwesomeIcon icon={faPhone} />
          </Link>,
          <Link
            key={2}
            className="nav-link text-light"
            to="mailto:shwetakadam5@gmail.com"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>,
          <Link
            key={3}
            className="nav-link text-light"
            to="https://x.com/?lang=en-au"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </Link>,
          <Link
            key={4}
            className="nav-link text-light"
            to="https://github.com/shwetakadam5"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>,
          <Link
            key={5}
            className="nav-link text-light"
            to="https://www.linkedin.com/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>,
          <Link
            key={6}
            className="nav-link text-light"
            to="https://stackoverflow.com/users/23349379/shwetaz"
          >
            <FontAwesomeIcon icon={faStackOverflow} />
          </Link>,
        ]}
      />
    </div>
  );
}
