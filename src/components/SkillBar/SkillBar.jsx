import "./SkillBar.css";
import { Line } from "rc-progress";

export default function SkillBar({ name, percentage, progressBar }) {
  return (
    <div
      className="skills_data"
      data-aos="fade-right"
      data-aos-delay="250"
      id="skills"
    >
      <div className="skills_name">
        <i className="bx bxl-html5 skill_icon"></i>
        <span className="skill_name">{name}</span>
      </div>

      <div>
        <span className="skill_percentage">{percentage}</span>
      </div>

      <Line
        className="skill_bar"
        percent={progressBar}
        strokeWidth={1}
        trailColor="white"
        strokeColor="indigo"
      />
    </div>
  );
}
