import React from "react";
import jim from "../assets/team/jim.png";
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
import warren from "../assets/team/warren.png";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

const TeamMember = ({ name, title, image, bio }) => {
  return (
    <div className="grid items-center h-full p-8  hover:border-double hover:border-4 hover:border-lime-400">
      <Tilt>
        <motion.img
          className="object-cover w-60 h-60 rounded-xl "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          src={image}
          alt={`${name}'s profile`}
        />
      </Tilt>
      <h2 className="mt-4 mb-2 text-xl font-bold text-black">{name}</h2>
      <p className="mb-4 text-sm font-bold text-black">{title}</p>
      <p className="text-xs text-black">{bio}</p>
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
    <div className="py-12 bg-gray-100">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Meet Our Leaders
          </h2>
          <p className="mt-4 text-lg text-gray-500"></p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TeamMember
              name="Jim"
              title="CEO - USAF Veteran"
              image={jim}
              bio=""
            />
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
              bio="MBA Finance graduate with 5+ years of bookkeeping experience. A certified QBO ProAdvisor. An aspiring US tax preparer and IRS Enrollment Agent.
              Dealing with numbers or accounting was never my option back then. However, looks like accounting is pushing its way into my life to help me become the person I want to be.
              On the contrary, I love spending my spare time doing hair and makeup for weddings and special events."
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
              bio="I've worked in technology for 5 years. 
              In my free time, I create web content for my YouTube channel. I play console games, and as a side hustle, I do computer repair and CPE installation and configuration in remote places without an internet connection.
              "
            />
            <TeamMember
              name="Jomarie"
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
              bio="Ruv playing outside with my toys. Ruv playing inside with my family and my toys. Ruv snacks and sleeping. Loyal and playful canine companion with wagging tail, wet nose, and endless love to give. Always ready for a good belly rub and a game of fetch. Woof!"
            />
            <TeamMember
              name="Warren"
              title="Frontend Developer"
              image={warren}
              bio="I am a passionate web designer and frontend developer, with a keen eye for detail and a talent for creating visually appealing and user-friendly websites. When I'm not developing websites, I love exploring new places and sample local cuisines. Traveling is one of my favorite hobbies, and I discover hidden gems and iconic landmarks wherever I visit."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
