// Date functions

function formatDate() {
  let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
  let day = days[time.getDay()];
  let month = months[time.getMonth()];
  let date = time.getDate();
  let hour = time.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = time.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let sentence = `${day}, ${month} ${date} • ${hour}:${minutes}`;
  return sentence;
}

function formatShortDate1() {
  let shortdays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  let shortday = shortdays[time.getDay()+1];
  let date = time.getDate()+1;
  let sentence = `${shortday}. ${date}`;
  return sentence;
}
function formatShortDate2() {
  let shortdays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  let shortday = shortdays[time.getDay()+2];
  let date = time.getDate()+2;
  let sentence = `${shortday}. ${date}`;
  return sentence;
}
function formatShortDate3() {
  let shortdays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  let shortday = shortdays[time.getDay()+3];
  let date = time.getDate()+3;
  let sentence = `${shortday}. ${date}`;
  return sentence;
}
function formatShortDate4() {
  let shortdays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  let shortday = shortdays[time.getDay()+4];
  let date = time.getDate()+4;
  let sentence = `${shortday}. ${date}`;
  return sentence;
}
function formatShortDate5() {
  let shortdays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  let shortday = shortdays[time.getDay()+5];
  let date = time.getDate()+5;
  let sentence = `${shortday}. ${date}`;
  return sentence;
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let time = new Date();
let today = document.querySelector("#date");
today.innerHTML = formatDate();
let day1 = document.querySelector("#day-1")
day1.innerHTML = formatShortDate1();
let day2 = document.querySelector("#day-2")
day2.innerHTML = formatShortDate2();
let day3 = document.querySelector("#day-3")
day3.innerHTML = formatShortDate3();
let day4 = document.querySelector("#day-4")
day4.innerHTML = formatShortDate4();
let day5 = document.querySelector("#day-5")
day5.innerHTML = formatShortDate5();

// Date functions - END




// Search API 

function getWeather(response) {
  document.querySelector("#current-city-1").innerHTML = response.data.name;
  document.querySelector("#current-city-2").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp) + "°C";
    document.querySelector("#weather-description").innerHTML = response.data.weather[0].description;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  let iconElement = document.querySelector("#weather-icon")
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`
  );
  celsiusTemperature = response.data.main.temp;
}

function searchCity(city) {
    let apiKey = "c3a45ccf88ff19c1e83029ef1f84c87f";
  let apiDomain = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiDomain}?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(getWeather);
}

function refresh(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function searchLocation(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "0b05732c31f31d299fde388ef85a7016";
  let apiDomain = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiDomain}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(getWeather);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", refresh);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("Lille");

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let farenheitTemperature = (celsiusTemperature *9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(farenheitTemperature) + "°F";
 }

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature) + "°C";
 }


let farenheitLink = document.querySelector("#farenheit-link");
farenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);