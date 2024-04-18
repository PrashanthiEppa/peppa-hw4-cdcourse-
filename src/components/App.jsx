// App.jsx
import React, { useState, useEffect } from 'react';

const App = () => {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    // Fetch weather data here (e.g., using a weather API)
    // For simplicity, let's assume temperature is fetched from an API
    fetchWeatherData()
      .then(data => {
        setTemperature(data.temperature);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }, []);

  const fetchWeatherData = async () => {
    // Simulated API call, replace with actual weather API call
    return { temperature: 25 }; // Example temperature data
  };

  return (
    <div>
      <h1>Weather App</h1>
      {temperature !== null ? (
        <p>Temperature: {temperature}°C</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
