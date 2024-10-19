// src/utils/api.js
const API_KEY = '6f1f5daef958ed5c18c5165e327c86fa'; // Replace with your OpenWeatherMap API key


export const fetchWeatherByCity = async (city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    if (!response.ok) {
        throw new Error('Failed to fetch weather data');
    }
    console.log(response.json) ;
    return await response.json();
};

export const fetchWeatherByLocation = async (lat, lon) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    if (!response.ok) {
        throw new Error('Failed to fetch weather data');
    }
    return await response.json();
};

