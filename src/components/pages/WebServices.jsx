import React from "react";
import Nav from "../navbar/Nav";
import { motion } from "framer-motion";
import fd360webservices from "../../assets/services/fd360webservices.jpg";
import fd360webdesign from "../../assets/services/fd360webdesign.png";
import fd360ssl from "../../assets/services/fd360ssl.png";
import fd360domain from "../../assets/services/fd360domain.png";
import fd360hosting from "../../assets/services/fd360hosting.png";
import fd360management from "../../assets/services/fd360management.png";
import fd360seo from "../../assets/services/fd360seo.png";
import chooseTemplates from "../../assets/services/choose-template.png";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const WebServices = () => {
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
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="relative w-full h-[600px] ">
          <img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            src={fd360webservices}
            alt="Communication Services"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0  flex items-center justify-center">
            <div className=" text-center ">
              <motion.h1
                className="font-bold mb-4 md:text-6xl text-4xl text-green-400 "
                id="title"
                initial={{ opacity: 0, x: "-100vh" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
              >
                Web Services
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
        <div className="bg-gradient-to-t from-[#d2ffff] to-[#0694c6] rounded-lg py-8 px-4 font-custom flex justify-center">
          <motion.div
            className=" text-center justify-center"
            initial={{ opacity: 0, x: "300vh" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          >
            <h1 className="text-3xl text-black font-bold mb-4">Web Design</h1>
            <img
              src={fd360webdesign}
              alt="fd360 web design"
              className="mx-auto"
            />
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="text-2xl"
            >
              Using our custom-built approach, we design, develop, implement,
              ensure quality assurance, maintain, and support a website from
              scratch.
            </motion.p>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="text-xl p-5"
            >
              We will take your vision and bring it to life with our Web
              Services Package! A business who had online presence has a massive
              impact on a company's success. Majority of customers will visit
              your business digitally rather than driving to your store, which
              takes them a lot of time. "Time is GOLD". Building a website for
              your business could reach these unreachable customers. Your
              business might be local, but you might be able to sell your
              products or services to a wider market, whether it be people in
              the next town, the nation as a whole or even the International
              market.
            </motion.p>
          </motion.div>
        </div>
        <div className="bg-gradient-to-t from-[#d2ffff] to-[#0694c6] rounded-lg py-8 px-4 font-custom flex">
          <div className="md:flex">
            <div className="bg-white md:text-lg  text-base rounded-md bg-opacity-40 bg-clip-padding backdrop-opacity-50 shadow-lg p-4 flex-1 m-2">
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
              >
                1. Full Website Design and Development: <br />
                We custom build a website from scratch including design,
                implementation, quality assurance, maintenance and support.
              </motion.p>
            </div>
            <div className="bg-white md:text-lg  text-base rounded-md bg-opacity-40 bg-clip-padding backdrop-opacity-50 shadow-lg p-4 flex-1 m-2">
              {" "}
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
              >
                2. Redesign:
                <br /> Migrate your existing website with all your data to an
                updated modern solution (maybe another content management
                system) through the convenient and responsive user interface.
              </motion.p>
            </div>
            <div className="bg-white md:text-lg  text-base rounded-md bg-opacity-40 bg-clip-padding backdrop-opacity-50 shadow-lg p-4 flex-1 m-2">
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
              >
                3. Web application development and integration:
                <br /> Enrich your website with ready-made and customizable
                social media applications, payment solutions, advanced analytics
                and other tools to increase user engagement.
              </motion.p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-t from-[#d2ffff] to-[#0694c6] rounded-lg py-8 px-4 font-custom flex">
          <div className="md:flex">
            <div className="bg-white md:text-lg  text-base rounded-md bg-opacity-40 bg-clip-padding backdrop-opacity-50 shadow-lg p-4 flex-1 m-2">
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
              >
                4. Migration to the cloud:
                <br /> To improve scalability, manageability, and cost
                reduction, migrate your existing websites and applications to
                another cloud service platform.
              </motion.p>
            </div>
            <div className="bg-white md:text-lg  text-base rounded-md bg-opacity-40 bg-clip-padding backdrop-opacity-50 shadow-lg p-4 flex-1 m-2">
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
              >
                5. Maintenance and support: <br />• Improved scalability and
                performance to meet growing numbers of visitors and data.
                <br /> • Fixing bugs - Improving your website structure to
                better meet user expectations is essential to increasing brand
                engagement. <br />• We perform security audits and updates to
                protect your data and users. , which involves performing SSL/TLS
                certificate validation on a per-user basis for use by the
                client.
              </motion.p>
            </div>
            <div className="bg-white md:text-lg  text-base rounded-md bg-opacity-40 bg-clip-padding backdrop-opacity-50 shadow-lg p-4 m-2 flex-1">
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
              >
                6. Mobile friendly development For a better mobile and tablet
                view, we use your portal as a backend. <br /> Why Choose US?
                <br />• We build the foundation of your online Presence and
                ensure that your business Stands out from the rest by using the
                Robust technologies in the industry. Interactive, media-rich and
                personalized to make your visitors stay engaged
              </motion.p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-t from-[#d2ffff] to-[#0694c6] rounded-lg py-8 px-4 font-custom">
          <div className="max-w-full mx-auto text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5 w-full">
              <div className="bg-white rounded-md bg-opacity-40 bg-clip-padding backdrop-opacity-50 shadow-lg p-4 ">
                <motion.h2
                  className="text-gray-700 mt-4 font-custom text-2xl mx-auto"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                  }}
                >
                  SSL
                  <br />
                  Our web services include secured connection
                </motion.h2>
                <motion.img
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                  }}
                  src={fd360ssl}
                  alt="fd360-ssl"
                  className="mx-auto"
                />
              </div>
              <div className="bg-white rounded-md bg-opacity-40 bg-clip-padding backdrop-opacity-50 shadow-lg p-4 ">
                <motion.h2
                  className="text-gray-700 mt-4 font-custom text-2xl mx-auto"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                  }}
                >
                  Domain Name
                  <br />
                  We can help register your name
                </motion.h2>
                <motion.img
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                  }}
                  src={fd360domain}
                  alt="fd360-domain-name"
                  className="mx-auto"
                />
              </div>
              <div className="bg-white rounded-md bg-opacity-40 bg-clip-padding backdrop-opacity-50 shadow-lg p-4 ">
                <motion.h2
                  className="text-gray-700 mt-4 font-custom text-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Hosting
                  <br />
                  We offer hosting services
                </motion.h2>
                <motion.img
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                  }}
                  src={fd360hosting}
                  alt="fd360-hosting"
                  className="mx-auto"
                />
              </div>
              <div className="bg-white rounded-md bg-opacity-40 bg-clip-padding backdrop-opacity-50 shadow-lg p-4 ">
                <motion.h2
                  className="text-gray-700 mt-4 font-custom text-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Management
                  <br />
                  We make sure the “back end” stuff going that keeps your
                  website live, actually viewable on the internet
                </motion.h2>
                <motion.img
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                  }}
                  src={fd360management}
                  alt="fd360-management"
                  className="mx-auto"
                />
              </div>
              <div className="bg-white rounded-md bg-opacity-40 bg-clip-padding backdrop-opacity-50 shadow-lg p-4 ">
                <motion.h2
                  className="text-gray-700 mt-4 font-custom text-2xl mx-auto"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                  }}
                >
                  SEO
                  <br />
                  <motion.img
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    variants={{
                      visible: { opacity: 1, scale: 1 },
                      hidden: { opacity: 0, scale: 0 },
                    }}
                    src={fd360seo}
                    alt="fd360-seo"
                    className="mx-auto"
                  />
                  Search engine optimization involves a combination of on-page
                  (maintenance-level) and off-page (management-level) tasks to
                  improve/maintain your ranking performance. SEO upkeep may
                  include:
                  <br />
                  <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    variants={{
                      visible: { opacity: 1, scale: 1 },
                      hidden: { opacity: 0, scale: 0 },
                    }}
                    className="text-left"
                  >
                    • Adding keywords
                    <br />• Adding or revising meta data for all on-page
                    elements, including the page itself and all images and
                    videos
                    <br />• Implementing schema to ensure meta data and element
                    and/or page rendering conforms to search engine-preferred
                    data structures
                    <br />• Cultivating quality inbound links to your website
                  </motion.p>
                </motion.h2>
              </div>

              <div className="bg-white rounded-md bg-opacity-40 bg-clip-padding backdrop-opacity-50 shadow-lg p-4 ">
                <motion.h2
                  className="text-gray-700 mt-4 font-custom text-2xl mx-auto"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                  }}
                >
                  Templates
                  <br />
                  <motion.img
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    variants={{
                      visible: { opacity: 1, scale: 1 },
                      hidden: { opacity: 0, scale: 0 },
                    }}
                    src={chooseTemplates}
                    alt="fd360-seo"
                    className="mx-auto w-[250px] h-auto mt-8 mb-10"
                  />
                  Explore our diverse range of website template designs to find the perfect match for your brand—whether you're seeking sleek professionalism or vibrant creativity, we have a design tailored to elevate your online presence.
                </motion.h2>
                <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold block max-w-[250px] mx-auto py-2 px-4 rounded mb-5 mt-12" to={'/webservices/templates'}>Check our templates</Link>
              </div>

            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default WebServices;
