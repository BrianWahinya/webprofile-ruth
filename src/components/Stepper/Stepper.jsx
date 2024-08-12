import { useState } from "react";
import { Button, Progress } from "reactstrap";
import { genRandomId } from "../../helpers/utils";

import "./css/stepper.css";
import wave_1 from "../../assets/wave_1.svg";
import wave_2 from "../../assets/wave_2.svg";
import wave_3 from "../../assets/wave_3.svg";

const calcPercent = (idx, dataLen) =>
  idx === 0 ? 0 : idx === dataLen - 1 ? 100 : (idx * 100) / (dataLen - 1);

const Stepper = ({ data }) => {
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
      <div
        className="stepper-content"
        style={{
          backgroundImage: `url(${
            bgImage === 1 ? wave_1 : bgImage === 2 ? wave_2 : wave_3
          })`,
        }}
      >
        {data[activeStep].content}
      </div>
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
    </div>
  );
};
export default Stepper;
