import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import CommunicationServices from "./components/pages/CommunicationServices";
import ManagedNetwork from "./components/pages/ManagedNetwork";
import WebServices from "./components/pages/WebServices";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/aboutus" element={<AboutUs category="zuid" />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/communication" element={<CommunicationServices />} />
        <Route path="/managednetwork" element={<ManagedNetwork />} />
        <Route path="/webservices" element={<WebServices />} />
      </Routes>
    </Router>
  </>
);
