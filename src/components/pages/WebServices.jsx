import React from "react";
import Nav from "../navbar/Nav";
import { motion } from "framer-motion";
import fd360webservices from "../../assets/services/fd360webservices.jpg";
import fd360webdesign from "../../assets/services/fd360webdesign.png";
import fd360ssl from "../../assets/services/fd360ssl.png";
import fd360domain from "../../assets/services/fd360domain.png";
import fd360hosting from "../../assets/services/fd360hosting.png";
import fd360management from "../../assets/services/fd360management.png";
import fd360seo from "../../assets/services/fd360seo.png";
import Footer from "../Footer";

const WebServices = () => {
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
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="relative w-full h-96 ">
          <img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            src={fd360webservices}
            alt="Communication Services"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0  flex items-center justify-center">
            <div className="text-white text-center font-custom">
              <motion.h1
                className="text-4xl font-bold mb-4"
                initial={{ opacity: 0, x: "-100vh" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
              >
                Web Services
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
        <div className="bg-gray-100 py-8 px-4 font-custom mb-10 flex justify-center">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, x: "300vh" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          >
            <h1 className="text-3xl font-bold mb-4">Web Design</h1>
            <img src={fd360webdesign} alt="fd360 web design" />
          </motion.div>
        </div>
        <div className="bg-gray-100 py-8 px-4 font-custom">
          <div className="max-w-full mx-auto text-center">
            <div className="flex flex-col md:flex-row justify-center">
              <div className="md:w-full p-4">
                <p className="text-3xl">
                  Using our custom-built approach, we design, develop,
                  implement, ensure quality assurance, maintain, and support a
                  website from scratch.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5 w-full">
              <div className="bg-white rounded-lg shadow-lg p-4 ">
                <motion.h1
                  className="text-gray-700 mt-4 font-custom text-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  SSL
                  <br />
                  Our web services include secured connection
                </motion.h1>
                <motion.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  src={fd360ssl}
                  alt="fd360-ssl"
                  className="mx-auto"
                />
              </div>
              <div className="bg-white rounded-lg shadow-lg p-4 ">
                <motion.h1
                  className="text-gray-700 mt-4 font-custom text-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Domain Name
                  <br />
                  We can help register your name
                </motion.h1>
                <motion.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  src={fd360domain}
                  alt="fd360-domain-name"
                  className="mx-auto"
                />
              </div>
              <div className="bg-white rounded-lg shadow-lg p-4 ">
                <motion.h1
                  className="text-gray-700 mt-4 font-custom text-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Hosting
                  <br />
                  We offer hosting services
                </motion.h1>
                <motion.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  src={fd360hosting}
                  alt="fd360-hosting"
                  className="mx-auto"
                />
              </div>
              <div className="bg-white rounded-lg shadow-lg p-4 ">
                <motion.h1
                  className="text-gray-700 mt-4 font-custom text-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Management
                  <br />
                  We make sure the “back end” stuff going that keeps your
                  website live, actually viewable on the internet
                </motion.h1>
                <motion.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  src={fd360management}
                  alt="fd360-management"
                  className="mx-auto"
                />
              </div>
            </div>
            <div className="grid max-w-3xl grid-cols-1 mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-4 ">
                <motion.h1
                  className="text-gray-700 mt-4 font-custom text-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  SEO
                  <br />
                  Search engine optimization involves a combination of on-page
                  (maintenance-level) and off-page (management-level) tasks to
                  improve/maintain your ranking performance. SEO upkeep may
                  include:
                  <br />
                  <p className="text-left">
                    • Adding keywords
                    <br />• Adding or revising meta data for all on-page
                    elements, including the page itself and all images and
                    videos
                    <br />• Implementing schema to ensure meta data and element
                    and/or page rendering conforms to search engine-preferred
                    data structures
                    <br />• Cultivating quality inbound links to your website
                  </p>
                </motion.h1>
                <motion.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  src={fd360seo}
                  alt="fd360-seo"
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default WebServices;
