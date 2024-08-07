import { TypeAnimation } from "react-type-animation";
import "./css/infocard.css";
import { NavTabs, Icon, Avatar } from "../../components";
import Footer from "../Footer/Footer";
import Contacts from "../Contacts/Contacts";
import About from "../About/About";
import Education from "../Education/Education";
import ContactForm from "../ContactForm/ContactForm";

const datos = [
  {
    id: "profile",
    title: <Icon id="profile" />,
    content: <About />,
  },
  {
    id: "education",
    title: <Icon id="education" />,
    content: <Education />,
  },
  {
    id: "projects",
    title: <Icon id="projects" />,
    content: "Projects",
  },
  {
    id: "contacts",
    title: <Icon id="contacts" />,
    content: <Contacts />,
  },
  {
    id: "contact",
    title: <Icon id="contact" />,
    content: <ContactForm />,
  },
];

const InfoCard = () => {
  return (
    <div className="infocard">
      <div className="infocard__img"></div>
      <Avatar />
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
