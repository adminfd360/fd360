import React from "react";
import Nav from "../navbar/Nav";
import fd360_partners from "../../assets/partners/fd360_partners.jpg";
import { motion } from "framer-motion";
import yealink from "../../assets/partners/yealink.png";
import yeastar from "../../assets/partners/yeastar.png";
import lenovo from "../../assets/partners/lenovo.png";
import google from "../../assets/partners/google-partner.png";
import lexmark from "../../assets/partners/lexmark_black1.png";
import microsoft from '../../assets/partners/ms-logo.webp'

const Partners = () => {
  return (
    <>
      <Nav />
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          src={fd360_partners}
          alt="future digital 360 partners"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center">
            <motion.h1
              className="font-bold mb-4 text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-green-400"
              id="title"
              initial={{ opacity: 0, x: "-100vh" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
            >
              Partners
            </motion.h1>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#d2ffff] to-[#0694c6] rounded-lg shadow-lg p-4 md:p-8 text-center">
        <motion.h2
          className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-4"
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
          className="flex flex-wrap justify-center items-center gap-10 lg:gap-5"
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
            className="object-contain p-2 md:p-3 lg:p-4 xl:p-5 max-w-full"
          />
          <img
            src={yeastar}
            alt="yeastar logo"
            className="object-contain p-2 md:p-3 lg:p-4 xl:p-5 max-w-full"
          />
          <img
            src={lenovo}
            alt="lenovo logo"
            className="object-contain p-2 md:p-3 lg:p-4 xl:p-5 max-w-full"
          />
          <img
            src={google}
            alt="google partner logo"
            className="object-contain p-2 md:p-3 lg:p-4 xl:p-5 w-60"
          />
          <img
            src={lexmark}
            alt="lexmark partner logo"
            className="object-contain p-2 md:p-3 lg:p-4 xl:p-5 w-60"
          />
          <img
            src={microsoft}
            alt="ms partner logo"
            className="object-contain p-2 md:p-3 lg:p-4 xl:p-5 w-60"
          />
        </motion.div>
      </div>
    </>
  );
};

export default Partners;
