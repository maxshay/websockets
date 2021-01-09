const express = require("express");
const app = express();
const config = require("./config");

app.get("/", (req, res) => {
  res.send("<p>Hello World</p>");
});

const server = app.listen(config.port, () => {
  console.log(`Listening on port http://localhost:${config.port}`);
});

const io = require("socket.io")(server, {
  cors: { origin: "*" },
});

const getApiAndEmit = (socket) => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit("message", response);
};

const randomHSL = () => {
  return "hsla(" + ~~(360 * Math.random()) + "," + "70%," + "80%,1)";
};

let interval;
io.on("connection", (socket) => {

  // console.log('room name: ', socket.handshake.query)

  const roomName = socket.handshake.query.room
  console.log('roomName: ', roomName)
  socket.colorVal = randomHSL();
  socket.roomVal = roomName;

  socket.join(roomName);

  console.log("a client connected");
  

  // if (interval) {
  //     clearInterval(interval);
  // }
  // interval = setInterval(() => getApiAndEmit(socket), 1000);

  io.to(roomName).emit('hi')

  socket.on("disconnect", () => {
    console.log("a client disconnected");
    // clearInterval(interval);
  });

  socket.on("message", (message) => {
    io.to(roomName).emit("message", {
      user: socket.id,
      message: message.body,
      color: { color: socket.colorVal },
    });
  });
});
