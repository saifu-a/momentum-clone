const express = require("express");
const moment = require("moment");

const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let icon = "fa-cloud-sun-rain";
  let temperature = "31°C";
  let location = "Kolkata";

  res.render("index", {
    icon: icon,
    temperature: temperature,
    location: location,
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started at https://localhost:3000");
});
