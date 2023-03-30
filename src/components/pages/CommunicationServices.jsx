import React from "react";
import fd360commsservices from "../../assets/services/fd360communicationservices.jpg";
import Nav from "../navbar/Nav";
import fd360cloudpbx from "../../assets/services/fd360cloudpbx.jpg";
import fd360onpremise from "../../assets/services/fd360onpremisepbx.jpg";
import fd360t53w from "../../assets/services/fd360t53w.jpg";
import fd360t54w from "../../assets/services/fd360t54w.jpg";
import fd360t53 from "../../assets/services/fd360t53.jpg";
import fd360cp925 from "../../assets/services/fd360cp925.png";
import fd360W77P from "../../assets/services/fd360W77P.png";
import { motion } from "framer-motion";
import Footer from "../Footer";

const CommunicationServices = () => {
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
        className="flex flex-col items-center bg-gray-200"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="relative w-full h-96 mb-8">
          <img
            src={fd360commsservices}
            alt="Communication Services"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0  flex items-center justify-center">
            <div className="text-black text-center font-custom">
              <motion.h1
                className="text-4xl font-bold mb-4"
                initial={{ opacity: 0, x: "-100vh" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
              >
                Communication Services
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
        <motion.div
          className="container mx-auto py-10"
          initial={{ opacity: 0, x: "300vh" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h1 className="text-gray-700 mt-4 font-custom text-2xl">
                Cloud PBX
              </h1>
              <img
                src={fd360cloudpbx}
                alt="FD360 cloud PBX"
                className="w-full"
              />
              <p className="text-gray-700 mt-4 font-custom">
                <span className="font-bold font-custom">Hightlights:</span>{" "}
                <br />
                • Complete enterprise class PBX and ACD capabilities <br /> •
                Full support for Polycom desktop and conference phones
                <br /> • Delivered as a fully managed cloud service
                <br /> Whether upgrading from an existing phone system or
                deploying as a first time customer, FD360’s Private Cloud will
                provide an easy to manage solution that reduces communications
                costs.
                <br /> <span className="font-bold">Benefits:</span> <br /> •
                Advanced business-class PBX and contact center feature set
                <br /> • Secure dedicated virtual server, managed 24×7
                <br /> • Eliminate upfront CAPEX with no PBX hardware to buy
                <br /> • Reduce IT and OPEX with no on PBX to maintain and or
                upgrade
                <br /> • Lower communications costs with integrated SIP trunks
                (vs. on premise systems)
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h1 className="text-gray-700 mt-4 font-custom text-2xl">
                On-Premise PBX
              </h1>
              <img
                src={fd360onpremise}
                alt="FD360 on premise PBX"
                className="w-full"
              />
              <p className="text-gray-700 mt-4 font-custom">
                <span className="font-bold font-custom">Hightlights:</span>{" "}
                <br />
                • All software business communications solution <br /> •
                Complete enterprise class PBX and ACD capabilities
                <br /> • Full support for Polycom desktop and conference phones
                <br /> <span className="font-bold">Benefits:</span> <br /> •
                Advanced business-class PBX and contact center feature set
                <br /> • Reduces OPEX by leveraging existing IT infrastructure
                <br /> • Able to lower communications costs with native SIP
                trunk support
                <br /> • Flexible upfront or monthly subscription licensing
                models designed to fit any budget
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 justify-items-center items-center">
            <h1 className="text-gray-700 mt-4 font-custom text-2xl">
              Popular Phones
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h1 className="text-gray-700 mt-4 font-custom text-xl">
                Wireless Prime Business Phone – Model T53w
              </h1>
              <img src={fd360t53w} alt="fd360 t53w" className="w-full h-40" />
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h1 className="text-gray-700 mt-4 font-custom text-xl">
                Wireless Prime Business Phone Model T54W
              </h1>
              <img src={fd360t54w} alt="fd360 t54w" className="w-full h-40" />
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h1 className="text-gray-700 mt-4 font-custom text-xl">
                Prime Business Phone Model T53
              </h1>
              <img src={fd360t53} alt="fd360 t53" className="w-full h-40" />
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4 ">
              <h1 className="text-gray-700 mt-4 font-custom text-xl">
                Conference phone Model CP925
              </h1>
              <img src={fd360cp925} alt="fd360 CP925" className="w-full h-40" />
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h1 className="text-gray-700 mt-4 font-custom text-xl">
                Dect Ruggedized Wireless phone with base Model W77P
              </h1>
              <img src={fd360W77P} alt="fd360 W77P" className="w-full h-40" />
            </div>
          </div>
          <div className="mt-10">
            <iframe
              className="w-full"
              height="500"
              src="https://www.youtube.com/embed/X81_b-t1gIg"
              title="Yeastar Linkus UC Clients | Free UC Softphone with Yeastar PBX Systems"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 justify-items-center items-center">
            <h1 className="text-gray-700 mt-4 font-custom text-2xl">
              Phones Plans & Pricing
            </h1>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h3 className="text-2xl font-semibold text-gray-800">
                Basic <br />
                VoIP Phone Service
                <br />
                $19.95/month/user
              </h3>
              <p className="text-gray-700 mt-2 font-custom">
                • Unlimited Calling within U.S.
                <br />• 24/7 Customer Support
                <br />• Virtual Receptionist
                <br />• Multi-Level Virtual Receptionist
                <br />• Ring Group
                <br />• Music on Hold
                <br />• Extension Dialing
                <br />• Conference Bridge
                <br />• Electronic Inbound Fax
                <br />• Intercom
                <br />• Paging
                <br />• Call Log
                <br />• Call Park
                <br />• Multi-Device Ring
                <br />• E-911 Service
                <br />• Voicemail to Email
                <br />• Dial by Name
                <br />• Multi-Site Management
                <br />• Caller ID
                <br />• Audio Conferencing
                <br />• Speed Dial
                <br />• Software Phone/ Desktop App
                <br />• Call Barge, Listen, Coach
                <br />• CRM Integration
                <br />• Toll – Free Number for Free
                <br />• SMS Texting
                <br />• Directory Listing
                <br />• Video Conferencing
                <br />
                Button to Call us with Number on it.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h3 className="text-2xl font-semibold text-gray-800">
                Pro <br />
                VoIP Phone Service
                <br />
                $24.95/month/user
              </h3>
              <p className="text-gray-700 mt-2 font-custom">
                • Unlimited Calling within U.S.
                <br />• 24/7 Customer Support
                <br />• Virtual Receptionist
                <br />• Multi-Level Virtual Receptionist
                <br />• Mobile App
                <br />• Ring Group
                <br />• Music on Hold
                <br />• Extension Dialing
                <br />• Conference Bridge
                <br />• Electronic Inbound Fax
                <br />• Intercom
                <br />• Paging
                <br />• Call Log
                <br />• Call Park
                <br />• Multi-Device Ring
                <br />• E-911 Service
                <br />• Voicemail to Email
                <br />• Dial by Name
                <br />• Multi-Site Management
                <br />• Caller ID
                <br />• Audio Conferencing
                <br />• Speed Dial
                <br />• Call Recording
                <br />• Software Phone/Desktop App
                <br />• Call Barge, Listen, Coach
                <br />• CRM Integration
                <br />• Toll – Free Number for Free
                <br />• SMS Texting
                <br />• Directory Listing
                <br />• Video Conferencing
                <br />
                Button to Call us with Number on it.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h3 className="text-2xl font-semibold text-gray-800">
                Enterprise <br /> VoIP Phone Service <br />
                $29.95/month/user
              </h3>
              <p className="text-gray-700 mt-2 font-custom">
                • Unlimited Calling within U.S.
                <br />• 24/7 Customer Support
                <br />• Virtual Receptionist
                <br />• Multi-Level Virtual Receptionist
                <br />• Mobile App
                <br />• Ring Group
                <br />• Music on Hold
                <br />• Extension Dialing
                <br />• Conference Bridge
                <br />• Electronic Inbound Fax
                <br />• Intercom
                <br />• Paging
                <br />• Call Log
                <br />• Call Park
                <br />• Multi-Device Ring
                <br />• E-911 Service
                <br />• Voicemail to Email
                <br />• Dial by Name
                <br />• Multi-Site Management
                <br />• Caller ID
                <br />• Audio Conferencing
                <br />• Speed Dial
                <br />• Call Recording
                <br />• Software Phone/Desktop App
                <br />• Call Barge, Listen, Coach
                <br />• CRM Integration
                <br />• Toll – Free Number for Free
                <br />• SMS Texting
                <br />• Directory Listing
                <br />• Video Conferencing
                <br />
                Button to Call us with Number on it.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default CommunicationServices;
