import React, { useState } from "react";
import Services from "./Services";
import RBServices from "./RBServices";

const styles = {
  root: {
    position: "relative",
    width: "100vw",
    minHeight: "100vh",
    overflow: "hidden",
    background: "#000",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Inter, Arial, sans-serif",
    padding: 0,
  },
  title: {
    fontFamily: "Georgia, serif",
    fontWeight: 700,
    fontSize: "min(6vw, 64px)",
    textAlign: "center",
    marginTop: "90px",
    marginBottom: "56px",
    letterSpacing: 0,
    zIndex: 2,
  },
  row: {
    display: "flex",
    gap: "48px",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
    maxWidth: "1600px",
    flexWrap: "wrap",
    zIndex: 2,
  },
  card: {
    flex: "1 1 430px",
    maxWidth: "420px",
    background: "rgba(20, 20, 20, 0.47)",
    borderRadius: "32px",
    boxShadow: "0 8px 60px #000c",
    padding: "44px 40px 34px 40px",
    margin: "0 36px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    transition: "box-shadow 0.24s cubic-bezier(.4,1,.7,1), transform 0.23s cubic-bezier(.4,1,.7,1)",
    position: "relative",
    zIndex: 2,
  },
  icon: {
    height: "42px",
    width: "42px",
    marginBottom: "24px",
    zIndex: 2,
  },
  cardTitle: {
    fontWeight: 700,
    fontSize: "2em",
    marginBottom: "6px",
    fontFamily: "Averia",
    lineHeight: 1.08,
    zIndex: 2,
  },
  cardSubtitle: {
    color: "#e0e0e0",
    fontWeight: 500,
    fontSize: "1.18em",
    marginBottom: "18px",
    zIndex: 2,
  },
  cardText: {
    color: "#a6acb3",
    fontSize: "1.08em",
    fontWeight: 400,
    marginBottom: "34px",
    lineHeight: 1.4,
    maxWidth: "95%",
    zIndex: 2,
  },
  button: {
    background: "black",
    color: "white",
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
    transition: "all 0.3s ease-in-out",
    textDecoration: "none",
    outline: "none",
    zIndex: 2,
  },
  buttonHover: {
    background: "white",
    color: "black",
    transform: "scale(1.05)",
    boxShadow: "0 4px 12px #0005",
  },
  buttonArrow: {
    marginLeft: "8px",
    fontSize: "1.1em",
    display: "inline-block",
    zIndex: 2,
  },
};

function HoverButton({ onClick, children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...styles.button,
        ...(hovered ? styles.buttonHover : {}),
      }}
    >
      {children}
    </button>
  );
}


function BureauSection() {
  const [showServices, setShowServices] = useState(false);
const [showRBServices, setShowRBServices] = useState(false);
  return (
    <div style={styles.root}>
      <div style={styles.title}>Our Bureaus</div>
      <div style={styles.row}>
        <div style={styles.card} tabIndex={0}>
          <img
            src="assets/sblogo.webp"
            alt="logo"
            style={{ height: "10vh", alignItems: "center" }}
          />
          <div style={styles.cardTitle}>Social<span style={{color:"red"}}>B</span>ureau</div>
          <div style={styles.cardSubtitle}>
            Growth marketing for niche-first founders.
          </div>
          <div style={styles.cardText}>
            We help vertical SaaS, D2C, and service businesses grow using custom
            playbooks, not cookie-cutter tactics.
          </div>
          <HoverButton onClick={() => setShowServices(!showServices)}>
            View Services <span style={styles.buttonArrow}>→</span>
          </HoverButton>
        </div>

        <div style={styles.card} tabIndex={0}>
          <img
            src="assets/rblogo.webp"
            alt="logo"
            style={{ height: "10vh", alignItems: "center" }}
          />
          <div style={styles.cardTitle}>Revo<span style={{color:"#228AFF"}}>B</span>ureau</div>
          <div style={styles.cardSubtitle}>
            Luxury real estate. Curated across borders.
          </div>
          <div style={styles.cardText}>
            RevoBureau unlocks investment-grade properties in prime markets for
            global investors and elite lifestyle buyers.
          </div>
          <HoverButton onClick={() => setShowRBServices(!showRBServices)}>
            View Services <span style={styles.buttonArrow}>→</span>
          </HoverButton>
        </div>
      </div>

      {/* Conditionally render the Services section */}
      {showServices && <Services />}
      {showRBServices && <RBServices />}
    </div>
  );
}


export default BureauSection;
