import { Suspense } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Earth } from "./components/earth";
import Nav from "./components/navbar/Nav";
import { motion } from "framer-motion";

import fd360video from "../src/assets/fd360video.mp4";
import fd360communicationservices from "../src/assets/services/fd360communicationservices.jpg";
import fd360cybersecurity from "../src/assets/services/fd360cybersecurity.jpg";
import fd360networkservices from "../src/assets/services/fd360networkservices.jpg";
import fd360webservices from "../src/assets/services/fd360webservices.jpg";
function App() {
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
      <motion.div
        className="w-full h-full relative mx-auto font-semibold bg-[#01040c]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Nav />
        <div className="text-white absolute top-10 left-1/2 transform -translate-x-1/2 z-10 h-screen items-center">
          <motion.h1
            className="text-green-400 font-custom font-bold text-center  p-2 md:text-2xl text-xl"
            animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
            transition={{
              duration: 5,
              delay: 0.3,
              ease: [0.5, 0.71, 1, 1.5],
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.2 }}
          >
            Let Us Take Care Of You!
          </motion.h1>
        </div>
        <div>
          {/* <div>
            <img
              src={fd360vetaran}
              className="absolute md:top-[0px] md:left-[150px] top-20 z-10 md:w-60 w-40 bg-transparent rounded-3xl h-28"
            />
          </div> */}
        </div>
        <div className="absolute md:top-40 left-0 bottom-10 z-10 text-center p-5 items-center  md:w-1/3">
          <motion.p className="md:text-xl text-xs mt-20 text-white">
            Since 1986 Future Digital 360 offers you a centralized, single point
            of contact for all your business needs, Telephone, IT, Email Web,
            Security & Office Equipment we are dedicated, dependable and
            unparalleled customer support. We Conduct our business with
            integrity, trust and we deliver on our commitments and tailor
            innovative solutions to fully meet each of our customer’s individual
            needs.{" "}
          </motion.p>
        </div>
        <div className="absolute left-10 top-10">
          <video id="myVideo" className="w-96 h-full" autoPlay loop>
            <source src={fd360video} type="video/mp4" />
          </video>
        </div>
        <div className="absolute  md:w-1/2 w-full h-full text-white md:bottom-0 md:right-0 right-0 md:left-[730px] left-10 bottom-0 z-10 text-center  ">
          <a href="/communication">
            <div className="mb-10 md:flex flex items-center  md:ml-[500px] mt-[100px]">
              <img
                src={fd360communicationservices}
                className="rounded-full md:h-24 md:w-24 h-12 w-12 mr-5"
              />
              <p className=" text-xs">Communication Services</p>
            </div>
          </a>
          <a href="/cybersecurity">
            <div className="mb-10 flex items-center justify-start md:ml-[300px]">
              <img
                src={fd360cybersecurity}
                className="rounded-full md:h-24 md:w-24 h-12 w-12 mr-5"
              />
              <p className=" text-xs">Cyber Security</p>
            </div>
          </a>
          <a href="/managednetwork">
            <div className="mb-10 flex items-center md:justify-end justify-start md:mr-[10px]">
              <img
                src={fd360networkservices}
                className="rounded-full md:h-24 md:w-24 h-12 w-12 mr-5"
              />
              <p className=" text-xs">Network Services</p>
            </div>
          </a>
          <a href="/webservices">
            <div className="mb-10 flex items-center justify-start md:ml-[300px]">
              <img
                src={fd360webservices}
                className="rounded-full md:h-24 md:w-24 h-12 w-12 mr-5"
              />
              <p className=" text-xs">Web Services</p>
            </div>
          </a>
        </div>
        <Canvas>
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
        </Canvas>
        <div className="absolute  bottom-0 w-full"></div>
      </motion.div>
    </>
  );
}

export default App;
