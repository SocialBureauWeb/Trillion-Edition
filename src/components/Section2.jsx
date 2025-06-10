import React from "react";

const styles = {
  root: {
    padding: "5rem 0",
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
  title: {
    fontFamily: "Georgia, serif",
    fontWeight: 800,
    fontSize: "min(6vw, 64px)",
    textAlign: "center",
    marginTop: "90px",
    marginBottom: "56px",
    letterSpacing: 0,
  },
  blueBox: {
    width: "100%",
    maxWidth: "1700px",
    background: "rgba(0, 0, 0, 0.9)",
    borderRadius: "36px",
    padding: "56px 4vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxSizing: "border-box",
    margin: "0 auto",
    boxShadow: "0 8px 60px #001c",
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
    background: "rgba(0, 0, 0, 0.9)",
    borderRadius: "24px",
    border: "1.5px solid #234",
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
  },
  icon: {
    height: "48px",
    width: "48px",
    marginBottom: "28px",
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
            <svg style={styles.icon} width={48} height={42} viewBox="0 0 48 42" fill="none">
              <path
                d="M25 4c6.5 0 12.5 4.7 15 8.3 1.2 1.8 1.5 4.2.3 6.1l-3.7 6.3c-.5.8-1.3 1.4-2.2 1.6l-4.5 1.1-2 5.7c-.3.8-1 1.5-1.9 1.7l-6.2 1.5c-.9.2-1.8-.1-2.4-.7l-4.7-4.7c-.7-.7-1-1.7-.7-2.7l1.8-5.5-4.7-2.2c-.8-.4-1.4-1.1-1.6-2-.2-.9 0-1.9.5-2.6C10.2 11 16.5 4 25 4Z"
                fill="#fff"
              />
              <circle cx="33" cy="12" r="2.5" fill="#000"/>
            </svg>
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