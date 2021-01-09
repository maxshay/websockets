import React from "react";
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
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
  );
};

export default NotFound;
