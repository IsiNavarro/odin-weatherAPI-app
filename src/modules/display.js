import { format, parseISO } from 'date-fns';

export const Display = new (class Display {
  displayLeftDiv(data) {
    const cityDisplay = document.getElementById('city');
    const temperatureDisplay = document.getElementById('todayTemperature');
    const skyDisplay = document.getElementById('Sky');
    const weatherIconDisplay = document.getElementById('weather-icon');
    const feelsLikeDisplay = document.getElementById('feels-like');
    const localTimeDisplay = document.getElementById('local-time');

    cityDisplay.textContent = `${data.cityName}, ${data.countryName}`;
    temperatureDisplay.textContent = `${data.temperatureC} °C`;
    skyDisplay.textContent = `${data.currentText}`;
    weatherIconDisplay.src = `https:${data.currentIcon.replace(
      '/64x64/',
      '/128x128/'
    )}`;
    feelsLikeDisplay.textContent = `${data.feelslikeC} °C`;
    localTimeDisplay.textContent = `${data.time}`;
  }
  displayRightDiv(data) {
    // still to do
    // remember to display the right element on CSS
  }
  displayWeeklyForecast(data) {
    const weeklyForecastDisplay = document.getElementById('week-forecast');
    weeklyForecastDisplay.innerHTML = '';

    let isFirstDay = true;

    data.forecastData.forEach((day) => {
      if (isFirstDay) {
        isFirstDay = false;
        return;
      }
      //Parse data from the API
      const nameOfDay = format(parseISO(day.date), 'EEEE');
      const icon = `https:${day.day.condition.icon}`;
      const maxTemperature = day.day.maxtemp_c;
      const minTemperature = day.day.mintemp_c;
      const chanceOfRain = day.day.daily_chance_of_rain;

      // Create div element
      const weekdayDiv = document.createElement('div');
      weekdayDiv.classList.add('weekday');
      const nameOfDayDisplay = document.createElement('h4');
      nameOfDayDisplay.textContent = nameOfDay;
      const iconDisplay = document.createElement('img');
      iconDisplay.src = icon;
      iconDisplay.classList.add('weekday-icon');

      const container = document.createElement('div');
      container.classList.add('weekday-weather');
      const maxTemperatureDisplay = document.createElement('div');
      maxTemperatureDisplay.classList.add('weekday-max-temperature');
      maxTemperatureDisplay.textContent = `Max: ${maxTemperature}°C`;
      const minTemperatureDisplay = document.createElement('div');
      minTemperatureDisplay.classList.add('weekday-min-temperature');
      minTemperatureDisplay.textContent = `Min: ${minTemperature}°C`;
      const chanceOfRainDisplay = document.createElement('div');
      chanceOfRainDisplay.classList.add('weekday-chance-of-rain');
      chanceOfRainDisplay.textContent = `Rain: ${chanceOfRain}%`;

      container.appendChild(maxTemperatureDisplay);
      container.appendChild(minTemperatureDisplay);
      container.appendChild(chanceOfRainDisplay);

      weekdayDiv.appendChild(nameOfDayDisplay);
      weekdayDiv.appendChild(iconDisplay);
      weekdayDiv.appendChild(container);

      weeklyForecastDisplay.appendChild(weekdayDiv);
    });
  }
  displayAll(data) {
    if (!data) return;
    this.displayLeftDiv(data);
    this.displayRightDiv(data);
    this.displayWeeklyForecast(data);
  }
})();
