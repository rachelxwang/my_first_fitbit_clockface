import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";

const timeLabel = document.getElementById("timeLabel");
const weekdayLabel = document.getElementById("weekdayLabel");
const dateLabel = document.getElementById("dateLabel");
const meridiemLabel = document.getElementById("meridiemLabel");

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
  hours = hours % 12 || 12;
  timeLabel.text = `${hours}:${mins}`;
}

weekdayLabel.text = `${todayWeekday}`;
dateLabel.text = `${todayMonth} ${todayDay}`;