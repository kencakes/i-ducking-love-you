import { useState } from 'react';
import './App.css';
import JSConfetti from 'js-confetti';
import { useEffect } from 'react';

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
    { noText: "I will be your good girl", img: noDuckSeventeen},
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
    "Success"
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

  useEffect(() => {
    if (loading && lineIndex < loadingLines.length) {
      const timer = setTimeout(() => setLineIndex(lineIndex + 1), 700);
      return () => clearTimeout(timer);
    }
  }, [lineIndex, loading]);

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
      setStep(prev => prev + 1);
      setYesSize(prev => prev + 1);
    }
  };

  // Handle YES clicks
  const handleYesClick = () => {
    if (!accepted) {

      // start fake loading
      setLoading(true);

      setTimeout(() => {

        // play sound
        const sound = new Audio(duckRick);
        sound.play();

        jsConfetti.addConfetti({
          emojis: ['🦆'],
          confettiNumber: 200,
          emojiSize: 50
        });

        setAccepted(true);
        setYesSize(1);
        setYesIndex(0);

        setLoading(false);

      }, 5000); // 2 seconds fake loading
    } else {

      // cycle YES images after accepted
      setYesIndex(prev =>
        prev < yesImages.length - 1 ? prev + 1 : 0
      );
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
                fontSize: `${16 * yesSize}px`
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
          <button
            className="button-yes"
            onClick={handleYesClick}
          >
            YES
          </button>
        </div>
      )}

    </div>
  );
}

export default App;