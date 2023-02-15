import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Link } from "react-scroll";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { logo, avatar, singleicon, cv } from "../../assets/barrelimg";
import ContactModal from "../../components/ContactModal/ContactModal";
import "./hero.css";

//dynamic nav
const navigation = [
  { name: "Inicio", href: "" },
  { name: "Sobre Mi", href: "" },
  { name: "Servicios", href: "services" },
  { name: "Proyectos", href: "projects" },
  { name: "Habilidades", href: "" },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMyModal, setShowMyModal] = useState(false);
  const handleOnClose = () => setShowMyModal(false);

  return (
    <div className="isolate min-h-screen">
      <div className="px-6 pt-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <img className="h-8" src={logo} alt="logo" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 transition-all"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                to={item.href}
                smooth={true}
                key={item.name}
                className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Github <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>

        {/*--------------------------- Mobile Section Nav --------------------------*/}
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel
            focus="true"
            className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img className="h-10" src={singleicon} alt="logo" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      to={item.href}
                      smooth={true}
                      key={item.name}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-24 sm:py-24 lg:py-40">
            <div className="mb-8 flex justify-center">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Hola, Soy Adrian Tapia Herrera
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Front End Developer apasionado por la tecnología y la creación
                de interfaces de usuario atractivas y funcionales.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <button
                  className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  type="button"
                  onClick={() => setShowMyModal(true)}
                >
                  Contactame
                </button>

                <ContactModal visible={showMyModal} onClose={handleOnClose} />

                <a
                  href={cv}
                  target="_blank"
                  className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Ver CV
                </a>
              </div>
            </div>
            {/* Scroll down */}
            <Link
              to="about"
              smooth={true}
              aria-label="Scroll down"
              className="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 duration-300 transform border border-gray-400 rounded-full hover:shadow hover:scale-110 cursor-pointer sm:mt-12 mt-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
              </svg>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
