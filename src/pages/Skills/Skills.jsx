import "./Skills.css";
import SkillBar from "../../components/SkillBar/SkillBar";

export default function Skills() {
  const skills = [
    {
      id: 1,
      name: "HTML5",
      percentage: "100%",
      progressBar: 100,
    },
    {
      id: 2,
      name: "CSS3",
      percentage: "80%",
      progressBar: 80,
    },
    {
      id: 3,
      name: "JavaScript",
      percentage: "80%",
      progressBar: 80,
    },
    {
      id: 4,
      name: "React",
      percentage: "50%",
      progressBar: 50,
    },
    {
      id: 5,
      name: "Angular",
      percentage: "85%",
      progressBar: 80,
    },
    {
      id: 6,
      name: "NodeJS",
      percentage: "50%",
      progressBar: 50,
    },
    {
      id: 7,
      name: "MongoDB",
      percentage: "50%",
      progressBar: 50,
    },
    {
      id: 8,
      name: "SQL Server",
      percentage: "70%",
      progressBar: 70,
    },
    {
      id: 9,
      name: "MySQL",
      percentage: "70%",
      progressBar: 70,
    },
    {
      id: 10,
      name: "C#",
      percentage: "80%",
      progressBar: 80,
    },
    {
      id: 11,
      name: "NestJS",
      percentage: "50%",
      progressBar: 50,
    },
    {
      id: 12,
      name: "Git",
      percentage: "60%",
      progressBar: 60,
    },
  ];
  return (
    <>
      <section
        className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-center"
        id="skills"
      >
        <div className="skills_container bd_grid">
          <div>
            <h2
              className="skills_subtitle text-3xl font-extrabold text-black dark:text-white sm:text-4xl"
              data-aos="fade-down"
              data-aos-delay="250"
            >
              <span className="block text-indigo-700">Habilidades</span>
            </h2>
            <p
              className="text-base text-gray-700 md:text-lg mb-6 mt-4"
              data-aos="fade-down"
              data-aos-delay="350"
            >
              Cuento con las siguientes habilidades para el desarollo de
              aplicaciones.
            </p>
          </div>

          <div className="grid-skills">
            {skills.map((skill) => (
              <SkillBar
                key={skill.id}
                name={skill.name}
                percentage={skill.percentage}
                progressBar={skill.progressBar}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
