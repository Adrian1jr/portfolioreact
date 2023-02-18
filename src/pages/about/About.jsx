import { about } from "../../assets/barrelimg";

export default function About() {
  return (
    <div
      id="about"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
      className="pt-32 sm:pt-32"
    >
      <div className="relative max-w-screen-xl p-4 px-4 mx-auto bg-white dark:bg-gray-800 sm:px-6 lg:px-8 py-26 lg:mt-20">
        <div className="relative">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="ml-auto lg:col-start-2 lg:max-w-2xl">
              <p className="text-base font-semibold leading-6 text-indigo-500 uppercase">
                Sobre Mí
              </p>
              <h4 className="mt-2 text-2xl font-extrabold leading-8 text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
                Adrian Tapia Herrera - Front End Developer
              </h4>
              <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                Mi nombre es Adrian Tapia Herrera y soy un desarrollador front
                end con experiencia en <b>Angular y React</b>. He trabajado en
                varios proyectos utilizando estas tecnologías, y tengo una buena
                comprensión de cómo integrarlas para crear aplicaciones web
                robustas y escalables.
              </p>

              <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                Además, tengo conocimientos en el desarrollo backend y estoy
                familiarizado con frameworks como <b>Nest y Node JS</b>.
              </p>
            </div>
            <div className="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
              <div className="relative space-y-4">
                <div className="flex items-end justify-center space-x-6">
                  <img
                    className="w-96 lg:w-5/6"
                    width="200"
                    src={about}
                    alt="1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature */}
      <section className="mb-32 text-gray-800 text-center relative max-w-screen-xl p-4 px-4 mx-auto bg-white dark:bg-gray-800 sm:px-6 lg:px-8 py-26 lg:mt-20">
        <div className="flex justify-center">
          <div className="text-center max-w-[700px]">
            <h2 className="text-3xl font-bold mb-6 text-center">
              <p className="text-blue-600">Principales Características</p>
            </h2>
            <p className="text-gray-500 mb-12">
              Soy una persona apasionada por aprender y mejorar mis habilidades
              en tecnología. Soy organizado y detallista y me esfuerzo por
              entregar trabajos de alta calidad en el plazo acordado.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
          <div className="mb-12 lg:mb-0">
            <div className="p-4 bg-blue-600 rounded-full shadow-lg inline-block mb-6">
              <svg
                className="w-5 h-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"
                ></path>
              </svg>
            </div>
            <h5 className="text-lg font-bold mb-4">Buena Comunicación</h5>
            <p className="text-gray-500">
              Mantengo una buena comunicación con mis compañeros de trabajo y
              clientes, para poder ofrecer un mejor servicio y experiencia.
            </p>
          </div>

          <div className="mb-12 lg:mb-0">
            <div className="p-4 bg-blue-600 rounded-full shadow-lg inline-block mb-6">
              <svg
                className="w-5 h-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"
                ></path>
              </svg>
            </div>
            <h5 className="text-lg font-bold mb-4">Solución De Problemas</h5>
            <p className="text-gray-500">
              Resuelvo problemas buscando las soluciones más óptimas a los
              problemas que se presentan en el día a día.
            </p>
          </div>

          <div className="mb-12 md:mb-0">
            <div className="p-4 bg-blue-600 rounded-full shadow-lg inline-block mb-6">
              <svg
                className="w-5 h-5 teamwork"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                fill="currentColor"
                color="#fff"
              >
                <path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z" />
              </svg>
            </div>
            <h5 className="text-lg font-bold mb-4">Trabajo En Equipo</h5>
            <p className="text-gray-500">
              El trabajo en equipo es muy importante para mí, ya que me ayuda a
              aprender de los demás y aportar mis conocimientos.
            </p>
          </div>

          <div className="mb-12 md:mb-0">
            <div className="p-4 bg-blue-600 rounded-full shadow-lg inline-block mb-6">
              <svg
                className="w-5 h-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 544 512"
              >
                <path
                  fill="currentColor"
                  d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z"
                ></path>
              </svg>
            </div>
            <h5 className="text-lg font-bold mb-4">Aportador De Ideas</h5>
            <p className="text-gray-500">
              Propongo ideas y soluciones para mejorar el funcionamiento y la
              productividad sobre lo que estoy trabajando.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
