function renderWeatherStats(obj) {
  const dataContainer = document.querySelector('#data');
  const weatherObj = JSON.stringify(obj);
  const { name, main, weather } = obj;

  if (weatherObj) {
    const displayDiv = document.createElement('div');

    const weatherList = document.createElement('ul');
    const cityLi = document.createElement('li');
    const tempLi = document.createElement('li');
    const pressureLi = document.createElement('li');
    const humidLi = document.createElement('li');
    const weatherDesc = document.createElement('li');
    const weatherIcon = document.createElement('li');
    const { description, icon } = weather[0];

    cityLi.textContent = name;
    tempLi.textContent = main.temp;
    pressureLi.textContent = main.pressure;
    humidLi.textContent = main.humidity;
    weatherDesc.textContent = description;
    // weatherIcon.textContent = icon;

    weatherList.appendChild(cityLi);
    weatherList.appendChild(tempLi);
    weatherList.appendChild(pressureLi);
    weatherList.appendChild(humidLi);
    weatherList.appendChild(weatherDesc);
    // weatherList.appendChild(weatherIcon);

    displayDiv.appendChild(weatherList);
    return dataContainer.appendChild(displayDiv);
  }
}

export { renderWeatherStats };
