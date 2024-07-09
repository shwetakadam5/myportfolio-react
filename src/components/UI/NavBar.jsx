import "../../App.css";
export default function NavBar({ links }) {
  return (
    <nav id="header" className="navbar navbar-expand-lg bg-secondary">
      <h3>Shweta Kadam </h3>

      <ul className="navbar-nav">{links.map((link) => link)}</ul>
    </nav>
  );
}
