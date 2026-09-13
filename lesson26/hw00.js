import axios from "axios";


async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return users;
}

// const users = await getUsers();
// // works
// // console.log(users);
// console.table(users);


function getUsersData(users) {
  return users.map(user => {
    return {
      name: user.name,
      phone: user.phone,
      lat: user.address.geo.lat,
      lng: user.address.geo.lng
    };
  });
}

// const usersData = getUsersData(users);

// console.table(usersData);


async function getWeather(lat, lng) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,precipitation,wind_speed_10m`;

  const response = await axios.get(url);

  return {
    temperature: response.data.current.temperature_2m,
    wind: response.data.current.wind_speed_10m,
    precipitation: response.data.current.precipitation
  };
}

// const weather = await getWeather(
//   usersData[0].lat,
//   usersData[0].lng
// );

// console.log(weather);

async function addWeatherToUsers(users) {
  const usersWithWeather = users.map(async user => {
    const weather = await getWeather(user.lat, user.lng);

    return {
      ...user,
      weather: weather
    };
  });

  return await Promise.all(usersWithWeather);
}


const users = await getUsers();

const usersData = getUsersData(users);

const usersWithWeather = await addWeatherToUsers(usersData);

function getHottestUser(users) {
  let hottestUser = users[0];

  for (let i = 1; i < users.length; i++) {
    if (users[i].weather.temperature > hottestUser.weather.temperature) {
      hottestUser = users[i];
    }
  }

  console.log(`Name: ${hottestUser.name}`);
  console.log(`Phone: ${hottestUser.phone}`);
  console.log(`Temperature: ${hottestUser.weather.temperature} °C`);
}

getHottestUser(usersWithWeather);

// console.log(usersWithWeather);