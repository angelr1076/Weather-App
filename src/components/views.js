import { format } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';
import { truncate, clearEl } from './helpers';

function renderDaily(obj) {
  const cityContainer = document.querySelector('#cityDiv');
  const dataContainerLeft = document.querySelector('#dailyContainerLeft');
  const dataContainerRight = document.querySelector('#dailyContainerRight');
  clearEl(cityContainer);
  clearEl(dataContainerLeft);
  clearEl(dataContainerRight);
  const weatherString = JSON.stringify(obj);

  if (weatherString) {
    const weatherObj = JSON.parse(weatherString);
    console.log('daily', weatherObj);
    const { dt, main, name, weather } = weatherObj;
    const { temp, feels_like, humidity, temp_min, temp_max } = main;
    const { description, icon } = weather[0];
    const date = new Date(dt * 1000);
    const zonedDate = format(date, 'EEEE LLLL do, yyyy');

    // left daily container
    const cityLi = document.createElement('h1');
    const weatherListLeft = document.createElement('ul');
    const dateLi = document.createElement('li');
    const tempLi = document.createElement('li');
    tempLi.setAttribute('class', 'fahrenheit');
    const weatherDesc = document.createElement('li');
    const weatherIcon = document.createElement('img');

    let tempVal = truncate(temp);
    let tempFeels = truncate(feels_like);
    let tempMin = truncate(temp_min);
    let tempMax = truncate(temp_max);

    // right daily container
    const weatherListRight = document.createElement('ul');
    const feelsLikeLi = document.createElement('li');
    const tempMinMax = document.createElement('li');
    const humidLi = document.createElement('li');

    // set left container el values
    cityLi.textContent = name;
    dateLi.textContent = zonedDate;
    tempLi.innerHTML = `${tempVal}&#176;`;
    weatherDesc.textContent = description;
    weatherIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;

    // set right container el values
    feelsLikeLi.innerHTML = `Feels like: ${tempFeels}&#176;`;

    tempMinMax.innerHTML = `L: ${tempMin}&#176; | H: ${tempMax}&#176;`;
    humidLi.innerHTML = `Humidity: ${humidity}&#x25;`;

    // append to DOM
    cityContainer.appendChild(cityLi);
    weatherListLeft.appendChild(dateLi);
    weatherListLeft.appendChild(tempLi);
    weatherListLeft.appendChild(weatherDesc);
    weatherListLeft.appendChild(weatherIcon);
    weatherListRight.appendChild(feelsLikeLi);
    weatherListRight.appendChild(humidLi);
    weatherListRight.appendChild(tempMinMax);
    // left
    dataContainerLeft.appendChild(weatherListLeft);
    // right
    dataContainerRight.appendChild(weatherListRight);
  }
}

function renderFiveDay(obj) {
  const dataContainer = document.querySelector('#fiveDayContainer');
  clearEl(dataContainer);
  const weatherString = JSON.stringify(obj);

  if (weatherString) {
    const weatherObj = JSON.parse(weatherString);
    console.log('five day', weatherObj);
    weatherObj.list.forEach(weatherData => {
      const { dt, main, weather, wind } = weatherData;
      const day = format(new Date(dt * 1000), 'iii MMM d, y');
      const date = new Date(dt * 1000);
      const timeZone = 'America/New_York';
      const zonedDate = formatInTimeZone(date, timeZone, 'PPpp');

      const displayDiv = document.createElement('div');
      displayDiv.setAttribute('class', 'card');

      const fiveDayWeatherList = document.createElement('ul');
      fiveDayWeatherList.setAttribute('class', 'card__ul');
      const dateLi = document.createElement('li');
      const tempLi = document.createElement('li');
      const weatherDesc = document.createElement('li');
      const weatherIcon = document.createElement('img');
      const { description, icon } = weather[0];

      dateLi.textContent = zonedDate;
      tempLi.innerHTML = `${truncate(main.temp)}&#176;`;
      weatherDesc.textContent = description;
      weatherIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;

      fiveDayWeatherList.appendChild(dateLi);
      fiveDayWeatherList.appendChild(tempLi);
      fiveDayWeatherList.appendChild(weatherDesc);
      fiveDayWeatherList.appendChild(weatherIcon);
      displayDiv.appendChild(fiveDayWeatherList);
      dataContainer.appendChild(displayDiv);
    });
  }
}

export { renderDaily, renderFiveDay };
