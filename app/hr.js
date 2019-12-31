import { me } from "appbit";
import { HeartRateSensor } from "heart-rate";
import { user } from "user-profile";
import document from "document";

export function getHR(disp) {
  let hr_sensor, heartRate;
  hr_sensor = new HeartRateSensor();
  heartRate = hr_sensor.heartRate;
  disp(heartRate);
}
