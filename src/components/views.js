import { format } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';

function renderDaily(obj) {
  const cityContainer = document.querySelector('#cityDiv');
  const dataContainer = document.querySelector('#dailyContainer');
  const weatherString = JSON.stringify(obj);

  if (weatherString) {
    const weatherObj = JSON.parse(weatherString);
    console.log(weatherObj);
    const { dt, main, name, weather } = weatherObj;
    const { temp, feels_like, humidity, pressure } = main;
    const { description, icon } = weather[0];
    const date = new Date(dt * 1000);
    const timeZone = 'America/New_York';
    const zonedDate = formatInTimeZone(
      date,
      timeZone,
      'yyyy-MM-dd HH:mm:ss zzz',
    );

    const cityLi = document.createElement('h1');
    const weatherList = document.createElement('ul');
    const dateLi = document.createElement('li');
    const tempLi = document.createElement('li');
    const feelsLikeLi = document.createElement('li');
    const pressureLi = document.createElement('li');
    const humidLi = document.createElement('li');
    const weatherDesc = document.createElement('li');
    const weatherIcon = document.createElement('img');

    cityLi.textContent = name;
    dateLi.textContent = `${zonedDate}`;
    tempLi.textContent = `Temperature: ${temp}`;
    feelsLikeLi.textContent = `Feels like: ${feels_like}`;
    pressureLi.textContent = `Pressure: ${pressure}`;
    humidLi.textContent = `Humidity: ${humidity}`;
    weatherDesc.textContent = description;
    weatherIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;

    cityContainer.appendChild(cityLi);
    weatherList.appendChild(dateLi);
    weatherList.appendChild(tempLi);
    weatherList.appendChild(pressureLi);
    weatherList.appendChild(humidLi);
    weatherList.appendChild(weatherDesc);
    weatherList.appendChild(weatherIcon);
    dataContainer.appendChild(weatherList);
  }
}

function renderFiveDay(obj) {
  const dataContainer = document.querySelector('#fiveDayContainer');
  const weatherString = JSON.stringify(obj);

  if (weatherString) {
    const weatherObj = JSON.parse(weatherString);
    const displayDiv = document.createElement('div');

    weatherObj.list.forEach(weatherData => {
      const { dt, main, weather, wind } = weatherData;
      // const day = format(new Date(dt * 1000), 'iii MMM d, y');
      const date = new Date(dt * 1000);
      const timeZone = 'America/New_York';
      const zonedDate = formatInTimeZone(
        date,
        timeZone,
        'yyyy-MM-dd HH:mm:ss zzz',
      );

      const weatherList = document.createElement('ul');
      const dateLi = document.createElement('li');
      const tempLi = document.createElement('li');
      const pressureLi = document.createElement('li');
      const humidLi = document.createElement('li');
      const weatherDesc = document.createElement('li');
      const weatherIcon = document.createElement('img');
      const { description, icon } = weather[0];

      dateLi.textContent = `${zonedDate}`;
      tempLi.textContent = `Temperature: ${main.temp}`;
      pressureLi.textContent = `Pressure: ${main.pressure}`;
      humidLi.textContent = `Humidity: ${main.humidity}`;
      weatherDesc.textContent = description;
      weatherIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;

      weatherList.appendChild(dateLi);
      weatherList.appendChild(tempLi);
      weatherList.appendChild(pressureLi);
      weatherList.appendChild(humidLi);
      weatherList.appendChild(weatherDesc);
      weatherList.appendChild(weatherIcon);
      displayDiv.appendChild(weatherList);
    });

    dataContainer.appendChild(displayDiv);
  }
}

export { renderDaily, renderFiveDay };
