import { renderDaily, renderFiveDay } from './views';

// Create two functions: daily  and 5 day weather

async function dailyForecast(city) {
  const endPoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=imperial`;
  try {
    const response = await fetch(endPoint);
    const data = await response.json();
    // console.log(data);
    return renderDaily(data);
  } catch (e) {
    console.log(e);
  }
}

async function fiveDayForecast(city) {
  const endPoint = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.API_KEY}&units=imperial`;
  try {
    const response = await fetch(endPoint);
    const data = await response.json();
    // console.log(data);
    return renderFiveDay(data);
  } catch (e) {
    console.log(e);
  }
}

export { dailyForecast, fiveDayForecast };
