import './styles/style.css';
import bitmoji from './images/bitmojime.png';

function myComponent() {
  const mainContainer = document.createElement('div');
  mainContainer.setAttribute('class', 'content', 'id', 'content');

  const h2 = document.createElement('h2');
  h2.innerText = 'Initial webpack setup';
  const img = document.createElement('img');
  img.src = bitmoji;
  mainContainer.appendChild(h2);
  mainContainer.appendChild(img);
  return mainContainer;
}
document.body.appendChild(myComponent());

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

getWeather('London');
