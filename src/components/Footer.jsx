import React from "react";
import { FaLinkedin, FaTwitter, FaEnvelope, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";


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
          
          <div className="te-footer-socials">
            <a
              href="https://www.linkedin.com/company/trillionedition"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center w-10 h-10 rounded-full text-white hover:bg-[#ff0000] hover:scale-105 transition"
            >
              <FaLinkedin size={25} color="white" />
            </a>

            {/* Instagram SVG */}
              <a
                href="https://www.instagram.com/trillionedition"
                class="inline-flex items-center justify-center w-10 h-10 rounded-full text-white hover:bg-[#ff0000] hover:scale-105 transition"
              >
                <FaInstagram size={25} color="white"/>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61577852360321"
                class="inline-flex items-center justify-center w-10 h-10 rounded-full text-white hover:bg-[#ff0000] hover:scale-105 transition"
              >
                <FaFacebook size={25} color="white"/>
              </a>
              <a
                href="https://www.youtube.com/@trillionedition"
                class="inline-flex items-center justify-center w-10 h-10 rounded-full text-white hover:bg-[#ff0000] hover:scale-105 transition"
              >
                <FaYoutube size={25} color="white"/>
              </a>
          </div>
        </div>
        <hr className="te-footer-divider" />
        <div className="te-footer-bottom">
          <div className="te-footer-contact">
            <span>Contact: </span>
            <a href="mailto:admin@socialbureau.in" className="te-footer-email">admin@socialbureau.in</a>
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
            justify-content: center;
            margin-bottom: 12px;
            margin-top:12px;
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
            width: 80vw;
          }
        }
        `}
      </style>
    </>
  );
}