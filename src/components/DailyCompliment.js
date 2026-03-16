import { useState, useEffect } from "react";

const dailyCompliments = [
  "You are the most handsome man alive and I am so lucky to have you",
  "Your arms are perfect for cuddles and I love them",
  "I love your smile so much it makes my heart melt",
  "You're my favorite person ever and I love you so much",
  "You make everything better just by being you",
  "You're stronger than you think and more loved than you know",
  "You're my comfort person and I adore you",
  "I adore you and everything about you",
  "You're the cutest human alive and I love you so much",
];

export default function DailyCompliment() {
  const [compliment, setCompliment] = useState("");

  useEffect(() => {
    const today = new Date().toDateString();
    const lastShown = localStorage.getItem("lastComplimentDay");

    if (lastShown !== today) {
      const randomIndex = Math.floor(Math.random() * dailyCompliments.length);
      const newCompliment = dailyCompliments[randomIndex];
      setCompliment(newCompliment);
      localStorage.setItem("dailyCompliment", newCompliment);
      localStorage.setItem("lastComplimentDay", today);
    } else {
      setCompliment(localStorage.getItem("dailyCompliment"));
    }
  }, []);

  if (!compliment) return null;

  return (
    <div className="daily-notification">
      <div className="daily-notification-header">✨ Daily Compliment:</div>
      <div className="daily-notification-text">{compliment}</div>
    </div>
  );
}
