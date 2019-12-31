import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";
import * as hr from "./hr.js";

const timeLabel = document.getElementById("timeLabel");
const weekdayLabel = document.getElementById("weekdayLabel");
const dateLabel = document.getElementById("dateLabel");
const testLabel = document.getElementById("meridiemLabel");

const todayDate = new Date();
const todayWeekday = util.toWeekday(todayDate.getDay());
const todayDay = todayDate.getDate();
const todayMonth = util.toMonth(todayDate.getMonth());

clock.granularity = "seconds";
clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  let mins = util.zeroPad(today.getMinutes());
  let secs = util.zeroPad(today.getSeconds());
  /*
  if (hours > 11) {
    meridiemLabel.text = "PM";
  } else {
    meridiemLabel.text = "AM";
  }
  */
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  timeLabel.text = `${hours}:${mins}`;
}

function displayHR(data) {
  //testLabel.text = `${data}`;
}
hr.getHR(displayHR);

weekdayLabel.text = `${todayWeekday}`;
dateLabel.text = `${todayMonth} ${todayDay}`;


// TEMPORARY EXAMPLE DISPLAY
const stepsLabel = document.getElementById("stepsLabel");
const distLabel = document.getElementById("distLabel");
const amLabel = document.getElementById("amLabel");
const hrLabel = document.getElementById("hrLabel");
const batteryLabel = document.getElementById("batteryLabel");
stepsLabel.text = "10,802 steps";
distLabel.text = "4.38 mi";
amLabel.text = "45 min";
hrLabel.text = "70 bpm";
batteryLabel.text = "80%";
