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
