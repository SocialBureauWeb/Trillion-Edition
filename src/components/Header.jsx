import React, { useState } from "react";

const cards = [
  { logo: "assets/sblogo.webp", title: "SocialBureau", site: "https://socialbureau.in" },
  { logo: "assets/rblogo.webp", title: "RevoBureau", site: "https://revobureau.in" },
];

const styles = {
  root: {
    minHeight: "100vh",
    width: "100vw",
    background: "#000000",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Inter, Arial, sans-serif",
    boxSizing: "border-box",
    paddingBottom: "10rem",
  },
  logo: {
    maxWidth: "min(95vw, 600px)",
    width: "480px",
    marginBottom: "0.5em",
    paddingBottom: "20vh",
    zIndex: 2,
    objectFit: "contain",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
  },
  subHeadline: {
    fontSize: "min(50px)",
    textAlign: "center",
    marginTop: "20px",
    fontWeight: 400,
    color: "#fff",
    marginBottom: "0.3em",
    padding: "10px",
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
    padding: "0 10px",
  },
  bg: {
    position: "relative",
    minHeight: "90vh",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    zIndex: 0,
    width: "100vw",
    overflow: "hidden",
  },
};

const bgImages = [
  "assets/bg1.webp",
  "assets/bg2.webp",
  "assets/bg3.webp",
  "assets/bg4.webp",
  "assets/bg5.webp",
];

const extraCss = `
  .bg-slideshow-container {
    position: absolute;
    top: 0; left: 0;
    width: 100vw;
    height: 100%;
    z-index: -1;
    overflow: hidden;
  }

  .bg-slideshow-container::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 45%;
    width: 100vw;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #000 90%);
    z-index: 1;
    pointer-events: none;
  }

  .bg-slide {
    position: absolute;
    top: 0; left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    opacity: 0;
    animation: fadeSlideshow 15s infinite;
  }

  .bg-slide:nth-child(1) { animation-delay: 0s; }
  .bg-slide:nth-child(2) { animation-delay: 3s; }
  .bg-slide:nth-child(3) { animation-delay: 6s; }
  .bg-slide:nth-child(4) { animation-delay: 9s; }
  .bg-slide:nth-child(5) { animation-delay: 12s; }

  @keyframes fadeSlideshow {
    0%   { opacity: 0; }
    10%  { opacity: 1; }
    23%  { opacity: 1; }
    33%  { opacity: 0; }
    100% { opacity: 0; }
  }

  @keyframes te-float {
    0%   { transform: translateY(0);}
    50%  { transform: translateY(-30px);}
    100% { transform: translateY(0);}
  }

  .te-logo {
    animation: te-float 3s ease-in-out infinite;
    will-change: transform;
  }
`;

export default function Header() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div style={styles.root}>
      <style>{extraCss}</style>

      <div style={styles.bg}>
        <div className="bg-slideshow-container">
          {bgImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Background ${index + 1}`}
              className="bg-slide"
              loading="lazy"
            />
          ))}
        </div>

        <img
          src="assets/fulllogo.webp"
          alt="Trillion Edition Logo"
          className="te-logo"
          style={styles.logo}
        />
        <div style={styles.overlay}></div>
      </div>

      <div style={styles.subHeadline}>
        We Build the Next{" "}
        <span style={styles.subHeadlineHighlight}>Trillion-Dollar Editions</span>
      </div>
      <div style={styles.description}>
        Niche-first ventures. Global in scale. Brand-led by design.
      </div>
    </div>
  );
}
