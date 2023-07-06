import React from "react";
import { motion } from "framer-motion";
import fd360support from "../../assets/fd360support.jpg";
import Nav from "../navbar/Nav";
import fd360logo from "../../assets/FD360-with-website.png";
import fd360veteran from "../../assets/fd360Veteranandownedlogo.png";
import fd360faq from "../../assets/fd360faq.png";
import FAQ from "./FAQ";
import PDF from "./pdf";
import "./styles.css";
const Support = () => {
  return (
    <>
      <div>
        <Nav />
        <div className="relative w-full h-[600px] ">
          <img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            src={fd360support}
            alt="fd360 Support"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0  flex items-center justify-center">
            <div className="text-green-400 text-center">
              <motion.h1
                className="font-bold mb-4 md:text-6xl text-4xl text-green-400 "
                id="title"
                initial={{ opacity: 0, x: "-100vh" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
              >
                Support
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
        <div className="bg-gradient-to-r from-[#d2ffff] to-[#0694c6] py-8 px-4 font-custom  md:flex ">
          <div className="md:max-w-3xl mx-auto text-center">
            <motion.h1
              className="md:text-3xl text-xl font-bold mb-11"
              initial={{ opacity: 0, x: "300vh" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
            >
              For Support Contact Our World Class Support Team 24/7, Email us at
              support@futuredigital360.com
            </motion.h1>
            <motion.div
              className="md:flex flex items-center justify-center"
              initial={{ opacity: 0, x: "-300vh" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
            >
              <img
                src={fd360logo}
                alt="fd360 logo"
                className="h-24 md:mr-10 mb-5"
              />
            </motion.div>
          </div>
          <div className="md:max-w-3xl mx-auto text-center ">
            <motion.h1
              className="md:text-3xl text-xl font-bold mb-4"
              initial={{ opacity: 0, x: "-300vh" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
            >
              Future Digital 360 is a Veteran owned Business that provides
              Cybersecurity, Managed IT, Web services, Digital Copiers &
              Telecommunication Services to corporate America.
            </motion.h1>
            <motion.div
              className="md:flex flex items-center justify-center"
              initial={{ opacity: 0, x: "300vh" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
            >
              <img
                src={fd360veteran}
                alt="fd360 veteran owned"
                className="h-24"
              />
            </motion.div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#d2ffff] to-[#0694c6] font-custom md:flex-row justify-center items-center">
          <div className="p-5 flex-wrap w-1/2 mx-auto">
            <motion.img
              src={fd360faq}
              alt="future digital 360 FAQ"
              className="w-full"
              initial={{ opacity: 0, x: "300vh" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
            />
          </div>
          <div className="flex-row items-center justify-center ">
            <h1 className="md:text-3xl text-xl font-bold mb-4 text-center">
              Most Popular FAQs
            </h1>
            <FAQ />
          </div>
        </div>

        <PDF />
      </div>
    </>
  );
};

export default Support;
