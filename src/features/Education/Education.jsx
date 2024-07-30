import { Icon } from "../../components";
import "./css/education.css";

const schools = [
  {
    id: "course",
    icon: "laptopCode",
    course: "Software Engineering",
    school: "Modcom College",
    duration: "June 2024 - August 2024",
  },
  {
    id: "mut",
    icon: "university",
    course: "Bachelor of Science in Business Information Technology",
    school: "Muranga University",
    duration: "2020-2024",
  },
];

const Education = () => {
  return (
    <div className="div-education">
      {schools.map((item) => {
        const { id, icon, course, school, duration } = item;

        return (
          <div key={`school_key_${id}`} className="div-school">
            <Icon id={icon} />
            <div>
              <p className="p-course">{course}</p>
              <p className="p-school">{school}</p>
              <p className="p-duration">{duration}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Education;
