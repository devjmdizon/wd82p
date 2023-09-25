export default function displayData(data) {
  const descriptBox = document.getElementById("descript-box");
  const weatherLabel = document.getElementById("weather-label");
  const temperatureLabel = document.getElementById("temperature-label");

  weatherLabel.textContent = data.weather[0].description;
  return weatherLabel.textContent;
  temperatureLabel.textContent = parseInt(data.main[0].temp - 32 * (5 / 9));
  return temperatureLabel.textContent;
  console.log("weatherLabel.textContent");
  console.log("temperatureLabel.textContent");
}
