import React from "react";

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
    background: "rgba(16,16,16,0.96)",
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
    gap: "64px",
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
    width: "200px",
    minWidth:"150px",
    minHeight:"150px",
    height: "200",
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
            onClick={() => window.open("https://hbhyrycu.gensparkspace.com", "_blank")}
            role="button"
            tabIndex={0}
            >
            <img
                src="assets/ceo.png"
                alt="Founder 1"
                className="founder-img"
                style={styles.founderImg}
            />
            <div className="founder-name" style={styles.founderName}>Founder 1</div>
            <div className="founder-title" style={styles.founderTitle}>CTO &amp; Co-Founder</div>
            <a
              href="https://www.linkedin.com/"
              className="founder-link"
              style={styles.founderLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg style={styles.linkedinIcon} width={16} height={16} fill="#5396d7" viewBox="0 0 24 24">
                <path d="M4.98 3.5C3.33 3.5 2 4.83 2 6.48c0 1.64 1.33 2.97 2.98 2.97h.02c1.65 0 2.98-1.33 2.98-2.97C7.98 4.83 6.65 3.5 4.98 3.5zM2.4 20.5h5.16V9H2.4v11.5zM9.34 9h4.94v1.56h.07c.69-1.23 2.38-2.53 4.9-2.53 5.24 0 6.2 3.45 6.2 7.94v8.03h-5.17v-7.13c0-1.7-.03-3.89-2.37-3.89-2.37 0-2.73 1.85-2.73 3.77v7.25H9.34V9z"/>
              </svg>
              LinkedIn
            </a>
            </div>
          {/* Founder 2 */}
          <div
            className="founder"
            style={{ ...styles.founder, cursor: 'pointer' }}
            onClick={() => window.open("https://hbhyrycu.gensparkspace.com", "_blank")}
            role="button"
            tabIndex={0}
            >
            <img
              src="assets/ceo.png"
              alt="Founder 2"
              className="founder-img"
              style={styles.founderImg}
            />
            <div className="founder-name" style={styles.founderName}>Founder 2</div>
            <div className="founder-title" style={styles.founderTitle}>CEO &amp; Co-Founder</div>
            <a
              href="https://www.linkedin.com/"
              className="founder-link"
              style={styles.founderLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg style={styles.linkedinIcon} width={16} height={16} fill="#5396d7" viewBox="0 0 24 24">
                <path d="M4.98 3.5C3.33 3.5 2 4.83 2 6.48c0 1.64 1.33 2.97 2.98 2.97h.02c1.65 0 2.98-1.33 2.98-2.97C7.98 4.83 6.65 3.5 4.98 3.5zM2.4 20.5h5.16V9H2.4v11.5zM9.34 9h4.94v1.56h.07c.69-1.23 2.38-2.53 4.9-2.53 5.24 0 6.2 3.45 6.2 7.94v8.03h-5.17v-7.13c0-1.7-.03-3.89-2.37-3.89-2.37 0-2.73 1.85-2.73 3.77v7.25H9.34V9z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;