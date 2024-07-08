import "../../App.css";
export default function NavBar({ links }) {
  return (
    <nav id="header" className="navbar navbar-expand-lg bg-secondary">
      {/* <div className="container-fluid"> */}
      <h1>Shweta Kadam </h1>

      <ul className="navbar-nav">{links.map((link) => link)}</ul>
      {/* </div> */}
    </nav>
  );
}
