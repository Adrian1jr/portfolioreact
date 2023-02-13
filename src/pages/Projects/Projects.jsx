import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./Projects.css";
import {
  geekoshop,
  pokedex,
  calculator,
  asisst,
  conversion,
} from "../../assets/barrelimg";

export default function Projects() {
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
      title: "Pokedex",
      description: `La pokedex es un sistema de registro de pokemones, donde puedes encontrar información de cada uno de ellos.`,
      image: pokedex,
      percentage: "0%",
      link: "",
    },
    {
      title: "Tienda Online",
      description: `App de tienda online hecha en Angular JS con carrito de compras y
      checkout.`,
      image: geekoshop,
      percentage: "75%",
      link: "",
    },
    {
      title: "Calculadora",
      description: `App de calculadora hecha en React JS con funciones de suma, resta,
      multiplicación y división.`,
      image: calculator,
      percentage: "0%",
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
      title: "Herramienta De Conversión",
      description: `Herramienta de conversión de unidades de medida y conversión de
      monedas.`,
      image: conversion,
      percentage: "0%",
      link: "",
    },
  ];

  return (
    <div className="bg-white pt-8 pb-20">
      <div className="dark:bg-gray-800" id="projects">
        <div className="text-center w-full mx-auto pt-4 px-4 sm:px-6 lg:py-12 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block text-indigo-700">Mis Proyectos</span>
          </h2>
          <p className="text-l mt-4 max-w-lg mx-auto text-black">
            Aqui podras observar algunos de mis proyectos mas recientes y
            tambien mas antiguos.
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
