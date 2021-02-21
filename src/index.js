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

