import css from './assets/style.css';
import { weather } from './modules/api';
import { Display } from './modules/display';

const weatherData = await weather.getData('valencia, spain');
console.log(weatherData.currentIcon);
Display.displayLeftDiv(weatherData);
