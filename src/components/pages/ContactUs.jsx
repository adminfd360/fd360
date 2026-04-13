import React, { useRef, useState } from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import fd360contactus from "../../assets/fd360-contactus.jpg";
import Nav from "../navbar/Nav";
import { motion } from "framer-motion";
import fd360logo from "../../assets/FD360-with-website.png";
import fd360veteran from "../../assets/fd360Veteranandownedlogo.png";
import emailjs from "@emailjs/browser";
import "./styles.css";

/** Adjust if your actual marketing volume differs (shown for carrier / email disclosure). */
const MARKETING_EMAILS_MAX_PER_MONTH = 4;
const MARKETING_SMS_MAX_PER_MONTH = 6;

const ContactUs = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [agreeMarketingEmail, setAgreeMarketingEmail] = useState(false);
  const [smsOptIn, setSmsOptIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (smsOptIn && !form.phone.trim()) {
      alert(
        "To receive optional SMS updates, please enter your mobile phone number, or uncheck SMS updates.",
      );
      return;
    }
    setLoading(true);
    emailjs
      .send(
        "service_scn7kmj",
        "template_tnkyo3j",
        {
          from_name: form.name,
          to_name: "Future Digital 360",
          from_email: form.email,
          to_email: "info@futuredigital360.com",
          message: form.message,
          phone: form.phone.trim() || "Not provided",
          sms_opt_in: smsOptIn ? "Yes" : "No",
          email_marketing_opt_in: agreeMarketingEmail ? "Yes" : "No",
        },
        "kIFlBerOhBTDlxfoC",
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thank you for reaching out! We'll get back to you as soon as possible.",
          );
          setForm({ name: "", email: "", phone: "", message: "" });
          setAgreeMarketingEmail(false);
          setSmsOptIn(false);
        },
        (error) => {
          setLoading(false);
          alert("Something went wrong. Please try again later.");
          console.log(error);
        },
      );
  };

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
        className="bg-gray-200"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="relative w-full h-[600px]">
          <img
            src={fd360contactus}
            alt="future digital 360 contact us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0  flex items-center justify-center">
            <div className="text-green-400 text-center">
              <motion.h1
                className="md:text-6xl text-4xl font-bold mb-10"
                id="title"
                initial={{ opacity: 0, x: "-100vh" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
              >
                Contact Us
              </motion.h1>
              <motion.div
                className="md:flex text-black font-bold mt-4 justify-center items-center"
                initial={{ opacity: 0, x: "100vh" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
              >
                <div className="flex text-black font-bold mt-4 justify-center items-center">
                  <FiPhone className="mr-2" />
                  <a href="tel:855-553-3360">
                    <p className="mr-5">855-55-FD360 (3-3360)</p>
                  </a>
                </div>
                <div className="flex text-black font-bold mt-4 justify-center items-center">
                  <FiMail className="mr-2 " />
                  <a href="mailto:info@futuredigital360.com" target="_blank">
                    <p>info@futuredigital360.com</p>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="flex justify-center p-5 bg-gradient-to-r from-[#d2ffff] to-[#0694c6]">
          <div className="flex items-center justify-center mx-4">
            <motion.img
              src={fd360logo}
              alt="fd360 logo"
              className=" h-24"
              initial={{ opacity: 0, x: "300vh" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
            />
          </div>
          <div className="flex items-center justify-center mx-4">
            <motion.img
              src={fd360veteran}
              alt="fd360 veteran"
              className=" h-24"
              initial={{ opacity: 0, x: "-300vh" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-gradient-to-r from-[#d2ffff] to-[#0694c6]">
          <div className="flex items-center justify-center mb-4">
            <FaMapMarkerAlt size={24} />
            <p className="ml-2">
              <br />
              Scottsdale AZ 85258
            </p>
          </div>
          <div className="flex items-center justify-center mb-4">
            <FiPhone size={24} />
            <p className="ml-2">
              Local number 480.809.6328
              <br />
              855-55-FD360 (3-3360)
            </p>
          </div>
          <a href="mailto:info@futuredigital360.com" target="_blank">
            <div className="flex items-center justify-center mb-4">
              <FiMail size={24} />
              <p className="ml-2">info@futuredigital360.com</p>
            </div>
          </a>

          <div className="w-full max-w-6xl mx-auto px-4 pb-10">
            <div className="rounded-2xl bg-white/80 shadow-lg shadow-slate-900/10 border border-white/90 ring-1 ring-slate-200/60 p-6 sm:p-8 md:p-10">
              <form ref={formRef} onSubmit={handleSubmit} className="w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 lg:items-stretch">
                  {/* Left: fields — message area grows to balance column height */}
                  <div className="min-w-0 flex flex-col h-full min-h-0">
                    <label
                      className="mb-1.5 font-medium text-slate-800"
                      htmlFor="contact-name"
                    >
                      Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full p-2.5 mb-3 border border-slate-300 rounded-lg bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
                    />
                    <label
                      className="mb-1.5 font-medium text-slate-800"
                      htmlFor="contact-email"
                    >
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="w-full p-2.5 mb-3 border border-slate-300 rounded-lg bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
                    />
                    <label
                      className="mb-1.5 font-medium text-slate-800"
                      htmlFor="contact-phone"
                    >
                      Phone number{" "}
                      <span className="text-slate-500 font-normal text-sm">
                        (optional)
                      </span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Mobile number (required only if you opt in to SMS below)"
                      autoComplete="tel"
                      className="w-full p-2.5 mb-3 border border-slate-300 rounded-lg bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
                    />
                    <div className="flex flex-col flex-1 min-h-[200px]">
                      <label
                        className="mb-1.5 font-medium text-slate-800 shrink-0"
                        htmlFor="contact-message"
                      >
                        Message <span className="text-red-600">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={6}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Enter your message"
                        required
                        className="w-full flex-1 min-h-[200px] p-2.5 border border-slate-300 rounded-lg bg-white text-slate-900 placeholder:text-slate-400 resize-y focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500 lg:min-h-[280px]"
                      />
                    </div>
                  </div>

                  {/* Right: disclosures + checkboxes aligned to bottom of row */}
                  <div className="min-w-0 flex flex-col h-full min-h-0 gap-4">
                    <div
                      className="text-sm text-slate-800 space-y-3 p-4 sm:p-5 bg-slate-50 border border-slate-200 rounded-xl shrink-0"
                      role="region"
                      aria-label="Marketing and SMS disclosures"
                    >
                      <p className="font-semibold text-slate-900">
                        Marketing email disclosures
                      </p>
                      <p>
                        If you choose to hear from us by email, you can expect
                        messages such as newsletters, product and service
                        announcements, promotional offers, event invitations,
                        and account-related notices from Future Digital 360 and
                        its affiliates.
                      </p>
                      <p>
                        We send at most {MARKETING_EMAILS_MAX_PER_MONTH}{" "}
                        marketing emails per month on average.
                      </p>

                      <p className="font-semibold text-slate-900 pt-2">
                        Optional SMS updates
                      </p>
                      <p>
                        You do not need to provide a phone number or opt in to
                        SMS to contact us. If you <strong>want</strong> text
                        messages, enter your mobile number in the field on the
                        left and check the box below. SMS may include
                        promotions, service reminders, and short operational
                        updates. Message frequency varies; we send at most{" "}
                        {MARKETING_SMS_MAX_PER_MONTH} marketing or promotional
                        SMS messages per month.{" "}
                        <strong>Standard SMS and Data rates will apply.</strong>
                      </p>

                      <p>
                        You can unsubscribe or update your preferences at any
                        time. Your personal data will be processed in accordance
                        with the{" "}
                        <Link
                          to="/privacy-policy"
                          className="text-cyan-700 underline font-medium hover:text-cyan-900"
                        >
                          Future Digital 360 Privacy Policy
                        </Link>
                        .
                      </p>
                    </div>

                    <div className="mt-auto space-y-3 pt-1">
                      <label className="flex items-start gap-2.5 text-sm text-slate-800 cursor-pointer leading-snug">
                        <input
                          type="checkbox"
                          className="mt-0.5 shrink-0 h-4 w-4 rounded border-slate-400 text-cyan-600 focus:ring-cyan-500"
                          checked={agreeMarketingEmail}
                          onChange={(e) =>
                            setAgreeMarketingEmail(e.target.checked)
                          }
                        />
                        <span>
                          <span className="font-medium text-slate-900">
                            By completing and submitting this form, I agree to
                            receive marketing emails from Future Digital 360 and
                            its affiliates.
                          </span>{" "}
                          Check this box only if you want marketing emails; it
                          is not required to contact us.
                        </span>
                      </label>

                      <label className="flex items-start gap-2.5 text-sm text-slate-800 cursor-pointer leading-snug">
                        <input
                          type="checkbox"
                          className="mt-0.5 shrink-0 h-4 w-4 rounded border-slate-400 text-cyan-600 focus:ring-cyan-500"
                          checked={smsOptIn}
                          onChange={(e) => setSmsOptIn(e.target.checked)}
                        />
                        <span>
                          I want to receive optional SMS messages from Future
                          Digital 360 as described above (not required to submit
                          this form).
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200 flex justify-center">
                  <button
                    type="submit"
                    className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2.5 px-12 rounded-lg w-full max-w-sm sm:max-w-none sm:w-auto sm:min-w-[12rem] shadow-sm transition-colors"
                  >
                    {loading ? "Sending..." : "Send"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ContactUs;
