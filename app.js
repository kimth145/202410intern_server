const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.port || 3001;

app.use(cors());

app.get("/strawberry", (req, res) => {
  res.send("🍓");
});

app.get("/apple", (req, res) => {
  res.send("🍎");
});

app.listen(port, () => {
  console.log("connected on server port " + port);
});

module.exports = app;
