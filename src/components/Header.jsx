import React, { useState, useEffect } from "react";

const cards = [
  { logo: "assets/sblogo.png", title: "SocialBureau", site:"https://socialbureau.in" },
  { logo: "assets/rblogo.png", title: "RevoBureau", site:"https://revobureau.in" },
];

const circleItems = [
  { title: "Branding"},
  { title: "Experience Design"},
  { title: "Technology"},
  { title: "Digital Marketing"},
  { title: "Narrow Marketing"},
  { title: "Moment Marketing"},
  { title: "API Marketing"},
];



const styles = {
  root: {
    minHeight: "100vh",
    width: "100vw",
    background: " #000000",
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
    background: "rgba(0, 0, 0, 0.5)", // semi-transparent black
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
};



styles.bg = {
  position: "relative",
  minHeight: "90vh",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  zIndex: 0,
  width: "100vw",
  overflow: "hidden",
};

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
  z-index: 1; /* ensure it's above the slideshow */
  pointer-events: none;
}


.bg-slide {
  position: absolute;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  opacity: 0;
  animation: fadeSlideshow 15s infinite;
}


.bg1 { background-image: url('assets/bg1.png'); animation-delay: 0s; }
.bg2 { background-image: url('assets/bg2.png'); animation-delay: 3s; }
.bg3 { background-image: url('assets/bg3.png'); animation-delay: 6s; }
.bg4 { background-image: url('assets/bg4.png'); animation-delay: 9s; }
.bg5 { background-image: url('assets/bg5.png'); animation-delay: 12s; }

@keyframes fadeSlideshow {
  0%   { opacity: 0; }
  10%  { opacity: 1; }
  23%  { opacity: 1; }
  33%  { opacity: 0; }
  100% { opacity: 0; }
}

/* Animate logo: gentle floating up and down */
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
          <div className="bg-slide bg1"></div>
          <div className="bg-slide bg2"></div>
          <div className="bg-slide bg3"></div>
          <div className="bg-slide bg4"></div>
          <div className="bg-slide bg5"></div>
        </div>

        <img
          src="assets/fulllogo.png"
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
