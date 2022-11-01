function showTemperature(response){
    console.log(response.data)
    let tempElement = document.querySelector("#temperature");
    tempElement.innerHTML =Math.round(response.data.main.temp);
    
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.name;

    let descriptionElement = document.querySelector("#description");
    descriptionElement.innerHTML = response.data.weather[0].description;

}

let apiKey = "b7a3558dd4231bb7517fc8c9d13c79d4";
let apiUrl =
  `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=${apiKey}&units=metric`;

  console.log(apiUrl);
axios.get(apiUrl).then(showTemperature);