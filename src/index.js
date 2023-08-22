import css from './assets/style.css';
import { weather } from './modules/api';
import { Display } from './modules/display';

const form = document.querySelector('.search');
const input = document.querySelector('.search-input');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!input.value) return;

  const weatherData = await weather.getData(input.value);
  Display.displayAll(weatherData);
});

//first load
const weatherData = await weather.getData('london');
Display.displayAll(weatherData);
