import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import resume from "../assets/Madhumitha cv.pdf";

export default function Hero() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: "100vh",
        padding: "0 10%",
        gap: "40px",
      }}
    >
      {/* ================= LEFT CONTENT ================= */}
      <div style={{ maxWidth: "600px" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
          Hi, I'm <span style={{ color: "#38bdf8" }}>Madhumitha</span>
        </h1>

        <p
          style={{
            color: "#9ca3af",
            marginTop: "12px",
            fontSize: "18px",
          }}
        >
         I’m a software developer passionate about creating modern web applications that solve real problems. From intuitive frontends to reliable backends, I enjoy writing maintainable code and continuously growing with new technologies.
        </p>

        {/* Buttons */}
        <div
          style={{
            marginTop: "24px",
            display: "flex",
            gap: "16px",
          }}
        >
          {/* View Projects → GitHub */}
          <a
            href="https://github.com/Madhumitha0410?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-btn"
          >
            View Projects
          </a>

          {/* Download Resume → PDF */}
          <a
            href={resume}
            download
            className="outline-btn"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* ================= RIGHT IMAGE ================= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          overflow: "hidden",
          border: "4px solid #38bdf8",
          boxShadow: "0 0 40px rgba(56,189,248,0.4)",
        }}
      >
        <img
          src={profile}
          alt="Madhumitha"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </motion.div>
    </motion.section>
  );
}
