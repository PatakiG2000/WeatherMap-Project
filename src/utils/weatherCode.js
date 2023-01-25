export default function handleWeatherCode(weatherCode) {
  //a function to update the text by the weathercode provided
  if (weatherCode < 9) {
    return "Sunny";
  }

  if (9 < weatherCode && weatherCode < 21) {
    return "Foggy";
  }
  if (20 < weatherCode && weatherCode < 31) {
    return "Light rain";
  }

  if (30 < weatherCode && weatherCode < 41) {
    return "Blowing snow";
  }
  if (40 < weatherCode && weatherCode < 51) {
    return "Foggy";
  }
  if (50 < weatherCode && weatherCode < 61) {
    return "Light rain";
  }
  if (60 < weatherCode && weatherCode < 71) {
    return "Rainy";
  }
  if (70 < weatherCode && weatherCode < 81) {
    return "Rainy";
  }
  if (80 < weatherCode && weatherCode < 100) {
    return "Storm";
  }
}
