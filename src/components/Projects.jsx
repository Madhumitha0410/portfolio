import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title projects-title">
        <span className="title-bar"></span>Projects
      </h2>

      <div className="projects-container">
        {/* Main Project */}
        <div className="project-box">
          <h3 className="project-heading">Main project</h3>
          <a
            href="https://github.com/Madhumitha0410/automated-extortion-word-detection.git"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <FaGithub className="project-icon" />
            https://github.com/Madhumitha0410/automated-extortion-word-detection.git
          </a>
        </div>

        {/* Mini Project */}
        <div className="project-box">
          <h3 className="project-heading">Mini project</h3>
          <a
            href="https://github.com/Madhumitha0410/automated-extortion-word-detection.git"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <FaGithub className="project-icon" />
            https://github.com/Madhumitha0410/automated-extortion-word-detection.git
          </a>
        </div>
      </div>
    </section>
  );
}
