import css from './assets/style.css';
import { weather } from './api';

const weatherData = await weather.getData('london');
console.log(weatherData.currentData);
