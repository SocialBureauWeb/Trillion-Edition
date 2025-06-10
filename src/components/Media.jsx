import React from "react";

export default function Media() {
  return (
    <div className="media-partnerships-container">
      <h1 className="media-title">Media & Partnerships</h1>
      <div className="media-cards">
        <div className="media-card">
          <div className="media-icon">
            {/* Download Icon */}
            <svg width="48" height="48" fill="white" viewBox="0 0 24 24">
              <path d="M12 16a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0v10a1 1 0 0 1-1 1zm4.707-3.707a1 1 0 0 1-1.414 1.414L13 11.414V19a1 1 0 1 1-2 0v-7.586l-2.293 2.293a1 1 0 1 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0l4 4z"/>
            </svg>
          </div>
          <div className="media-card-title">Press Kit</div>
          <div className="media-card-desc">
            Download logo suite, brand guide, bios
          </div>
          <a className="media-card-link" href="#">
            Download <span className="arrow">→</span>
          </a>
        </div>
        <div className="media-card">
          <div className="media-icon">
            <svg width="48" height="32" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="2" y="7" width="7" height="15" rx="2" fill="white"/>
  <rect x="39" y="7" width="7" height="15" rx="2" fill="white"/>
  <path d="M16 11L24 18L32 11" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M24 18L32.5 25C33.5 26 35 25.5 35 24.2V16.5" stroke="white" stroke-width="3" stroke-linecap="round"/>
  <path d="M24 18L15.5 25C14.5 26 13 25.5 13 24.2V16.5" stroke="white" stroke-width="3" stroke-linecap="round"/>
  <rect x="12" y="3" width="24" height="14" rx="5" fill="white"/>
  <path d="M19 10L24 14L29 10" stroke="#070707" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="24" cy="8" r="2" fill="#070707"/>
</svg>
          </div>
          <div className="media-card-title">Strategic Partners</div>
          <div className="media-card-desc">
            SaaS, marketing, and luxury partners
          </div>
          <a className="media-card-link" href="#">
            View Partners <span className="arrow">→</span>
          </a>
        </div>
        <div className="media-card">
          <div className="media-icon">
            {/* Briefcase Icon */}
            <svg width="48" height="48" fill="white" viewBox="0 0 24 24">
              <path d="M7 7V6a5 5 0 0 1 10 0v1h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2zm2-1a3 3 0 0 1 6 0v1H9V6zm-4 4v8h14v-8H5z"/>
            </svg>
          </div>
          <div className="media-card-title">Work With Us</div>
          <div className="media-card-desc">
            Collaboration, media, investment
          </div>
          <a className="media-card-link" href="#">
            Get Started <span className="arrow">→</span>
          </a>
        </div>
      </div>
      <style>{`
        .media-partnerships-container {
          background: #070707;
          padding: 2rem;
          color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .media-title {
          text-align: center;
          font-size: 3rem;
          font-family: 'Georgia', serif;
          font-weight: 700;
          margin: 60px 0 50px 0;
          letter-spacing: 1px;
        }
        .media-cards {
          display: flex;
          flex-direction: row;
          gap: 40px;
          width: 100%;
          max-width: 1600px;
          justify-content: center;
          padding: 0 24px;
        }
        .media-card {
          background: #101010;
          border-radius: 20px;
          border: 1.5px solid #232323;
          flex: 1 1 320px;
          max-width: 450px;
          min-width: 275px;
          min-height: 280px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 30px 32px 30px;
          box-sizing: border-box;
          transition: box-shadow 0.15s, border 0.15s;
          box-shadow: 0 0 0 transparent;
        }
        .media-card:hover {
          border: 1.5px solid #444;
          box-shadow: 0 4px 24px 0 rgba(0,0,0,0.25);
        }
        .media-icon {
          margin-bottom: 22px;
        }
        .media-card-title {
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 10px;
          text-align: center;
        }
        .media-card-desc {
          color: #949da6;
          font-size: 1rem;
          text-align: center;
          margin-bottom: 28px;
          font-weight:500;
        }
        .media-card-link {
          color: #fff;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.08rem;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border: none;
          background: none;
          outline: none;
          cursor: pointer;
          transition: color 0.15s;
        }
        .media-card-link:hover {
          font-size:1.5rem;
        }
        .arrow {
          font-size: 1.1em;
          display: inline-block;
        }
        @media (max-width: 1100px) {
          .media-cards {
            gap: 24px;
          }
          .media-card {
            padding: 32px 18px 26px 18px;
          }
        }
        @media (max-width: 900px) {
          .media-cards {
            flex-direction: column;
            align-items: center;
            gap: 22px;
            max-width: 600px;
            margin: 0 auto;
          }
          .media-card {
            width: 100%;
            min-width: 0;
            max-width: 100%;
          }
        }
        @media (max-width: 600px) {
          .media-title {
            font-size: 3rem;
            margin-bottom: 28px;
            margin-top: 40px;
          }
          .media-cards {
            padding: 0 6px;
            gap: 14px;
          }
          .media-card {
            padding: 24px 8px 20px 8px;
          }
        }
      `}</style>
    </div>
  );
}