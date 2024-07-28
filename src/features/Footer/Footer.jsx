import { Icon } from "../../components";
import "./css/footer.css";

const socials = [
  { id: "twitter", icon: "twitter", link: "https://x.com/?lang=en" },
  {
    id: "linkedin",
    icon: "linkedin",
    link: "https:www.linkedin.com/in/ruth-mumo-466152246",
  },
  { id: "github", icon: "github", link: "https://github.com/mumorutth" },
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
