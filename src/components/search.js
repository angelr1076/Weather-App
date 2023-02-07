async function getWeather(city) {
  const endPoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
  try {
    const response = await fetch(endPoint);
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

export { getWeather };
