import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProjectCard({
  title,
  description,
  image,
  percentage,
  link,
}) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="block rounded-xl border border-gray-100 p-8 shadow-lg"
      data-aos="zoom-in-up"
      data-aos-delay="50"
      data-aos-duration="800"
    >
      <div className="flex justify-between">
        <img src={image} alt="app icon" className="w-7" />

        <span className="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600">
          {percentage}
        </span>
      </div>

      <div className="mt-4 text-gray-500">
        <h3 className="mt-4 text-xl font-bold text-gray-900">{title}</h3>

        <p className="mt-2 text-sm sm:block">{description}</p>

        <div className="mt-4">
          {percentage === "100%" ? (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-500 font-medium"
            >
              Ver Proyecto
            </a>
          ) : (
            <span className="text-indigo-600 hover:text-indigo-500">
              Proyecto en desarrollo
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
