const express = require("express");
require("newrelic");

const app = express();

app.use((req, res, next) => {
  console.log("here we came");
  next();
});
app.use((req, res, next) => {
  console.log(arguments);
  console.log("here we came into second one");
  next();
});

app.use("/", (req, res) => {
  console.log("we are in / root");
  res.s.json({ hello: "world" });
});

console.log("hello this is the tric");

app.listen(4000, (err, response) => {
  if (err) {
    console.log("error", err);
  } else {
    console.log("server is connected to port" + 4000);
  }
});
