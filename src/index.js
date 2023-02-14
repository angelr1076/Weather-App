import './styles/style.css';
import { dailyForecast, fiveDayForecast } from './components/weatherAPI';
import { handleSubmitSearch, submitOnEnter } from './components/search';
import { toggleLabel } from './components/helpers';
import 'bootstrap-icons/font/bootstrap-icons.css';

function myComponent() {
  const mainContainer = document.createElement('div');
  mainContainer.setAttribute('class', 'content', 'id', 'content');

  return mainContainer;
}
document.body.appendChild(myComponent());

window.addEventListener('load', function () {
  handleSubmitSearch();
  submitOnEnter();
  toggleLabel();

  // Load default
  dailyForecast('San Diego');
  fiveDayForecast('San Diego');
});
