export const weather = new (class weather {
  constructor() {
    this.key = '8371920c52b148569f7165904232108';
  }
  async getData(city) {
    const path = `https://api.weatherapi.com/v1/forecast.json?key=${this.key}&q=${city}&days=7&aqi=no&alerts=no`;
    try {
      const response = await fetch(path, { mode: 'cors' });

      if (!response.ok) {
        throw new Error(`Unable to find ${city}.`);
      }
      const data = this.handleData(await response.json());
      return data;
    } catch (error) {
      alert(error);
      return null;
    }
  }
  async handleData(data) {
    if (!data) return;
    const {
      current: {
        temp_c: temperatureC,
        temp_f: temperatureF,
        wind_kph: windKph,
        wind_mph: windMph,
        wind_dir: windDir,
        feelslike_c: feelslikeC,
        humidity: humidityPercentage,
        feelslike_f: feelslikeF,
        chance_of_rain: chanceOfRain,
        uv: uvIndex,
        condition: { text: currentText, icon: currentIcon },
      },
      forecast: { forecastday: forecastData },
      location: { name: cityName, country: countryName, localtime: time },
    } = data;
    return {
      temperatureC,
      temperatureF,
      windKph,
      windMph,
      windDir,
      chanceOfRain,
      uvIndex,
      feelslikeF,
      feelslikeC,
      humidityPercentage,
      currentText,
      currentIcon,
      forecastData,
      cityName,
      countryName,
      time,
    };
  }
})();
