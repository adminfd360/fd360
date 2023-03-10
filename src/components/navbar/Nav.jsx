import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  return (
    <div>
      <nav className="absolute z-50 w-full shadow-sm bg-transparent font-custom">
        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="flex items-center w-full mx-20">
              <div className="flex items-center justify-center flex-shrink-0 ">
                <img className="h-8 w-8" src="/fd360favicon.png" alt="Logo" />
              </div>
              <div className="hidden md:block z-50 mx-auto">
                <div className="flex items-baseline ml-10 space-x-4">
                  <Link
                    activeClass="Home"
                    to="/"
                    className="px-3 py-2 font-semibold text-white cursor-pointer rounded-md text-md hover:bg-blue-400 "
                  >
                    Home
                  </Link>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="px-3 py-2 text-sm font-medium text-white rounded-md cursor-pointer hover:bg-blue-400 hover:text-white"
                  >
                    Services
                  </button>
                  <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <div className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-xs sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-blue-400 bg-opacity-50 bg-clip-padding backdrop-blur-sm px-5 py-6 sm:gap-8 sm:p-8  ">
                          <Link
                            to="/communication"
                            className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-blue-400 transition ease-in-out duration-150"
                          >
                            <img
                              className="h-8 w-8"
                              src="/fd360favicon.png"
                              alt="Logo"
                            />
                            <div className="text-base font-medium text-green-400">
                              Communication Services
                            </div>
                          </Link>

                          <Link
                            to="/managednetwork"
                            className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-blue-400 transition ease-in-out duration-150"
                          >
                            <img
                              className="h-8 w-8"
                              src="/fd360favicon.png"
                              alt="Logo"
                            />
                            <div className="text-base font-medium text-green-400">
                              Managed Network Services
                            </div>
                          </Link>
                          <Link
                            to="/webservices"
                            className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-blue-400 transition ease-in-out duration-150"
                          >
                            <img
                              className="h-8 w-8"
                              src="/fd360favicon.png"
                              alt="Logo"
                            />
                            <div className="text-base font-medium text-green-400">
                              Web Services
                            </div>
                          </Link>
                          <Link
                            to="/services"
                            className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-blue-400 transition ease-in-out duration-150"
                          >
                            <img
                              className="h-8 w-8"
                              src="/fd360favicon.png"
                              alt="Logo"
                            />
                            <div className="text-base font-medium text-green-400">
                              Cyber & Network Security Services
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Transition>
                  <Link
                    activeClass="about"
                    to="/about"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="px-3 py-2 text-sm font-medium text-white rounded-md cursor-pointer hover:bg-blue-400 hover:text-white"
                  >
                    Support
                  </Link>

                  <Link
                    activeClass="Partners"
                    to="/Partners"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="px-3 py-2 text-sm font-medium text-white rounded-md cursor-pointer hover:bg-blue-400 hover:text-white"
                  >
                    Partners
                  </Link>

                  <Link
                    activeClass="aboutus"
                    to="/aboutus"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="px-3 py-2 text-sm font-medium text-white hover:bg-blue-400 rounded-md cursor-pointer hover:text-white"
                  >
                    About Us
                  </Link>
                  <Link
                    activeClass="contact"
                    to="/contactus"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="px-3 py-2 text-sm font-medium text-white hover:bg-blue-400 rounded-md cursor-pointer hover:text-white"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center flex-shrink-0 mr-10">
              {" "}
              <Link
                activeClass="contact"
                to="/contact"
                smooth={true}
                offset={50}
                duration={500}
                className="px-3 py-2 text-sm font-medium text-white hover:bg-blue-400 rounded-md cursor-pointer hover:text-white"
              >
                Customer Bill Pay
              </Link>
            </div>
            <div className="flex mr-10 md:hidden z-50">
              <button
                onClick={() => setIsShowing(!isShowing)}
                type="button"
                className="inline-flex items-center justify-center p-2 text-white bg-blue-600 rounded-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isShowing ? (
                  <svg
                    className="block w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isShowing}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden z-50" id="mobile-menu">
              <div
                ref={ref}
                className="rounded-2xl px-2 pt-2 pb-3 space-y-1 bg-blue-400 bg-opacity-50 bg-clip-padding backdrop-blur-sm sm:px-3"
              >
                <Link
                  href="/"
                  activeClass="home"
                  to="/"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="block px-3 py-2 text-base font-medium text-white rounded-md cursor-pointer hover:bg-blue-400 hover:text-white"
                >
                  Home
                </Link>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="px-3 py-2 text-sm font-medium text-white rounded-md cursor-pointer hover:bg-blue-400 hover:text-white"
                >
                  Services
                </button>
                <Transition
                  show={isOpen}
                  enter="transition ease-out duration-100 transform"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-in duration-75 transform"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <div className=" z-50 -ml-4 mt-3 transform px-2 w-screen max-w-xs sm:px-0">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-transparent px-5 py-6 sm:gap-8 sm:p-8 ">
                        <Link
                          to="/communication"
                          className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-blue-400 transition ease-in-out duration-150"
                        >
                          <img
                            className="h-8 w-8"
                            src="/fd360favicon.png"
                            alt="Logo"
                          />
                          <div className="text-base font-medium text-green-400">
                            Communication Services
                          </div>
                        </Link>
                        <Link
                          to="/managednetwork"
                          className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-blue-400 transition ease-in-out duration-150"
                        >
                          <img
                            className="h-8 w-8"
                            src="/fd360favicon.png"
                            alt="Logo"
                          />
                          <div className="text-base font-medium text-green-400">
                            Managed Network Services
                          </div>
                        </Link>
                        <Link
                          to="/webservices"
                          className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-blue-400 transition ease-in-out duration-150"
                        >
                          <img
                            className="h-8 w-8"
                            src="/fd360favicon.png"
                            alt="Logo"
                          />
                          <div className="text-base font-medium text-green-400">
                            Web Services
                          </div>
                        </Link>
                        <Link
                          to="/services"
                          className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-blue-400 transition ease-in-out duration-150"
                        >
                          <img
                            className="h-8 w-8"
                            src="/fd360favicon.png"
                            alt="Logo"
                          />
                          <div className="text-base font-medium text-green-400">
                            Cyber & Network Security Services
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Transition>

                <Link
                  href="/about"
                  activeClass="about"
                  to="about"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="block px-3 py-2 text-base font-medium text-white rounded-md cursor-pointer hover:bg-blue-400 hover:text-white"
                >
                  Support
                </Link>

                <Link
                  href="/work"
                  activeClass="work"
                  to="work"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="block px-3 py-2 text-base font-medium text-white rounded-md cursor-pointer hover:bg-blue-400 hover:text-white"
                >
                  Partners
                </Link>

                <Link
                  href="/aboutus"
                  activeClass="aboutus"
                  to="work"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="block px-3 py-2 text-base font-medium text-white rounded-md cursor-pointer hover:bg-blue-400 hover:text-white"
                >
                  About Us
                </Link>
                <Link
                  href="/contactus"
                  activeClass="contact us"
                  to="contactus"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="block px-3 py-2 text-base font-medium text-white rounded-md cursor-pointer hover:bg-blue-400 hover:text-white"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
