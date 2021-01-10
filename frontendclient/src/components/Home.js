import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";

const Home = () => {
  const [input, setInput] = useState("");
  const history = useHistory();
  const [errorAlreadyOnce, setErrorAlreadyOnce] = useState(false);

  const toastError = () =>
    toast.error("❗ Room length must be greater than 2", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      bodyClassName: "extra-toast-body",
    });

  const updateInput = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleEnterPressed = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (input.length >= 3) {
      const encoded = encodeURIComponent(input);
      console.log(encoded);
      history.push({ pathname: `/chat/${encoded}` });
    } else {
      if (!errorAlreadyOnce) {
        setErrorAlreadyOnce(true);
        toastError();
      }
    }
  };

  return (
    <motion.div exit={{ opacity: 0 }}>
      <div className="text-white" style={{ marginLeft: "12.5%" }}>
        <a onClick={() => history.push({ pathname: "/test" })}>test page</a>
      </div>
      <div className="d-flex justify-content-center">
        <form className="w-75">
          <div className="form-row">
            <div className="col my-1">
              <label className="sr-only" htmlFor="formGroupExampleInput">
                Example label
              </label>
              <input
                onChange={(e) => updateInput(e)}
                type="text"
                className="form-control mana-field"
                id="formGroupExampleInput"
                placeholder="Enter room name"
                value={input}
                autoComplete="off"
                onKeyDown={(e) => handleEnterPressed(e)}
              />
            </div>
            <div className="col-auto my-1">
              <button
                type="button"
                className="btn btn-warning text-white user-select-none"
                onClick={handleSubmit}
              >
                Connect!
              </button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </motion.div>
  );
};

export default Home;
