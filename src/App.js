import { useState } from "react";
import "./App.css";
import JSConfetti from "js-confetti";
import { useEffect } from "react";

import duckPoint from "./images/duck-point.jpg";

// YES images
import yesDuckOne from "./images/yes-duck.jpg";
import yesDuckTwo from "./images/yes-duck-2.jpg";
import yesDuckThree from "./images/yes-duck-3.jpg";
import yesDuckFour from "./images/yes-duck-4.png";
import yesDuckFive from "./images/yes-duck-5.jpg";
import yesDuckSix from "./images/yes-duck-6.png";
import yesDuckSeven from "./images/yes-duck-7.png";
import yesDuckEight from "./images/yes-duck-8.jpg";
import yesDuckNine from "./images/yes-duck-9.png";
import yesDuckTen from "./images/yes-duck-10.png";
import yesDuckEleven from "./images/yes-duck-11.jpg";
import yesDuckTwelve from "./images/yes-duck-12.png";
import yesDuckThirteen from "./images/yes-duck-13.png";

// NO images
import noDuckOne from "./images/no-duck-1.jpg";
import noDuckTwo from "./images/no-duck-2.jpg";
import noDuckThree from "./images/no-duck-3.jpg";
import noDuckFive from "./images/no-duck-5.png";
import noDuckSix from "./images/no-duck-6.png";
import noDuckSeven from "./images/no-duck-7.jpg";
import noDuckEight from "./images/no-duck-8.jpg";
import noDuckNine from "./images/no-duck-9.png";
import noDuckTen from "./images/no-duck-10.png";
import noDuckEleven from "./images/no-duck-11.gif";
import noDuckTwelve from "./images/no-duck-12.gif";
import noDuckThirteen from "./images/no-duck-13.jpg";
import noDuckFourteen from "./images/no-duck-14.png";
import noDuckFifteen from "./images/no-duck-15.jpg";
import noDuckSixteen from "./images/no-duck-16.jpg";
import noDuckSeventeen from "./images/no-duck-17.gif";
import noDuckEighteen from "./images/no-duck-18.png";
import noDuckNineteen from "./images/no-duck-19.png";

// Audio
import donalDuck from "./audio/donald-duck.mp3";
import duckToy from "./audio/duck-toy.mp3";
import macQuack from "./audio/mac-quack.mp3";
import duckRick from "./audio/rick-duck.mp3";

import CasinoModal from "./components/casino/CasinoModal";
import DailyCompliment from "./components/DailyCompliment";

// NO messages + corresponding images
const noMessages = [
  { noText: "NO?!", img: duckPoint },
  { noText: "Wait... really?", img: noDuckOne },
  { noText: "Are you sure?", img: noDuckTwo },
  { noText: "Think about it", img: noDuckThree },
  { noText: "Think a little harder", img: noDuckFive },
  { noText: "Maybe reconsider?", img: noDuckSix },
  { noText: "The duck is disappointed", img: noDuckSeven },
  { noText: "Lifetime cuddle DLC included", img: noDuckEight },
  { noText: "We can co-op games together", img: noDuckNine },
  { noText: "I will revive you every round", img: noDuckTen },
  { noText: "We can go gym together", img: noDuckEleven },
  { noText: "Think of the gaming room", img: noDuckTwelve },
  { noText: "I'll be your personal tech support", img: noDuckThirteen },
  { noText: "Unlimited hugs included", img: noDuckFourteen },
  { noText: "I'll even let you win sometimes", img: noDuckFifteen },
  { noText: "I will make you protein pancakes", img: noDuckSixteen },
  { noText: "I will be your good girl", img: noDuckSeventeen },
  { noText: "We can have doggies someday", img: noDuckEighteen },
  { noText: "I’ll let you win in games (maybe)", img: noDuckNineteen },
  { noText: "You can't say no anymore", img: noDuckNineteen },
];

// YES images array
const yesImages = [
  yesDuckTwo,
  yesDuckOne,
  yesDuckThree,
  yesDuckFour,
  yesDuckFive,
  yesDuckSix,
  yesDuckSeven,
  yesDuckEight,
  yesDuckNine,
  yesDuckTen,
  yesDuckEleven,
  yesDuckTwelve,
  yesDuckThirteen,
];

