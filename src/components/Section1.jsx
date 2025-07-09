import React from "react";
import { FaLinkedin } from "react-icons/fa";

const styles = {
  root: {
    minHeight: "100vh",
    width: "100vw",
    background: "#000",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    fontFamily: "Inter, Arial, sans-serif",
    boxSizing: "border-box",
    padding: "0 50px",
    margin: 0,
  },
  headline: {
    fontWeight: 700,
    fontSize: "min(6vw, 64px)",
    textAlign: "center",
    marginTop: "2.2em",
    lineHeight: 1.1,
    fontFamily: "Georgia, serif",
  },
  headline2: {
    fontWeight: 700,
    fontSize: "min(6vw, 64px)",
    textAlign: "center",
    marginTop: 0,
    lineHeight: 1.1,
    fontFamily: "Georgia, serif",
    marginBottom: "0.5em",
  },
  subtitle: {
    fontSize: "min(20px)",
    textAlign: "center",
    color: "#d1d1d1",
    marginBottom: "2.5em",
    marginTop: "2em",
    fontWeight: 500,
  },
  card: {
    borderRadius: "32px",
    border: "1px solid #222",
    boxShadow: "0 2px 32px #0009",
    padding: "44px 32px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "2em",
    marginBottom: "2.5em",
    transition: "box-shadow 0.23s cubic-bezier(.4,1,.7,1)",
  },
  quote: {
    fontStyle: "italic",
    fontWeight: 400,
    fontSize: "min(30px)",
    color: "#f1f1f1",
    textAlign: "center",
    marginBottom: "40px",
    marginTop: "8px",
    lineHeight: 1.25,
  },
  foundersRow: {
    display: "flex",
    gap: "30vw",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "0",
    marginBottom: "0",
  },
  founder: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minWidth: "160px",
    maxWidth: "220px",
    margin: "0 24px",
  },
  founderImg: {
    width: "20vw",
    minHeight:"250px",
    minWidth:"200px",
    height: "30vw",
    objectFit: "cover",
    marginBottom: "18px",
    boxShadow: "0 2px 16px #0005",
    transition: "transform 0.2s, box-shadow 0.2s",
  },
  founderName: {
    fontWeight: "bold",
    fontSize: "1.1em",
    color: "#fff",
    marginBottom: "2px",
    marginTop: "0",
  },
  founderTitle: {
    color: "#bdbdbd",
    fontSize: "1em",
    marginBottom: "3px",
  },
  founderLink: {
    color: "#5396d7",
    fontWeight: 500,
    fontSize: "1em",
    textDecoration: "none",
    transition: "color 0.2s",
    display: "flex",
    alignItems: "center",
    gap: "4px",
  },
  linkedinIcon: {
    display: "inline-block",
    verticalAlign: "middle",
    marginRight: "2px",
  },
};

/* Responsive CSS */
const extraCss = `
@media (max-width: 900px) {
  .founders-card { !important; padding: 30px 5vw 30px 5vw!important;  }
  .founders-row { gap: 28px !important; }
  .founder { min-width: 130px !important; max-width: 180px !important; margin: 0 2vw !important; }
  .quote { font-size: 3vw !important; }
  .founder-img { width: 64px !important; height: 64px !important; }
}
@media (max-width: 600px) {
  .headline1, .headline2 { font-size: 3em !important; }
  .subtitle { font-size: 1.2em !important; }
  .founders-card { padding: 20px 2vw 20px 2vw!important;  !important;}
  .founders-row { flex-direction: column !important; gap: 20px !important; }
  .founder { min-width: 0 !important; max-width: 100vw !important; margin: 0 auto !important; }
  .founder-img { width: 56px !important; height: 56px !important; }
  .quote { font-size: 1.5em !important; }
}
.founders-card:hover {
  box-shadow: 0 8px 64px #000c, 0 0 0 4px #fff2;
}
`;

function Section1() {
  return (
    <div style={styles.root}>
      <style>{extraCss}</style>
      <div className="headline1" style={styles.headline}>
        Built by Founders.<br />
        Designed for Category Leaders.
      </div>
      <div className="subtitle" style={styles.subtitle}>
        Trillion Edition is a next-generation venture brand studio — crafting powerful <br className="hide-mobile" /> vertical brands that go deep, not wide.
      </div>
      <div className="founders-card" style={styles.card}>
        <div className="quote" style={styles.quote}>
          "We believe that verticals are the future. We build brands that win by design, not luck."
        </div>
        <div className="founders-row" style={styles.foundersRow}>
          {/* Founder 1 */}
          <div
            className="founder"
            style={{ ...styles.founder, cursor: 'pointer' }}
            onClick={() => window.open("https://www.linkedin.com/in/alen-jacob-695a99184", "_blank")}
            role="button"
            tabIndex={0}
            >
            <img
                src="assets/alen.png"
                alt="Founder 1"
                className="founder-img"
                style={styles.founderImg}
            />
            <div className="founder-name" style={styles.founderName}>Alen Jacob</div>
            <div className="founder-title" style={styles.founderTitle}>Director &amp; Co-Founder</div>
            <a
              href="https://www.linkedin.com/in/alen-jacob-695a99184"
              className="founder-link"
              style={styles.founderLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={18} color="#5396d7" />
              LinkedIn
            </a>
            </div>
          {/* Founder 2 */}
          <div
            className="founder"
            style={{ ...styles.founder, cursor: 'pointer' }}
            onClick={() => window.open("https://www.linkedin.com/in/sham-kumar-s-350525203", "_blank")}
            role="button"
            tabIndex={0}
            >
            <img
              src="assets/ceo.jpeg"
              alt="Founder 2"
              className="founder-img"
              style={styles.founderImg}
            />
            <div className="founder-name" style={styles.founderName}>Sham SK</div>
            <div className="founder-title" style={styles.founderTitle}>CEO, CFO &amp; Co-Founder</div>
            <a
              href="https://www.linkedin.com/in/sham-kumar-s-350525203"
              className="founder-link"
              style={styles.founderLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={18} color="#5396d7" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;