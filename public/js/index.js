const moment = require("moment");

const timeElement = document.querySelector(".time");
const dayElement = document.querySelector(".day");

setInterval(() => {
  let time = moment().format("LT");
  let day = moment().format("ddd, D MMM");
  timeElement.innerHTML = time;
  dayElement.innerHTML = day;
}, 1);
