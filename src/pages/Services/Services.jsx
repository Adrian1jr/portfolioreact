import ServiceCard from "../../components/ServiceCard/ServiceCard";

export default function Services() {
  const services = [
    {
      title: "Aplicaciones Web",
      description: `Desarollo de aplicaciones web escalable con frameworks como react, angular, nest js, node, etc.`,
      icon: "",
    },
    {
      title: "Paginas Web",
      description: `Desarollo de paginas web desde landing page hasta paginas mas estructuradas.`,
      icon: "",
    },
    {
      title: "Aplicaciones De Escritorio",
      description: `Desarollo de aplicaciones de escritorio con c# y .net framework.`,
      icon: "",
    },
    {
      title: "Mantenimiento De PC",
      description: `Mantenimiento de PC, instalacion de programas, etc.`,
      icon: "",
    },
  ];
  return (
    <div
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      id="services"
    >
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Servicios
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Los</span>
          </span>{" "}
          Servicios mas confiables y de calidad
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Cuento con diversos servicios para ofrecer, desde el diseño de paginas
          web, hasta el desarrollo de aplicaciones web y mantenimiento de
          equipos.
        </p>
      </div>
      <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>

      <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl pt-12">
        <h2 className="max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center mx-auto pt-10">
          Caracteristicas Especiales
        </h2>
      </div>
      <div className="flex-wrap items-center justify-center gap-8 text-center sm:flex mb-12">
        <div className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-full lg:w-1/4 dark:bg-gray-800">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-500 rounded-md">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
              </svg>
            </div>
          </div>
          <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
            Diseño Web
          </h3>
          <p className="py-4 text-gray-500 text-md dark:text-gray-300">
            Abarcando la tecnología de diseño de sitios web con HTML, CSS, JS,
            contando tambien con el uso de frameworks y librerias CSS.
          </p>
        </div>
        <div className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-full lg:w-1/4 sm:mt-16 md:mt-20 lg:mt-24 dark:bg-gray-800">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-500 rounded-md">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
              </svg>
            </div>
          </div>
          <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
            Branding
          </h3>
          <p className="py-4 text-gray-500 text-md dark:text-gray-300">
            Comparta mensajes de marca relevantes, atractivos e inspiradores
            para crear una conexión con tu audiencia.
          </p>
        </div>
        <div className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-full lg:w-1/4 dark:bg-gray-800">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-500 rounded-md">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
              </svg>
            </div>
          </div>
          <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
            SEO Y Marketing
          </h3>
          <p className="py-4 text-gray-500 text-md dark:text-gray-300">
            Permítanos ayudarlo a subir de nivel su juego de motor de búsqueda,
            explore nuestras Soluciones de marketing digital para tu negocio.
          </p>
        </div>
      </div>
    </div>
  );
}