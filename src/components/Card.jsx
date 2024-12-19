import React, { useState, useEffect } from "react";

function Card() {
  const [weather, setWeather] = useState({ temp: "Loading...", city: "Fetching location..." });
  const [time, setTime] = useState("");

  // Fetch weather data
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        fetchWeather(lat, lon);
      });
    } else {
      setWeather({ temp: "N/A", city: "Geolocation not supported" });
    }
  }, []);

  const fetchWeather = (lat, lon) => {
    const apiKey = "f32f730f3e135d661a9b2e0f22fc25d7"; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    // https://api.openweathermap.org/data/2.5/weather?lat=10.925728&lon=78.578308&units=metric&appid=${apikey}
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setWeather({
          temp: `${data.main.temp}°C`,
          city: data.name,
        });
      })
      .catch((error) => {
        setWeather({ temp: "Error", city: "Unable to fetch weather" });
        console.error("Error fetching weather data:", error);
      });
  };

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <section className="flex justify-between gap-7 flex-wrap">
      {/* Weather Section */}
      <div className="bg-white p-4 my-3 border rounded-md border-none flex-grow">
        <h1 className="text-2xl font-medium">{weather.temp}</h1>
        <p>{weather.city}</p>
      </div>

      {/* Time Section */}
      <div className="bg-white p-4 my-3 border rounded-md border-none flex-grow">
        <h1 className="text-2xl font-medium">{new Date().toLocaleDateString()}</h1>
        <p>{time}</p>
      </div>

      {/* Built Using Section */}
      <div className="bg-white p-4 my-3 border rounded-md border-none flex-grow">
        <h1 className="text-2xl font-medium">Built Using</h1>
        <p>React</p>
      </div>
    </section>
  );
}

export default Card;
