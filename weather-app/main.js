import "./style.css";
import fetchData from "./src/helpers/fetchData";
import displayData from "./src/helpers/displayData";
import closeBox from "./src/helpers/closeBox";
import opendescriptionBox from "./src/helpers/opendescriptionBox";
import gobackButton from "./src/helpers/gobackButton";

async function main() {
  const location = "Manila";
  const location_input = document.getElementById("loc-input");
  const userLocation = location_input.textContent;
  const apiKey = "dcd6046ddeb23f20f5c953f9d404473d";
  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
  const weatherIcon = `https://openweathermap.org/img/wn/11d.png`;

  closeBox();
  opendescriptionBox();
  const weatherData = await fetchData(weatherApiUrl);
  displayData(weatherData);
  console.log(weatherData);
}

const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", () => {
  main();
});

const backBtn = document.getElementById("back-arrow");
backBtn.addEventListener("click", gobackButton);
