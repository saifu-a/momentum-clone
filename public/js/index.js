const moment = require("moment");

const timeElement = document.querySelector(".time");
const dayElement = document.querySelector(".day");

setInterval(() => {
  let time = moment().format("LT");
  let day = moment().format("ddd, D MMM");
  timeElement.innerHTML = time;
  dayElement.innerHTML = day;
}, 1);

const playButton = document.querySelector(".play-button");
const videoElement = document.querySelector("video");
const audioElement = document.querySelector("audio");
const timeContainer = document.querySelector(".time-container");
const weatherContainer = document.querySelector(".weather-container");
const buttonContainer = document.querySelector(".button-container");

playButton.addEventListener("click", () => {
  buttonContainer.classList.add("hide");
  timeContainer.classList.remove("hide");
  weatherContainer.classList.remove("hide");
  videoElement.play();
  audioElement.play();
});
