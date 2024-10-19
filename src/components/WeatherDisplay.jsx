// src/components/WeatherDisplay.js
import React from 'react';
import { useSelector } from 'react-redux';

const WeatherDisplay = () => {
    const { data, loading, error } = useSelector((state) => state.weather);
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-xl text-white">Loading...</p>
            </div>
        );
    }
    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-xl text-red-500">Error: {error}</p>
            </div>
        );
    }
    if (!data) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-xl text-white">No weather data available.</p>
            </div>
        );
    }

    const weatherIcon = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

    return (
        <div className="flex flex-col justify-center items-center mb-4 space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-2">{data.name}</h2>
                <img src={iconUrl} alt={data.weather[0].description} className="mx-auto mb-2" />
                <p className="text-lg text-center">Temperature: <span className="font-semibold">{data.main.temp}°C</span></p>
                <p className="text-lg text-center">Humidity: <span className="font-semibold">{data.main.humidity}%</span></p>
                <p className="text-lg text-center">Wind Speed: <span className="font-semibold">{data.wind.speed} m/s</span></p>
                <p className="text-lg text-center">Condition: <span className="font-semibold">{data.weather[0].description}</span></p>
            </div>
        </div>
    );
};

export default WeatherDisplay;

