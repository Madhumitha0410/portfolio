import {
  FaPython,
  FaGithub,
  FaGitlab,
  FaJira,
  FaHtml5,
  FaCss3Alt,
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint,
  FaCode,
  FaBookOpen,
} from "react-icons/fa";

import {
  SiMysql,
  SiMongodb,
  SiPostman,
  SiSelenium,
} from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="section-title">Skills</h2>

      {/* Technical Skills */}
      <h3 className="skill-subtitle">Technical Skills</h3>
      <div className="skills-grid">
        <Skill icon={<FaHtml5 />} name="HTML" />
        <Skill icon={<FaCss3Alt />} name="CSS" />
        <Skill icon={<FaPython />} name="Python" />
        <Skill icon={<SiMysql />} name="MySQL" />
        <Skill icon={<SiMongodb />} name="MongoDB" />
      </div>

      {/* Known Tools */}
      <h3 className="skill-subtitle">Known Tools</h3>
      <div className="skills-grid">
        <Skill icon={<FaFileWord />} name="MS Word" />
        <Skill icon={<FaFileExcel />} name="MS Excel" />
        <Skill icon={<FaFilePowerpoint />} name="MS PowerPoint" />
        <Skill icon={<FaJira />} name="Jira" />
        <Skill icon={<SiPostman />} name="Postman" />
        <Skill icon={<FaCode />} name="Playwright" />
        <Skill icon={<SiSelenium />} name="Selenium" />
        <Skill icon={<FaCode />} name="VS Code" />
        <Skill icon={<FaBookOpen />} name="Jupyter Notebook" />
        <Skill icon={<FaGithub />} name="GitHub" />
        <Skill icon={<FaGitlab />} name="GitLab" />
      </div>
    </section>
  );
}

function Skill({ icon, name }) {
  return (
    <div className="skill-card">
      <div className="skill-icon">{icon}</div>
      <p>{name}</p>
    </div>
  );
}