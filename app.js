function formatDate(timestamp) {
  let date = new Date(timestamp);

  let dateNumber = date.getDate();
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wendsday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  let months = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Now",
    "Dec",
  ];
  let month = months[date.getMonth()];

  return `${day} ${dateNumber} ${month}, ${hours}:${minutes}`;
}

function showTemperature(response) {
  console.log(response.data);
  let tempElement = document.querySelector("#temperature");
  tempElement.innerHTML = Math.round(response.data.main.temp);

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;

  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);

  let dateElement = document.querySelector("#date");
  dateElement.innerHTML = formatDate(response.data.dt * 1000);

  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribure("alt", response.data.weather[0].description);
}
function search(city) {
 
  let apiKey = "b7a3558dd4231bb7517fc8c9d13c79d4";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let citySearchElement = document.querySelector("#city-search");
  search(citySearchElement.value);
}
search("Kyiv");
let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

function showFahrenheitTemp(event){
event.preventDefault();
let fahrenheitTemp = (10 * 9/5) + 32;
let temperatureElement = document.querySelector("#temperature");
temperatureElement.innerHTML =Math.round(fahrenheitTemp);

}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", showFahrenheitTemp);


