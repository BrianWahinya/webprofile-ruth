import { TypeAnimation } from "react-type-animation";
import "./css/infocard.css";
import { NavTabs, Icon } from "../../components";
import Footer from "../Footer/Footer";

const datos = [
  {
    id: "profile",
    title: <Icon id="profile" />,
    content: "About me",
  },
  {
    id: "education",
    title: <Icon id="education" />,
    content: "Education",
  },
  {
    id: "projects",
    title: <Icon id="projects" />,
    content: "Projects",
  },
  {
    id: "contacts",
    title: <Icon id="contacts" />,
    content: "Contacts",
  },
];

const InfoCard = () => {
  return (
    <div className="infocard">
      <div className="infocard__img"></div>
      <div className="infocard__avatar"></div>
      <div className="infocard__title">
        <TypeAnimation
          aria-label="Hey, I am Ruth Mumo. I am a Software Engineer"
          role="marquee"
          sequence={[
            "Hey, I am Ruth Mumo...",
            2000,
            "I am a Software Engineer...",
            1500,
          ]}
          speed={40}
          deletionSpeed={70}
          style={{ fontSize: "1em" }}
          repeat={Infinity}
        />
      </div>
      <div className="infocard__wrapper">
        <NavTabs data={datos} />
      </div>
      <Footer />
    </div>
  );
};
export default InfoCard;
