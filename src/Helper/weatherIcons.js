export default function handleWeatherIcons(weatherCode) {
  if (weatherCode < 9) {
    return "src/assets/sunicon.png";
  }

  if (9 < weatherCode && weatherCode < 21) {
    return "src/assets/fogicon.png";
  }
  if (20 < weatherCode && weatherCode < 31) {
    return "src/assets/rainicon.png";
  }

  if (30 < weatherCode && weatherCode < 41) {
    return "src/assets/blowingsnowicon.png";
  }
  if (40 < weatherCode && weatherCode < 51) {
    return "src/assets/fogicon.png";
  }
  if (50 < weatherCode && weatherCode < 61) {
    return "src/assets/rainicon.png";
  }
  if (60 < weatherCode && weatherCode < 71) {
    return "src/assets/rainicon.png";
  }
  if (70 < weatherCode && weatherCode < 81) {
    return "src/assets/snow.png";
  }
  if (80 < weatherCode && weatherCode < 100) {
    return "src/assets/storm.png";
  }
}
