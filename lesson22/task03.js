async function printWeather(latitude, longitude) {
  fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`,
  )
    .then((response) => response.json())
    .then((d) => {
      console.log("Windspeed: " + d.current_weather.windspeed);
      console.log("Temperature: " + d.current_weather.temperature);
    })
    .catch((err) => console.log(err));
}

let latitude = 44.49;
let longitude = 20.27;

printWeather(latitude, longitude);

// checking north pole

console.log("--------checking north pole----------------");
latitude = 90;
longitude = 0;
printWeather(latitude, longitude);

console.log("--------checking south pole----------------");
latitude = -90;
longitude = 0;
printWeather(latitude, longitude);
