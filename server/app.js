const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded());

const corsOpts = {
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOpts));

app.get("/", (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the home page!"
  })
})

app.post("/", (req, res, next) => {
  console.log("stuff");
  res.status(200).json(req.body);
})

app.listen(3000, () => {
  console.log("Server started listening on port 3000");
})