import { useState } from "react";
import love_mocha from "../../assets/love-mocha-bear-no-bg.gif";

const noChoices = [
  "Try again!!!",
  "One more trial...",
  "Seems you are struggling to find the right answer",
  "Do you need a hint? Starts with 'Y'😉",
  "😒😢😰",
];

const Answer = () => {
  const [choice, setChoice] = useState(null);
  const [noClicks, setNoClicks] = useState(null);
  const selectChoice = (e) => {
    e.preventDefault();
    const id = e.target.id;
    setChoice(id);
    if (id === "no") {
      setNoClicks((prev) =>
        prev === noChoices.length - 1 || prev === null ? 0 : (prev += 1)
      );
    }
  };
  return (
    <div className="div-select-answer">
      {choice !== "yes" && (
        <>
          <p>Will you be my girlfriend❤️???</p>
          <div>
            <button id="yes" className="custom-btn" onClick={selectChoice}>
              Yes
            </button>
            <button id="no" className="custom-btn" onClick={selectChoice}>
              No
            </button>
          </div>
        </>
      )}

      {choice === "yes" && (
        <>
          <p>
            Finally!! As we hug and kiss, let's not forget to fix bugs and
            introduce new ones
          </p>
          <img className="img-love-mocha" src={love_mocha} />
        </>
      )}
      {choice === "no" && <p className="no-choices">{noChoices[noClicks]}</p>}
    </div>
  );
};
export default Answer;
