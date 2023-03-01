import { useEffect } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./Projects.css";
import {
  geekoshop,
  pokedex,
  calculator,
  asisst,
  ascar,
} from "../../assets/barrelimg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);

  const projects = [
    {
      title: "GeekoShop",
      description: `GeekoShop es una tienda online, donde puedes encontrar desde
      camisetas, hasta accesorios para tu pc.`,
      image: geekoshop,
      percentage: "100%",
      link: "https://adrian1jr.github.io/",
    },
    {
      title: "Ascar Sistemas",
      description: `Pagina Web de Ascar Sistemas, empresa dedicada a la venta de
      productos de informática y sistemas.`,
      image: ascar,
      percentage: "50%",
      link: "https://ascarsistemas.com/",
    },

    {
      title: "Tec Shop",
      description: `App de tienda online hecha en Angular JS con carrito de compras y
      checkout.`,
      image: geekoshop,
      percentage: "75%",
      link: "",
    },
    {
      title: "Sistema De Asistencia",
      description: `Sistema de asistencia para la mejora de la productividad de los
      empleados.`,
      image: asisst,
      percentage: "0%",
      link: "",
    },
    {
      title: "Calculadora financiera",
      description: `App para calcular los gastos e ingresos personales y
      tener un control de tus finanzas.`,
      image: calculator,
      percentage: "0%",
      link: "",
    },
    {
      title: "Pokedex",
      description: `Pokedex creada con react para visualizar todos los pokemons y ver sus todos sus movimientos.`,
      image: pokedex,
      percentage: "0%",
      link: "",
    },
  ];

  return (
    <div className="bg-white pt-8 pb-20" id="projects">
      <div
        className="dark:bg-gray-800"
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="800"
      >
        <div className="text-center w-full mx-auto pt-4 px-4 sm:px-6 lg:py-12 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block text-indigo-700">Mis Proyectos</span>
          </h2>
          <p className="text-gray-700 md:text-lg mb-6 mt-5">
            Aquí podrás observar algunos de mis proyectos más recientes y
            también más antiguos.
          </p>
        </div>
      </div>

      <div className="card-container">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            percentage={project.percentage}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}
