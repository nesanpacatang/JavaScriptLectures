async function getWeatherData() {
  const apiKey = "1b0d4e056d91c25a4fe8658fd55f3f06";
  const city = "London";

  const url = `https://api.openweather.org/data/2.5/weather?q=${city}&appid=${apikey}`;
}

try {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  console.log("Weather Data", data);
} catch (error) {
  console.log("Error:", error);
}
getWeatherData();
