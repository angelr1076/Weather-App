import { dailyForecast, fiveDayForecast } from './weatherAPI';
import { makeVisible, makeHidden } from './helpers';

function submitOnBtn(el) {
  el.addEventListener('click', e => {
    e.preventDefault();
    const search = document.querySelector('#search');
    const message = document.querySelector('#msg');

    if (!search.value) {
      makeVisible(message);
      message.textContent = 'Please search by city name.';
      return setTimeout(() => {
        makeHidden(message);
        message.textContent = '';
      }, 2000);
    }
    dailyForecast(search.value);
    fiveDayForecast(search.value);
    search.value = '';
  });
}

function submitOnEnter() {
  const search = document.querySelector('#search');
  const message = document.querySelector('#msg');

  search.addEventListener('keyup', e => {
    if (e.keyCode === 13 && search.value) {
      e.preventDefault();

      dailyForecast(search.value);
      fiveDayForecast(search.value);
      search.value = '';
    } else if (e.keyCode === 13 && !search.value) {
      makeVisible(message);
      message.textContent = 'Please search by city name.';
      return setTimeout(() => {
        makeHidden(message);
        message.textContent = '';
      }, 2000);
    }
  });
}

function handleSubmitSearch() {
  const submitSearchBtn = document.querySelector('#submit');
  return submitOnBtn(submitSearchBtn);
}

export { handleSubmitSearch, submitOnEnter };
