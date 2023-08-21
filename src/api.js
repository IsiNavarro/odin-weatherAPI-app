export const weather = new (class weather {
  constructor() {
    this.key = '8371920c52b148569f7165904232108';
  }
  async getData(city) {
    const path = `https://api.weatherapi.com/v1/forecast.json?key=${this.key}&q=${city}&days=8&aqi=no&alerts=no`;
    try {
      const response = await fetch(path, { mode: 'cors' });
      if (!response.ok) throw new Error(`Unable to find ${city}.`);
      const data = this.handleData(await response.json());
      return data;
    } catch (error) {
      alert(error);
      return null;
    }
  }
  async handleData(data) {
    const {
      current: currentData,
      forecast: forecastData,
      location: locationData,
    } = data;
    return { currentData, forecastData, locationData };
  }
})();
