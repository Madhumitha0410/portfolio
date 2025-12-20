export default function Qualification() {
  return (
    <section id="qualification">
      <h2 className="section-title qualification-title">
        <span className="title-bar"></span>Qualification
      </h2>

      <div className="qualification-container">
        {/* Academic Qualification */}
        <div className="qualification-box glass-card">
          <h3 className="qualification-heading">Academic Qualification</h3>

          <p className="qualification-degree">MCA – 8.9</p>
          <p className="qualification-text">
            Periyar Maniammai Institute of Science and Technology
          </p>
          <p className="qualification-text">Thanjavur</p>
          <p className="qualification-year">2025</p>
        </div>

        {/* Technical Qualification */}
        <div className="qualification-box glass-card">
          <h3 className="qualification-heading">Technical Qualification</h3>

          <ul className="qualification-list">
            <li>Python</li>
            <li>MySQL</li>
            <li>Data Analysis using python</li>
            <li>Intern in web development and Automation Testing</li>
            
          </ul>
        </div>
      </div>
    </section>
  );
}
