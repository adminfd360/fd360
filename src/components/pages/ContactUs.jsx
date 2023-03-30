import React from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import fd360contactus from "../../assets/fd360-contactus.jpg";
import Nav from "../navbar/Nav";
import { motion } from "framer-motion";
import fd360logo from "../../assets/FD360-with-website.png";
import fd360veteran from "../../assets/fd360Veteranandownedlogo.png";
import Footer from "../Footer";

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
  };

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
        className="bg-gray-200 font-custom"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="relative w-full h-96 mb-8">
          <img
            src={fd360contactus}
            alt="future digital 360 contact us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0  flex items-center justify-center">
            <div className="text-red-500 text-center">
              <motion.h1
                className="text-4xl font-bold mb-4"
                initial={{ opacity: 0, x: "-100vh" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
              >
                Contact Us
              </motion.h1>
              <motion.div
                className="flex"
                initial={{ opacity: 0, x: "100vh" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
              >
                <FiPhone className="mr-2" />
                <a href="tel:855-553-3360">
                  <p className="mr-5">855-55-FD360 (3-3360)</p>
                </a>
                <FiMail className="mr-2" />
                <a href="mailto:info@futuredigital360.com" target="_blank">
                  <p>info@futuredigital360.com</p>
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="flex justify-center my-8">
          <div className="flex items-center justify-center mx-4">
            <motion.img
              src={fd360logo}
              alt="fd360 logo"
              className=" h-12"
              initial={{ opacity: 0, x: "300vh" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
            />
          </div>
          <div className="flex items-center justify-center mx-4">
            <motion.img
              src={fd360veteran}
              alt="fd360 veteran"
              className=" h-12"
              initial={{ opacity: 0, x: "-300vh" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <div className="flex items-center justify-center mb-4">
            <FaMapMarkerAlt size={24} />
            <p className="ml-2">
              8790 E Via De Ventura
              <br />
              Unit 5149
              <br />
              Scottsdale AZ 85258
            </p>
          </div>
          <div className="flex items-center justify-center mb-4">
            <FiPhone size={24} />
            <p className="ml-2">
              Local number 480.809.6328
              <br />
              855-55-FD360 (3-3360)
            </p>
          </div>
          <div className="flex items-center justify-center mb-4">
            <FiMail size={24} />
            <p className="ml-2">contact@company.com</p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <label htmlFor="name" className="my-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full p-2 mb-4 border border-gray-400 rounded-md"
            />
            <label htmlFor="email" className="my-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full p-2 mb-4 border border-gray-400 rounded-md"
            />
            <label htmlFor="message" className="my-2">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              required
              className="w-full p-2 mb-4 border border-gray-400 rounded-md"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5"
            >
              Submit
            </button>
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default ContactUs;
