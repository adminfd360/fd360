import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import fd360support from "../../assets/fd360support.jpg";
import Nav from "../navbar/Nav";
import fd360logo from "../../assets/FD360-with-website.png";
import fd360veteran from "../../assets/fd360Veteranandownedlogo.png";
import fd360faq from "../../assets/fd360faq.png";
import FAQ from "./FAQ";
import PDF from "./pdf";
import { MdList } from "react-icons/md";
import "./styles.css";

const ifax = [
  {
    title: "Account, Team and Number Setup and Configuration",
    articles: 16,
    link: "ifax-account",
  },
  {
    title: "Navigation",
    articles: 2,
    link: "ifax-navigation",
  },
  {
    title: "Processing Received Faxes",
    articles: 4,
    link: "ifax-processing-received-faxes",
  },
  {
    title: "Sending Faxes",
    articles: 13,
    link: "ifax-sending-faxes",
  },
];
const Support = () => {
  return (
    <>
      <div>
        <Nav />
        <div className="relative w-full h-[600px] ">
          <motion.img
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
              className="w-full max-w-[500px] m-auto"
              initial={{ opacity: 0, x: "300vh" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
            />
          </div>
          <div className="flex-row items-center justify-center w-full px-4 lg:px-10 mt-10">
            <h1 className="md:text-3xl text-xl font-bold mb-4 text-center">
              iFAX FAQs
            </h1>
            <div className="my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {ifax.map((item) => (
                <Link
                  key={item.title}
                  to={item.link}
                  className="flex justify-center items-center flex-col p-4 bg-white rounded-lg"
                >
                  <MdList size="60" />
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <p className="mt-6">{item.articles} Articles</p>
                  <p className="text-green-400">Show all</p>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex-row items-center justify-center mt-16">
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
