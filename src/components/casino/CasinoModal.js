import SlotMachine from "./SlotMachine";
import CoinFlip from "./CoinFlip";
import DoubleOrNothing from "./DoubleOrNothing";
import Roulette from "./Roulette";

function CasinoModal({
  casinoOpen,
  setCasinoOpen,
  coins,
  setCoins,
  jackpot,
  setJackpot,
  winStreak,
  setWinStreak,
  showNotification
}) {
  if (!casinoOpen) return null;

  return (
    <div className="shop-overlay">
      <div className="shop-modal">

        <button
          className="close-shop"
          onClick={() => setCasinoOpen(false)}
        >
          ✖
        </button>

        <h2>Duck Casino</h2>
        <p>Risk your affection coins</p>

        <h3 className="jackpot">Jackpot: {jackpot} 🪙</h3>
        <p>Win Streak: {winStreak}</p>

        <div className="shop-items">

          <SlotMachine
            coins={coins}
            setCoins={setCoins}
            jackpot={jackpot}
            setJackpot={setJackpot}
            setWinStreak={setWinStreak}
            showNotification={showNotification}
          />

          <CoinFlip
            coins={coins}
            setCoins={setCoins}
            showNotification={showNotification}
          />

          <DoubleOrNothing
            coins={coins}
            setCoins={setCoins}
            setWinStreak={setWinStreak}
            showNotification={showNotification}
          />

          <Roulette
            coins={coins}
            setCoins={setCoins}
            winStreak={winStreak}
            setWinStreak={setWinStreak}
            showNotification={showNotification}
          />

        </div>
      </div>
    </div>
  );
}

export default CasinoModal;