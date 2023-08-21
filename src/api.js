export async function getForecastForCity(city) {
  const key = '8371920c52b148569f7165904232108';
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=7&aqi=no&alerts=no`
  );
  const tenDayForecast = await response.json();
  console.log(tenDayForecast);
  return tenDayForecast;
}
