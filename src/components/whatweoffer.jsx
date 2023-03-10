import React, { useState } from "react";
import classnames from "classnames";
import futuredigital360bg from "../assets/fd360-background.jpg";
import { motion } from "framer-motion";

const WhatWeOffer = () => {
  const [activeTab, setActiveTab] = useState("Our Mission");

  const toggleTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="flex flex-col  text-white justify-center items-center bg-cover bg-center bg-[#01040c]  font-mono">
      <div className="md:w-1/3">
        <h1 className="text-center md:text-2xl text-lg mb-5">What We Offer</h1>
        <div className="flex flex-row  justify-center items-center border-b md:border-b-0">
          <button
            className={classnames(
              "text-lg md:text-xl px-4 py-2 md:py-4 font-medium focus:outline-none",
              {
                "bg-gray-500 text-white rounded-xl":
                  activeTab === "Our Mission",
                "text-white hover:text-gray-800 hover:bg-gray-100 hover:rounded-xl":
                  activeTab !== "Our Mission",
              }
            )}
            onClick={() => toggleTab("Our Mission")}
          >
            Our Mission
          </button>
          <button
            className={classnames(
              "text-lg md:text-xl px-4 py-2 md:py-4 font-medium focus:outline-none",
              {
                "bg-gray-500 text-white rounded-xl": activeTab === "Our Vision",
                "text-white hover:text-gray-800 hover:bg-gray-100 hover:rounded-xl":
                  activeTab !== "Our Vision",
              }
            )}
            onClick={() => toggleTab("Our Vision")}
          >
            Our Vision
          </button>
          <button
            className={classnames(
              "text-lg md:text-xl px-4 py-2 md:py-4 font-medium focus:outline-none",
              {
                "bg-gray-500 text-white rounded-xl":
                  activeTab === "Our Commitment",
                "text-white hover:text-gray-800 hover:bg-gray-100 hover:rounded-xl":
                  activeTab !== "Our Commitment",
              }
            )}
            onClick={() => toggleTab("Our Commitment")}
          >
            Our Commitment
          </button>
        </div>
      </div>
      <div className="md:w-2/3 p-4">
        {activeTab === "Our Mission" && (
          <motion.p
            className="text-lg md:text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our mission is to provide the highest quality products and services
            to our customers, while maintaining the highest standards of
            professionalism, ethics, and social responsibility.
          </motion.p>
        )}
        {activeTab === "Our Vision" && (
          <p className="text-lg md:text-xl">
            Our vision is to be the leading provider of innovative and
            sustainable solutions in our industry, while creating value for our
            stakeholders and contributing to the communities we serve.
          </p>
        )}
        {activeTab === "Our Commitment" && (
          <motion.p
            className="text-lg md:text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our commitment is to continuously improve our processes, products,
            and services to meet the evolving needs of our customers, and to
            foster a culture of innovation, collaboration, and diversity in our
            organization.
          </motion.p>
        )}
      </div>
      <div className="p-5 md:w-1/2">
        <h1 className="md:text-2xl text-lg text-center mb-5">Our Solution</h1>

        <motion.p
          className="md:text-xl text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Over the past three decades, Future Digital 360 has vetted out
          partners that are industry leaders in their respective field resulting
          in superior client satisfaction.
        </motion.p>
      </div>
    </div>
  );
};

export default WhatWeOffer;
