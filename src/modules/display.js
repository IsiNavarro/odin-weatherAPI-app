export const Display = new (class Display {
  displayLeftDiv(data) {
    const cityDisplay = document.getElementById('city');
    const temperatureDisplay = document.getElementById('todayTemperature');
    const skyDisplay = document.getElementById('Sky');
    const weatherIconDisplay = document.getElementById('weather-icon');
    const feelsLikeDisplay = document.getElementById('feels-like');
    console.log(weatherIconDisplay);

    cityDisplay.textContent = `${data.cityName}, ${data.countryName}`;
    temperatureDisplay.textContent = `${data.temperatureC} °C`;
    skyDisplay.textContent = `${data.currentText}`;
    weatherIconDisplay.src = `https:${data.currentIcon.replace(
      '/64x64/',
      '/128x128/'
    )}`;
    feelsLikeDisplay.textContent = `${data.feelslikeC} °C`;
  }
})();
