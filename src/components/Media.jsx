import React from "react";
import { FaBriefcase, FaHandshake, FaUserTie } from "react-icons/fa";

export default function Media() {
  return (
    <div className="media-partnerships-container">
      <h1 className="media-title">Media & Partnerships</h1>
      <div className="media-cards">
        <div className="media-card">
          <div className="media-icon">
            {/* Using a larger standard Tailwind class */}
            <FaHandshake className="text-8xl text-white" />
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
            {/* Using a larger standard Tailwind class */}
            <FaUserTie className="text-8xl text-white"/>
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
            {/* Using a larger standard Tailwind class */}
            <FaBriefcase className="text-8xl text-white"/>
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
          /* Adding a fallback specific size in pixels here */
          font-size: 70px; /* This will be overridden by Tailwind if it works */
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