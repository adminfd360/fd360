import React, { useRef, useState } from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import fd360contactus from "../../assets/fd360-contactus.jpg";
import Nav from "../navbar/Nav";
import { motion } from "framer-motion";
import fd360logo from "../../assets/FD360-with-website.png";
import fd360veteran from "../../assets/fd360Veteranandownedlogo.png";
import Footer from "../Footer";
import FAQ from "./FAQ";
import emailjs from "@emailjs/browser";
import "./styles.css";

const ContactUs = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_scn7kmj",
        "template_t4ilkb7",
        {
          from_name: form.name,
          to_name: "Future Digital 360",
          from_email: form.email,
          to_email: "info@futuredigital360.com",
          message: form.message,
        },
        "kIFlBerOhBTDlxfoC"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thank you for reaching out! We'll get back to you as soon as possible."
          );
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          alert("Something went wrong. Please try again later.");
          console.log(error);
        }
      );
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
        className="bg-gray-200"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="relative w-full h-[600px]">
          <img
            src={fd360contactus}
            alt="future digital 360 contact us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0  flex items-center justify-center">
            <div className="text-green-400 text-center">
              <motion.h1
                className="md:text-6xl text-4xl font-bold mb-10"
                id="title"
                initial={{ opacity: 0, x: "-100vh" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
              >
                Contact Us
              </motion.h1>
              <motion.div
                className="md:flex text-black font-bold mt-4 justify-center items-center"
                initial={{ opacity: 0, x: "100vh" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
              >
                <div className="flex text-black font-bold mt-4 justify-center items-center">
                  <FiPhone className="mr-2" />
                  <a href="tel:855-553-3360">
                    <p className="mr-5">855-55-FD360 (3-3360)</p>
                  </a>
                </div>
                <div className="flex text-black font-bold mt-4 justify-center items-center">
                  <FiMail className="mr-2 " />
                  <a href="mailto:info@futuredigital360.com" target="_blank">
                    <p>info@futuredigital360.com</p>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="flex justify-center p-5 bg-gradient-to-r from-[#d2ffff] to-[#0694c6]">
          <div className="flex items-center justify-center mx-4">
            <motion.img
              src={fd360logo}
              alt="fd360 logo"
              className=" h-24"
              initial={{ opacity: 0, x: "300vh" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
            />
          </div>
          <div className="flex items-center justify-center mx-4">
            <motion.img
              src={fd360veteran}
              alt="fd360 veteran"
              className=" h-24"
              initial={{ opacity: 0, x: "-300vh" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-gradient-to-r from-[#d2ffff] to-[#0694c6]">
          <div className="flex items-center justify-center mb-4">
            <FaMapMarkerAlt size={24} />
            <p className="ml-2">
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
          <a href="mailto:info@futuredigital360.com" target="_blank">
            <div className="flex items-center justify-center mb-4">
              <FiMail size={24} />
              <p className="ml-2">info@futuredigital360.com</p>
            </div>
          </a>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col items-center w-1/2"
          >
            <label className="my-2">Name:</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full p-2 mb-4 border border-gray-400 rounded-md"
            />
            <label htmlFor="email" className="my-2">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full p-2 mb-4 border border-gray-400 rounded-md"
            />
            <label htmlFor="message" className="my-2">
              Message:
            </label>
            <textarea
              name="message"
              rows="7"
              value={form.message}
              onChange={handleChange}
              placeholder="Enter your message"
              required
              className="w-full p-2 mb-4 border border-gray-400 rounded-md"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default ContactUs;
