import React from "react";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import jim from "../assets/team/jim.png";
import josh from "../assets/team/Josh.png";
import joe from "../assets/team/Joe.png";
import josh2 from "../assets/team/Josh2.png";
import lai from "../assets/team/Lai.png";
import nikki from "../assets/team/Nikki.png";
import precie from "../assets/team/Precie.png";
import rediza from "../assets/team/Rediza.png";
import rem from "../assets/team/Rem.png";
import ron from "../assets/team/Ron.png";
import sharon from "../assets/team/Sharon.png";
import { motion } from "framer-motion";

const TeamMember = ({ name, title, image }) => {
  return (
    <div className=" hover:border-double hover:border-4 hover:border-lime-400  h-full flex flex-col items-center p-8 ">
      <motion.img
        className="w-40 h-40 object-cover rounded-xl "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        src={image}
        alt={`${name}'s profile`}
      />
      <h2 className="mt-4 mb-2 text-xl font-bold text-black">{name}</h2>
      <p className="mb-4 text-sm text-black">{title}</p>
      <div className="flex space-x-4">
        <a href="#" className="text-black hover:text-gray-300">
          <FaTwitter />
        </a>
        <a href="#" className="text-black hover:text-gray-300">
          <FaInstagram />
        </a>
        <a href="#" className="text-black hover:text-gray-300">
          <FaFacebookF />
        </a>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Meet Our Leaders
          </h2>
          <p className="mt-4 text-lg text-gray-500"></p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember name="Jim" title="CEO" image={jim} />
            <TeamMember name="Sharon" title="CTO" image={sharon} />
            <TeamMember name="Nikki" title="Operations Manager" image={nikki} />
            <TeamMember name="Alice Johnson" title="Designer" image={josh} />
            <TeamMember name="Josh" title="Marketing" image={josh2} />
            <TeamMember name="Rediza" title="Customer Support" image={rediza} />
            <TeamMember name="Precie" title="CEO" image={precie} />
            <TeamMember name="Lai" title="CTO" image={lai} />
            <TeamMember name="Joe" title="Lead Developer" image={joe} />
            <TeamMember name="Ron" title="Designer" image={ron} />
            <TeamMember name="Josh" title="Marketing" image={josh2} />
            <TeamMember name="Rem" title="Customer Support" image={rem} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
