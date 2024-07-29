import { CgProfile } from "react-icons/cg";
import {
  FaGraduationCap,
  FaUserGraduate,
  FaSquareXTwitter,
  FaSquareGithub,
  FaLinkedin,
  FaWhatsapp,
  FaPhoneVolume,
  FaReact,
  FaDatabase,
  FaPython,
  FaDocker
} from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { MdOutlineContactPhone, MdOutlineLocationOn, MdOutlineEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import {
  SiWebmoney,
  SiJavascript,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";
import { BsMailboxFlag } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

const obj = {
  profile: <CgProfile />,
  education: <FaGraduationCap />,
  projects: <GrProjects />,
  contacts: <FaPhoneVolume />,
  fb: <FaFacebookSquare />,
  twitter: <FaSquareXTwitter />,
  github: <FaSquareGithub />,
  linkedin: <FaLinkedin />,
  logo: <SiWebmoney />,
  email: <MdOutlineEmail />,
  mailbox: <BsMailboxFlag />,
  location: <MdOutlineLocationOn />,
  whatsapp: <FaWhatsapp />,
  react: <FaReact />,
  js: <SiJavascript />,
  docker: <FaDocker />,
  python: <FaPython />,
  mysql: <SiMysql />,
  postgres: <SiPostgresql/>,
  database: <FaDatabase />
};

const Icon = ({ id }) => obj[id];
export default Icon;
