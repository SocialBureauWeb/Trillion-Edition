import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="te-footer">
        <div className="te-footer-top">
            <hr className="te-footer-divider" />
            <div className="te-footer-title">
            <h2>TRILLION EDITION</h2>
            <div className="te-footer-underline" />
          </div>
          <div className="te-footer-links">
            <a href="#" className="te-footer-link">Social Bureau</a>
            <a href="#" className="te-footer-link">Rev Bureau</a>
          </div>
          
          <div className="te-footer-socials">
            <a
              href="#"
              className="te-footer-social"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* LinkedIn SVG */}
              <svg width="30" height="30" fill="none" viewBox="0 0 30 30">
                <rect width="30" height="30" rx="6" fill="none" />
                <path fill="#B1BCCB" d="M12.833 12.25h-2.25v7.5h2.25v-7.5zm-1.125-1.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm3.958 8.75h2.25v-4.042c0-1.062.25-2 1.417-2 1.146 0 1.125 1.146 1.125 2.083v3.959h2.25v-4.25c0-2.02-.438-3.333-2.813-3.333-1.146 0-1.917.625-2.229 1.209h.021v-1.042h-2.25c.03.688 0 7.5 0 7.5z"/>
              </svg>
            </a>
            <a
              href="#"
              className="te-footer-social"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Instagram SVG */}
              <svg width="30" height="30" fill="none" viewBox="0 0 30 30">
                <rect width="30" height="30" rx="6" fill="none" />
                <path fill="#B1BCCB" d="M20 10.75a2.25 2.25 0 00-2.25-2.25h-5.5A2.25 2.25 0 0010 10.75v5.5a2.25 2.25 0 002.25 2.25h5.5A2.25 2.25 0 0020 16.25v-5.5zm-1.5 0A.75.75 0 0118.25 10a.75.75 0 01.75.75.75.75 0 01-.75.75.75.75 0 01-.75-.75zm-3.5 1.25a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zm0 1.5a.75.75 0 100 1.5.75.75 0 000-1.5zm4 5.25a.75.75 0 01-.75.75h-5.5a.75.75 0 01-.75-.75v-5.5a.75.75 0 01.75-.75h5.5a.75.75 0 01.75.75v5.5z"/>
              </svg>
            </a>
          </div>
        </div>
        <hr className="te-footer-divider" />
        <div className="te-footer-bottom">
          <div className="te-footer-contact">
            <span>Contact: </span>
            <a href="mailto:founders@trillionedition.com" className="te-footer-email">founders@trillionedition.com</a>
          </div>
          <div className="te-footer-copyright">
            © 2024 Trillion Edition. All rights reserved.
          </div>
        </div>
      </footer>
      <style>
        {`
        .te-footer {
          background: #040404;
          color:rgb(255, 255, 255);
          padding: 40px 0 0 0;
          font-family: 'Inter', Arial, sans-serif;
        }
        .te-footer-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-wrap: wrap;
          max-width: 80vw;
          margin: 0 auto 24px auto;
          padding: 0 24px;
        }
        .te-footer-links {
          display: flex;
          gap: 40px;
          align-items: center;
          min-width: 160px;
          color:rgb(113, 113, 113);
        }
        .te-footer-link {
          color:rgb(255, 255, 255);
          text-decoration: none;
          font-size: 18px;
          transition: color 0.2s;
        }
        .te-footer-link:hover {
          color: #fff;
        }
        .te-footer-title {
          font-family:'Playfair Display',serif;
          margin: 5rem 0;
          text-align: center;
          min-width: 100%;
        }
        .te-footer-title h2 {
          color:rgb(255, 255, 255);
          font-size: 38px;
          font-weight: bold;
          letter-spacing: 1px;
          margin-bottom: 8px;
        }
        .te-footer-underline {
          margin: 0 auto;
          width: 90px;
          height: 3px;
          background: #fff;
          opacity: 0.7;
          border-radius: 2px;
        }
        .te-footer-socials {
          display: flex;
          gap: 24px;
          justify-content: flex-end;
          align-items: center;
          min-width: 120px;
        }
        .te-footer-social svg {
          display: block;
          width: 30px;
          height: 30px;
          transition: opacity 0.2s;
        }
        .te-footer-social:hover svg path {
          fill: #fff;
        }
        .te-footer-divider {
          border: none;
          border-top: 1px solid #22242A;
          margin: 24px 0 0 0;
          width: 85vw;
          max-width: 1500px;
          margin-left: auto;
          margin-right: auto;
        }
        .te-footer-bottom {
          display: flex;
          font-weight:500;
          justify-content: space-between;
          align-items: center;
          max-width: 80vw;
          margin: 0 auto;
          padding: 16px 24px 28px 24px;
          flex-wrap: wrap;
        }
        .te-footer-contact {
            color:rgb(113, 113, 113);
          font-size: 18px;
        }
        .te-footer-email {
          color: #fff;
          margin-left: 4px;
          text-decoration: none;
          font-weight: 500;
        }
        .te-footer-email:hover {
          text-decoration: underline;
        }
        .te-footer-copyright {
          font-size: 15px;
          color: #888;
          margin-top: 6px;
        }

        /* Mobile responsive */
        @media (max-width: 900px) {
          .te-footer-top,
          .te-footer-bottom {
            max-width: 98vw;
            flex-direction: column;
            align-items: stretch;
            padding-left: 14px;
            padding-right: 14px;
          }
          .te-footer-links,
          .te-footer-socials {
            justify-content: flex-start;
            margin-bottom: 12px;
          }
          .te-footer-title {
            margin-bottom: 18px;
          }
          .te-footer-divider {
            width: 98vw;
          }
        }
        @media (max-width: 600px) {
          .te-footer-title h2 {
            font-size: 23px;
          }
          .te-footer-links,
          .te-footer-socials {
            font-size: 16px;
            gap: 20px;
          }
          .te-footer-bottom {
          
            flex-direction: column;
            align-items: center;
            gap: 8px;
            padding-left: 8px;
            padding-right: 8px;
          }
          .te-footer-divider {
            width: 100vw;
          }
        }
        `}
      </style>
    </>
  );
}