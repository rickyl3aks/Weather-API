const btn = document.getElementById("btn");
const input = document.getElementById("input");
const img = document.querySelector(".icon");
const city = document.querySelector(".city");
const country = document.querySelector(".country");
const icon = document.querySelector(".icon");
const temp = document.querySelector(".temp");
const weather = document.querySelector(".weather");

btn.addEventListener("click", (e) => {
  //prevent default CHECK AGAIN!!!
  e.preventDefault();
  getWeather(e);
});
async function getWeather() {
  //get API
  let api =
    // "https://cors-anywhere.herokuapp.com/" + changes in CORS
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    input.value +
    "&APPID=6cdb1a2bc26117586f24e1ce19ff912b&units=metric";
  //fetch API
  const response = await fetch(api);
  const data = await response.json();
  try {
    //get country
    country.innerHTML = `(${data.sys.country})`;
    //get icon
    icon.innerHTML = `<img src="icons/${data.weather[0].icon}.png"/>`;
    //get city
    city.textContent = data.name;
    //get temperature
    temp.innerHTML = `${Math.ceil(data.main.temp)}°`;
    //get weather
    weather.innerHTML = data.weather[0].main;
  } catch (e) {
    temp.innerHTML = "";
    country.innerHTML = "";
    weather.innerHTML = "";
    icon.innerHTML = `<img src="icons/unknown.png" />`;
    city.textContent = "Please insert a city";
  }
}
