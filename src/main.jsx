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
import CyberSecurity from "./components/pages/CyberSecurity";
import Support from "./components/pages/Support";
import Footer from "./components/Footer";
import MultiFunctionalProductServices from "./components/pages/MultiFunctionalProductServices";

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
        <Route path="/cybersecurity" element={<CyberSecurity />} />
        <Route path="/support" element={<Support />} />
        <Route
          path="/multifunctional"
          element={<MultiFunctionalProductServices />}
        />
      </Routes>
      <Footer />
    </Router>
  </>
);
