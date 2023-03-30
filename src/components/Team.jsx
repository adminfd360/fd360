import React from "react";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import jim from "../assets/team/jim.png";
import josh from "../assets/team/josh.png";
import joemarie from "../assets/team/joemarie.png";
import lai from "../assets/team/lai.png";
import nikki from "../assets/team/nikki.png";
import precie from "../assets/team/precie.png";
import rediza from "../assets/team/rediza.png";
import rem from "../assets/team/rem.png";
import ron from "../assets/team/ron.png";
import sharon from "../assets/team/sharon.png";
import jr from "../assets/team/jr.png";
import patches from "../assets/team/patches.png";
import { motion } from "framer-motion";

const TeamMember = ({ name, title, image, bio }) => {
  return (
    <div className=" hover:border-double hover:border-4 hover:border-lime-400  h-full grid items-center p-8 ">
      <motion.img
        className="w-60 h-60 object-cover rounded-xl "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        src={image}
        alt={`${name}'s profile`}
      />
      <h2 className="mt-4 mb-2 text-xl font-bold text-black">{name}</h2>
      <p className="mb-4 text-sm text-black">{title}</p>
      <p className="mb-4 text-xs text-black">{bio}</p>
      {/* <div className="flex space-x-4">
        <a href="#" className="text-black hover:text-gray-300">
          <FaTwitter />
        </a>
        <a href="#" className="text-black hover:text-gray-300">
          <FaInstagram />
        </a>
        <a href="#" className="text-black hover:text-gray-300">
          <FaFacebookF />
        </a>
      </div> */}
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
            <TeamMember name="Jim" title="CEO" image={jim} bio="" />
            <TeamMember
              name="Nikki"
              title="Director of Operations"
              image={nikki}
              bio="I have worked in this industry for 30 years. I Like the way technology has changed to help us for the better cause.
              I spend my time on the off hours recording voice-overs and video presentations for churches and business. I love being with animals and spending time outside & road trips.
              "
            />
            <TeamMember
              name="Rediza"
              title="Finance & HR Manager"
              image={rediza}
              bio=""
            />
            <TeamMember
              name="Precie"
              title="Global Customer Service & Billing Manager"
              image={precie}
              bio="Throughout my career progression from customer service representative to manager. I have never lost sight of employee satisfaction that drives performance. I aim to make sure that the needs of the customers are satisfied to the utmost. 
              As a career woman, I'm also a mother of 2; being able to take care of them and work on what I love is the best thing.
              "
            />
            <TeamMember
              name="Sharon"
              title="Global Account Executive"
              image={sharon}
              bio="As an Account Executive for FD360, I love working in Sales and Customer Care. Through my tenure, I have met many people in every business sector, and I enjoy getting to know their business. 
              Aside from work, I enjoy fitness, family, and friends.
              "
            />
            <TeamMember
              name="Josh"
              title="PSW Field IT/VoIP Network Engineer"
              image={josh}
              bio="I have been in this industry for 15 years. I like the growth of technology and seeing how it changes the world. 
              In my free time, I like to play console games. My hobbies are gardening and taking care of my chickens. Love being with my dog.
              "
            />
            <TeamMember
              name="Lai"
              title="Global IT Support Desk Engineer"
              image={lai}
              bio="Striking the perfect balance between work, life, and family - it's all part of the journey! After over 10 years in this industry, I'm still loving every minute.
              Love hanging with my family and going to the beach and going on foodie adventures.
              "
            />
            <TeamMember
              name="Ron"
              title="PSW IT Network Engineer"
              image={ron}
              bio=""
            />
            <TeamMember
              name="Joemarie"
              title="Team Lead VoIp Engineer"
              image={joemarie}
              bio="IT professional in VoIP telephone system, hardware, networking, and cybersecurity solutions. I like spending time in my shop fixing electronic gadgets, playing around with programmable electronic prototyping boards to create IoT devices.
              I love being with my kids, family and traveling
              "
            />
            <TeamMember
              name="Rem"
              title="Social Media & Marketing Manager"
              image={rem}
              bio="I'm an expert at digital marketing, graphic design, project management, and social media marketing. I've spent more than a decade mastering my craft and delivering amazing results for clients.
              I enjoy playing basketball, participating in Esports games, and I love technology. I'm constantly looking for innovative ways to use technology to empower people and create positive change
              "
            />
            <TeamMember
              name="Jr"
              title="Web Services Manager"
              image={jr}
              bio="I'm a fullstack developer building & designing websites and applications. Technology is my passion, and I strive to create beautiful stunning interfaces that leave an impression with the user.
              When I'm not coding, you can find me playing with my kids or basketball
              "
            />

            <TeamMember
              name="Patches"
              title="Our Mascot"
              image={patches}
              bio="Ruv playing outside with my toys. Ruv playing inside with my family and my toys. Ruv snacks and sleeping."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
