import { useEffect, useState } from "react";
import Nav from "../navbar/Nav";
import { motion } from "framer-motion";
import "./styles.css";
import Accordion from "../Accordion";

import img1 from "../../assets/ifax/sending/img1.webp";
import img2 from "../../assets/ifax/sending/img2.webp";
import img3 from "../../assets/ifax/sending/img3.webp";
import img4 from "../../assets/ifax/sending/img4.webp";
import img5 from "../../assets/ifax/sending/img5.webp";
import img6 from "../../assets/ifax/sending/img6.webp";
import img7 from "../../assets/ifax/sending/img7.webp";
import img8 from "../../assets/ifax/sending/img8.webp";
import img9 from "../../assets/ifax/sending/img9.webp";
import img10 from "../../assets/ifax/sending/img10.webp";
import img11 from "../../assets/ifax/sending/img11.webp";
import img12 from "../../assets/ifax/sending/img12.webp";
import img13 from "../../assets/ifax/sending/img13.webp";
import img14 from "../../assets/ifax/sending/img14.webp";
import img15 from "../../assets/ifax/sending/img15.webp";
import img16 from "../../assets/ifax/sending/img16.webp";
import img17 from "../../assets/ifax/sending/img17.webp";
import img18 from "../../assets/ifax/sending/img18.webp";
import img19 from "../../assets/ifax/sending/img19.webp";
import img36 from "../../assets/ifax/account/img36.webp";
import img37 from "../../assets/ifax/account/img37.webp";

