const apiKye = "d9786a9bcad3d85f937e3c982f898698";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
//   "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";

function toCelsius(temp) {
  //   return (((fahrenheit - 32) * 5) / 9).toFixed(0);
  return (temp - 273.15).toFixed(0);
  //   celsius.toFixed(2)
}

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

const checkWeather = async (city) => {
  const res = await fetch(`${apiUrl}${city}&appid=${apiKye}`);

  if (res.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await res.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      toCelsius(data.main.temp) + " °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    //   update the image weather.main
    // update the image weather.main
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Haze") {
      weatherIcon.src = "images/haze.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    }

    //
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
};

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
