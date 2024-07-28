import { CgProfile } from "react-icons/cg";
import {
  FaGraduationCap,
  FaUserGraduate,
  FaSquareXTwitter,
  FaSquareGithub,
  FaLinkedin,
} from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { MdOutlineContactPhone } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { SiWebmoney } from "react-icons/si";

const obj = {
  profile: <CgProfile />,
  education: <FaGraduationCap />,
  projects: <GrProjects />,
  contacts: <MdOutlineContactPhone />,
  fb: <FaFacebookSquare />,
  twitter: <FaSquareXTwitter />,
  github: <FaSquareGithub />,
  linkedin: <FaLinkedin />,
  logo: <SiWebmoney />,
};

const Icon = ({ id }) => obj[id];
export default Icon;
