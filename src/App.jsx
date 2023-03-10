import { Suspense } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Earth } from "./components/earth";
import Nav from "./components/navbar/Nav";
import { motion } from "framer-motion";
import fd360vetaran from "../src/assets/fd360Veteranandownedlogo.png";

import Footer from "./components/Footer";

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
        className="w-full h-full relative mx-auto font-custom"
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
          <div>
            <img
              src={fd360vetaran}
              className="absolute md:top-15 md:left-0 top-20 z-10 md:w-60 w-40 bg-blue-400 bg-opacity-50 bg-clip-padding backdrop-blur-sm rounded-3xl h-28"
            />
          </div>
        </div>
        <div className="absolute md:bottom-16 bottom-0 z-10 text-center items-center p-20">
          <motion.p className="md:text-2xl text-xs mt-20 text-green-400 bot">
            Since 1986 Future Digital 360 offers you a centralized, single point
            of contact for all your business needs, Telephone, IT, Email Web,
            Security & Office Equipment we are dedicated, dependable and
            unparalleled customer support. We Conduct our business with
            integrity, trust and we deliver on our commitments and tailor
            innovative solutions to fully meet each of our customer’s individual
            needs.{" "}
          </motion.p>
        </div>
        <Canvas>
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
        </Canvas>
        <div className="absolute  bottom-0 w-full">
          <Footer />
        </div>
      </motion.div>
    </>
  );
}

export default App;
