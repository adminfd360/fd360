import { useEffect, useState } from "react";
import Nav from "../navbar/Nav";
import { motion } from "framer-motion";
import "./styles.css";
import Accordion from "../Accordion";

import img1 from "../../assets/ifax/process/img1.webp";
import img2 from "../../assets/ifax/process/img2.webp";
import img3 from "../../assets/ifax/process/img3.webp";
import img4 from "../../assets/ifax/process/img4.webp";
import img5 from "../../assets/ifax/process/img5.webp";
import video1 from "../../assets/ifax/process/video1.mp4";

const topics = [
  {
    title: "How to organize faxes into your folders",
    content: (
      <>
        <p>
          Set-up your smart folders (go to our article on How to Create Smart
          Folders to learn how to do this)
        </p>
        <p>
          In your dashboard once you’ve chosen the fax you want to move into a
          folder, click-hold-and drag the fax towards the Folders section of the
          tool
        </p>
        <p>Drop the fax into the designated folder you want it to be in</p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img1} alt="" />
      </>
    ),
  },
  {
    title:
      "How to delete, share, forward, print, download, or request for an e-signature for a fax",
    content: (
      <>
        <p>1. On your dashboard or inbox open a fax you received</p>
        <p>2. Hover above the fax for the following options:</p>
        <ul className="list-decimal pl-8">
          <li>Delete Fax</li>
          <li>Share Fax</li>
          <li>Forward as New Fax</li>
          <li>Request eSignature</li>
          <li>Print</li>
          <li>Download PDF</li>
        </ul>
        <video
          src={video1}
          autoPlay
          muted
          loop
          className="w-full h-auto mt-6 max-w-[80%] m-auto"
        ></video>
        <p className="mt-6">
          3. Select the action you want to take with your fax.
        </p>
      </>
    ),
  },
  {
    title: "How to block fax numbers on iFax",
    content: (
      <>
        <ul className="list-decimal pl-8">
          <li>Go to your dashboard.</li>
          <li>
            Click on the hamburger icon (three dots) on the right side of the
            transmission.
          </li>
          <li>Select Block Sender.</li>
          <li>
            You’ll see a popup notification on the bottom of your screen when
            you’ve successfully blocked a fax number.
          </li>
        </ul>

        <p className="mt-6">
          You can also view and keep track of all the numbers you’ve blocked.
          You can do so by following these steps:
        </p>
        <ul className="list-decimal pl-8">
          <li>
            On your dashboard, go to Settings by clicking the gear icon on the
            bottom left side of the screen.
          </li>
          <li>On General, select Blocked Numbers.</li>
        </ul>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img2} alt="" />
        <p className="mt-6">
          3. You may also unblock numbers by clicking the delete button (trash
          bin icon) on the right side of the number.
        </p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img3} alt="" />
        <p className="mt-6">
          Blocking numbers on iFax literally takes less than five minutes to do.
          So next time you receive a junk fax, block the number right away.
        </p>
      </>
    ),
  },
  {
    title: "How to Use Fax OCR on iFax",
    content: (
      <>
        <p>
          OCR for online faxing allows users to scan, transcribe, and convert
          documents quickly and effortlessly. The character recognition feature
          on iFax is intuitive and automated. Follow the steps below to start
          using OCR on iFax:
        </p>
        <ul className="list-decimal pl-8">
          <li>
            Go to ifaxapp.com and sign up for a new account. Log in if you
            already have an existing account.
          </li>
          <li>
            Enter the iFax dashboard and click Settings on the dashboard’s
            left-hand side.
          </li>
          <li>
            Under the General tab, click OCR & Data Export. This submenu will
            let you edit settings related to the iFax OCR functionality.{" "}
          </li>
        </ul>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img4} alt="" />
        <p className="mt-6">
          4. You may toggle the automatic conversion of images from new faxes.{" "}
        </p>
        <p>5. You can convert existing faxes to searchable text.</p>
        <p>
          6. It’s also possible to create custom fields for names, dates, and
          other information.
        </p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img5} alt="" />
        <p className="mt-6">
          Note that automatic conversion from fax images to searchable text
          comes at an additional cost. Similarly, activating OCR for existing
          fax images comes with a one-time fee.
        </p>
        <p>
          Once you’ve activated the fax OCR feature, you can toggle the search
          button on your dashboard to index converted searchable texts. This
          option will make it easier to locate and sort fax images that iFax has
          already scanned and converted.
        </p>
      </>
    ),
  },
];

const IfaxProcessing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <Nav />
      <div className="relative max-w-full h-[300px] ">
        <div className="object-cover w-full h-full grade"></div>
        <div className="absolute inset-0  flex items-center justify-center">
          <div className="text-white text-center">
            <motion.h1
              className="font-bold mb-4 text-6xl text-green-400 "
              id="title"
              initial={{ opacity: 0, x: "-100vh" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
            >
              Knowledge Base
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
      <div className="w-full max-w-[1150px] m-auto py-12 xl:py-20 px-4">
        <h1 className="text-2xl font-bold">
          Topics: Processing Received Faxes
        </h1>
        <ul className="mt-10 flex flex-col gap-4">
          {topics.map((item, index) => (
            <Accordion
              key={index}
              item={item}
              index={index}
              toggleAccordion={() => toggleAccordion(index)}
              activeIndex={activeIndex}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default IfaxProcessing;
