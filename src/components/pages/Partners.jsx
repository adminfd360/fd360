import React from "react";
import Nav from "../navbar/Nav";
import fd360_partners from "../../assets/partners/fd360_partners.jpg";
import { motion } from "framer-motion";
import yealink from "../../assets/partners/yealink.png";
import yeastar from "../../assets/partners/yeastar.png";
import lenovo from "../../assets/partners/lenovo.png";

const Partners = () => {
  return (
    <>
      <Nav />
      <div className="relative max-w-full h-96 ">
        <img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          src={fd360_partners}
          alt="future digital 360 partners"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0  flex items-center justify-center">
          <div className="text-white text-center">
            <motion.h1
              className="font-bold mb-4 text-6xl text-green-400 "
              id="title"
              initial={{ opacity: 0, x: "-100vh" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
            >
              Partners
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
      <div className="bg-gradient-to-b from-[#d2ffff] to-[#0694c6] rounded-lg shadow-lg p-8 text-center">
        <motion.h2
          className="text-3xl font-bold mb-4 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          Our Partners
        </motion.h2>
        <motion.div
          className="md:flex inline-block items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <img
            src={yealink}
            alt="yealink logo"
            className=" object-contain p-5 max-w-full"
          />
          <img
            src={yeastar}
            alt="yeastar logo"
            className=" object-contain p-5 max-w-full"
          />
          <img
            src={lenovo}
            alt="lenovo logo"
            className=" object-contain p-5 max-w-full"
          />
        </motion.div>
      </div>
    </>
  );
};

export default Partners;
