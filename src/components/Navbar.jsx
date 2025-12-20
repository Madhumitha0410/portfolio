export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Left: Name */}
      <div className="navbar-left">
        <strong></strong>
      </div>

      {/* Center: Menu */}
      <div className="navbar-center">
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#qualification">Qualification</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
