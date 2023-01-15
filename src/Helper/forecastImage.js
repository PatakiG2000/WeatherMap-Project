export default function handleForecastImage(weatherCode) {
   //a function to update the displayed icon by the weathercode provided
  if (weatherCode < 9) {
    return "sunny";
  }

  if (9 < weatherCode && weatherCode < 21) {
    return "haze";
  }
  if (20 < weatherCode && weatherCode < 31) {
    return "haze";
  }

  if (30 < weatherCode && weatherCode < 41) {
    return "snow";
  }
  if (40 < weatherCode && weatherCode < 51) {
    return "fog";
  }
  if (50 < weatherCode && weatherCode < 61) {
    return "drizzle";
  }
  if (60 < weatherCode && weatherCode < 71) {
    return "rain";
  }
  if (70 < weatherCode && weatherCode < 81) {
    return "rain";
  }
  if (80 < weatherCode && weatherCode < 100) {
    return "storm";
  }
}
