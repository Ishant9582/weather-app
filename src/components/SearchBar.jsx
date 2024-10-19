import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeatherData, fetchWeatherByLocationData } from '../redux/weatherActions';

const SearchBar = () => {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const handleSearch = () => {
        if (city) {
            dispatch(fetchWeatherData(city)) ;
            setCity('') ;
        }
    };
    const handleCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    dispatch(fetchWeatherByLocationData(latitude, longitude));
                } ,
                (error) => {
                    console.error('Error fetching location', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    };

    return (
        <div className="flex flex-col items-center space-y-6 mb-8 px-4 lg:px-0">
            {/* Responsive heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center">
                Weather App
            </h1>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 w-full max-w-lg mx-auto">
                {/* Responsive input */}
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city name"
                    className="w-full sm:flex-grow p-3 rounded-md shadow-lg text-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                />
                {/* Search button */}
                <button
                    onClick={handleSearch}
                    className="w-full sm:w-auto bg-purple-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-purple-600 transition duration-200 text-center"
                >
                    Search
                </button>
            </div>
            {/* Get Current Location button */}
            <button
                onClick={handleCurrentLocation}
                className="w-full sm:w-auto bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-200 text-center"
            >
                Get Current Location
            </button>
        </div>
    );
};

export default SearchBar;



