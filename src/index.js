import css from './assets/style.css';
import { weather } from './modules/api';

const weatherData = await weather.getData('london');
console.log(weatherData.currentData);
