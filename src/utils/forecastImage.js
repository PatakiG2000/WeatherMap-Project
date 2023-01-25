export default function handleForecastImage(weatherCode) {
  //a function to update the displayed icon by the weathercode provided
  if (weatherCode < 9) {
    return "https://images.unsplash.com/photo-1604228741406-3faa38f4907a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80";
  }

  if (9 < weatherCode && weatherCode < 21) {
    return "https://images.unsplash.com/photo-1499164777370-3bc8ce9e70a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=884&q=80";
  }
  if (20 < weatherCode && weatherCode < 31) {
    return "https://images.unsplash.com/photo-1499164777370-3bc8ce9e70a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=884&q=80";
  }

  if (30 < weatherCode && weatherCode < 41) {
    return "https://images.unsplash.com/photo-1639135111182-a4caa4b6d45b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=935&q=80";
  }
  if (40 < weatherCode && weatherCode < 51) {
    return "https://images.unsplash.com/photo-1499164777370-3bc8ce9e70a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=884&q=80";
  }
  if (50 < weatherCode && weatherCode < 61) {
    return "https://images.unsplash.com/photo-1605388762088-c3c7ae94a309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80";
  }
  if (60 < weatherCode && weatherCode < 71) {
    return "https://images.unsplash.com/photo-1512511708753-3150cd2ec8ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80";
  }
  if (70 < weatherCode && weatherCode < 81) {
    return "https://images.unsplash.com/photo-1512511708753-3150cd2ec8ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80";
  }
  if (80 < weatherCode && weatherCode < 100) {
    return "https://images.unsplash.com/photo-1624952911535-cfe35fbb4d8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=877&q=80";
  }
}
