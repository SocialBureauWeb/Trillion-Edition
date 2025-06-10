import React from "react";

const styles = {
  root: {
    minHeight: "100vh",
    width: "100vw",
    background: "radial-gradient(ellipse at top left, #111 60%, #000 100%)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Inter, Arial, sans-serif",
    boxSizing: "border-box",
    paddingBottom:"10rem"
  },
  logo: {
    maxWidth: "min(95vw, 600px)",
    width: "480px",
    marginBottom: "0.5em",
    display: "block",
    paddingBottom: "8px",
    background: "transparent",
    objectFit: "contain",
    // animation is handled via CSS class below
  },
  subHeadline: {
    fontSize: "min(50px)",
    textAlign: "center",
    marginTop: "20px",
    fontWeight: 400,
    lineHeight: 1,
    color: "#fff",
    marginBottom: "0.3em",
    padding:"0 10px"
  },
  subHeadlineHighlight: {
    fontWeight: 700,
    color: "#d1d1d1",
  },
  description: {
    fontSize: "min(25px)",
    color: "#bdbdbd",
    textAlign: "center",
    marginBottom: "48px",
    marginTop: "0.1em",
    padding:"0 10px"
  },
  cardsRow: {
    display: "flex",
    gap: "32px",
    marginTop: "0.7em",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    background: "rgba(30, 30, 30, 0.75)",
    borderRadius: "16px",
    padding: "32px 36px 24px 36px",
    minWidth: "240px",
    maxWidth: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    margin: "8px 0",
    border: "1px solid #24272a",
    transition: "transform 0.25s cubic-bezier(.4,1,.7,1), box-shadow 0.25s cubic-bezier(.4,1,.7,1)",
    cursor: "pointer",
  },
  cardIcon: {
    fontSize: "40px",
    marginBottom: "12px",
    color: "#fff",
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: "1.3em",
    marginBottom: "8px",
    color: "#fff",
  },
  cardDesc: {
    fontSize: "1em",
    color: "#bdbdbd",
  },
};

/* Responsive and hover CSS as string to inject */
const extraCss = `
@media (max-width: 900px) {
  .te-logo { width: 85vw !important; max-width: 95vw !important; }
  .te-sub { font-size: 6vw !important; }
  .te-desc { font-size: 3.7vw !important; }
  .te-card { min-width: 180px !important; padding: 24px 16px !important; }
}
@media (max-width: 600px) {
  .te-logo { width: 100% !important; min-width: unset !important; }
  .te-sub { font-size: 2em !important; }
  .te-desc { font-size: 1.2em !important; }
  .te-row { flex-direction: column !important; gap: 16px !important; }
  .te-card { width: 100% !important; min-width: unset !important; padding: 18px 10px !important; }
}
/* Card hover animation */
.te-card {
  transition: transform 0.25s cubic-bezier(.4,1,.7,1), box-shadow 0.25s cubic-bezier(.4,1,.7,1);
}
.te-card:hover, .te-card:focus-visible {
  transform: translateY(-10px) scale(1.045);
  box-shadow:
    0 10px 32px #000e,
    0 0 24px 4px #fff8,
    0 0 0 5px #fff3;
  z-index: 2;
}

/* Animate logo: gentle floating up and down */
@keyframes te-float {
  0%   { transform: translateY(0);}
  50%  { transform: translateY(-18px);}
  100% { transform: translateY(0);}
}
.te-logo {
  animation: te-float 4.5s ease-in-out infinite;
  will-change: transform;
}
`;

function Header() {
  return (
    <div style={styles.root}>
      {/* Inject responsive and hover CSS and logo animation */}
      <style>{extraCss}</style>
      <img
        src="assets/fulllogo.png"
        alt="Trillion Edition Logo"
        className="te-logo"
        style={styles.logo}
      />
      <div className="te-sub" style={styles.subHeadline}>
        We Build the Next{" "}
        <span style={styles.subHeadlineHighlight}>Trillion-Dollar Editions</span>
      </div>
      <div className="te-desc" style={styles.description}>
        Niche-first ventures. Global in scale. Brand-led by design.
      </div>
      <div className="te-row" style={styles.cardsRow}>
        <div className="te-card" style={styles.card} tabIndex={0}>
          <span style={styles.cardIcon} role="img" aria-label="Social Bureau">
            <svg height="36" width="40" fill="#fff" viewBox="0 0 20 20"><path d="M10 10.5A3.5 3.5 0 1 0 10 3a3.5 3.5 0 0 0 0 7.5zm0 2c-3.33 0-6 1.34-6 3v1A1.5 1.5 0 0 0 5.5 18h9a1.5 1.5 0 0 0 1.5-1.5v-1c0-1.66-2.67-3-6-3z"></path></svg>
          </span>
          <div style={styles.cardTitle}>Social Bureau</div>
          <div style={styles.cardDesc}>
            Growth marketing for niche-first founders
          </div>
        </div>
        <div className="te-card" style={styles.card} tabIndex={0}>
          <span style={styles.cardIcon} role="img" aria-label="Rev Bureau">
            <svg height="36" width="36" fill="#fff" viewBox="0 0 20 20"><path d="M3 2.75A.75.75 0 0 1 3.75 2h12.5a.75.75 0 0 1 .75.75v14.5a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V2.75zm1.5.75v13H15.5v-13H4.5zm2.25 2.5a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75zm0 3a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75zm0 3a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75z"></path></svg>
          </span>
          <div style={styles.cardTitle}>Rev Bureau</div>
          <div style={styles.cardDesc}>
            Luxury real estate across borders
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;