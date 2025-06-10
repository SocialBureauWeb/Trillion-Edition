import React, { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscribe logic here
    alert("Subscribed: " + email);
    setEmail("");
  };

  return (
    <div className="stay-connected-container">
      <h2 className="stay-title">Stay Connected</h2>
      <p className="stay-desc">
        Get our playbooks before the rest of the world does. Enter your email for POVs, frameworks & founder-first strategies.
      </p>
      <form className="stay-form" onSubmit={handleSubmit}>
        <input
          type="email"
          required
          className="stay-input"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="stay-btn" type="submit">
          <span style={{display: "inline-block", marginRight: "7px"}}>→</span>Subscribe
        </button>
      </form>
      <style>{`
        .stay-connected-container {
          background: #070707;
          color: #fff;
          padding: 8rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .stay-title {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 3rem;
          margin-bottom: 16px;
          text-align: center;
        }
        .stay-desc {
          color: #cfd6df;
          max-width: 900px;
          font-size: 1.25rem;
          font-weight:500;
          text-align: center;
          margin-bottom: 36px;
          line-height: 1.5;
        }
        .stay-form {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 18px;
          width: 100%;
          max-width: 600px;
          justify-content: center;
        }
        .stay-input {
          border: 1.5px solid #232323;
          background: #101010;
          color: #fff;
          border-radius: 999px;
          padding: 18px 28px;
          font-size: 1.1rem;
          outline: none;
          width: 100%;
          max-width: 340px;
          transition: border 0.15s;
        }
        .stay-input:focus {
          border: 1.5px solid #444;
        }
        .stay-btn {
          background: #fff;
          color: #070707;
          font-weight: 700;
          font-size: 1.08rem;
          border: none;
          border-radius: 999px;
          padding: 16px 34px;
          cursor: pointer;
          transition: background 0.15s, color 0.15s;
          display: flex;
          align-items: center;
        }
        .stay-btn:hover {
          background:rgb(0, 0, 0);
          color:white;
          border:1px solid white;
        }
        @media (max-width: 700px) {
          .stay-title {
            font-size: 3rem;
          }
          .stay-desc {
            font-size: 1.3rem;
            margin-bottom: 22px;
          }
          .stay-form {
            flex-direction: column;
            width: 100%;
            gap: 12px;
            max-width: 95vw;
          }
          .stay-input {
            padding: 13px 18px;
            font-size: 1rem;
          }
          .stay-btn {
            padding: 13px 24px;
            font-size: 1rem;
            width:100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}