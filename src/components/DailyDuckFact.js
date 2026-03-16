import { useState, useEffect } from "react";

const duckFacts = [
  "Ducks have waterproof feathers.",
  "Some species of ducks can sleep with one eye open, allowing them to stay alert for predators.",
  "Certain ducks, like the wood duck, nest in trees and have special claws to help them grip branches.",
  "The long-tailed duck can dive over 200 feet underwater to find food.",
  "Ducks have three eyelids: an upper, lower, and a transparent one that protects their eyes underwater.",
  "In cold climates, ducks can reduce blood flow to their feet to prevent frostbite while standing on ice.",
  "Ducks can recognize themselves in reflections better than many other birds, showing surprising intelligence.",
  "The Muscovy duck can purr like a cat when content.",
];

export default function DailyDuckFact() {
  const [fact, setFact] = useState("");

  useEffect(() => {
    const today = new Date().toDateString();
    const lastShown = localStorage.getItem("lastDuckFactDay");

    if (lastShown !== today) {
      const randomIndex = Math.floor(Math.random() * duckFacts.length);
      const newFact = duckFacts[randomIndex];

      setFact(newFact);
      localStorage.setItem("dailyDuckFact", newFact);
      localStorage.setItem("lastDuckFactDay", today);
    } else {
      setFact(localStorage.getItem("dailyDuckFact"));
    }
  }, []);

  if (!fact) return null;

  return (
    <div className="daily-notification">
      <div className="daily-notification-header">🦆 Daily Duck Fact</div>
      <div className="daily-notification-text">{fact}</div>
    </div>
  );
}
