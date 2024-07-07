// Bringing in the required import from 'react-router-dom'
import { Link, useLocation } from "react-router-dom";
import Navbar from "./UI/NavBar";
export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  const currentPage = useLocation().pathname;
  console.log(currentPage);
  return (
    <Navbar
      links={[
        <Link key={1} className="nav-link text-light" to="/">
          About Me
        </Link>,
        <Link key={2} className="nav-link text-light" to="/portfolio">
          Portfolio
        </Link>,
        <Link key={3} className="nav-link text-light" to="/contact">
          Contact
        </Link>,
        <Link key={4} className="nav-link text-light" to="/resume">
          Resume
        </Link>,
      ]}
    />
  );
}
