export default function FooterLinks({ links }) {
  return (
    <nav id="footer" className="navbar navbar-expand-lg bg-secondary">
      <ul className="navbar-nav">{links.map((link) => link)}</ul>
    </nav>
  );
}
