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

function formatHours(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${hours}:${minutes}`;
}



function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let time = new Date();
let today = document.querySelector("#date");
today.innerHTML = formatDate();


// Date functions - END




// Search API 

function getWeather(response) {
  document.querySelector("#current-city-1").innerHTML = response.data.name;
  document.querySelector("#current-city-2").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp) + "°<small>C</small>";
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
  iconElement.setAttribute (
    "alt", response.data.weather[0].description
  );
  celsiusTemperature = response.data.main.temp;
}



function getForecast(response){
let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = null;
  let forecast = null;
  for (let index = 0; index < 5; index++) {
    forecast = response.data.list[index];
    forecastElement.innerHTML += `<div class="next-days col-2 rounded-3 border sp-1">
     <p class="short-date"><span>${formatHours(forecast.dt * 1000)}</span></p>
    <p><img
        src="http://openweathermap.org/img/wn/${
          forecast.weather[0].icon
        }@2x.png"
      />
      <br />${Math.round(forecast.main.temp)}°<small>C</small>
            </p>
           
          </div>`;
}
}

function searchCity(city) {
  let apiKey = "c3a45ccf88ff19c1e83029ef1f84c87f";
  let apiDomain = "https://api.openweathermap.org/data/2.5/";
  let apiUrl = `${apiDomain}weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(getWeather); 
  apiUrl = `${apiDomain}forecast?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(getForecast);
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
  temperatureElement.innerHTML = Math.round(farenheitTemperature) + "°<small>F</small>";
 }

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature) + "°<small>C</small>";
 }


let farenheitLink = document.querySelector("#farenheit-link");
farenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);