function Roulette({
  coins,
  setCoins,
  winStreak,
  setWinStreak,
  showNotification
}) {

  const roulette = (bet) => {

    if (coins < bet) {
      showNotification("Not enough coins!");
      return;
    }

    setCoins(prev => prev - bet);

    const roll = Math.random();

    if (roll < 0.05) {

      const reward = bet * 10 * (winStreak >= 3 ? 2 : 1);

      setCoins(prev => prev + reward);
      setWinStreak(prev => prev + 1);

      showNotification("🎉 MEGA WIN!");

    } 
    else if (roll < 0.25) {

      setCoins(prev => prev + bet * 3);
      showNotification("🦆 Big win!");

    } 
    else if (roll < 0.6) {

      setCoins(prev => prev + bet);
      showNotification("🙂 Break even");

    } 
    else {

      setWinStreak(0);
      showNotification("💀 Lost!");
    }
  };

  return (
    <div className="shop-item">
      <h3>Roulette</h3>

      <button onClick={() => roulette(50)}>
        Spin 50 🪙
      </button>
    </div>
  );
}

export default Roulette;