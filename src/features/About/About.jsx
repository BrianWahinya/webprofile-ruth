import { Icon } from "../../components";
import "./css/about.css";

const skills = [
  {
    id: "react",
    icon: "react",
    title: "React",
  },
  {
    id: "js",
    icon: "js",
    title: "Javascript",
  },
  {
    id: "python",
    icon: "python",
    title: "Python",
  },
  {
    id: "mysql",
    icon: "mysql",
    title: "Mysql",
  },
  {
    id: "postgres",
    icon: "postgres",
    title: "Postgres",
  },
  {
    id: "database",
    icon: "database",
    title: "Database",
  },
];

const About = () => {
  return (
    <div className="div-about">
      <p>1yr+ experience</p>
      <div className="div-skills">
        {skills.map((skill) => {
          const { id, icon, title } = skill;

          return (
            <div key={`skills_key_${id}`} className="div-skill">
              <Icon id={icon} />
              <p className="p-skills-title">{title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default About;
