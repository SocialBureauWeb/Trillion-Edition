import React, { useEffect, useRef } from "react";

const services = [
  {
    title: "LUXURY AND LIFESTYLE",
    icon: "/assets/4.png",
    description:"Real Estate ⬩ Cars ⬩ Watches ⬩ Yachts ⬩ Jets ⬩ Motorcycles ⬩ Helicopters ⬩ Jewelry ⬩ Collectibles ⬩ Rentals ⬩ Journal",
  },
];

const RBServices = () => {
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
        padding: "60px 20px",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
        
      <img src="assets/rblogo.webp" alt="logo" style={{height:"10vh"}}/>
      <h2 style={{ fontSize: "36px", marginBottom: "60px" }}>
        SERVICES
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "60px 40px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {services.map((service, index) => (
          <div key={index}>
            <img
              src={service.icon}
              alt={service.title}
              className="icon-img"
              style={{
                width: "60px",
                height: "60px",
                marginBottom: "20px",
                transition: "transform 1s ease-out",
                animation: "scalePulse 2s infinite ease-in-out"
              }}
            />
            <h4 style={{ fontSize: "15px", fontWeight: "700" }}>
              {service.title}
            </h4>
            <p style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.81)", marginTop: "10px" }}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
       <button style={{background:"#000", color:"#fff", borderRadius:"20%", padding:"1vw", }} >View More</button>
    </div>
    
  );
};

export default RBServices;
