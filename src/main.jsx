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
import Partners from "./components/pages/Partners";
import News from "./components/pages/News";
import Linkus from "./components/pages/Linkus";
import IfaxAccount from "./components/pages/IfaxAccount";
import Root from "./components/Root";
import IfaxNavigation from "./components/pages/IfaxNavigation";
import IfaxProcessing from "./components/pages/IfaxProcessing";
import IfaxSendingFaxes from "./components/pages/IfaxSendingFaxes";
import Templates from "./components/pages/Templates";
import TermsConditions from "./components/pages/TermsConditions";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/communication" element={<CommunicationServices />} />
        <Route path="/managednetwork" element={<ManagedNetwork />} />
        <Route path="/webservices" element={<Root />}>
          <Route index element={<WebServices />} />
          <Route path="templates" element={<Templates />} />
        </Route>
        <Route path="/cybersecurity" element={<CyberSecurity />} />
        <Route path="/support" element={<Root />}>
          <Route index element={<Support />} />
          <Route path="ifax-account" element={<IfaxAccount />} />
          <Route path="ifax-navigation" element={<IfaxNavigation />} />
          <Route
            path="ifax-processing-received-faxes"
            element={<IfaxProcessing />}
          />
          <Route path="ifax-sending-faxes" element={<IfaxSendingFaxes />} />
        </Route>
        <Route path="/partners" element={<Partners />} />
        <Route path="/news" element={<News />} />
        <Route
          path="/multifunctional"
          element={<MultiFunctionalProductServices />}
        />
        <Route path="/linkus" element={<Linkus />} />
        <Route path="/terms-condition" element={<TermsConditions />} />
      </Routes>
      <Footer />
    </Router>
  </>
);
