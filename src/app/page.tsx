"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-07-25T00:00:00");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft = {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-black text-white text-center px-4 py-16">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Grand Comeback</h1>
      <p className="text-xl md:text-2xl mb-8">We are coming back on <strong>25 July 2025</strong></p>

      <div className="flex gap-6 text-2xl md:text-4xl font-mono mb-12">
        <div className="flex flex-col items-center">
          <span>{timeLeft.days}</span>
          <span className="text-sm md:text-base text-gray-400">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{timeLeft.hours}</span>
          <span className="text-sm md:text-base text-gray-400">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{timeLeft.minutes}</span>
          <span className="text-sm md:text-base text-gray-400">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{timeLeft.seconds}</span>
          <span className="text-sm md:text-base text-gray-400">Seconds</span>
        </div>
      </div>

      <p className="text-lg text-gray-300 mb-4">
        We are currently under consultation. For any inquiries, contact us on WhatsApp:
      </p>
      <a
        href="https://wa.me/917380365295"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-400 text-xl hover:underline"
      >
        +91 7380365295
      </a>
    </main>
  );
}
