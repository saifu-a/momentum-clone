require("dotenv").config();
const express = require("express");
const https = require("https");
const moment = require("moment");

const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let icon = "fa-cloud-sun-rain";
  let temperature;
  let location = "Kolkata";

  const query = location;
  const apiKey = process.env.OPENWEATHERMAP_API_KEY;
  const unit = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
    apiKey +
    "&units=" +
    unit;

  https.get(url, (response) => {
    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      temperature = Math.round(weatherData.main.temp);
      res.render("index", {
        icon: icon,
        temperature: temperature,
        location: location,
      });
    });
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started at https://localhost:3000");
});
