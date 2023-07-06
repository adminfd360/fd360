import NewsCard from "../NewsCard";
import { newsData } from "./NewsData";
import fd360news from "../../assets/existing_partner.jpg";
import { motion } from "framer-motion";
import Nav from "../navbar/Nav";

const NewsList = () => {
  return (
    <>
      <Nav />
      <div className="relative w-full h-[600px] ">
        <img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          src={fd360news}
          alt="Communication Services"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0  flex items-center justify-center">
          <div className="text-white text-center font-custom">
            <motion.h1
              className="text-4xl text-green-400 font-bold mb-4"
              initial={{ opacity: 0, x: "-100vh" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
            >
              News and Updates on Information Technology
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
      <div className="bg-gradient-to-r from-[#d2ffff] to-[#0694c6]">
        {newsData.map((newsItem) => (
          <NewsCard
            key={newsItem.id}
            imageUrl={newsItem.imageUrl}
            title={newsItem.title}
            date={newsItem.date}
            description={newsItem.description}
            fullDescription={newsItem.fullDescription}
          />
        ))}
      </div>
    </>
  );
};

export default NewsList;
