import React from "react";
import { motion } from "framer-motion";
import './PartnerShowcase.css';

const PartnerShowcase = () => {
  return (
    <motion.section
      className="partner-section"
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="partner-container">
        {/* Left Text */}
        <motion.div
          className="partner-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img src="/assets/logo1.png" alt="DHL" className="partner-logo-main" />
          <p className="partner-quote">
            Our productivity rates were 78 UPH and we’re currently picking about
            150 UPH. That’s a fantastic rate and a fantastic improvement.
          </p>
          <p className="partner-name">Mike Nowell</p>
          <p className="partner-title">General Manager, DHL Supply Chain North America</p>
        </motion.div>

        {/* Right Logos */}
        <motion.div
          className="partner-logos"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.img src="/assets/logo1.png" alt="DHL" className="partner-logo logo-float" />
          <motion.img src="/assets/logo2.png" alt="Kenco" className="partner-logo logo-float" />
          <motion.img src="/assets/logo3.png" alt="CEVA" className="partner-logo logo-float" />
          <motion.img src="/assets/logo4.png" alt="Radial" className="partner-logo logo-float" />
          <motion.img src="/assets/logo5.png" alt="Cardinal" className="partner-logo logo-float" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PartnerShowcase;
