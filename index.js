const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});
app.listen(8090, () => {
  console.log("server up and running");
});
