import { useState } from "react";

const slotSymbols = ["🦆", "💖", "🪙", "💀"];

function SlotMachine({
  coins,
  setCoins,
  jackpot,
  setJackpot,
  setWinStreak,
  showNotification
}) {
  const [slots, setSlots] = useState(["❓", "❓", "❓"]);
  const [spinning, setSpinning] = useState(false);

  const spinSlots = (bet) => {
    if (coins < bet || spinning) {
      showNotification("Not enough coins!");
      return;
    }

    setCoins(prev => prev - bet);
    setJackpot(prev => prev + 10);
    setSpinning(true);

    let spins = 0;

    const spinInterval = setInterval(() => {
      setSlots([
        slotSymbols[Math.floor(Math.random()*4)],
        slotSymbols[Math.floor(Math.random()*4)],
        slotSymbols[Math.floor(Math.random()*4)]
      ]);

      spins++;

      if (spins > 10) {
        clearInterval(spinInterval);

        const final = [
          slotSymbols[Math.floor(Math.random()*4)],
          slotSymbols[Math.floor(Math.random()*4)],
          slotSymbols[Math.floor(Math.random()*4)]
        ];

        setSlots(final);
        setSpinning(false);

        if (final[0] === "🦆" && final[1] === "🦆" && final[2] === "🦆") {
          setCoins(prev => prev + jackpot);
          showNotification(`🎉 JACKPOT! +${jackpot}`);
          setJackpot(200);
        }
      }
    }, 100);
  };

  return (
    <div className="shop-item">
      <h3>Slot Machine</h3>

      <div className="slots">
        {slots.map((s, i) => (
          <span key={i} className="slot">{s}</span>
        ))}
      </div>

      <button onClick={() => spinSlots(50)} disabled={spinning}>
        Spin 50 🪙
      </button>
    </div>
  );
}

export default SlotMachine;