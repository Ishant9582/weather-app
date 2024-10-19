// src/components/SearchBar.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeatherData, fetchWeatherByLocationData } from '../redux/weatherSlice';

const SearchBar = () => {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const handleSearch = () => {
        if (city) {
            dispatch(fetchWeatherData(city));
            setCity('');
        }
    };

    const handleCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    dispatch(fetchWeatherByLocationData(latitude, longitude));
                },
                (error) => {
                    console.error('Error fetching location', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    };

    return (
        <div className="flex flex-col items-center space-y-4 mb-8">
            <h1 className="text-5xl font-bold text-white">Weather App</h1>
            <div className="flex space-x-4">
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city name"
                    className="p-3 rounded-md shadow-lg text-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                    style={{ width: '300px' }}  // Set input width
                />
                <button
                    onClick={handleSearch}
                    className="bg-purple-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-600 transition duration-200"
                >
                    Search
                </button>
            </div>
            <button
                onClick={handleCurrentLocation}
                className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-200"
            >
                Get Current Location
            </button>
        </div>
    );
};

export default SearchBar;

