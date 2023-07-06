import React, { useState } from "react";
import fd360multifunctionalproduct from "../../assets/services/fd360multifunctionalproduct.jpg";
import lexmarkdesktop from "../../assets/services/lexmark-desktop-printer.png";
import lexmarkcx825 from "../../assets/services/lexmark-cx825.png";
import lexmarklogo from "../../assets/partners/lexmark_service_partner.png";
import { motion } from "framer-motion";
import Nav from "../navbar/Nav";
import "./styles.css";
import fd360veteran_orig from "../../assets/fd360_veteran_original.png";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

const MultiFunctionalProductServices = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShowing, setIsShowing] = useState(false);
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        mass: 0.4,
        damping: 8,
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
    exit: {
      x: "-100vw",
      transition: {
        ease: "easeInOut",
      },
    },
  };
  return (
    <>
      <div>
        <nav className="absolute z-50 w-full shadow-sm bg-transparent font-custom">
          <div className="w-full">
            <div className="flex items-center w-full">
              <div className="flex items-center w-full md:mx-20 mx-0 ">
                <div className="flex items-center justify-center  ">
                  <img
                    className="md:h-16 md:w-16 h-10 w-12"
                    src="/fd360favicon.png"
                    alt="Veteran Owned and operated"
                  />
                  <img
                    className="md:h-24 md:w-44 h-16 w-28"
                    src={fd360veteran_orig}
                    alt="fd360 veteran logo"
                  />
                </div>
                <div className="hidden md:block z-50 m-auto">
                  <div className="flex items-baseline ml-10 justify-between space-x-1">
                    <Link
                      activeClass="Home"
                      to="/"
                      className="px-3 py-2 font-medium text-green-400 cursor-pointer rounded-md text-md hover:bg-blue-400 "
                    >
                      Home
                    </Link>
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="px-3 py-2 text-sm font-medium text-green-400 rounded-md cursor-pointer hover:bg-blue-400 hover:text-green-400"
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
                          <div className="relative grid gap-6 bg-blue-400 bg-opacity-50 bg-clip-padding backdrop-opacity-50 px-5 py-6 sm:gap-8 sm:p-8  ">
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
                                Managed IT Network Services
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
                              to="/cybersecurity"
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
                            <Link
                              to="/multifunctional"
                              className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-blue-400 transition ease-in-out duration-150"
                            >
                              <img
                                className="h-8 w-8"
                                src="/fd360favicon.png"
                                alt="future digital 360 logo"
                              />
                              <div className="text-base font-medium text-green-400">
                                Multi Functional Product Services
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Transition>
                    <Link
                      activeClass="about"
                      to="/support"
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="px-3 py-2 text-sm font-medium text-green-400 rounded-md cursor-pointer hover:bg-blue-400 hover:text-green-400"
                    >
                      Support
                    </Link>

                    <Link
                      activeClass="Partners"
                      to="/Partners"
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="px-3 py-2 text-sm font-medium text-green-400 rounded-md cursor-pointer hover:bg-blue-400 hover:text-green-400"
                    >
                      Partners
                    </Link>

                    <Link
                      activeClass="aboutus"
                      to="/aboutus"
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="px-3 py-2 text-sm font-medium text-green-400 hover:bg-blue-400 rounded-md cursor-pointer hover:text-green-400"
                    >
                      About Us
                    </Link>
                    <Link
                      activeClass="contact"
                      to="/contactus"
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="px-3 py-2 text-sm font-medium text-green-400 hover:bg-blue-400 rounded-md cursor-pointer hover:text-green-400"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center flex-shrink-0 md:mr-5 ">
                {" "}
                <Link
                  activeClass="contact"
                  to="https://webservices.futuredigital360.com/"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="px-3 py-2 md:text-sm font-medium text-green-400 hover:bg-blue-400 rounded-md cursor-pointer hover:text-green-400 sm:mt-20 md:mt-0 hidden md:block"
                >
                  Web Service Bill Pay
                </Link>
                <Link
                  activeClass="contact"
                  to="https://futuredigital360.billcenter.net/"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="px-3 py-2  md:text-sm text-xs font-medium text-green-400 hover:bg-blue-400 rounded-md cursor-pointer hover:text-green-400 sm:mt-20 md:mt-0"
                >
                  Customer Bill Pay
                </Link>
              </div>
              <div className="flex mr-10 md:hidden z-50">
                <button
                  onClick={() => setIsShowing(!isShowing)}
                  type="button"
                  className="inline-flex items-center justify-center p-2 text-green-400 bg-blue-600 rounded-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
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
                  className="rounded-2xl px-2 pt-2 pb-3 space-y-1 bg-blue-400 bg-opacity-50 bg-clip-padding backdrop-opacity-50 sm:px-3"
                >
                  <Link
                    href="/"
                    activeClass="home"
                    to="/"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="block px-3 py-2 text-base font-medium text-green-400 rounded-md cursor-pointer hover:bg-blue-400 hover:text-green-400"
                  >
                    Home
                  </Link>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="px-3 py-2 text-sm font-medium text-green-400 rounded-md cursor-pointer hover:bg-blue-400 hover:text-green-400"
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
                              Managed IT Network Services
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
                            to="/cybersecurity"
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
                          <Link
                            to="/multifunctional"
                            className="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-blue-400 transition ease-in-out duration-150"
                          >
                            <img
                              className="h-8 w-8"
                              src="/fd360favicon.png"
                              alt="Logo"
                            />
                            <div className="text-base font-medium text-green-400">
                              Multi Functional Product Services
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Transition>

                  <Link
                    href="/support"
                    activeClass="about"
                    to="about"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="block px-3 py-2 text-base font-medium text-green-400 rounded-md cursor-pointer hover:bg-blue-400 hover:text-green-400"
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
                    className="block px-3 py-2 text-base font-medium text-green-400 rounded-md cursor-pointer hover:bg-blue-400 hover:text-green-400"
                  >
                    Partners
                  </Link>

                  <Link
                    activeClass="aboutus"
                    to="/aboutus"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="block px-3 py-2 text-base font-medium text-green-400 rounded-md cursor-pointer hover:bg-blue-400 hover:text-green-400"
                  >
                    About Us
                  </Link>
                  <Link
                    activeClass="contact us"
                    to="contactus"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="block px-3 py-2 text-base font-medium text-green-400 rounded-md cursor-pointer hover:bg-blue-400 hover:text-green-400"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            )}
          </Transition>
        </nav>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="relative w-full h-[600px] ">
          <img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            src={fd360multifunctionalproduct}
            alt="Multi Functional Product Services"
            className="object-cover 
             w-full h-full"
          />
          <div className="absolute inset-0  flex items-center justify-center">
            <div className="text-green-400 text-center ">
              <motion.h1
                className="font-bold mb-4 md:text-6xl text-4xl text-green-400 "
                id="title"
                initial={{ opacity: 0, x: "-100vh" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
              >
                Multi Functional Product Services
              </motion.h1>
              <motion.div
                className="flex justify-center items-center"
                initial={{ opacity: 0, x: "-100vh" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2.5 }}
              ></motion.div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#d2ffff] to-[#0694c6] py-8 px-4 font-custom flex justify-center">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, x: "1300vh" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          >
            <h2 className="md:text-3xl text-xl font-bold text-black">
              Our product brand is based on your requirements, we put you in
              charge allowing for an ethical, honest discussion on your needs.
              We provide a single low-cost solution, covering all your office
              equipment requirements.
            </h2>
            <h2 className="md:text-2xl mt-10 text-black">
              A multifunction printer (MFP) is a piece of office equipment that
              <span className="font-bold ">
                {" "}
                serves as the centralized hub where all printing, copying,
                faxing, and scanning occurs.
              </span>{" "}
              Most MFPs also provide finishing options including, stapling,
              folding, hole punching, and booklet making.
            </h2>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  w-full text-black bg-[#0694c6]">
          <div className="bg-gradient-to-t from-[#d2ffff] to-[#0694c6] rounded-lg shadow-lg p-4 ">
            <motion.h2
              className="text-black mt-4 font-custom text-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Small and Medium Business
            </motion.h2>
            <p>
              Versatile printers and multifunction products for individuals and
              workgroups who print 2,500 to 10,000 pages per month.
            </p>
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              src={lexmarkdesktop}
              alt="lexmark desktop printer"
              className="mx-auto"
            />
          </div>
          <div className="bg-gradient-to-t from-[#d2ffff] to-[#0694c6] rounded-lg shadow-lg p-4 ">
            <motion.h2
              className="text-black mt-4 font-custom text-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Enterprise and Large Business
            </motion.h2>
            <p>
              Advanced, high-capacity devices to support teams of 20 or more
              people that print more than 6,000 pages per month.
            </p>
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              src={lexmarkcx825}
              alt="lexmark desktop printer"
              className="mx-auto"
            />
          </div>
        </div>
        <div className="flex items-center justify-center   w-full text-black bg-gradient-to-l from-[#d2ffff] to-[#0694c6]">
          <div className="p-5">
            <img src={lexmarklogo} alt="lexmark logo" />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default MultiFunctionalProductServices;
