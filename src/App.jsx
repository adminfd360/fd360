import React, { useRef, useState } from "react";
import "./App.css";
import Nav from "./components/navbar/Nav";
import { motion } from "framer-motion";
import fd360video from "../src/assets/fd360video.mp4";
import fd360communicationservices from "./assets/services/fd360communicationservices.jpg";
import fd360cybersecurity from "./assets/services/fd360cybersecurity.jpg";
import fd360networkservices from "./assets/services/fd360networkservices.jpg";
import fd360webservices from "./assets/services/fd360webservices.jpg";
import fd360multifunctional from "./assets/services/fd360multifunctionalproduct.jpg";
import yealink from "./assets/partners/yealink.png";
import yeastar from "./assets/partners/yeastar.png";
import lenovo from "./assets/partners/lenovo.png";
import google from "./assets/partners/google-partner.png";
import lexmark from "./assets/partners/lexmark_black1.png";
import microsoft from './assets/partners/ms-logo.webp'
import StarsCanvas from "./components/Stars";
import EarthCanvas from "./components/earth";
import { Link } from "react-router-dom";

function App() {
  // const videoRef = useRef(null);
  // const [playCount, setPlayCount] = useState(0);

  // const handleVideoEnd = () => {
  //   if (videoRef.current) {
  //     if (playCount < 2) {
  //       // or 3 for 3 times
  //       setPlayCount(playCount + 1);
  //       videoRef.current.currentTime = 0;
  //       videoRef.current.play();
  //     }
  //   }
  // };

  return (
    <>
      <Nav />
      <div className="h-full bg-[#01040c] relative z-0 flex flex-col-reverse gap-10 overflow-hidden xl:flex-row">
        <div className="flex-1 md:h-full">
          <motion.h2
            className="text-green-400 font-custom mr-20 font-bold md:text-3xl text-xl md:mt-28 text-center"
            animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
            transition={{
              duration: 5,
              delay: 0.3,
              ease: [0.5, 0.71, 1, 1.5],
            }}
            initial={{ opacity: 0, scale: 0.5 }}
          >
            Let Us Take Care Of You!
          </motion.h2>
          <motion.p className="md:text-lg text-xs md:mt-20 mt-10 text-white md:ml-10 md:text-start text-center">
            Since 1986 Future Digital 360 offers you a centralized, single point
            of contact for all your business needs, Telephone, IT, Email Web,
            Security & Office Equipment we are dedicated, dependable and
            unparalleled customer support. We Conduct our business with
            integrity, trust and we deliver on our commitments and tailor
            innovative solutions to fully meet each of our customer’s individual
            needs.{" "}
          </motion.p>
          <div className="md:flex hidden md:ml-10 md:mt-10">
            <div className="flex-1">
              <Link to="/communication">
                <div className="mb-10 md:flex flex items-center  md:ml-[0px] mt-[0px] overflow-visible">
                  <div className="flex justify-center items-center shadow-3xl rounded-full mr-5 overflow-visible">
                    <img
                      src={fd360communicationservices}
                      className="rounded-full md:h-24 md:w-24 h-12 w-12  shadow-3xl"
                      alt="fd360 communication services"
                    />
                  </div>
                  <p className="text-xs md:mr-5 text-white">
                    Communication Services
                  </p>
                </div>
              </Link>
              <Link to="/cybersecurity">
                <div className="mb-10 flex items-center ">
                  <div className="flex justify-center items-center shadow-3xl rounded-full mr-5 overflow-visible ">
                    <img
                      src={fd360cybersecurity}
                      className="rounded-full md:h-24 md:w-24 h-12 w-12  shadow-3xl "
                      alt="d360 cyber security"
                    />
                  </div>
                  <p className=" text-xs md:mr-5 text-white">
                    Cyber & Network <br /> Security Services
                  </p>
                </div>
              </Link>
            </div>
            <div className="flex-1 mt-20">
              <Link to="/managednetwork">
                <div className="mb-10 flex items-center ">
                  <div className="flex justify-center items-center shadow-3xl rounded-full mr-5 overflow-visible">
                    <img
                      src={fd360networkservices}
                      className="rounded-full md:h-24 md:w-24 h-12 w-12  shadow-3xl"
                      alt="fd360 Network Services"
                    />
                  </div>
                  <p className=" text-xs md:mr-5 text-white">
                    Managed  IT
                    <br /> Network Services
                  </p>
                </div>
              </Link>
            </div>
            <div className="flex-1">
              <Link to="/webservices">
                <div className="mb-10 flex items-center justify-start ">
                  <div className="flex justify-center items-center shadow-3xl rounded-full  mr-5 overflow-visible">
                    <img
                      src={fd360webservices}
                      className="md:h-24 md:w-24 h-12 w-12 rounded-full  shadow-3xl"
                      alt="fd360 Web Services"
                    />
                  </div>
                  <p className=" text-xs md:mr-5 text-white">Web Services</p>
                </div>
              </Link>
              <Link to="/multifunctional">
                <div className="mb-20 flex items-center justify-start ">
                  <div className="flex justify-center items-center shadow-3xl rounded-full mr-5 overflow-visible">
                    <img
                      src={fd360multifunctional}
                      className="rounded-full md:h-24 md:w-24 h-12 w-12  shadow-3xl"
                      alt="fd360 Multi Functional Product Services"
                    />
                  </div>
                  <p className=" text-xs text-white">
                    Multi Functional <br />
                    Product Services
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1 h-full ">
          <EarthCanvas />
          <StarsCanvas />
        </div>
      </div>
      {/* <motion.div
        className="w-full h-full relative mx-auto font-semibold bg-[#01040c]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="text-white absolute md:top-40 top-10 md:left-10 left-24  z-10 h-screen items-center">
          <motion.h1
            className="text-green-400 font-custom font-bold text-center  p-2 md:text-3xl text-xl"
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
          <div>
            <img
              src={fd360vetaran}
              className="absolute md:top-[0px] md:left-[150px] top-20 z-10 md:w-60 w-40 bg-transparent rounded-3xl h-28"
            />
          </div>
        </div>
        <div className="absolute md:top-40 left-0 bottom-0 z-10 text-center p-5 items-center  md:w-1/3">
          <motion.p className="md:text-lg text-xs mt-20 text-white">
            Since 1986 Future Digital 360 offers you a centralized, single point
            of contact for all your business needs, Telephone, IT, Email Web,
            Security & Office Equipment we are dedicated, dependable and
            unparalleled customer support. We Conduct our business with
            integrity, trust and we deliver on our commitments and tailor
            innovative solutions to fully meet each of our customer’s individual
            needs.{" "}
          </motion.p> */}
      {/* </div> */}
      {/* <div className="absolute right-10 top-60 md:block hidden">
          <video
            ref={videoRef}
            onEnded={handleVideoEnd}
            id="myVideo"
            className="w-96 h-full"
            autoPlay
          >
            <source src={fd360video} type="video/mp4" />
          </video>
        </div> */}
      {/* <div className="absolute md:flex flex-wrap  w-full md:h-0 h-full text-white md:bottom-[100px]  top-20 md:top-[600px]  right-0 md:left-0 left-10 md:justify-center  z-10 text-center">
          <a to="/communication">
            <div className="mb-10 md:flex flex items-center  md:ml-[0px] mt-[0px] overflow-visible">
              <div className="flex justify-center items-center shadow-3xl rounded-full mr-5 overflow-visible">
                <img
                  src={fd360communicationservices}
                  className="rounded-full md:h-24 md:w-24 h-12 w-12 shadow-3xl"
                />
              </div>
              <p className=" text-xs md:mr-5">Communication Services</p>
            </div>
          </a>
          <a to="/cybersecurity">
            <div className="mb-10 flex items-center ">
              <div className="flex justify-center items-center shadow-3xl rounded-full mr-5 overflow-visible">
                <img
                  src={fd360cybersecurity}
                  className="rounded-full md:h-24 md:w-24 h-12 w-12 shadow-3xl"
                />
              </div>
              <p className=" text-xs md:mr-5">
                Cyber & Network Security Services
              </p>
            </div>
          </a>
          <a to="/managednetwork">
            <div className="mb-10 flex items-center ">
              <div className="flex justify-center items-center shadow-3xl rounded-full mr-5 overflow-visible">
                <img
                  src={fd360networkservices}
                  className="rounded-full md:h-24 md:w-24 h-12 w-12  shadow-3xl"
                />
              </div>
              <p className=" text-xs md:mr-5">Network Services</p>
            </div>
          </a>
          <a to="/webservices">
            <div className="mb-10 flex items-center justify-start ">
              <div className="flex justify-center items-center shadow-3xl rounded-full mr-5 overflow-visible">
                <img
                  src={fd360webservices}
                  className="rounded-full md:h-24 md:w-24 h-12 w-12  shadow-3xl"
                />
              </div>
              <p className=" text-xs md:mr-5">Web Services</p>
            </div>
          </a>
          <a to="/multifunctional">
            <div className="mb-20 flex items-center justify-start ">
              <div className="flex justify-center items-center shadow-3xl rounded-full mr-5 overflow-visible">
                <img
                  src={fd360multifunctional}
                  className="rounded-full md:h-24 md:w-24 h-12 w-12 shadow-3xl"
                />
              </div>
              <p className=" text-xs">Multi Functional Product Services</p>
            </div>
          </a>
        </div> */}
      {/* </motion.div> */}
      {/* rounded-md bg-opacity-50 bg-clip-padding backdrop-opacity-50 */}
      <div className="w-full md:flex bg-gradient-to-t from-[#d2ffff] to-[#0694c6]  p-8">
        <div className="bg-white rounded-md bg-opacity-40 bg-clip-padding backdrop-opacity-100 m-5 p-5">
          <motion.h2
            className="text-3xl font-bold mb-4 "
            initial={{ opacity: 0, x: "100vh" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3, bounce: 0.6 }}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="text-lg mb-5"
            initial={{ opacity: 0, x: "-100vh" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 4 }}
          >
            • Is to fuse business with advanced office technology, equipment,
            and supplies and provide steadfast service and support. Our customer
            service shall be at the highest of standards. It is our vision to
            build a culture based on traditions of innovation and
            competitiveness.
            <br />
          </motion.p>
        </div>
        <div className="bg-white rounded-md bg-opacity-40 bg-clip-padding backdrop-opacity-100 m-5 p-5">
          <motion.h2
            className="text-3xl font-bold mb-4 "
            initial={{ opacity: 0, x: "100vh" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3, bounce: 0.6 }}
          >
            Our Vision
          </motion.h2>
          <motion.p
            className="text-lg mb-5"
            initial={{ opacity: 0, x: "-100vh" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 4 }}
          >
            • Is to be a world-class service company that helps businesses
            achieve their goals. We will accomplish our Vision through our
            commitment to strategic growth, outstanding service, and community
            involvement. Steadfast, Dedication & Security.
          </motion.p>
        </div>
        <div className="bg-white rounded-md bg-opacity-40 bg-clip-padding backdrop-opacity-100 m-5 p-5">
          <motion.h2
            className="text-3xl font-bold mb-4 "
            initial={{ opacity: 0, x: "100vh" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3, bounce: 0.6 }}
          >
            Our Commitment
          </motion.h2>
          <motion.p
            className="text-lg"
            initial={{ opacity: 0, x: "-100vh" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 4 }}
          >
            • Future Digital 360 is committed to serving the communities where
            we do business, providing our clients with innovative, high-quality
            products and services and providing for the financial and social
            needs of our workers and our environment.
          </motion.p>
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
            alt="lexmark logo"
            className="object-contain p-2 md:p-3 lg:p-4 xl:p-5 w-60"
          />
          <img
            src={microsoft}
            alt="ms logo"
            className="object-contain p-2 md:p-3 lg:p-4 xl:p-5 w-60"
          />
        </motion.div>
      </div>
    </>
  );
}

export default App;
