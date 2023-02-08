import './styles/style.css';
import { handleSubmitSearch } from './components/search';

function myComponent() {
  const mainContainer = document.createElement('div');
  mainContainer.setAttribute('class', 'content', 'id', 'content');

  return mainContainer;
}
document.body.appendChild(myComponent());

window.addEventListener('load', function () {
  handleSubmitSearch();
});
