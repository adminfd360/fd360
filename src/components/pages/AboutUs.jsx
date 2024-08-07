import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import fd360about from "../../assets/fd360-aboutus.jpg";
import FD360logo from "../../assets/FD360-with-website.png";
import FD360veteran from "../../assets/fd360Veteranandownedlogo.png";
import { motion } from "framer-motion";
import Nav from "../navbar/Nav";
import Team from "../Team";
import "./styles.css";

const AboutUs = () => {
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
        className="flex flex-col items-center justify-center bg-gray-200 "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* Top image section */}
        <div className="relative w-full h-[600px]">
          <img
            src={fd360about}
            alt="About Us"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0  flex items-center justify-center">
            <div className=" text-center" id="title">
              <motion.h1
                className="md:text-6xl text-4xl mb-4 text-green-400 font-bold"
                initial={{ opacity: 0, x: "-100vh" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
              >
                About Us
              </motion.h1>
              <motion.div
                className="flex justify-center items-center"
                initial={{ opacity: 0, x: "-100vh" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2.5 }}
              >
                <a
                  href="https://www.facebook.com/FutureDigital360"
                  target="_blank"
                >
                  <FaFacebook className="text-2xl mr-4 text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/company/futuredigital360/"
                  target="_blank"
                >
                  <FaLinkedin className="text-2xl text-white" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Logos section */}
        <div className="flex justify-center w-full p-5 bg-gradient-to-r from-[#d2ffff] to-[#0694c6]">
          <motion.img
            src={FD360logo}
            alt="FD360logo"
            className="h-24 mx-4"
            initial={{ opacity: 0, x: "300vh" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          />
          <motion.img
            src={FD360veteran}
            alt="FD360veteran"
            className="h-24 mx-4"
            initial={{ opacity: 0, x: "-300vh" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          />
        </div>

        {/* Mission, vision, commitment section */}

        {/* Meet our leaders section */}

        {/* Company overview section */}
        <div className="w-full bg-gradient-to-r from-[#d2ffff] to-[#0694c6] p-8 mb-8">
          <h2 className="text-3xl text-center font-bold mb-4">
            Company Overview
          </h2>
          <motion.p
            className="text-lg text-start"
            initial={{ opacity: 0, x: "-1000vh" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          >
            Future Digital 360 has been in the technology business since 1986
            and started as an Office Equipment Dealer. The founders of our
            company knew that for a small locally owned business to compete
            against national giants it would have to provide reliable equipment
            and extraordinary service. We provide all facets of technology for
            any business size including Managed Network and IT services, Web
            Development, Cyber Security, Communication Solutions and
            Multifunctional Products. Along with our extensive suite of
            scanning, printing and copying equipment both B/W and color our
            offerings include, follow-up maintenance, supplies and support. We
            worked hard. We grew. We formed a sales department in 2001, and
            became Authorized Dealers for Lexmark International and Hewlett
            Packard, two of the most established, reliable, customer-oriented
            companies in the office equipment industry. It’s a trend that
            continues today – partnering with the best. <br />
            <br />
            In October 2002 Jim Sauerhoefer a USAF Veteran purchased the
            majority shares of the corporation and headquartered in the
            Scottsdale business airpark community, modern warehousing for spare
            parts, and complete lab for testing along with a demo facility were
            created to accommodate and showcase the increasingly complex and
            sophisticated emerging technologies and how the interact with each
            other. We renewed our focus on Customer Care through implementation
            of automated Service Dispatching system, Order notification, and our
            innovative and comprehensive Care plans. In December 2004 Future
            Digital 360 acquired Budget Business Systems, a Tempe, Arizona
            office supply dealer who strengthened the corporation with
            purchasing power to continue our quest to build strong corporation
            partnerships throughout the Western United States. In October 2005
            Future Digital 360 acquired Applied Copier Technologies, a Gilbert
            Arizona office equipment provider for the east valley extending our
            markets all the way to Tucson. In September 2010 Future Digital 360
            expanded to offer a full range of web service, including hosting
            advanced design and management of websites. We understand the
            importance of a trusted partner and ensure our clients are in
            control of their worldwide presence and information. In October 2012
            Future Digital 360 became an FCC authorized telephony company.{" "}
            <br />
            <br />
            Our owner as a military veteran he understood the intelligence world
            well. Our communication systems are focused on cyber and
            communication security. We provide both on-premise and cloud-based
            telephone systems and service, giving our customers the business
            resources, they need to grow and become successful. As we exist
            today, Future Digital 360 is the service organization with decades
            of experience and customer satisfaction. As a Veteran owned
            business, we have built our company on the highest of ethical and
            full disclosure standards. Today we have the capability to install
            an advanced office system for any size business, or implement a
            cloud-based system and connect multiple offices around the world. We
            know our industry inside and out and offer the best products,
            practices and services in the business. Give us a call at
            480-809-6328 and find out for yourself.
          </motion.p>
          <div className="flex justify-center items-center mt-4">
            <FiChevronDown className="text-2xl animate-bounce" />
          </div>
        </div>
        <div className="w-full bg-gradient-to-r from-blue-500 via-green-500 to-blue-400 p-8">
          <Team />
        </div>
      </motion.div>
    </>
  );
};

export default AboutUs;
