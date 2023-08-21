import css from './assets/style.css';
import { getForecastForCity } from './api';

const city = 'New York';
const forecastPromise = getForecastForCity(city);
