import React from "react";

export default function Section3() {
  return (
    <div className="ideas-section">
      <h1 className="ideas-title">Our Ideas Build Trust</h1>
      <div className="ideas-card">
        <div className="quote-icon">
          <svg width="40" height="40" fill="none">
            <g opacity="0.5">
              <path d="M14 30C14 34.4183 10.4183 38 6 38V34C8.20914 34 10 32.2091 10 30H6C3.79086 30 2 28.2091 2 26V22C2 19.7909 3.79086 18 6 18H14V30ZM34 30C34 34.4183 30.4183 38 26 38V34C28.2091 34 30 32.2091 30 30H26C23.7909 30 22 28.2091 22 26V22C22 19.7909 23.7909 18 26 18H34V30Z" fill="#fff"/>
            </g>
          </svg>
        </div>
        <div className="ideas-card-content">
          <h2 className="card-heading">
            "Why Generalist Marketing is Dead"
          </h2>
          <p className="card-desc">
            A POV by Sham Kumar S — Deep dive into why vertical-first marketing strategies outperform broad approaches in today&apos;s competitive landscape.
          </p>
          <a className="card-read" href="#">
            Read <span className="arrow">→</span>
          </a>
        </div>
      </div>
      <div className="ideas-btn-wrap">
        <a className="ideas-btn" href="#">
          Follow Our Insights <span className="arrow">→</span>
        </a>
      </div>
      <style>{`
        .ideas-section {
          background: #000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px;
          min-height: 60vh;
        }
        .ideas-title {
          color: #fff;
          font-family: 'Playfair Display', serif;
          font-size: 3rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 48px;
          line-height: 1.1;
        }
        .ideas-card {
          background: rgba(18, 18, 18, 0.9);
          border: 1px solid #232323;
          border-radius: 18px;
          padding: 36px 40px 36px 40px;
          display: flex;
          align-items: flex-start;
          max-width: 900px;
          width: 100%;
          box-sizing: border-box;
          margin-bottom: 32px;
          transition: transform 0.25s cubic-bezier(.4,0,.2,1), box-shadow 0.25s cubic-bezier(.4,0,.2,1);
          box-shadow: 0 0 0 1px #111;
        }
        .ideas-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 8px 32px 0 rgba(0,0,0,0.24), 0 2px 8px 0 rgba(80,80,80,0.15);
          border-color: #333;
        }
        .quote-icon {
          margin-right: 24px;
          flex-shrink: 0;
          display: flex;
          align-items: flex-start;
          margin-top: 4px;
        }
        .ideas-card-content {
          flex: 1;
        }
        .card-heading {
          color: #fff;
          font-weight: 700;
          font-size: 1.5rem;
          font-weight: bold;
          margin: 0 0 12px 0;
        }
        .card-desc {
          color: #b0b3b8;
          font-size: 1rem;
          margin-bottom: 22px;
          margin-top: 0;
          line-height: 1.35rem;
        }
        .card-read {
          color: #fff;
          font-weight: 600;
          font-size: 1.05rem;
          text-decoration: none;
          display: inline-block;
          transition: color 0.18s;
        }
        .card-read:hover {
          transform: translateX(5px);
        }
        .arrow {
          display: inline-block;
          transition: transform 0.2s cubic-bezier(.4,0,.2,1);
        }
        .card-read:hover .arrow,
        .ideas-btn:hover .arrow {
          transform: translateX(5px);
        }
        .ideas-btn-wrap {
          margin-top: 18px;
          text-align: center;
        }
        .ideas-btn {
          background: #fff;
          color: #111;
          border: none;
          border-radius: 999px;
          font-weight: 700;
          font-size: 1.18rem;
          box-shadow: 0 2px 18px 0 rgba(0,0,0,0.09);
          text-decoration: none;
          transition: background 0.18s, color 0.18s, box-shadow 0.18s;
          display: inline-block;
          margin: 0 auto;
          padding: 1.3rem 1.5rem;
        }
        .ideas-btn:hover {
          transform: translateX(5px);
          color: #000;
          box-shadow: 0 4px 24px 0 rgba(200,255,0,0.14);
        }
        @media (max-width: 700px) {
          .ideas-title {
            font-size: 3rem;
            margin-bottom: 32px;
          }
          .ideas-card {
            padding: 26px 16px 24px 16px;
            flex-direction: column;
            align-items: flex-start;
            max-width: 100%;
          }
          .quote-icon {
            margin-bottom: 10px;
            margin-right: 0;
          }
          .card-heading {
            font-size: 1.5rem;
            font-weight: 700;
          }
          .ideas-btn {
            font-size: 1rem;
            padding: 1.5rem 1rem;
          }
        }
        @media (max-width: 420px) {
          .ideas-title {
            font-size: 3rem;
            font-weight: 700;
          }
          .ideas-card {
            padding: 13px;
          }
          .ideas-btn {
            font-size: 0.93rem;
            padding: 12px 11px;
          }
        }
      `}</style>
    </div>
  );
}