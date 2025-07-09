import React from "react";
import { FaCogs } from "react-icons/fa";

const styles = {
  root: {
    padding: "5rem 0",
    position: "relative",
    background: "#000",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Inter, Arial, sans-serif",
    width: "100vw",
    boxSizing: "border-box",
    overflowX: "hidden",
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.7)", // semi-transparent black
    zIndex: 1,
  },
  title: {
    fontFamily: "Georgia, serif",
    fontWeight: 800,
    fontSize: "min(6vw, 64px)",
    textAlign: "center",
    marginTop: "90px",
    marginBottom: "56px",
    letterSpacing: 0,
    zIndex: 2,
  },
  blueBox: {
    width: "100%",
    maxWidth: "1700px",
    borderRadius: "36px",
    padding: "56px 4vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxSizing: "border-box",
    margin: "0 auto",
    zIndex: 2,
  },
  row: {
    display: "flex",
    gap: "36px",
    justifyContent: "center",
    alignItems: "stretch",
    width: "100%",
    flexWrap: "wrap",
  },
  card: {
    flex: "1 1 0px",
    minWidth: "300px",
    maxWidth: "400px",
    background: "rgba(0, 0, 0, 0.39)",
    borderRadius: "24px",
    boxShadow: "0 8px 60px #000c",
    padding: "44px 40px 34px 40px",
    margin: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "box-shadow 0.24s cubic-bezier(.4,1,.7,1), transform 0.23s cubic-bezier(.4,1,.7,1)",
    position: "relative",
    willChange: "transform, box-shadow",
    backdropFilter: "blur(0.5px)",
    zIndex: 2,
  },
  icon: {
    height: "48px",
    width: "48px",
    marginBottom: "28px",
    zIndex: 2,
  },
  cardTitle: {
    fontWeight: 700,
    fontSize: "1.5rem",
    marginBottom: "16px",
    fontFamily: "Inter, Arial, sans-serif",
    lineHeight: 1.08,
    textAlign: "center",
  },
  cardText: {
    color: "#a4aabe",
    fontSize: "1em",
    fontWeight: 400,
    marginBottom: "0",
    lineHeight: 1.5,
    textAlign: "center",
    maxWidth: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",   // centers horizontally
    justifyContent: "center", // centers vertically if needed
    textAlign: "center",
    padding: "2rem 1rem",
    // other existing styles...
  },
  icon: {
    marginBottom: "1rem",  // consistent spacing under icons
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: "1.25rem",
    color: "#fff",
    marginBottom: "0.5rem",
  },
  cardText: {
    color: "#ccc",
    fontSize: "0.95rem",
    maxWidth: "250px",
  }
};

const extraCss = `
@media (max-width: 1150px) {
  .tos-row { flex-direction: column !important; gap: 24px !important; align-items: center !important; }
  .tos-card { max-width: 500px !important; }
}
@media (max-width: 800px) {
  .tos-title { font-size: 3em !important; margin-top: 36px !important; }
  .tos-card { padding: 34px 6vw 24px 6vw !important; }
  .tos-bluebox { padding: 36px 4vw !important; }
}
@media (max-width: 500px) {
  .tos-bluebox { padding: 16px 2vw !important; }
  .tos-card { padding: 18px 2vw 16px 2vw !important; }
}
.tos-card {
  transition: box-shadow 0.24s cubic-bezier(.4,1,.7,1), transform 0.23s cubic-bezier(.4,1,.7,1);
  will-change: transform, box-shadow;
}
.tos-card:hover, .tos-card:focus-within {
  box-shadow: 
    0 16px 72px #000d, 
    0 0 22px 8px rgba(12,66,166,0.20);
  transform: translateY(-7px) scale(1.025);
  z-index: 2;
}
`;

export default function Section2() {
  return (
    <div style={styles.root}>
      <style>{extraCss}</style>
      <video autoPlay muted loop playsInline style={styles.video}>
        <source src="assets/video.mp4" type="video/mp4" />
      </video>

      {/* Black overlay */}
      <div style={styles.overlay}></div>
      <div className="tos-title" style={styles.title}>Trillion&apos;s Operating System</div>
      <div className="tos-bluebox" style={styles.blueBox}>
        <div className="tos-row" style={styles.row}>
          <div className="tos-card" style={styles.card} tabIndex={0}>
            {/* Magnifier SVG */}
            <svg style={styles.icon} width={48} height={48} viewBox="0 0 48 48" fill="none">
              <circle cx="20" cy="20" r="10" stroke="#fff" strokeWidth="4"/>
              <line x1="29.5" y1="29.5" x2="40" y2="40" stroke="#fff" strokeWidth="4" strokeLinecap="round"/>
            </svg>
            <div style={styles.cardTitle}>Strategy First</div>
            <div style={styles.cardText}>
              Research, validate, and map vertical dominance.
            </div>
          </div>
          <div className="tos-card" style={styles.card} tabIndex={0}>
            {/* Simple Trend Arrow SVG */}
            <svg style={styles.icon} width={48} height={48} viewBox="0 0 48 48" fill="none">
              <polyline points="12,32 24,20 34,28 40,14" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="40" cy="14" r="2" fill="#fff" />
            </svg>
            <div style={styles.cardTitle}>Category Positioning</div>
            <div style={styles.cardText}>
              Own the mindspace. Design category from the start.
            </div>
          </div>
          <div className="tos-card" style={styles.card} tabIndex={0}>
            {/* Rocket SVG */}
            <FaCogs size={40} color="#fff" style={styles.icon} />
            <div style={styles.cardTitle}>Execution Engine</div>
            <div style={styles.cardText}>
              Full-stack support to launch &amp; grow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}