// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import WeatherDisplay from './components/WeatherDisplay';
import SearchBar from './components/SearchBar';

const App = () => {
    return (
        <Provider store={store}>
            <div className="App mt-8">
                <SearchBar />
                <WeatherDisplay />
            </div>
        </Provider>
    );
};
export default App;
