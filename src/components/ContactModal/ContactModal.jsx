export default function ContactModal({ visible, onClose }) {
  const handleOnClose = () => {
    onClose();
  };
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-50">
      <div
        className="relative bg-white rounded-lg shadow dark:bg-gray-700 lg:w-2/4 sm:w-2/4
       xl:w-2/6"
      >
        <button
          type="button"
          className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          data-modal-hide="authentication-modal"
          onClick={() => handleOnClose()}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="px-6 py-6 lg:px-8">
          <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            Enviame un mensaje
          </h3>
          <form className="space-y-6" action="#">
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nombre
              </label>
              <input
                type="text"
                placeholder="Escribe tu nombre"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              />
            </div>

            {/* Make a select for the services */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Servicio
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Selecciona un servicio"
              >
                <option value="0"></option>
                <option value="1">Pagina Web</option>
                <option value="2">Aplicación Web</option>
                <option value="3">Aplicación De Escritorio</option>
                <option value="4">Mantenimiento De Equipo</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Mensaje
              </label>
              <textarea
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Escribe tu mensaje"
              />
            </div>

            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Enviar
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Telefono:{" "}
              <a
                href="#"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                867-179-8518
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