function App() {
  // Terminal lines
  const loadingLines = [
    "Contacting duck authorities...",
    "Running boyfriend.exe",
    "Installing boyfriend DLC...",
    "Loading co-op mode...",
    "Downloading 300TB of affection...",
    "Success",
  ];

  // Duck sounds
  const duckSounds = [duckToy, macQuack];

  // State
  const [step, setStep] = useState(0);
  const [yesSize, setYesSize] = useState(1);
  const [accepted, setAccepted] = useState(false);
  const [yesIndex, setYesIndex] = useState(0);
  const [soundIndex, setSoundIndex] = useState(0);
  const jsConfetti = new JSConfetti();
  const [loading, setLoading] = useState(false);
  const [lineIndex, setLineIndex] = useState(0);
  const [shopOpen, setShopOpen] = useState(false);
  const [achievement, setAchievement] = useState(null);
  const [notification, setNotification] = useState(null);
  const [actionsOpen, setActionsOpen] = useState(false);
  const [casinoOpen, setCasinoOpen] = useState(false);
  const [jackpot, setJackpot] = useState(500);
  const [winStreak, setWinStreak] = useState(0);
  const [coins, setCoins] = useState(() => {
    const savedCoins = localStorage.getItem("coins");
    return savedCoins ? parseInt(savedCoins) : 100;
  });

  useEffect(() => {
    if (loading && lineIndex < loadingLines.length) {
      const timer = setTimeout(() => setLineIndex(lineIndex + 1), 700);
      return () => clearTimeout(timer);
    }
  }, [lineIndex, loading]);

  useEffect(() => {
    localStorage.setItem("coins", coins);
  }, [coins]);

  useEffect(() => {
    const savedJackpot = localStorage.getItem("jackpot");
    if (savedJackpot) setJackpot(parseInt(savedJackpot));
  }, []);

  useEffect(() => {
    localStorage.setItem("jackpot", jackpot);
  }, [jackpot]);

  const handleNoHover = (e) => {
    if (step === noMessages.length - 1) {
      const x = Math.random() * 300 - 150;
      const y = Math.random() * 300 - 150;

      e.target.style.transform = `translate(${x}px, ${y}px)`;
    }
  };

  // Handle NO clicks
  const handleNoClick = () => {
    // play duck sound
    const sound = new Audio(duckSounds[soundIndex]);
    sound.play();

    // rotate sound
    setSoundIndex((prev) => (prev + 1) % duckSounds.length);

    // trigger screen shake
    document.body.classList.add("shake");

    setTimeout(() => {
      document.body.classList.remove("shake");
    }, 400);

    if (step < noMessages.length - 1) {
      setStep((prev) => prev + 1);
      setYesSize((prev) => prev + 1);
    }
  };

  // Handle YES clicks
  const handleYesClick = () => {
    if (!accepted) {
      setLoading(true);
      setTimeout(() => {
        setAchievement("🏆 Achievement Unlocked: Girlfriend Acquired");
        setCoins((prev) => prev + 50); // earn coins!
        setTimeout(() => setAchievement(null), 4000);

        const sound = new Audio(duckRick);
        sound.play();
        jsConfetti.addConfetti({
          emojis: ["🦆", "💖"],
          confettiNumber: 200,
          emojiSize: 50,
        });

        setAccepted(true);
        setYesSize(1);
        setYesIndex(0);
        setLoading(false);
      }, 5000);
    } else {
      setYesIndex((prev) => (prev < yesImages.length - 1 ? prev + 1 : 0));

      // earn coins and show pop-up
      setCoins((prev) => prev + 5);
      showCoinNotification("💛 You earned 5 affection coins!");
    }
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const showCoinNotification = (message) => {
    setAchievement(message); // reuse achievement state
    setTimeout(() => setAchievement(null), 3000); // hide after 3s
  };

  const sendDiscordNotification = async (itemName, price) => {
    await fetch(
      "https://discord.com/api/webhooks/1482884964667232408/thTeKYsZ46EA1iI1Rh00Uqjs-U9QZDyMHjPdwvdzG-k39MMWZIAwo6bJpG0bENuLwV4i",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: `🦆 Someone bought **${itemName}** for ${price} coins!`,
        }),
      },
    );
  };

  const earnAffection = (actionName, coinsEarned) => {
    setCoins((prev) => prev + coinsEarned);

    // Show bottom-right notification like achievements
    setAchievement(
      `💛 He did "${actionName}" and earned you ${coinsEarned} coins!`,
    );
    setTimeout(() => setAchievement(null), 3000);

    // Optional: play sound or confetti for fun
    const sound = new Audio(duckToy); // or macQuack, etc.
    sound.play();
    jsConfetti.addConfetti({
      emojis: ["🦆", "💖"],
      confettiNumber: 50,
      emojiSize: 30,
    });
  };

  const buyItem = (itemName, price) => {
    if (coins >= price) {
      setCoins(coins - price);
      sendDiscordNotification(itemName, price);
      showNotification("💖 Item purchased!");
      jsConfetti.addConfetti({
        emojis: ["🦆", "💖"],
        confettiNumber: 50,
        emojiSize: 30,
      });
    } else {
      showNotification("😢 Not enough affection coins!");
    }
  };

  const gambleCoins = (bet) => {
    if (coins < bet) {
      showNotification("😢 Not enough coins to gamble!");
      return;
    }

    const win = Math.random() < 0.5; // 50% chance

    if (win) {
      setCoins((prev) => prev + bet);
      showNotification(`🎉 You won ${bet} coins!`);
    } else {
      setCoins((prev) => prev - bet);
      showNotification(`💀 You lost ${bet} coins!`);
    }
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-terminal">
          {loadingLines.slice(0, lineIndex).map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="centered w-full">
      {notification && <div className="notification-popup">{notification}</div>}

      {/* Duck Image */}
      <img
        src={accepted ? yesImages[yesIndex] : noMessages[step].img}
        alt="duck"
        className={`duck-image ${accepted ? "yes-mode" : ""}`}
      />

      {/* Question + Buttons (NO mode) */}
      {!accepted && (
        <>
          <h1>Do you want to be my boyfriend?</h1>

          <div className="button-container">
            <button
              className="button-yes"
              style={{
                padding: `${10 * yesSize}px ${20 * yesSize}px`,
                fontSize: `${16 * yesSize}px`,
              }}
              onClick={handleYesClick}
            >
              YES
            </button>

            <button
              className="button-no"
              onClick={handleNoClick}
              onMouseEnter={handleNoHover}
            >
              {noMessages[step].noText}
            </button>
          </div>
        </>
      )}

      {/* YES-only mode */}
      {accepted && (
        <div className="yes-only-container">
          <div className="coin-counter">🪙 Affection Coins: {coins}</div>
          <DailyCompliment />

          <button className="button-yes" onClick={handleYesClick}>
            YES
          </button>
          <button
            className="shop-button"
            onClick={() => setShopOpen(!shopOpen)}
          >
            SHOP
          </button>
          {/* ← Place actions panel here */}
          <button
            className="shop-button"
            onClick={() => setActionsOpen(!actionsOpen)}
          >
            EARN
          </button>
          <button
            className="shop-button"
            onClick={() => setCasinoOpen(!casinoOpen)}
          >
            CASINO
          </button>
          {achievement && <div className="achievement">{achievement}</div>}
          {shopOpen && (
            <div className="shop-overlay">
              <div className="shop-modal">
                <button
                  className="close-shop"
                  onClick={() => setShopOpen(false)}
                >
                  ✖
                </button>

                <h2>Duck Shop</h2>
                <p>Spend your affection wisely.</p>

                <div className="shop-items">
                  <div className="shop-item">
                    <h3>Unlimited Hugs</h3>
                    <p>+10 affection</p>
                    <p>Cost: 30 🪙</p>
                    <button onClick={() => buyItem("Unlimited Hugs", 30)}>
                      Buy
                    </button>
                  </div>

                  <div className="shop-item">
                    <h3>Unlimited Kisses</h3>
                    <p>+10 affection</p>
                    <p>Cost: 80 🪙</p>
                    <button onClick={() => buyItem("Unlimited Kisses", 80)}>
                      Buy
                    </button>
                  </div>

                  <div className="shop-item">
                    <h3>Gaming Carry</h3>
                    <p>+ Revives + Damage</p>
                    <p>Cost: 50 🪙</p>
                    <button onClick={() => buyItem("Gaming Carry", 50)}>
                      Buy
                    </button>
                  </div>

                  <div className="shop-item">
                    <h3>Protein Pancakes</h3>
                    <p>+5 gym motivation</p>
                    <p>Cost: 25 🪙</p>
                    <button onClick={() => buyItem("Protein Pancakes", 25)}>
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {actionsOpen && (
            <div className="shop-overlay">
              <div className="shop-modal">
                <button
                  className="close-shop"
                  onClick={() => setActionsOpen(false)}
                >
                  ✖
                </button>

                <h2>Making Bank</h2>
                <p>Do things for affection coins</p>

                <div className="shop-items">
                  <div className="shop-item">
                    <h3>Spiderman me</h3>
                    <p>+ 300 affection</p>
                    <button onClick={() => earnAffection("Hug", 300)}>
                      Do
                    </button>
                  </div>

                  <div className="shop-item">
                    <h3>Playing with your good girl</h3>
                    <p>+ 200 affection</p>
                    <button
                      onClick={() => earnAffection("Protein Pancake", 200)}
                    >
                      Do
                    </button>
                  </div>

                  <div className="shop-item">
                    <h3>Bicep Chokehold</h3>
                    <p>+100 Affection</p>
                    <button onClick={() => earnAffection("Play Game", 100)}>
                      Do
                    </button>
                  </div>

                  <div className="shop-item">
                    <h3>Bicep Food</h3>
                    <p>+150 Affection</p>
                    <button onClick={() => earnAffection("Compliment", 150)}>
                      Do
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          <CasinoModal
            casinoOpen={casinoOpen}
            setCasinoOpen={setCasinoOpen}
            coins={coins}
            setCoins={setCoins}
            jackpot={jackpot}
            setJackpot={setJackpot}
            winStreak={winStreak}
            setWinStreak={setWinStreak}
            showNotification={showNotification}
          />
        </div>
      )}
    </div>
  );
}

export default App;
