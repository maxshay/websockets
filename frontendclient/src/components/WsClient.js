import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import io from "socket.io-client";

import { ToastContainer, toast } from "react-toastify";

import config from "../config";

const connectedToast = () =>
  toast.dark("✅ Connected!", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    bodyClassName: "extra-toast-body",
  });
const disconnectedToast = () =>
  toast.dark("⚠ Disconnected!", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    bodyClassName: "extra-toast-body",
  });

const WsClient = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const ws = useRef(null);
  let { room } = useParams();

  const sendMessage = () => {
    if (input !== "" && input !== undefined) {
      const message = { body: input };
      ws.current.emit("message", message);
      setInput("");
    }
  };

  const updateInput = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  useEffect(() => {
    if (!room) {
      return
    }
    ws.current = io.connect(config.wsPath, {
      query: {
        "room": room
      }
    });

    ws.current.on("connect", () => {
      connectedToast();
    });

    ws.current.on("message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    ws.current.on("disconnect", () => {
      disconnectedToast();
    });

    return () => ws.current.disconnect();
  }, [room]);

  const handleEnterPressed = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <div className="w-75 mx-auto">
        <div className="text-white">{room ? room : '???' }</div>
        <form>
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
                placeholder="Say Something"
                value={input}
                autoComplete="off"
                onKeyDown={(e) => handleEnterPressed(e)}
              />
            </div>
            <div className="col-auto my-1">
              <button
                onClick={() => sendMessage()}
                type="button"
                className="btn btn-warning user-select-none text-white"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="d-flex justify-content-center mt-5">
        <NakedUl className="text-white w-75">
          {messages &&
            messages.map((message) => (
              <li
                key={Math.floor(Math.random() * 31455134551345)}
                style={message.color}
              >
                {message.user} - {message.message}
              </li>
            ))}
        </NakedUl>
      </div>
      <ToastContainer containerId="this-is-toast" />
    </>
  );
};

export default WsClient;

const NakedUl = styled.ul`
  list-style: none;
`;
