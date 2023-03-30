import React from "react";
import { motion } from "framer-motion";
import Nav from "../navbar/Nav";
import fd360cybersecurity from "../../assets/services/fd360cybersecurity.jpg";
import fd360cycle from "../../assets/services/fd360cybersecuritycycle.png";
import Footer from "../Footer";

const CyberSecurity = () => {
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
      <div>
        <div className="relative w-full h-96 ">
          <img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            src={fd360cybersecurity}
            alt="Cyber & Network Security Services"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0  flex items-center justify-center">
            <div className="text-green-500 text-center font-custom">
              <motion.h1
                className="text-4xl font-bold mb-4"
                initial={{ opacity: 0, x: "-100vh" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
              >
                Cyber & Network Security Services
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
        <div className="bg-gray-100 py-8 px-4 font-custom mb-10 flex justify-center">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, x: "300vh" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          >
            <h1 className="text-3xl font-bold mb-4">
              Cyber & Network Security Services
            </h1>
            <img src={fd360cycle} alt="fd360 Cyber security Cycle" />
          </motion.div>
        </div>
        <div className="bg-gray-100 py-8 px-4 font-custom">
          <div className="max-w-full mx-auto text-center">
            <div className="flex flex-col md:flex-row justify-center">
              <div className="md:w-full p-4">
                <motion.h1
                  className="text-3xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Cyber security
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  refers to a set of techniques and methodologies used to
                  protect integrity of networks, devices, programs, and data
                  from damage, attack, or unauthorized access. In simple terms,
                  cyber security is the practice of protecting
                  internet-connected systems and networks from digital attacks.
                </motion.p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5 w-full">
              <div className="bg-white rounded-lg shadow-lg p-4 ">
                <motion.h1
                  className="text-gray-700 mt-4 font-custom text-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Own It
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Ever feel like your devices are listening to you? There is
                  some truth to the fear, but the real risk is not in targeted
                  advertising, but in what information you allow to be shared
                  with app developers, social media platforms and the public. In
                  the age of social media and connected apps for literally
                  everything, what you share and who you share it with on the
                  many platforms can make or break your business and career.
                  Here are three tips to help you #OwnIT on social media:
                </motion.p>
                <motion.h1
                  className="text-gray-700 mt-4 font-custom text-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  • Check your privacy settings
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Who can see your social media pages? Do you limit items to
                  just friends or are your pages public? It is also important to
                  be careful about what you share, if you wouldn’t want your
                  grandmother to see it, keep it off of the web.
                </motion.p>
                <motion.h1
                  className="text-gray-700 mt-4 font-custom text-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  • Pay attention to permissions
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  FaceApp (the Russian face aging app) is just the latest to
                  induce mass panic when people realized their photos had been
                  permanently been uploaded to the app’s server. Be selective
                  when agreeing to install apps (and grant permissions) on your
                  devices. If an app wants access to sensitive data on your
                  phone, be sure it is one you can trust.
                </motion.p>
                <motion.h1
                  className="text-gray-700 mt-4 font-custom text-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  • Delete unused apps
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Remember that trending app from four months ago? No? Me
                  either. Delete unused apps from your devices to prevent
                  inadvertent sharing.
                </motion.p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-4 ">
                <motion.h1
                  className="text-gray-700 mt-4 font-custom text-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Protect It
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  With all of the digital devices used personally and in
                  business today there are countless opportunities for hackers
                  to access data. Earlier this month, we shared how to #SecureIT
                  with strong passwords. But, to be truly cyber smart, securing
                  your data is only part of the equation — you also need to
                  #ProtectIT
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Here are a few key things that every business should do to
                  #ProtectIT:
                </motion.p>
                <motion.h1
                  className="text-gray-700 mt-4 font-custom text-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  • Build and maintain a strong firewall
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Keep your users away from dangerous usage and intrusion by
                  hackers. Your firewall is the first line of defense against
                  cyber threats.
                </motion.p>
                <motion.h1
                  className="text-gray-700 mt-4 font-custom text-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  • Secure WiFi networks
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Restrict who is allowed on your wireless networks. If you
                  allow guests on your network, keep their connection private
                  from your own. If you access guest networks when out and
                  about, consider extra internal security on your devices to
                  protect data.
                </motion.p>
                <motion.h1
                  className="text-gray-700 mt-4 font-custom text-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  • Keep your tech current
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  There is nothing that hackers like more than outdated software
                  and systems that they already know how to sneak into. Be sure
                  to frequently update your tech infrastructure and antivirus
                  software.
                </motion.p>
                <motion.h1
                  className="text-gray-700 mt-4 font-custom text-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  • Backup, backup, backup
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Ensure you have a system in place that includes off-site
                  backups of your data both online and offline.
                </motion.p>
                <br />
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Your path to #ProtectIT starts with an evaluation of what you
                  are presently doing. We can help, give us a call or send us a
                  message to review current efforts.
                </motion.p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-4 ">
                <motion.h1
                  className="text-gray-700 mt-4 font-custom text-2xl mx-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Network security
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  consists of the policies, processes and practices adopted to
                  prevent, detect and monitor unauthorized access, misuse,
                  modification, or denial of a computer network and
                  network-accessible resources. Network security involves the
                  authorization of access to data in a network, which is
                  controlled by the network administrator. Users choose or are
                  assigned an ID and password or other authenticating
                  information that allows them access to information and
                  programs within their authority. Network security covers a
                  variety of computer networks, both public and private, that
                  are used in everyday jobs: conducting transactions and
                  communications among businesses, government agencies and
                  individuals. Networks can be private, such as within a
                  company, and others which might be open to public access.
                  Network security is involved in organizations, enterprises,
                  and other types of institutions. It does as its title
                  explains: it secures the network, as well as protecting and
                  overseeing operations being done. The most common and simple
                  way of protecting a network resource is by assigning it a
                  unique name and a corresponding password.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CyberSecurity;
