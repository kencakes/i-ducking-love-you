import { useState, useEffect } from "react";
import "./Countdown.css";

export default function Countdown({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) return null;

  return (
    <div className="countdown-card">
      <div className="countdown-header">💖 Days Until Hugs & Kisses</div>
      <div className="countdown-time">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="time-bubble">
            <span className="time-value">{value}</span>
            <span className="time-label">{unit[0].toUpperCase()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
