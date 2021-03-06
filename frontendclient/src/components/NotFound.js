import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <div className="w-100 text-center">
        Page not found <p>: (</p>
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

export default NotFound;
