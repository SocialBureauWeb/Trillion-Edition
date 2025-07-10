import React, { useState, useEffect } from "react";
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
    fontSize: "min(10vw, 64px)",
    textAlign: "center",
    marginTop: "90px",
    marginBottom: "56px",
    letterSpacing: 0,
    zIndex: 2,
  },
  row: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
    maxWidth: "1600px",
    // flexWrap will be 'wrap' on mobile for stacking, 'nowrap' on desktop for horizontal layout
    flexWrap: "nowrap", // Default for desktop
    overflow: "hidden", // Default for desktop
    zIndex: 2,
    position: "relative",
  },
  card: {
    flex: "0 0 420px", // Fixed width for cards on desktop
    maxWidth: "420px",
    background: "rgba(20, 20, 20, 0.47)",
    borderRadius: "32px",
    boxShadow: "0 8px 60px #000c",
    padding: "44px 40px 34px 40px",
    margin: "0 36px", // Default margin for desktop
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    transition: "transform 0.5s ease-in-out",
    position: "relative",
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
  overlayStyle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#fff",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    fontWeight: "bold",
    fontSize: "1.2rem",
    pointerEvents: "none",
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
  arrowToggle: {
    position: "absolute",
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "2.2rem",
    background: "none",
    border: "none",
    color: "white",
    cursor: "pointer",
    zIndex: 3,
  },
};

function HoverButton({ onClick, children, style = {} }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...styles.button,
        ...style,
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
  const [cardIndex, setCardIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false); // Initialize as false, will be set by useEffect

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    // Set initial state
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getCardStyle = () => ({
    ...styles.card,
    // Adjust width and margin for mobile to allow for horizontal scrolling
    width: isMobile ? "calc(100vw - 72px)" : "420px", // 100vw minus total horizontal margin (36px * 2)
    margin: isMobile ? "0 18px" : "0 36px", // Reduced margin for mobile for better spacing
    flexShrink: 0, // Prevent cards from shrinking on mobile when scrolling
  });

  const cards = [
    <div style={getCardStyle()} tabIndex={0} key="card1">
      <img src="assets/sblogo.webp" alt="logo" style={{ height: "10vh" }} />
      <div style={styles.cardTitle}>
        Social<span style={{ color: "red" }}>B</span>ureau
      </div>
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
    </div>,

    <div
      style={{
        position: "relative",
        ...getCardStyle(),
        pointerEvents: "none",
      }}
      tabIndex={0}
      key="card2"
    >
      <div style={styles.overlayStyle}>Launching soon</div>
      <img
        src="assets/rblogo.webp"
        alt="logo"
        style={{ height: "10vh", filter: "blur(4px)" }}
      />
      <div style={{ ...styles.cardTitle, filter: "blur(4px)" }}>
        Revo<span style={{ color: "#228AFF" }}>B</span>ureau
      </div>
      <div style={{ ...styles.cardSubtitle, filter: "blur(4px)" }}>
        Luxury real estate. Curated across borders.
      </div>
      <div style={{ ...styles.cardText, filter: "blur(4px)" }}>
        RevoBureau unlocks investment-grade properties in prime markets for
        global investors and elite lifestyle buyers.
      </div>
      <HoverButton
        style={{ filter: "blur(4px)" }}
        onClick={() => setShowRBServices(!showRBServices)}
      >
        View Services <span style={styles.buttonArrow}>→</span>
      </HoverButton>
    </div>,

    <div
      style={{
        position: "relative",
        ...getCardStyle(),
        pointerEvents: "none",
      }}
      tabIndex={0}
      key="card3"
    >
      <div style={styles.overlayStyle}>Launching soon</div>
      <img
        src="assets/techlogo.webp"
        alt="TechBureau"
        style={{ height: "10vh", filter: "blur(4px)" }}
      />
      <div style={{ ...styles.cardTitle, filter: "blur(4px)" }}>
        Tech<span style={{ color: "lime" }}>B</span>ureau
      </div>
      <div style={{ ...styles.cardSubtitle, filter: "blur(4px)" }}>
        Dev services for scale-ready startups.
      </div>
      <div style={{ ...styles.cardText, filter: "blur(4px)" }}>
        We build clean, fast apps & platforms that scale with user growth.
      </div>
      <HoverButton style={{ filter: "blur(4px)" }}>
        View Services <span style={styles.buttonArrow}>→</span>
      </HoverButton>
    </div>,

    <div style={getCardStyle()} tabIndex={0} key="card4">
      <div style={styles.overlayStyle}>Launching soon</div>
      <img
        src="assets/edulogo.webp"
        alt="EduBureau"
        style={{ height: "10vh", filter: "blur(4px)" }}
      />
      <div style={{ ...styles.cardTitle, filter: "blur(4px)" }}>
        Edu<span style={{ color: "#fbc531" }}>B</span>ureau
      </div>
      <div style={{ ...styles.cardSubtitle, filter: "blur(4px)" }}>
        Smarter learning platforms for Gen Z.
      </div>
      <div style={{ ...styles.cardText, filter: "blur(4px)" }}>
        We create gamified and AI-powered ed-tech experiences.
      </div>
      <HoverButton style={{ filter: "blur(4px)" }}>
        View Services <span style={styles.buttonArrow}>→</span>
      </HoverButton>
    </div>,
  ];

  // For desktop, this logic will control which cards are visible.
  // For mobile, this logic is not directly used for display, as all cards are rendered for scroll.
  const handleNext = () => {
    setCardIndex((prev) => (prev + 1) % cards.length); // Cycle through cards one by one
  };

  return (
    <div style={styles.root}>
      <div style={styles.title}>Our Bureaus</div>
      <div
        style={{
          ...styles.row,
          // Conditionally apply styles for mobile horizontal scroll
          flexWrap: isMobile ? "nowrap" : "wrap", // nowrap for horizontal scroll on mobile, wrap for desktop
          overflowX: isMobile ? "scroll" : "hidden", // Enable horizontal scroll on mobile
          justifyContent: isMobile ? "flex-start" : "center", // Align items to start for scroll, center for desktop
          padding: isMobile ? "0 18px" : "0", // Add padding to the scrollable area on mobile
          // Remove `flexDirection: isMobile ? "column" : "row"` from here.
          // The cards themselves will now handle their layout within the row.
          // gap: isMobile ? "24px" : "48px", // Gap is handled by card margin for mobile scroll
        }}
      >
        {/* On mobile, render all cards for horizontal scrolling */}
        {/* On desktop, slice cards based on cardIndex to show only a subset (e.g., 2 cards) */}
        {isMobile
          ? cards.map((card, index) => (
              <div key={index} style={{ ...getCardStyle() }}>
                {card.props.children}
              </div>
            ))
          : cards.slice(cardIndex, cardIndex + 2)} {/* Display 2 cards on desktop */}

        {/* Desktop navigation arrow */}
        {!isMobile && (
          <button style={styles.arrowToggle} onClick={handleNext}>
            →
          </button>
        )}
      </div>
      {showServices && <Services />}
      {showRBServices && <RBServices />}
    </div>
  );
}

export default BureauSection;