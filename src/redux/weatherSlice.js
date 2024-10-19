// src/redux/weatherSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchWeatherByCity, fetchWeatherByLocation } from '../utils/api';

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        fetchWeatherStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchWeatherSuccess(state, action) {
            state.loading = false;
            state.data = action.payload;
        },
        fetchWeatherFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    fetchWeatherStart,
    fetchWeatherSuccess,
    fetchWeatherFailure,
} = weatherSlice.actions;

export const fetchWeatherData = (city) => async (dispatch) => {
    dispatch(fetchWeatherStart());
    try {
        const data = await fetchWeatherByCity(city);
        dispatch(fetchWeatherSuccess(data));
    } catch (error) {
        dispatch(fetchWeatherFailure(error.message));
    }
};

export const fetchWeatherByLocationData = (lat, lon) => async (dispatch) => {
    dispatch(fetchWeatherStart());
    try {
        const data = await fetchWeatherByLocation(lat, lon);
        dispatch(fetchWeatherSuccess(data));
    } catch (error) {
        dispatch(fetchWeatherFailure(error.message));
    }
};

export default weatherSlice.reducer;
