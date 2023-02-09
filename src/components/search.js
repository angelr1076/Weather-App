import { dailyForecast, fiveDayForecast } from './weatherAPI';

function submitSearchForm(el) {
  el.addEventListener('click', e => {
    e.preventDefault();
    const search = document.querySelector('#search').value;
    const message = document.querySelector('#msg');
    const form = document.querySelector('#form');
    console.log(e);

    if (!search) {
      message.textContent = 'Please search by city name.';
      return setTimeout(() => {
        message.textContent = '';
      }, 2000);
    }
    dailyForecast(search);
    fiveDayForecast(search);
    form.reset();
  });
}

function handleSubmitSearch() {
  const submitSearchBtn = document.querySelector('#submit');
  return submitSearchForm(submitSearchBtn);
}

export { handleSubmitSearch };
