import { renderDaily, renderFiveDay } from './views';
import { makeVisible, makeHidden } from './helpers';

// Create two functions: daily  and 5 day weather
async function dailyForecast(city) {
  // on search, reset the toggle button to fahrenheit
  let checkbox = document.querySelector('.toggle-checkbox');
  checkbox.checked = true;

  const endPoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
  const message = document.querySelector('#msg');
  try {
    const response = await fetch(endPoint);
    const data = await response.json();
    if (response && response.ok) {
      return renderDaily(data);
    } else {
      makeVisible(message);
      message.textContent = 'Please enter a valid search value.';
      return setTimeout(() => {
        makeHidden(message);
        message.textContent = '';
      }, 2000);
    }
  } catch (e) {
    console.log(e);
  }
}

async function fiveDayForecast(city) {
  const endPoint = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.API_KEY}`;
  const message = document.querySelector('#msg');
  try {
    const response = await fetch(endPoint);
    const data = await response.json();
    if (response && response.ok) {
      return renderFiveDay(data);
    } else {
      makeVisible(message);
      message.textContent = 'Please enter a valid search value.';
      return setTimeout(() => {
        makeHidden(message);
        message.textContent = '';
      }, 2000);
    }
  } catch (e) {
    console.log(e);
  }
}

export { dailyForecast, fiveDayForecast };
