import './styles/style.css';
import { dailyForecast, fiveDayForecast } from './components/weatherAPI';
import { handleSubmitSearch, submitOnEnter } from './components/search';
import { fr } from 'date-fns/locale';
import { sub } from 'date-fns';

function myComponent() {
  const mainContainer = document.createElement('div');
  mainContainer.setAttribute('class', 'content', 'id', 'content');

  return mainContainer;
}
document.body.appendChild(myComponent());

window.addEventListener('load', function () {
  handleSubmitSearch();
  submitOnEnter();

  // Load default
  dailyForecast('San Diego');
  fiveDayForecast('San Diego');
});
