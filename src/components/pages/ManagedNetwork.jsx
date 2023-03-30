import React from "react";
import fd360networkservices from "../../assets/services/fd360networkservices.jpg";
import fd360networkservices2 from "../../assets/services/fd360networkservices2.jpg";
import fd360networkservices3 from "../../assets/services/fd360networkservices3.jpg";
import Nav from "../navbar/Nav";
import { motion } from "framer-motion";
import Footer from "../Footer";

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
        className="flex flex-col items-center w-full bg-gray-200"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="relative w-full h-96 mb-8">
          <img
            src={fd360networkservices}
            alt="Communication Services"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0  flex items-center justify-center">
            <div className="text-black text-center font-custom">
              <motion.h1
                className="text-4xl font-bold mb-4"
                initial={{ opacity: 0, x: "-100vh" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
              >
                Managed Network Services
              </motion.h1>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 py-8 px-4 font-custom mb-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, x: "300vh" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          >
            <h1 className="text-3xl font-bold mb-4">Our Mission</h1>
            <p className="text-lg">
              Having Future Digital 360 as your IT partner will give you peace
              of mind knowing your network is being proactively monitored 24/7
              and we help eliminate computer problems before they occur.
              Providing customers with fully managed and secure network services
              and infrastructure.
            </p>
          </motion.div>
        </div>

        <div
          className="md:h-[790px] h-96 bg-cover bg-center w-full mb-10"
          style={{ backgroundImage: `url(${fd360networkservices2})` }}
        ></div>

        {/* Second big image */}
        <div
          className="md:h-[790px] h-96 bg-cover bg-center w-full"
          style={{ backgroundImage: `url(${fd360networkservices3})` }}
        ></div>

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
        <div className="bg-gray-100 py-8 px-4 font-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">STANDARD FEATURES</h2>
            <div className="flex flex-col md:flex-row justify-center">
              <div className="md:w-full p-4">
                <p className="text-lg">
                  Total network security ensures you are protected from threats
                  and able to manage where users spend their time on the
                  internet.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-5">
              <div className="bg-white rounded-lg shadow-lg p-4">
                <motion.h1
                  className="text-gray-700 mt-4 font-custom text-2xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  LIFE CYCLE MANAGEMENT
                </motion.h1>
                <p className="text-gray-700 mt-4 font-custom">
                  Refresh your hardware with the latest technology improves
                  reliability and performance that keeps you ahead of the
                  technology curve.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-4">
                <motion.h1
                  className="text-gray-700 mt-4 font-custom text-2xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  REMOTE MONITORING
                </motion.h1>
                <p className="text-gray-700 mt-4 font-custom">
                  In-dept health performance monitoring of all the elements of
                  your business IT assets.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-4">
                <motion.h1
                  className="text-gray-700 mt-4 font-custom text-2xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  END POINT SECURITY
                </motion.h1>
                <p className="text-gray-700 mt-4 font-custom">
                  Total desktop security solution including antivirus, anti
                  malware and hosted intrusion protection.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-4">
                <motion.h1
                  className="text-gray-700 mt-4 font-custom text-2xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  EMAIL FILTERING
                </motion.h1>
                <p className="text-gray-700 mt-4 font-custom">
                  Service offers perimeter protection preventing unwanted email
                  and spam from reaching users network.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-4">
                <motion.h1
                  className="text-gray-700 mt-4 font-custom text-2xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  BACK UP & DISASTER RECOVERY
                </motion.h1>
                <p className="text-gray-700 mt-4 font-custom">
                  Ensures business continuity through schedule backup of
                  critical data and restoration in the event of data loss.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-4">
                <motion.h1
                  className="text-gray-700 mt-4 font-custom text-2xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  REMOTE REMEDIATION
                </motion.h1>
                <p className="text-gray-700 mt-4 font-custom">
                  Technicians work remotely on your network to resolve system
                  issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ManagedNetwork;
