import React from "react";

const styles = {
  root: {
    minHeight: "100vh",
    background: "#000",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Inter, Arial, sans-serif",
    width: "100vw",
    boxSizing: "border-box",
    padding: "0",
  },
  title: {
    fontFamily: "Georgia, serif",
    fontWeight: 700,
    fontSize: "min(6vw, 64px)",
    textAlign: "center",
    marginTop: "90px",
    marginBottom: "56px",
    letterSpacing: 0,
  },
  row: {
    display: "flex",
    gap: "48px",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
    maxWidth: "1600px",
    flexWrap: "wrap",
  },
  card: {
  flex: "1 1 430px",
  minWidth: "320px",
  maxWidth: "420px",
  background: "rgba(20,20,20,0.96)",
  borderRadius: "32px",
  border: "1px solidrgb(255, 255, 255)",
  boxShadow: "0 8px 60px #000c",
  padding: "44px 40px 34px 40px",
  margin: "0 36px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  transition: "box-shadow 0.24s cubic-bezier(.4,1,.7,1), transform 0.23s cubic-bezier(.4,1,.7,1)",
  position: "relative",
  // Add a class for hover/focus-within to handle hover state if using JS-in-CSS
},
  icon: {
    height: "42px",
    width: "42px",
    marginBottom: "24px",
  },
  cardTitle: {
    fontWeight: 700,
    fontSize: "2em",
    marginBottom: "6px",
    fontFamily: "Inter, Arial, sans-serif",
    lineHeight: 1.08,
  },
  cardSubtitle: {
    color: "#e0e0e0",
    fontWeight: 500,
    fontSize: "1.18em",
    marginBottom: "18px",
  },
  cardText: {
    color: "#a6acb3",
    fontSize: "1.08em",
    fontWeight: 400,
    marginBottom: "34px",
    lineHeight: 1.4,
    maxWidth: "95%",
  },
  button: {
    background: "#fff",
    color: "#000",
    border: "none",
    borderRadius: "32px",
    padding: "16px 32px",
    fontWeight: 700,
    fontSize: "1.06em",
    cursor: "pointer",
    marginTop: "10px",
    boxShadow: "0 2px 8px #0002",
    display: "flex",
    alignItems: "center",
    transition: "background 0.18s, color 0.18s, box-shadow 0.18s",
    textDecoration: "none",
    outline: "none"
  },
  buttonArrow: {
    marginLeft: "8px",
    fontSize: "1.1em",
    display: "inline-block"
  }
};

/* Responsive + hover CSS as string to inject */
const extraCss = `
@media (max-width: 1200px) {
  .bureaus-row { flex-direction: column !important; align-items: center !important; }
  .bureau-card {  !important; }
}
@media (max-width: 800px) {
  .bureaus-title { font-size: 2.5em !important; margin-top: 36px !important; }
  .bureau-card { padding: 34px 16px 24px 16px !important; }
}
@media (max-width: 500px) {
  .bureaus-title { font-size: 2.5em !important; }
  .bureau-card { padding: 24px 5vw 20px 5vw !important; }
}
.bureau-card:hover, .bureau-card:focus-within {
  box-shadow: 
    0 16px 72px #000d, 
    0 0 22px 8px rgba(255,255,255,0.7);
  transform: translateY(-7px) scale(1.025);
  z-index: 2;
}
.bureau-btn:hover, .bureau-btn:focus-visible {
  background: #111 !important;
  color: #fff !important;
  box-shadow: 0 2px 16px #0006;
}
`;

function BureauSection() {
  return (
    <div style={styles.root}>
      <style>{extraCss}</style>
      <div className="bureaus-title" style={styles.title}>Our Bureaus</div>
      <div className="bureaus-row" style={styles.row}>
        {/* Social Bureau Card */}
        <div className="bureau-card" style={styles.card} tabIndex={0}>
          <svg style={styles.icon} fill="#fff" viewBox="0 0 32 32">
            <polyline points="6,22 12,14 18,18 26,8" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="6" y="22" width="2" height="2" rx="1" fill="#fff"/>
            <rect x="12" y="14" width="2" height="2" rx="1" fill="#fff"/>
            <rect x="18" y="18" width="2" height="2" rx="1" fill="#fff"/>
            <rect x="26" y="8" width="2" height="2" rx="1" fill="#fff"/>
          </svg>
          <div style={styles.cardTitle}>Social Bureau</div>
          <div style={styles.cardSubtitle}>Growth marketing for niche-first founders.</div>
          <div style={styles.cardText}>
            We help vertical SaaS, D2C, and service businesses grow using custom playbooks, not cookie-cutter tactics.
          </div>
          <a
            href="#"
            className="bureau-btn"
            style={styles.button}
          >
            View Social Bureau <span style={styles.buttonArrow}>→</span>
          </a>
        </div>
        {/* Rev Bureau Card */}
        <div className="bureau-card" style={styles.card} tabIndex={0}>
          <svg style={styles.icon} fill="#fff" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="6" stroke="#fff" strokeWidth="3" fill="none"/>
            <rect x="21" y="14" width="7" height="4" rx="2" fill="#fff"/>
            <circle cx="24.5" cy="16" r="1" fill="#111"/>
          </svg>
          <div style={styles.cardTitle}>Rev Bureau</div>
          <div style={styles.cardSubtitle}>Luxury real estate. Curated across borders.</div>
          <div style={styles.cardText}>
            Rev Bureau unlocks investment-grade properties in prime markets for global investors and elite lifestyle buyers.
          </div>
          <a
            href="#"
            className="bureau-btn"
            style={styles.button}
          >
            View Rev Bureau <span style={styles.buttonArrow}>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BureauSection;