import React, { useState } from "react";
import fd360commsservices from "../../assets/services/fd360communicationservices.jpg";
import fd360cloudpbx from "../../assets/services/fd360cloudpbx.png";
import fd360onpremise from "../../assets/services/fd360onpremisepbx.png";
import fd360t53w from "../../assets/services/fd360t53w.png";
import fd360t54w from "../../assets/services/fd360t54w.png";
import fd360t53 from "../../assets/services/fd360t53.png";
import fd360cp925 from "../../assets/services/fd360cp925.png";
import fd360W77P from "../../assets/services/fd360W77P.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import fd360veteran_orig from "../../assets/fd360_veteran_original.png";
import { Transition } from "@headlessui/react";
import "./styles.css";

const CommunicationServices = () => {
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
                    className="md:h-16 md:w-16 h-12 w-12"
                    src="/fd360favicon.png"
                    alt="Veteran Owned and operated"
                  />
                  <img
                    className="md:h-24 md:w-44 h-16 w-36"
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
                  className="px-3 py-2 md:text-sm text-xs font-medium text-green-400 hover:bg-blue-400 rounded-md cursor-pointer hover:text-green-400 sm:mt-20 md:mt-0"
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
                    className="px-3 py-2 text-base font-medium text-green-400 rounded-md cursor-pointer hover:bg-blue-400 hover:text-green-400"
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
                    href="/contactus"
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
        className="flex flex-col items-center bg-gradient-to-b from-[#d2ffff] to-[#0694c6]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="relative w-full h-[600px] ">
          <img
            src={fd360commsservices}
            alt="Communication Services"
            className="object-cover w-full h-full"
          />

          <div className="absolute inset-0  flex items-center justify-center">
            <div className="text-center">
              <motion.h1
                className="font-bold mb-4 md:text-6xl text-4xl text-green-400 "
                id="title"
                initial={{ opacity: 0, x: "-100vh" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
              >
                Communication Services
              </motion.h1>
            </div>
          </div>
        </div>
        <motion.div
          className="container mx-auto py-10"
          initial={{ opacity: 0, x: "300vh" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-transparent">
            <div className="bg-gradient-to-t from-[#d2ffff] to-[#0694c6] rounded-lg shadow-lg p-4">
              <h2 className="text-gray-800 mt-4 font-bold text-2xl">
                Cloud PBX
              </h2>
              <motion.img
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
                src={fd360cloudpbx}
                alt="FD360 cloud PBX"
                className="w-full p-20"
              />
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
                className="text-black mt-4"
              >
                <span className="font-bold font-custom text-2xl">
                  Hightlights:
                </span>{" "}
                <br />
                • Complete enterprise class PBX and ACD capabilities <br /> •
                Full support for Polycom desktop and conference phones
                <br /> • Delivered as a fully managed cloud service
                <br /> Whether upgrading from an existing phone system or
                deploying as a first time customer, FD360’s Private Cloud will
                provide an easy to manage solution that reduces communications
                costs.
                <br /> <span className="font-bold text-2xl">
                  Benefits:
                </span>{" "}
                <br /> • Advanced business-class PBX and contact center feature
                set
                <br /> • Secure dedicated virtual server, managed 24×7
                <br /> • Eliminate upfront CAPEX with no PBX hardware to buy
                <br /> • Reduce IT and OPEX with no on PBX to maintain and or
                upgrade
                <br /> • Lower communications costs with integrated SIP trunks
                (vs. on premise systems)
              </motion.p>
            </div>
            <div className="bg-gradient-to-t from-[#d2ffff] to-[#0694c6] rounded-lg shadow-lg p-4">
              <h2 className="text-gray-800 mt-4 font-bold text-2xl">
                On-Premise PBX
              </h2>
              <motion.img
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
                src={fd360onpremise}
                alt="FD360 on premise PBX"
                className="w-full p-20"
              />
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
                className="text-black mt-4 font-custom"
              >
                <span className="font-bold  text-2xl">Hightlights:</span> <br />
                • All software business communications solution <br /> •
                Complete enterprise class PBX and ACD capabilities
                <br /> • Full support for Polycom desktop and conference phones
                <br /> <span className="font-bold text-2xl">
                  Benefits:
                </span>{" "}
                <br /> • Advanced business-class PBX and contact center feature
                set
                <br /> • Reduces OPEX by leveraging existing IT infrastructure
                <br /> • Able to lower communications costs with native SIP
                trunk support
                <br /> • Flexible upfront or monthly subscription licensing
                models designed to fit any budget
              </motion.p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 justify-items-center items-center">
            <h2 className="text-black mt-4 font-custom text-2xl">
              Popular Phones
            </h2>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="bg-white rounded-md bg-opacity-40 bg-clip-padding backdrop-opacity-50 shadow-lg p-4"
            >
              <h2 className="text-gray-800 mt-4 font-custom text-xl">
                Wireless Prime Business Phone – Model T53w
              </h2>
              <img src={fd360t53w} alt="fd360 t53w" className="w-full h-40" />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="bg-white rounded-md bg-opacity-40 bg-clip-padding backdrop-opacity-50 shadow-lg p-4"
            >
              <h2 className="text-gray-800 mt-4 font-custom text-xl">
                Wireless Prime Business Phone Model T54W
              </h2>
              <img src={fd360t54w} alt="fd360 t54w" className="w-full h-40" />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="bg-white rounded-md bg-opacity-40 bg-clip-padding backdrop-opacity-50 shadow-lg p-4"
            >
              <h2 className="text-gray-800 mt-4 font-custom text-xl">
                Prime Business Phone Model T53
              </h2>
              <img src={fd360t53} alt="fd360 t53" className="w-full h-40" />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="bg-white rounded-md bg-opacity-40 bg-clip-padding backdrop-opacity-50 shadow-lg p-4 "
            >
              <h2 className="text-gray-800 mt-4 font-custom text-xl">
                Conference phone Model CP925
              </h2>
              <img src={fd360cp925} alt="fd360 CP925" className="w-full h-40" />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="bg-white rounded-md bg-opacity-40 bg-clip-padding backdrop-opacity-50 shadow-lg p-4"
            >
              <h2 className="text-gray-800 mt-4 font-custom text-xl">
                Dect Ruggedized Wireless phone with base Model W77P
              </h2>
              <img src={fd360W77P} alt="fd360 W77P" className="w-full h-40" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 justify-items-center items-center">
            <h2 className="text-black mt-4 font-custom text-2xl">
              Phones Plans & Pricing
            </h2>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="bg-gradient-to-b from-[#d2ffff] to-[#0694c6] rounded-lg shadow-lg p-4"
            >
              <h3 className="text-2xl font-semibold text-black">
                Basic <br />
                VoIP Phone Service
                <br />
                $19.95/month/user
              </h3>
              <p className="text-black mt-2 font-custom">
                • Unlimited Calling within U.S.
                <br />• 24/7 Customer Support
                <br />• Virtual Receptionist
                <br />• Multi-Level Virtual Receptionist
                <br />• Ring Group
                <br />• Music on Hold
                <br />• Extension Dialing
                <br />• Conference Bridge
                <br />• Electronic Inbound Fax
                <br />• Intercom
                <br />• Paging
                <br />• Call Log
                <br />• Call Park
                <br />• Multi-Device Ring
                <br />• E-911 Service
                <br />• Voicemail to Email
                <br />• Dial by Name
                <br />• Multi-Site Management
                <br />• Caller ID
                <br />• Audio Conferencing
                <br />• Speed Dial
                <br />• Software Phone/ Desktop App
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="bg-gradient-to-b from-[#d2ffff] to-[#0694c6] rounded-lg shadow-lg p-4"
            >
              <h3 className="text-2xl font-semibold text-black">
                Pro <br />
                VoIP Phone Service
                <br />
                $24.95/month/user
              </h3>
              <p className="text-black mt-2 font-custom">
                • Unlimited Calling within U.S.
                <br />• 24/7 Customer Support
                <br />• Virtual Receptionist
                <br />• Multi-Level Virtual Receptionist
                <br />• Mobile App
                <br />• Ring Group
                <br />• Music on Hold
                <br />• Extension Dialing
                <br />• Conference Bridge
                <br />• Electronic Inbound Fax
                <br />• Intercom
                <br />• Paging
                <br />• Call Log
                <br />• Call Park
                <br />• Multi-Device Ring
                <br />• E-911 Service
                <br />• Voicemail to Email
                <br />• Dial by Name
                <br />• Multi-Site Management
                <br />• Caller ID
                <br />• Audio Conferencing
                <br />• Speed Dial
                <br />• Call Recording
                <br />• Software Phone/Desktop App
                <br />• Call Barge, Listen, Coach
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="bg-gradient-to-b from-[#d2ffff] to-[#0694c6] rounded-lg shadow-lg p-4"
            >
              <h3 className="text-2xl font-semibold text-black">
                Enterprise <br /> VoIP Phone Service <br />
                $29.95/month/user
              </h3>
              <p className="text-black mt-2 font-custom">
                • Unlimited Calling within U.S.
                <br />• 24/7 Customer Support
                <br />• Virtual Receptionist
                <br />• Multi-Level Virtual Receptionist
                <br />• Mobile App
                <br />• Ring Group
                <br />• Music on Hold
                <br />• Extension Dialing
                <br />• Conference Bridge
                <br />• Electronic Inbound Fax
                <br />• Intercom
                <br />• Paging
                <br />• Call Log
                <br />• Call Park
                <br />• Multi-Device Ring
                <br />• E-911 Service
                <br />• Voicemail to Email
                <br />• Dial by Name
                <br />• Multi-Site Management
                <br />• Caller ID
                <br />• Audio Conferencing
                <br />• Speed Dial
                <br />• Call Recording
                <br />• Software Phone/Desktop App
                <br />• Call Barge, Listen, Coach
                <br />• CRM Integration
                <br />• Toll – Free Number for Free
                <br />• SMS Texting
                <br />• Directory Listing
                <br />• Video Conferencing
              </p>
            </motion.div>
          </div>
          <div className="flex justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="mt-10 md:w-1/2 w-full"
            >
              <iframe
                className="w-full"
                height="500"
                src="https://www.youtube.com/embed/X81_b-t1gIg"
                title="Yeastar Linkus UC Clients | Free UC Softphone with Yeastar PBX Systems"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default CommunicationServices;
