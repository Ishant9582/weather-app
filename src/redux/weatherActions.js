// src/redux/weatherActions.js
import { 
    fetchWeatherStart, 
    fetchWeatherSuccess, 
    fetchWeatherFailure 
} from './weatherSlice'; // Import actions from weatherSlice
import { fetchWeatherByCity, fetchWeatherByLocation } from '../utils/api';

// Async action creator for fetching weather data by city
export const fetchWeatherData = (city) => async (dispatch) => {
    dispatch(fetchWeatherStart());
    try {
        const data = await fetchWeatherByCity(city);
        dispatch(fetchWeatherSuccess(data));
    } catch (error) {
        dispatch(fetchWeatherFailure(error.message));
    }
};

// Async action creator for fetching weather data by location
export const fetchWeatherByLocationData = (lat, lon) => async (dispatch) => {
    dispatch(fetchWeatherStart());
    try {
        const data = await fetchWeatherByLocation(lat, lon);
        dispatch(fetchWeatherSuccess(data));
    } catch (error) {
        dispatch(fetchWeatherFailure(error.message));
    }
};
