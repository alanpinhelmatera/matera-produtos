import { AppRender, AppTrigger } from './components/App';
import EventEmitter from './utils/EventEmitter';

document.querySelector('body').innerHTML = AppRender();
AppTrigger();

EventEmitter.on('renderApp', () => {
  document.querySelector('body').innerHTML = AppRender();
  AppTrigger();
});
