import { useEffect, useState } from "react";
import Nav from "../navbar/Nav";
import { motion } from "framer-motion";
import "./styles.css";
import Accordion from "../Accordion";
import video from "../../assets/ifax/navigation/ifax-navigation-video.mp4";
import vid2 from "../../assets/ifax/navigation/2.mp4";
import vid3 from "../../assets/ifax/navigation/3.mp4";

const topics = [
  {
    title: "How to export reports",
    content: (
      <>
        <p>
          <strong>Reports</strong> provide insights on your team’s online fax
          usage, particularly the volume of incoming and outgoing faxes. You can
          also check the online fax usage of each user. Simply choose the email
          address associated with their iFax account.
        </p>
        <p>
          You can generate and export reports based on the following parameters:
        </p>
        <ul className="list-disc pl-8">
          <li>Any direction</li>
          <li>Any status</li>
          <li>
            Custom date (any time, today, yesterday, last 7, 28, and 90 days)
          </li>
          <li>By day, week, month, or year</li>
        </ul>
        <video
          src={video}
          autoPlay
          muted
          loop
          className="w-full h-auto mt-6 max-w-[80%] m-auto"
        ></video>
        <p className="mt-6">
          iFax allows you to export fax data as a CSV file. This format is
          compatible with Microsoft Excel and Google Sheets.
        </p>
        <p>To access Reports:</p>
        <ul className="list-decimal	pl-8">
          <li>
            Open the main dashboard and click the Reports under Tools in the
            left panel.
          </li>
          <li>
            You will see the graph indicating the number of faxes sent in a
            specific period.
          </li>
          <li>
            Click the Export button in the upper-right corner of the dashboard.
            You will receive the CSV file in your device.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "How to Navigate and Use the iFax Dashboard",
    content: (
      <>
        <ul className="list-disc pl-8">
          <li>
            If you’re looking for a specific fax, use the search bar at the top
            and type the name of a sender, recipient, and fax number. You may
            also toggle on “Search inside faxes” to find documents with specific
            terms.
          </li>
          <li>
            Filter faxes sent and received by method or user, direction, status,
            or time frame
          </li>
          <li>
            Browse through the pages of faxes by going through the displayed
            number of faxes in the screen at the bottom
          </li>
          <li>Download a spreadsheet log of all faxes received and sent</li>
          <li>Each row represents a fax received or sent</li>
          <li>
            The arrow next to the name under the “To” column indicates whether
            it’s inbound or outbound. If it’s pointing North-East = Outbound,
            South-West = Inbound
          </li>
          <li>Click on the negative spaces within the row to view the fax</li>
          <li>
            Select the name of a contact to review a log of all related faxes
            for that contact
          </li>
          <li>Add contact details for numbers with no contact assigned yet</li>
          <li>Assign faxes to user(s) for their processing</li>
          <li>Review the status of the faxes sent and received</li>
          <li>
            Update status of fax to Done to change it to the latest status
          </li>
          <li>Feel free to move the faxes to any folders you’ve created</li>
          <li>
            Clicking on the kebab icon at the most right of each row will give
            you options on what action to take with each fax: Mark as Done/Not
            Done, pull a Transmission Receipt, Annotate or eSign, Reply to
            Sender, Forward as New Fax, Mark as Unread, Block Sender, or Delete
          </li>
          <li>
            To send a fax, click the New fax button on the screen’s bottom-right
            corner.
          </li>
        </ul>
        <video
          src={vid2}
          autoPlay
          muted
          loop
          className="w-full h-auto mt-6 max-w-[80%] m-auto "
        ></video>
        <p className="mt-6">
          {" "}
          On the menu on the left hand side of the screen:
        </p>
        <ul className="list-disc pl-8 ">
          <li>
            Click the Inbox on the right-hand to view incoming and outgoing
            faxes.
          </li>
          <li>
            To view the faxes you have opened and marked confirmed, click the
            Done folder.
          </li>
          <li>
            The Folders contain labeled files connected to the cloud storage for
            syncing and backup. When you click the kebab icon, a sub-menu will
            appear prompting you to create a folder or sync files to Google
            Drive, OneDrive, and Dropbox.
          </li>
          <li>
            The Team Member option lets you add new users, create user group
            permissions, and activate single sign-on for team members.
          </li>
          <li>
            Manage your fax numbers or assign team members with the Fax Numbers
            option.
          </li>
          <li>Access and manage your contact lists.</li>
          <li>
            Go to Reports & Activity to get a visualization of faxes sent and
            received over time.
          </li>
        </ul>
        <video
          src={vid3}
          autoPlay
          muted
          loop
          className="w-full h-auto mt-6 max-w-[80%] m-auto"
        ></video>
        <ul className="list-disc pl-8 mt-6">
          <li>
            Click on the “i” icon next to Email to Fax to see the four-step
            process on how to send faxes from your email
          </li>
          <li>
            Use the Broadcast Fax to send the same fax in bulk to a list of
            accounts
          </li>
          <li>Check available Integrations & API to connect with iFax</li>
          <li>
            Set-up Your Fax Page so anyone can send you a fax without having
            access to a physical fax machine
          </li>
          <li>Review our Pricing Tiers</li>
          <li>Reach out to our Support Team</li>
          <li>View your allowance used along with your subscription plan</li>
          <li>Click on the gear icon to access your account settings</li>
        </ul>
      </>
    ),
  },
];

const IfaxNavigation = () => {
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
        <h1 className="text-2xl font-bold">Topics: Navigation</h1>
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

export default IfaxNavigation;
