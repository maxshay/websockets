import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Test = () => {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <div className="text-center w-100">
        Test Page
        <div className="mt-3">
          <Link to="/">
            <button
              type="button"
              className="btn btn-warning text-white user-select-none"
            >
              Go back home
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Test;
