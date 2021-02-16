export const query = (state, payload) => {
    state.query = payload
}

export const forecastsData = (state, forecastsData) => {
    state.forecastsData = forecastsData;
}

export const currentWeather = (state, currentWeather) => {
    state.currentWeather = currentWeather;
}