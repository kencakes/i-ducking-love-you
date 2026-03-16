function DoubleOrNothing({ coins, setCoins, setWinStreak, showNotification }) {

  const doubleOrNothing = (bet) => {

    if (coins < bet) {
      showNotification("Not enough coins!");
      return;
    }

    const win = Math.random() < 0.5;

    if (win) {
      const reward = bet * 2;

      setCoins(prev => prev + reward);
      setWinStreak(prev => prev + 1);

      showNotification(`🔥 DOUBLE! +${reward}`);

    } else {

      setCoins(prev => prev - bet);
      setWinStreak(0);

      showNotification("💀 Nothing...");
    }
  };

  return (
    <div className="shop-item">
      <h3>Double or Nothing</h3>

      <button onClick={() => doubleOrNothing(100)}>
        Bet 100 🪙
      </button>
    </div>
  );
}

export default DoubleOrNothing;