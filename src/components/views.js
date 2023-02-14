import { format } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';
import {
  truncate,
  clearEl,
  kelTempToFahr,
  toggleTemp,
  toggleMinMax,
} from './helpers';

function renderDaily(obj) {
  const dataContainerLeft = document.querySelector('#dailyContainerLeft');
  const dataContainerRight = document.querySelector('#dailyContainerRight');
  const toggleContainer = document.querySelector('#toggleContainer');
  const tempToggleSlider = document.querySelector('.toggle-checkbox');
  const weatherString = JSON.stringify(obj);
  let scaleBool = true;
  clearEl(dataContainerLeft);
  clearEl(dataContainerRight);

  if (weatherString !== null) {
    const weatherObj = JSON.parse(weatherString);
    // console.log('daily', weatherObj);
    const { dt, main, name, weather } = weatherObj;
    let { temp, feels_like, humidity, temp_min, temp_max } = main;
    const { description, icon } = weather[0];
    const degreeSym = '&#176;';
    const percentSym = '&#x25;';
    temp = kelTempToFahr(temp);
    feels_like = kelTempToFahr(feels_like);
    temp_min = kelTempToFahr(temp_min);
    temp_max = kelTempToFahr(temp_max);

    const date = new Date(dt * 1000);
    const zonedDate = format(date, 'EEEE LLLL do, yyyy');

    // left daily container
    const cityContainer = document.createElement('div');
    cityContainer.setAttribute(
      'id',
      'cityDiv',
      'class',
      'weather-display__city-div',
    );
    const cityLi = document.createElement('h1');
    const weatherListLeft = document.createElement('ul');
    const dateLi = document.createElement('li');
    const tempLi = document.createElement('li');

    const weatherDesc = document.createElement('li');
    const weatherIcon = document.createElement('img');

    let tempVal = truncate(temp);
    let tempFeels = truncate(feels_like);
    let tempMin = truncate(temp_min);
    let tempMax = truncate(temp_max);

    // right daily container
    const weatherListRight = document.createElement('ul');
    const feelsLikeLi = document.createElement('div');
    const tempMinMax = document.createElement('div');
    const humidLi = document.createElement('div');

    // set left container el values
    cityLi.textContent = name;
    dateLi.textContent = zonedDate;
    tempLi.dataset.id = 'temp';
    tempLi.innerHTML = `${tempVal}${degreeSym}`;
    weatherDesc.textContent = description;
    weatherIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;

    // set right container el values
    feelsLikeLi.innerHTML = `Feels like ${tempFeels}${degreeSym}`;
    tempMinMax.innerHTML = `L ${tempMin}${degreeSym} | H ${tempMax}${degreeSym}`;
    humidLi.innerHTML = `Humidity ${humidity}${percentSym}`;
    feelsLikeLi.dataset.id = 'feels';
    tempMinMax.dataset.id = 'minmax';

    // append to DOM
    cityContainer.appendChild(cityLi);

    weatherListLeft.appendChild(cityContainer);
    weatherListLeft.appendChild(dateLi);
    weatherListLeft.appendChild(tempLi);
    weatherListLeft.appendChild(weatherDesc);
    weatherListLeft.appendChild(weatherIcon);

    weatherListRight.appendChild(toggleContainer);
    weatherListRight.appendChild(feelsLikeLi);
    weatherListRight.appendChild(humidLi);
    weatherListRight.appendChild(tempMinMax);
    // left side weather stats
    dataContainerLeft.appendChild(weatherListLeft);
    // right side weather stats
    dataContainerRight.appendChild(weatherListRight);
    // toggle scaleBool/celsius
    toggleTemp(tempToggleSlider, scaleBool, temp, tempLi, degreeSym);
    toggleTemp(tempToggleSlider, scaleBool, feels_like, feelsLikeLi, degreeSym);
    toggleMinMax(
      tempToggleSlider,
      scaleBool,
      tempMin,
      tempMax,
      tempMinMax,
      degreeSym,
    );
  }
}

function renderFiveDay(obj) {
  const dataContainer = document.querySelector('#fiveDayContainer');
  clearEl(dataContainer);
  const weatherString = JSON.stringify(obj);
  const tempToggleSlider = document.querySelector('.toggle-checkbox');
  let scaleBool = true;

  if (weatherString !== null) {
    const weatherObj = JSON.parse(weatherString);

    weatherObj.list.forEach(weatherData => {
      const { dt, main, weather, wind } = weatherData;
      main.temp = kelTempToFahr(main.temp);
      const { sunrise } = weatherData.sys;
      const degreeSym = '&#176;';
      const date = new Date(dt * 1000);
      const timeZone = 'America/New_York';
      const zonedDate = formatInTimeZone(date, timeZone, 'PPpp');

      const displayDiv = document.createElement('div');
      displayDiv.setAttribute('class', 'card');

      const fiveDayWeatherList = document.createElement('ul');
      fiveDayWeatherList.setAttribute('class', 'card__ul');
      const dateLi = document.createElement('li');
      const tempLi = document.createElement('li');
      tempLi.dataset.id = 'temp';
      const weatherDesc = document.createElement('li');
      const weatherIcon = document.createElement('img');
      const { description, icon } = weather[0];

      dateLi.textContent = zonedDate;
      tempLi.innerHTML = `${truncate(main.temp)}${degreeSym}`;
      weatherDesc.textContent = description;
      weatherIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;

      fiveDayWeatherList.appendChild(dateLi);
      fiveDayWeatherList.appendChild(tempLi);
      fiveDayWeatherList.appendChild(weatherDesc);
      fiveDayWeatherList.appendChild(weatherIcon);
      displayDiv.appendChild(fiveDayWeatherList);
      dataContainer.appendChild(displayDiv);

      toggleTemp(tempToggleSlider, scaleBool, main.temp, tempLi, degreeSym);
    });
  }
}

export { renderDaily, renderFiveDay };