const topics = [
  {
    title: "How to Bulk Upload Contacts for Fax Broadcasts",
    content: (
      <>
        <p>
          With iFax, you can add contacts manually or import them in bulk. Let’s
          say you have a long list of campaign subscribers. To add them to your
          broadcast list in one go, you need to follow these steps:
        </p>
        <p>
          1. Log in to your iFax web account. If you are not yet an iFax user,
          simply sign up for free or pay for a subscription.
        </p>
        <p>2. On your dashboard, go to Tools {">"} Broadcast Fax.</p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img1} alt="" />
        <p className="mt-6">
          3. On the lower right of the screen, click New Broadcast List, then
          select Upload CSV.
        </p>
        <p>
          4. Click Choose File and select the CSV file you want to upload from
          your local folder. Select Import.
        </p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img2} alt="" />
        <p className="mt-6">
          5. Label your new broadcast list. Review the data you uploaded. Our
          import tool will automatically check if the fax numbers listed are
          valid.
        </p>
        <p>
          6. If there are any invalid numbers, you must update them manually
          before you can click Save.
        </p>
        <p>A few things to remember:</p>
        <ul className="list-disc pl-8">
          <li>
            CSV stands for comma-separated values. You can export this file from
            document applications that can store data in tabular form, like
            Microsoft Excel, Google Sheets, and LibreOffice Calc. You can only
            upload one CSV file at a time.
          </li>
          <li>
            You should always include the area code, three-digit prefix, and at
            least four unique digits when listing fax numbers.
          </li>
          <li>
            If you are fax blasting to an international audience, always include
            the country codes without the +. Follow this format: 1 (314)
            123-4567
          </li>
        </ul>
        <p className="mt-6">
          When importing contacts in bulk, you must ensure that the CSV fields
          are in the correct order starting with the fax number, first name, and
          last name. If you want to add custom fields for email addresses and
          phone numbers, you must place them after the last name.
        </p>
        <p>
          Note that you can only add up to 10 custom fields. Otherwise, the
          exceeding fields won’t show up, and you’ll have to redo your upload.
        </p>
      </>
    ),
  },
  {
    title: "How to cancel or reschedule a fax broadcast",
    content: (
      <>
        <p>
          Suppose you have forgotten something and want to make changes to your
          scheduled fax broadcast. To reschedule or cancel the fax broadcast,
          here’s how to do it:
        </p>
        <ul className="list-decimal pl-8">
          <li>View your faxes on your dashboard.</li>
          <li>Hover over the scheduled fax broadcast you wish to revise.</li>
          <li>
            Select your preferred action: reschedule, cancel, or send now.
          </li>
        </ul>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img3} alt="" />
        <p className="mt-6">
          How do you know that you’ve successfully scheduled or rescheduled a
          fax? A snack bar will appear, confirming that your action has been
          completed. Whether it’s a single standard fax or bulk fax broadcast,
          iFax makes sure that your documents get to the right people without
          any delay.
        </p>
      </>
    ),
  },
  {
    title: "How to reschedule a fax",
    content: (
      <>
        <p>Go to your dashboard, where you will see your scheduled faxes.</p>
        <p>
          Click on the three vertical dots beside your scheduled faxes. You can
          choose from three options: Send now, Reschedule, or Cancel scheduling.
        </p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img4} alt="" />
        <p className="mt-6">1. Reschedule a fax</p>
        <p className="mt-6">
          To send your fax at another time and date, select Reschedule. This
          action will open the same window that appeared when you initially
          scheduled your fax. Click Save after selecting a new time and date.
        </p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img5} alt="" />
        <p className="mt-6">2. Send a fax now</p>
        <p className="mt-6">
          If you choose to Send now, your fax broadcast will be sent to your
          recipients immediately after you click Yes.
        </p>
        <p>3. Cancel a scheduled fax</p>
        <p className="mt-6">
          To stop the transmission of a fax that has already been scheduled,
          select Cancel schedule. Then, click Yes.
        </p>
      </>
    ),
  },
  {
    title: "How to schedule a fax",
    content: (
      <>
        <p>
          1. On your dashboard, click the New Fax button on the bottom right.
        </p>
        <p>
          2. A pop-out window will appear for your New Fax. Select the
          recipient’s fax number from your contact list. You can select multiple
          recipients for the same fax.
        </p>
        <p>
          3. Compose your message and attach any necessary documents. Then,
          click on the drop-down arrow beside Delivery time, which you can see
          at the top of your fax.
        </p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img6} alt="" />
        <p className="mt-6">
          4. Select Scheduled send, then enter the date and time you would like
          your fax sent.
        </p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img7} alt="" />
        <p className="mt-6">
          5. Once you have selected a delivery time for your fax, click on the
          Scheduled send button at the bottom of your fax.
        </p>
        <p>
          6. You will be redirected to your dashboard, where you can see the
          status of your faxes. Now, you can rest easy knowing that your
          important documents are on their way to the right people.
        </p>
      </>
    ),
  },
  {
    title: "How to Send a One-Time Fax Link via Email CC",
    content: (
      <>
        <p>1. Click on Send Fax</p>
        <p>2. Click on the kebab icon at the top right corner</p>
        <p>3. Select CC via email</p>
        <p>4. Add the email that needs to be CC’d into the fax</p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img8} alt="" />
        <p className="mt-6">
          5. After uploading your document for faxing and updating the cover
          page, click on send
        </p>
      </>
    ),
  },
  {
    title: "How to add custom fields to PDF attachments",
    content: (
      <>
        <p>
          With iFax, you can attach documents in different formats, including
          PDFs. You can personalize these attachments by adding fax broadcast
          fields. For example, if you’d like to insert your recipient’s email
          information from the broadcast list into your PDF, all you need to do
          is add the email field. There’s no need to type the actual email
          address.
        </p>
        <p>Here’s how it works:</p>
        <p>1. Go to Tools {">"} Broadcast Fax and select an existing list.</p>
        <p>
          2. Click Add Field to include a new row of information for each
          contact.
        </p>
        <p>
          3. Populate each field based on the details provided by your
          recipient.
        </p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img9} alt="" />
        <p className="mt-6">
          4. Click Save, then hover over the updated list and click Send Fax.
        </p>
        <p>5. Fill out the cover page with the required information.</p>
        <p>6. Click the clip icon to add an attachment.</p>
        <p>7. Select the PDF file that you wish to attach.</p>
        <p>8. Drag and drop the broadcast list fields into the document.</p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img10} alt="" />
        <p className="mt-6">9. Click Save, then proceed to send your fax.</p>
      </>
    ),
  },
  {
    title: "How to add a customs field to a broadcast list",
    content: (
      <>
        <p>With custom fields can create broadcast lists with these fields:</p>
        <ul className="list-disc pl-8">
          <li>first name</li>
          <li>last name</li>
          <li>fax number</li>
          <li>location</li>
          <li>age</li>
          <li>gender</li>
        </ul>
        <p className="mt-6">Here’s how to do it:</p>
        <p>1. Go to Tools {">"} Broadcast Fax.</p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img36} alt="" />
        <p className="mt-6">
          2. Click New Broadcast List, then choose between the two available
          options. You can import a CSV file of your existing contacts or create
          a new list from scratch.
        </p>
        <p>
          3. Label your new broadcast list and fill out the standard fields with
          the required details.
        </p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img37} alt="" />
        <p className="mt-6">
          4. Click Add Field. Enter the information that you’d like to include.
          You can enter specific details like email address, location, or
          organization.
        </p>
        <p>5. Click Save to apply the changes.</p>
        <p>
          Note that this feature is only available if you subscribe to iFax Pro.
        </p>
      </>
    ),
  },
  {
    title:
      "How to Send a Fax to multiple recipients in bulk through Broadcast Fax",
    content: (
      <>
        <p>1. From the left menu, go to Tools {">"} Broadcast Fax.</p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img11} alt="" />
        <p className="mt-6">2. Create a broadcast list</p>
        <p>3. Select a broadcast list.</p>
        <p>
          4. Hover over the broadcast list, then click the Send Fax button right
          next to it.
        </p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img12} alt="" />
        <p className="mt-6">5. Compose a fax blast message.</p>
        <p>
          6. Fill out the required fields in the fax cover sheet, attach the
          documents for mass faxing, and click Send.
        </p>
      </>
    ),
  },
  {
    title: "How to Send a Fax from your Email",
    content: (
      <>
        <p>
          1. Provided that you already use iFax as your online fax service and
          you use the Pro tier, here’s how to use the email-to-fax feature:
        </p>
        <p>2. Open your email Gmail, Outlook, or Yahoo account.</p>
        <p>
          3. Compose a new email. In the “To” field, put “send@ifaxapp.com.”
        </p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img13} alt="" />
        <p className="mt-6">
          4. In the subject field, fill in the fax number of the recipient. Do
          not include any spaces and dashes.
        </p>
        <p>5. Enter details in the message section.</p>
        <p>
          6. Attach files like PDFs and Word documents, just like you would in a
          regular email.
        </p>
        <p>
          7. Click Send. You’ll get a notification once the fax is delivered
          successfully.
        </p>
        <p>Note: this feature is also HIPAA compliant.</p>
      </>
    ),
  },
  {
    title: "How to set the default paper size",
    content: (
      <>
        <p>
          1. After clicking Compose Fax, click the three dots icon at the
          top-right corner of the compose window.
        </p>
        <p>2. Select Page Size.</p>
        <p>3. Set the paper size to Letter or A4.</p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img14} alt="" />
        <p className="mt-6">
          4. Alternatively, you can go to Account Settings {">"} General {">"}{" "}
          Preferences.
        </p>
        <p>5. Select your desired paper size under Page Options.</p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img15} alt="" />
      </>
    ),
  },
  {
    title: "How to send a Fax",
    content: (
      <>
        <p>1. Log in to your iFax web dashboard.</p>
        <p>2. Click on “New Fax” at the bottom right corner of the screen.</p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img16} alt="" />
        <p className="mt-6">
          3. Input the Recipient Fax Number, name of recipient, your name,
          subject, and comments (optional)
        </p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img17} alt="" />
        <p className="mt-6">
          4. Select from different templates available by clicking on the left
          or right arrow keys
        </p>
        <p>
          5. Drop document to be faxed in the blue box area underneath the cover
          page
        </p>
        <p>6. Click Send.</p>
      </>
    ),
  },
  {
    title: "How to change the caller ID for outgoing faxes",
    content: (
      <>
        <p>1. Click New Fax {">"} Compose Fax.</p>
        <p>
          2. Click the three dots icon at the top-right of the Compose window.
        </p>
        <p>3. From the drop-down list, hover over the Caller ID option.</p>
        <p>
          4. Set your desired Outbound Fax Caller ID. Our web app will
          automatically save the changes you made.
        </p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img18} alt="" />
        <p className="mt-6">
          You can update the caller ID based on how many fax numbers you own.
          This way, it will be easier for recipients to decide whether to accept
          or reject the message based on the fax number shown.
        </p>
      </>
    ),
  },
  {
    title: "How to adjust the fax image quality",
    content: (
      <>
        <p>1. From your iFax dashboard, click New Fax {">"} Compose Fax.</p>
        <p>
          2. Upload your document. Once uploaded, click the drop-down option for
          adjusting fax quality at the top of the compose window (as shown in
          the image below).
        </p>
        <p>3. Choose any of these three options: basic, standard, and fine.</p>
        <img className="w-full max-w-[80%] m-auto mt-6" src={img19} alt="" />
        <p className="mt-6">
          Note: Adjusting the fax image quality may incur additional charges.
          Prices may vary depending on the recipient’s country. To get an
          estimate of how much it will cost per page, go to Account Settings{" "}
          {">"} Preferences. Under Quality, select your recipient’s country. You
          may view the price per page for basic, standard, and fine faxes on the
          drop-down menu.
        </p>
      </>
    ),
  },
];

const IfaxSendingFaxes = () => {
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
        <h1 className="text-2xl font-bold">Topics: Sending Faxes</h1>
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

export default IfaxSendingFaxes;
