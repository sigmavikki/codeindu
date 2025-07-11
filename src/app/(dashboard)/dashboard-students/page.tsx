import React from "react";

export default function DashboardStudentsPage() {
  return (
    <div
      style={{
        padding: "40px 20px",
        fontFamily: "'Segoe UI', sans-serif",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>
        Student Dashboard
      </h1>
      <p style={{ color: "#555", marginBottom: "30px" }}>
        Welcome to your personalized student dashboard. Here you can view your
        progress, access study materials, and manage your learning.
      </p>

      {/* Overview Cards */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "40px",
        }}
      >
        <OverviewCard title="Your Courses" value="4 Active" color="#007BFF" />
        <OverviewCard
          title="Assignments Due"
          value="2 Upcoming"
          color="#28a745"
        />
        <OverviewCard title="Messages" value="5 Unread" color="#ffc107" />
      </div>

      {/* Progress Tracker */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "15px" }}>
          Your Progress
        </h2>
        <div
          style={{
            background: "#e9ecef",
            borderRadius: "8px",
            overflow: "hidden",
            height: "24px",
            width: "100%",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "70%",
              backgroundColor: "#17a2b8",
              color: "#fff",
              textAlign: "center",
              lineHeight: "24px",
              fontWeight: "bold",
            }}
          >
            70% Complete
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "15px" }}>
          Recent Activity
        </h2>
        <ul style={{ paddingLeft: "20px", lineHeight: "1.8", color: "#333" }}>
          <li>Completed: Module 3 - React Basics</li>
          <li>Joined: Telegram Doubts Group</li>
          <li>Submitted: Assignment on JavaScript Functions</li>
        </ul>
      </section>

      {/* Quick Links */}
      <section>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "15px" }}>
          Quick Links
        </h2>
        <ul style={{ lineHeight: "2", paddingLeft: "20px", color: "#333" }}>
          <li>
            <a
              href="/doubts"
              style={{ color: "#007BFF", textDecoration: "none" }}
            >
              Go to Doubts Page
            </a>
          </li>
          <li>
            <a
              href="/materials"
              style={{ color: "#007BFF", textDecoration: "none" }}
            >
              Access Study Materials
            </a>
          </li>
          <li>
            <a
              href="/schedule"
              style={{ color: "#007BFF", textDecoration: "none" }}
            >
              Check Your Schedule
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

interface OverviewCardProps {
  title: string;
  value: string;
  color: string;
}

function OverviewCard({ title, value, color }: OverviewCardProps) {
  return (
    <div
      style={{
        flex: "1 1 250px",
        backgroundColor: "#f9f9f9",
        padding: "20px",
        borderRadius: "10px",
        borderLeft: `5px solid ${color}`,
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      }}
    >
      <h3 style={{ margin: "0 0 10px 0", fontSize: "1.2rem" }}>{title}</h3>
      <p style={{ fontSize: "1.5rem", fontWeight: "bold", color }}>{value}</p>
    </div>
  );
}
