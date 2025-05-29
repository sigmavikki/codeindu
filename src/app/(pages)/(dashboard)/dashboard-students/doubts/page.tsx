"use client";
import { FaWhatsapp, FaTelegram } from "react-icons/fa";
import { useState } from "react";

export default function DoubtsPage() {
  const [search, setSearch] = useState("");

  return (
    <div
      style={{
        padding: "40px 20px",
        fontFamily: "'Segoe UI', sans-serif",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>
        Student Doubts Hub
      </h1>
      <p style={{ color: "#555", marginBottom: "30px" }}>
        Find answers, ask questions, and connect with peers through our groups.
      </p>

      {/* Search */}
      <input
        type="text"
        placeholder="Search for a topic or question..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "12px",
          width: "100%",
          maxWidth: "500px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginBottom: "30px",
          fontSize: "1rem",
        }}
      />

      {/* Group Section */}
      <section>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>
          Join the Conversation
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          <GroupCard
            href="https://chat.whatsapp.com/BrnxLAjfPrU6sktit3zV9s"
            color="#25D366"
            icon={<FaWhatsapp size={36} />}
            label="Join WhatsApp Group"
          />
          <GroupCard
            href="https://t.me/+W8Ol0nrrfyMyMmM1"
            color="#0088cc"
            icon={<FaTelegram size={36} />}
            label="Join Telegram Group"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ marginTop: "50px" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>FAQs</h2>
        <ul style={{ lineHeight: "1.8", color: "#444", paddingLeft: "20px" }}>
          <li>How do I submit a new doubt?</li>
          <li>What topics can I ask about?</li>
          <li>How are updates communicated in the groups?</li>
        </ul>
      </section>

      {/* Contact Support */}
      <section style={{ marginTop: "40px" }}>
        <button
          onClick={() => (window.location.href = "mailto:support@example.com")}
          style={{
            padding: "12px 24px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#0056b3")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#007BFF")
          }
        >
          Contact Support
        </button>
      </section>
    </div>
  );
}

interface GroupCardProps {
  href: string;
  color: string;
  icon: React.ReactNode;
  label: string;
}

function GroupCard({ href, color, icon, label }: GroupCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        textDecoration: "none",
        color: "#333",
        backgroundColor: "#0000",
        padding: "20px",
        borderRadius: "10px",
        border: `1px solid ${color}`,
        flex: "1 1 250px",
        textAlign: "center",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        transition: "transform 0.2s, background-color 0.3s",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "scale(1.02)";
        e.currentTarget.style.backgroundColor = "#0000";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.backgroundColor = "#0000";
      }}
    >
      <div style={{ color }}>{icon}</div>
      <div style={{ marginTop: "12px", fontWeight: "bold" }}>{label}</div>
    </a>
  );
}
