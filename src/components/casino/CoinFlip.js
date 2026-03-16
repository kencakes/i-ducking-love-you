function CoinFlip({ coins, setCoins, showNotification }) {

  const gambleCoins = (bet) => {
    if (coins < bet) {
      showNotification("😢 Not enough coins to gamble!");
      return;
    }

    const win = Math.random() < 0.5;

    if (win) {
      setCoins(prev => prev + bet);
      showNotification(`🎉 You won ${bet} coins!`);
    } else {
      setCoins(prev => prev - bet);
      showNotification(`💀 You lost ${bet} coins!`);
    }
  };

  return (
    <div className="shop-item">
      <h3>Coin Flip</h3>
      <p>50% chance to double your bet</p>

      <button onClick={() => gambleCoins(50)}>
        Bet 50 🪙
      </button>
    </div>
  );
}

export default CoinFlip;