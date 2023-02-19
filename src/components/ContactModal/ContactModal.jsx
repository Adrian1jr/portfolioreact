import React, { useRef } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import "./ContactModal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

export default function ContactModal() {
  const form = useRef();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function sendEmail(e) {
    e.preventDefault();

    const sendEmailText = document.querySelector("#sendEmailText");
    sendEmailText.innerHTML = "";
    const div = document.createElement("div");
    div.className = "flex items-center justify-center";
    const div2 = document.createElement("div");
    div2.className =
      "h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4";
    const div3 = document.createElement("div");
    div3.className = "ml-2";
    div3.innerText = "Enviando...";
    div.appendChild(div2);
    div.appendChild(div3);
    sendEmailText.appendChild(div);

    emailjs
      .sendForm(
        "service_s4a81it",
        "template_q3xahqr",
        e.target,
        "ETtSsU7gGQQNNOAAT"
      )
      .then(
        (result) => {
          if (result.status === 200) {
            Swal.fire({
              icon: "success",
              title: "Mensaje Enviado",
              text: "Me pondré en contacto contigo lo antes posible",
              timer: 3000,
            });
            handleClose();
          }
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: `${error.text}`,
            text: "Algo salió mal, intenta de nuevo",
            timer: 3000,
          });

          handleClose();
        }
      );
  }

  return (
    <>
      {" "}
      <button
        className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        type="button"
        onClick={handleOpen}
      >
        Contactame
      </button>
      <Modal open={open}>
        <Box sx={style}>
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-hide="authentication-modal"
            onClick={() => handleClose()}
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
          <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white text-center">
            Contactame
          </h3>
          <form
            className="space-y-6"
            action="#"
            ref={form}
            onSubmit={sendEmail}
          >
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nombre Completo
              </label>
              <input
                type="text"
                name="from_name"
                placeholder="Escribe tu nombre"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="text"
                name="from_email"
                placeholder="Ex: jhon@test.com"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              />
            </div>

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
                name="html_message"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Escribe tu mensaje"
              />
            </div>

            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <span id="sendEmailText">Enviar</span>
            </button>

            <div className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center">
              Telefono:{" "}
              <a
                href="#"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                867-179-8518
              </a>
            </div>
          </form>
        </Box>
      </Modal>
    </>
  );
}
