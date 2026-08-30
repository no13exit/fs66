async function printWeather() {
    const response = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=44.49&longitude=20.27&current_weather=true');
        console.log(response);

    const json = await response.json(); 
    console.log(json);
    console.log("wind speed " + json.current_weather.windspeed);
    console.log("temperature " + json.current_weather.temperature);
    const res = await JSON.stringify(json);
    console.log(res);
    console.log(JSON.parse(res));
    }
printWeather();