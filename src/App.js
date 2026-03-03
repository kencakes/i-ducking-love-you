import { useState } from 'react';
import './App.css';

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

function App() {

  // NO messages + corresponding images
  const noMessages = [
    { noText: "NO?!", img: duckPoint },
    { noText: "Are you sure?", img: noDuckOne },
    { noText: "Think about it", img: noDuckTwo },
    { noText: "Think harder", img: noDuckThree },
    { noText: "Are you sure?", img: noDuckFive },
    { noText: "Really sure?", img: noDuckSix },
    { noText: "Surely not?", img: noDuckSeven },
    { noText: "You will regret this!", img: noDuckEight },
    { noText: "Give it another thought!", img: noDuckNine },
    { noText: "Please say yes!", img: noDuckTen },
    { noText: "We can gym together", img: noDuckEleven },
    { noText: "We can have doggies", img: noDuckTwelve },
    { noText: "I will be your tech support", img: noDuckThirteen },
    { noText: "I will love you forever", img: noDuckFourteen },
    { noText: "Think of the gaming room", img: noDuckFifteen },
    { noText: "I will make you protein pancakes!", img: noDuckSixteen },
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
    yesDuckEight
  ];

  // State
  const [step, setStep] = useState(0);
  const [yesSize, setYesSize] = useState(1);
  const [accepted, setAccepted] = useState(false);
  const [yesIndex, setYesIndex] = useState(0);

  // Handle NO clicks
  const handleNoClick = () => {
    if (step < noMessages.length - 1) {
      setStep(prev => prev + 1);
      setYesSize(prev => prev + 1);
    }
  };

  // Handle YES clicks
  const handleYesClick = () => {
    if (!accepted) {
      // First YES click: enter accepted mode
      setAccepted(true);
      setYesSize(1);
      setYesIndex(0);
    } else {
      // After accepted: cycle through YES images
      setYesIndex(prev =>
        prev < yesImages.length - 1 ? prev + 1 : 0
      );
    }
  };

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