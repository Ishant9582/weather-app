// src/App.js
import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import store from './redux/store';
import WeatherDisplay from './components/WeatherDisplay';
import SearchBar from './components/SearchBar';
import { fetchWeatherByLocationData } from './redux/weatherSlice';

const AppContent = () => {
    const dispatch = useDispatch();

    useEffect(() => {
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
    }, [dispatch]);

    return (
        <div className="App mt-8">
          
            <SearchBar />
            <WeatherDisplay />
        </div>
    );
};

const App = () => {
    return (
        <Provider store={store}>
            <AppContent />
        </Provider>
    );
};

export default App;
