import axios from 'axios'

export const forecastsData = ({commit, state}) => {
    const instance = axios.create({
      baseURL: state.https.baseUrlLink
    })
    instance.get(`forecast?q=${state.query}&APPID=${state.api_key}&cnt=${state.cnt}`)
    .then(res => {
        commit('forecastsData', res.data)
    })
    .catch(err => {
        console.log(err)
    })
}

export const currentWeather = ({commit, state}) => {
    const instance = axios.create({
      baseURL: state.https.baseUrlLink
    })
    instance.get(`weather?q=${state.query}&units=metric&APPID=${state.api_key}`)
    .then(res => {
        commit('currentWeather', res.data)
    })
    .catch(err => {
        console.log(err)
    })
}