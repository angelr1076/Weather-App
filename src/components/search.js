import { dailyForecast, fiveDayForecast } from './weatherAPI';

function submitOnBtn(el) {
  el.addEventListener('click', e => {
    e.preventDefault();
    const search = document.querySelector('#search');
    const message = document.querySelector('#msg');

    if (!search) {
      message.textContent = 'Please search by city name.';
      return setTimeout(() => {
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
  search.addEventListener('keyup', e => {
    if (e.keyCode === 13) {
      e.preventDefault();

      dailyForecast(search.value);
      fiveDayForecast(search.value);
      search.value = '';
    }
  });
}

function handleSubmitSearch() {
  const submitSearchBtn = document.querySelector('#submit');
  return submitOnBtn(submitSearchBtn);
}

export { handleSubmitSearch, submitOnEnter };
