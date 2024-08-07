import { ListGroup, ListGroupItem } from "reactstrap";
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
    id: "git",
    icon: "git",
    title: "Git",
  },

  {
    id: "docker",
    icon: "docker",
    title: "Docker",
  },
  {
    id: "dataviz",
    icon: "dataviz",
    title: "Echarts/ChartJs",
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
      <p className="p-intro">
        1yr+ experience in: <br />
        {/* web-dev, data-visualization, system-design, api-dev and devops(ci/cd) */}
      </p>
      <ListGroup horizontal="sm" className="list-skills">
        <ListGroupItem tag="p">Web-dev</ListGroupItem>
        <ListGroupItem tag="p">Data-viz</ListGroupItem>
        <ListGroupItem tag="p">System Design</ListGroupItem>
        <ListGroupItem tag="p">Api-dev</ListGroupItem>
        <ListGroupItem tag="p">Devops(ci/cd)</ListGroupItem>
      </ListGroup>
      <div className="div-skills">
        {skills.map((skill) => {
          const { id, icon, title } = skill;

          return (
            <div key={`skill_key_${id}`} className="div-skill">
              <Icon id={icon} />
              <p className="p-skill-title">{title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default About;
