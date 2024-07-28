import { TypeAnimation } from "react-type-animation";
import InfoCard from "../InfoCard/InfoCard";

const Home = () => {
  return (
    <div className="div-home">
      {/* <h1>
        <TypeAnimation
          aria-label="Hey, I am Ruth Mumo. I am a Software Engineer"
          role="marquee"
          sequence={[
            "Hey, I am Ruth Mumo",
            2000,
            "I am a Software Engineer",
            1500,
          ]}
          speed={{ type: "keyStrokeDelayInMs", value: 100 }}
          deletionSpeed={70}
          style={{ fontSize: "1em" }}
          repeat={Infinity}
        />
      </h1> */}
      <InfoCard />
    </div>
  );
};
export default Home;
