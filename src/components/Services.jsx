import React, { useEffect, useRef } from "react";

const services = [
  {
    title: "EXPERIENCE DESIGN",
    icon: "/assets/5.png",
    description:"Wearable App Design ⬩ Website Design ⬩ Mobile Experience ⬩ Commerce Experience ⬩ Human–Machine Interface (HMI) ⬩ UI/UX Design",
  },
  {
    title: "TECHNOLOGY SERVICES",
    icon: "/assets/2.png",
    description:"DevOps Consulting ⬩ Data & Analytics ⬩ AI & Machine Learning ⬩ Web Development ⬩ Mobile App Development ⬩ Cloud Services",
  },
  {
    title: "BRANDING SERVICES",
    icon: "/assets/3.png",
    description:"Brand Consulting ⬩ Logo Design ⬩ Brand Collateral ⬩ Graphic Design ⬩ 2D / 3D Visualization ⬩ Brand Identity",
  },
  {
    title: "DIGITAL MARKETING SERVICES",
    icon: "/assets/6.png",
    description:"Social Media Management ⬩ Performance Marketing ⬩ Search Engine Optimisation (SEO) ⬩ Content Marketing ⬩ Marketing Automation",
  },
  {
    title: "NARROW MARKETING SERVICES",
    icon: "/assets/1.png",
    description:"Targeted Account Campaigns ⬩ Precision Lead Generation ⬩ Channel-Specific Outreach",
  },
  {
    title: "MOMENT MARKETING",
    icon: "/assets/4.png",
    description:"Trend-Based Campaigns ⬩ Event-Driven Marketing ⬩ Real-Time Social Engagement ⬩ Seasonal & Cultural Calendar Mapping ",
  },
];
const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = containerRef.current.querySelectorAll(".icon-img");

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        card.style.transform = `translate(${x * 0.06}px, ${y * 0.06}px)`;
      });
    };

    const container = containerRef.current;
    container.addEventListener("mousemove", handleMouseMove);

    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        backgroundColor: "#000",
        color: "#fff",
        textAlign: "center",
        padding: "40px 20px",
        fontFamily: "Inter, Arial, sans-serif",
      }}
      onClick={() => window.open("https://socialbureau.in/", "_blank")}
    >
      {/* Animation Keyframes & Responsive Styles */}
      <style>
        {`
          @keyframes scalePulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
          }

          @media (max-width: 600px) {
            .service-title {
              font-size: 13px !important;
            }

            .service-desc {
              font-size: 11px !important;
            }

            .icon-img {
              width: 50px !important;
              height: 50px !important;
            }

            .services-grid {
              flex-direction: column !important;
              gap: 30px !important;
            }
          }
        `}
      </style>

      <img src="assets/sblogo.webp" alt="logo" style={{ height: "10vh" }} />
      <h2 style={{ fontSize: "32px", marginBottom: "40px" }}>
        SERVICES
      </h2>

      <div
        className="services-grid"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "60px 40px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {services.map((service, index) => (
          <div key={index} style={{ maxWidth: "280px" }}>
            <img
              src={service.icon}
              alt={service.title}
              className="icon-img"
              style={{
                width: "60px",
                height: "60px",
                marginBottom: "20px",
                transition: "transform 1s ease-out",
                animation: "scalePulse 2s infinite ease-in-out",
              }}
            />
            <h4 className="service-title" style={{ fontSize: "15px", fontWeight: "700" }}>
              {service.title}
            </h4>
            <p className="service-desc" style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.81)", marginTop: "10px" }}>
              {service.description}
            </p>
          </div>
        ))}

      </div>
                          <button style={{background:"#000", color:"#fff", borderRadius:"20%", padding:"1vw",margin:"5v" }} onClick={() => window.open("https://socialbureau.in/", "_blank")}>View More</button>

    </div>
  );
};

export default Services;
