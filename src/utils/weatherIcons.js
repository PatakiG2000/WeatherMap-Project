export default function handleWeatherIcons(weatherCode) {
  if (weatherCode < 9) {
    return "https://cdn-icons-png.flaticon.com/512/869/869869.png";
  }

  if (9 < weatherCode && weatherCode < 21) {
    return "https://cdn-icons-png.flaticon.com/512/3750/3750506.png";
  }
  if (20 < weatherCode && weatherCode < 31) {
    return "https://cdn-icons-png.flaticon.com/512/2469/2469994.png";
  }

  if (30 < weatherCode && weatherCode < 41) {
    return "https://cdn-icons-png.flaticon.com/128/8841/8841398.png";
  }
  if (40 < weatherCode && weatherCode < 51) {
    return "https://cdn-icons-png.flaticon.com/512/2469/2469994.png";
  }
  if (50 < weatherCode && weatherCode < 61) {
    return "https://cdn-icons-png.flaticon.com/512/2469/2469994.png";
  }
  if (60 < weatherCode && weatherCode < 71) {
    return "https://cdn-icons-png.flaticon.com/512/2469/2469994.png";
  }
  if (70 < weatherCode && weatherCode < 81) {
    return "https://cdn-icons-png.flaticon.com/512/2315/2315309.png";
  }
  if (80 < weatherCode && weatherCode < 100) {
    return "https://cdn-icons-png.flaticon.com/512/2864/2864448.png";
  }
}
