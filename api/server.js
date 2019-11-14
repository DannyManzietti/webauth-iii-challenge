const express = require("express");
const session = require("express-session");

const UsersRouter = require("../users/userRouter");
const RestrictedRouter = require("../restricted/restrictedRouter");

const server = express();

const sessionConfig = {
  name: "cookie-cookie",
  secret: "shhh!",
  cookie: {
    maxAge: 1000 * 60 * 60,
    secure: false,
    httpOnly: true
  },
  resave: false,
  saveUninitialized: false
};
server.use(express.json());
server.use(session(sessionConfig));
server.use("/api", UsersRouter);
server.use("/api/restricted", RestrictedRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

module.exports = server;
