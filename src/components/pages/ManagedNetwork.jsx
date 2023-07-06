import React from "react";
import fd360networkservices from "../../assets/services/fd360networkservices.jpg";
import fd360networkservices2 from "../../assets/services/fd360networkservices2.jpg";
import fd360networkservices3 from "../../assets/services/fd360networkservices3.jpg";
import Nav from "../navbar/Nav";
import { motion } from "framer-motion";
import Footer from "../Footer";
import "./styles.css";

const ManagedNetwork = () => {
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
      <Nav />
      <motion.div
        className="flex flex-col items-center w-full bg-gradient-to-t from-[#d2ffff] to-[#0694c6] rounded-lg"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="relative w-full h-[600px]">
          <img
            src={fd360networkservices}
            alt="Communication Services"
            className="object-cover w-full h-full"
          />

          <div className="absolute inset-0  flex items-center justify-center">
            <div className=" text-center">
              <motion.h1
                className="font-bold mb-4 md:text-6xl text-4xl text-green-400 "
                id="title"
                initial={{ opacity: 0, x: "-100vh" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
              >
                Managed IT Network Services
              </motion.h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center my-10 h-full">
          <div className="flex-1">
            <img
              src={fd360networkservices2}
              alt="fd360 nerwork services photo"
              className=" rounded-lg"
            />
          </div>
          <motion.div
            className="flex-1 text-center md:my-5 md:mx-5"
            initial={{ opacity: 0, x: "300vh" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          >
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="text-3xl font-bold mb-4"
            >
              Our Mission
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="text-lg"
            >
              Having Future Digital 360 as your IT partner will give you peace
              of mind knowing your network is being proactively monitored 24/7
              and we help eliminate computer problems before they occur.
              Providing customers with fully managed and secure network services
              and infrastructure.
            </motion.p>
          </motion.div>
          <div className="flex-1">
            <img
              src={fd360networkservices3}
              alt="fd360 nerwork services photo"
              className="rounded-lg"
            />
          </div>
        </div>
        {/* <div
          className="md:h-[790px] h-96 bg-cover bg-center w-full "
          style={{ backgroundImage: `url(${fd360networkservices2})` }}
        ></div> */}

        {/* Second big image */}
        {/* <div
          className="md:h-[790px] h-96 bg-cover bg-center w-full"
          style={{ backgroundImage: `url(${fd360networkservices3})` }}
        ></div> */}

        {/* First big image */}
        {/* <div className="flex">
          <div>
            <img src={fd360networkservices2} />
          </div>
          <div>
            <img src={fd360networkservices3} />
          </div>
        </div> */}
        {/* Titles and descriptions */}
        <div className="bg-gradient-to-t from-[#d2ffff] to-[#0694c6] rounded-lg py-8 px-4 font-custom">
          <div className="w-full mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">STANDARD FEATURES</h2>
            <div className="flex flex-col md:flex-row justify-center">
              <div className="md:w-full p-4 ">
                <motion.p
                  className="text-lg"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                  }}
                >
                  Total network security ensures you are protected from threats
                  and able to manage where users spend their time on the
                  internet.
                </motion.p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-5">
              <div className=" bg-white bg-opacity-50 bg-clip-padding backdrop-opacity-50 rounded-lg shadow-lg p-4">
                <motion.h2
                  className="text-black mt-4 md:text-3xl font-bold "
                  initial={{ opacity: 0, x: "300vh" }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2 }}
                >
                  LIFE CYCLE MANAGEMENT
                </motion.h2>
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
                  Refresh your hardware with the latest technology improves
                  reliability and performance that keeps you ahead of the
                  technology curve.
                </motion.p>
              </div>
              <div className=" bg-white  bg-opacity-50 bg-clip-padding backdrop-opacity-50 rounded-lg shadow-lg p-4">
                <motion.h2
                  className="text-black mt-4 md:text-3xl font-bold"
                  initial={{ opacity: 0, x: "300vh" }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2 }}
                >
                  REMOTE MONITORING
                </motion.h2>
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
                  In-dept health performance monitoring of all the elements of
                  your business IT assets.
                </motion.p>
              </div>
              <div className="bg-white  bg-opacity-50 bg-clip-padding backdrop-opacity-50 rounded-lg shadow-lg p-4">
                <motion.h2
                  className="text-black mt-4 md:text-3xl font-bold"
                  initial={{ opacity: 0, x: "300vh" }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2 }}
                >
                  END POINT SECURITY
                </motion.h2>
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
                  Total desktop security solution including antivirus, anti
                  malware and hosted intrusion protection.
                </motion.p>
              </div>
              <div className="bg-white  bg-opacity-50 bg-clip-padding backdrop-opacity-50 rounded-lg shadow-lg p-4">
                <motion.h2
                  className="text-black mt-4 md:text-3xl font-bold"
                  initial={{ opacity: 0, x: "300vh" }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2 }}
                >
                  EMAIL SECURITY
                </motion.h2>
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
                  Service offers perimeter protection preventing unwanted email
                  and spam from reaching users network.
                </motion.p>
              </div>
              <div className="bg-white  bg-opacity-50 bg-clip-padding backdrop-opacity-50 rounded-lg shadow-lg p-4">
                <motion.h2
                  className="text-black mt-4 md:text-3xl font-bold"
                  initial={{ opacity: 0, x: "300vh" }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2 }}
                >
                  BACK UP & DISASTER RECOVERY
                </motion.h2>
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
                  Ensures business continuity through schedule backup of
                  critical data and restoration in the event of data loss.
                </motion.p>
              </div>
              <div className="bg-white  bg-opacity-50 bg-clip-padding backdrop-opacity-50 rounded-lg shadow-lg p-4">
                <motion.h2
                  className="text-black mt-4 md:text-3xl font-bold"
                  initial={{ opacity: 0, x: "300vh" }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2 }}
                >
                  REMOTE REMEDIATION
                </motion.h2>
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
                  Technicians work remotely on your network to resolve system
                  issues.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ManagedNetwork;
