import { Icon } from "../../components";
import "./css/footer.css";

const socials = [
  { id: "twitter", icon: "twitter", link: "" },
  { id: "linkedin", icon: "linkedin", link: "" },
  { id: "github", icon: "github", link: "" },
];
const Footer = () => {
  return (
    <footer>
      <p className="p-copyright">{new Date().getFullYear()}&copy;RuthMumo</p>
      <div className="div-socialmedia">
        {socials.map(({ id, icon, link }) => (
          <a
            key={`socialmedia_a_${id}`}
            href={link}
            target="_blank_"
            rel="noopener noreferrer"
          >
            <Icon id={icon} />
          </a>
        ))}
      </div>
    </footer>
  );
};
export default Footer;
