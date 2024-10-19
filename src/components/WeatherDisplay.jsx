import React from 'react';
import { useSelector } from 'react-redux';

const WeatherDisplay = () => {
    const { data, loading, error } = useSelector((state) => state.weather);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-lg sm:text-xl text-white">Loading...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-lg sm:text-xl text-red-500">Error: {error}</p>
            </div>
        );
    }

    if (!data) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-lg sm:text-xl text-white">No weather data available.</p>
            </div>
        );
    }

    const weatherIcon = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

    return (
        <div className="flex flex-col justify-center items-center mb-4 space-y-4 px-4 lg:px-0">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm sm:max-w-md md:max-w-lg">
                {/* City name */}
                <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">
                    {data.name}
                </h2>
                {/* Weather icon */}
                <img
                    src={iconUrl}
                    alt={data.weather[0].description}
                    className="mx-auto mb-2 w-20 h-20 sm:w-24 sm:h-24"
                />
                {/* Temperature */}
                <p className="text-base sm:text-lg text-center">
                    Temperature: <span className="font-semibold">{data.main.temp}°C</span>
                </p>
                {/* Humidity */}
                <p className="text-base sm:text-lg text-center">
                    Humidity: <span className="font-semibold">{data.main.humidity}%</span>
                </p>
                {/* Wind speed */}
                <p className="text-base sm:text-lg text-center">
                    Wind Speed: <span className="font-semibold">{data.wind.speed} m/s</span>
                </p>
                {/* Weather condition */}
                <p className="text-base sm:text-lg text-center">
                    Condition: <span className="font-semibold">{data.weather[0].description}</span>
                </p>
            </div>
        </div>
    );
};

export default WeatherDisplay;


