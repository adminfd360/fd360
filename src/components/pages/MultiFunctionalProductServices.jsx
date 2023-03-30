import React from "react";
import fd360multifunctionalproduct from "../../assets/services/fd360multifunctionalproduct.jpg";

import { motion } from "framer-motion";
import Nav from "../navbar/Nav";

const MultiFunctionalProductServices = () => {
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
        <div className="relative w-full h-[600px]">
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
            <div className="text-green-700 text-center font-custom">
              <motion.h1
                className="text-4xl font-bold mb-4"
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
        <div className="bg-gray-100 py-8 px-4 font-custom flex justify-center">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, x: "1300vh" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          >
            <h1 className="text-3xl font-bold">
              Our product brand is based on your requirements, we put you in
              charge allowing for an ethical, honest discussion on your needs.
              We provide a single low-cost solution, covering all your office
              equipment requirements.
            </h1>
            <h2 className="text-2xl mt-10">
              A multifunction printer (MFP) is a piece of office equipment that
              <span className="font-bold">
                {" "}
                serves as the centralized hub where all printing, copying,
                faxing, and scanning occurs.
              </span>{" "}
              Most MFPs also provide finishing options including, stapling,
              folding, hole punching, and booklet making.
            </h2>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default MultiFunctionalProductServices;
