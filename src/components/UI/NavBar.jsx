export default function Nav({ links }) {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid">
        <h1>Shweta Kadam </h1>
        <ul className="navbar-nav">{links.map((link) => link)}</ul>
      </div>
    </nav>
  );
}
