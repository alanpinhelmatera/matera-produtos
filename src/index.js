import './style.css';
import _ from 'lodash';
import Icon from './icon.png';
import printMe from './print';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hell', 'webpack'], ' ');
  element.classList.add('hello');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./print.js', () => {
    printMe();
  });
}
