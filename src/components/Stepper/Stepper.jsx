import { useLayoutEffect, useState } from "react";
import { Button, Progress } from "reactstrap";
import { genRandomId } from "../../helpers/utils";
import music_mp3 from "../../assets/love-music.mp3";

import "./css/stepper.css";

const calcPercent = (idx, dataLen) =>
  idx === 0 ? 0 : idx === dataLen - 1 ? 100 : (idx * 100) / (dataLen - 1);

const Stepper = ({ data }) => {
  const [isAudioLoaded, setIsAudioLoaded] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [bgImage, setBgImage] = useState(1);

  const changeBg = () => {
    setBgImage((prev) => (prev < 3 ? (prev += 1) : 1));
  };

  const prev = () => {
    setActiveStep((p) => (p === 0 ? 0 : (p -= 1)));
    changeBg();
  };

  const next = () => {
    setActiveStep((p) => (p === data.length - 1 ? data.length - 1 : (p += 1)));
    changeBg();
  };

  useLayoutEffect(() => {
    const audio = new Audio(music_mp3);
    const loadAudio = () => {
      audio.addEventListener("canplaythrough", () => {
        setTimeout(() => {
          setIsAudioLoaded(true);
        }, 1000);
      });
      audio.load(); // Start loading the audio file
    };
    loadAudio();

    const replay = () => {
      audio.play(); // Replay the audio when it ends
    };

    if (activeStep === 0 && isAudioLoaded) {
      audio.play();
      audio.addEventListener("ended", replay);
    }
    return () => {
      audio.pause();
      audio.currentTime = 0;
      audio.removeEventListener("ended", replay);
      audio.removeEventListener("canplaythrough", () => {
        setIsAudioLoaded(true);
      });
    };
  }, [isAudioLoaded]);

  if (!isAudioLoaded) {
    return <div>Loading... please wait</div>; // Show a loading message or spinner
  }

  return (
    <div className="div-stepper">
      <div className="stepper-progress">
        <Progress
          className="my-1"
          color="#babaef"
          style={{
            height: "3px",
          }}
          value={calcPercent(activeStep, data.length)}
        />
        {data.map((item, idx) => (
          <p
            key={genRandomId()}
            className={`progress-steps ${
              activeStep === idx
                ? "active-step"
                : idx < activeStep
                ? "passed-step"
                : ""
            }`}
            style={{ left: `${calcPercent(idx, data.length) - 1.6}%` }}
          ></p>
        ))}
      </div>
      <div className={`stepper-content bg_${bgImage}`}>
        {!isAudioLoaded ? "Loading..." : data[activeStep].content}
      </div>
      {isAudioLoaded && (
        <div className="stepper-controls">
          <Button
            color="primary"
            size="sm"
            onClick={prev}
            disabled={activeStep === 0}
            outline={activeStep === 0}
          >
            Prev
          </Button>
          <Button
            color="primary"
            size="sm"
            onClick={next}
            disabled={activeStep === data.length - 1}
            outline={activeStep === data.length - 1}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};
export default Stepper;
