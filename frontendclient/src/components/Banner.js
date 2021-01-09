import React from "react";

import websocketImage from "../imgs/websocket.png";

const Banner = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <img src={websocketImage} className="img-fluid" alt="ws" />
    </div>
  );
};

export default Banner;
