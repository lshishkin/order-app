const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const order = require("./routes/order"); //new addition
const InitiateMongoServer = require("./config/db");

// Initiate Mongo Server
InitiateMongoServer();

const app = express();

app.use(cors());

// PORT
const PORT = process.env.PORT || 3001;

// Middleware
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use("/order", order);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
