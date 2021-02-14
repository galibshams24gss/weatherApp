<template>
<!--
<v-app id="app" :class="mode">
  <Header :mode="mode" @toggle="toggle" />
  <Content :mode="mode" />-->
  <!--
  <v-card
    flat
    tile
  >
    <v-toolbar dense id="toolholder">
      <v-app-bar-nav-icon @click="drawer = true" color="white"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-btn class="btnhello" id="dataholder" dark href="https://github.com/login">Say Hello</v-btn>
    </v-toolbar>
  </v-card>-->
  <!--</v-app>-->
<!--
  <div id="app" :class="typeof weather.main != 'undefined' && weather.main.temp > 16 ? 'warm' : ''">-->
  
    <div id="app" :class="mode">
      <Header :mode="mode" @toggle="toggle" />
      <Content :mode="mode" />
    <!--
    <main>
      <div class="weather-in">
        <div class="weather">Weather in</div>
      </div>

      <div class="search-box">-->
        <!--
        <input 
          type="text" 
          class="search-bar" 
          placeholder="Search"
          v-model="query"
          @keypress="fetchWeather"
        />-->
        <!--
        <input 
          type="text" 
          class="search-bar" 
          placeholder="Search"
          v-model="query"
          @keypress="weatherForecast"
        />
      </div>

      <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
        <div class="location-box">
          <div class="location">{{ weather.name }}, {{ weather.sys.country }}</div>
          <div class="date">{{ dateBuilder() }}</div>
          <div class="date">date</div>
        </div>

        <div class="weather-box">
          <div class="temp">{{ Math.round(weather.main.temp) }}°C</div>
          <div class="weather">{{ weather.weather[0].main }}</div>
        </div>
      </div>
    </main>-->
  </div>
</template>

<script>
import Header from '@/components/Header'
import Content from '@/components/Content'

export default {
  name: 'app',
  data () {
    return {
      mode: 'light',
      api_key: '28834959db15ffe30e03b7f5bbac5074',
      url_base: 'https://api.openweathermap.org/data/2.5/',
      query: '',
      weather: {},
      cnt: 5
    }
  },
  components: {
    Header,
    Content
  },
  created () {
    window.addEventListener('keyup', this.keyPress)
  },
  methods: {
    keyPress (e) {
      if (e.key === 't') {
        this.toggle()
      }
    },
    toggle () {
      if (this.mode === "dark") {
        this.mode = "light"
      } else {
        this.mode = "dark"
      }
    },
    fetchWeather (e) {
      if (e.key == "Enter") {
        fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
          .then(res => {
            //console.log(res)
            return res.json();
          }).then(this.setResults);
      }
    },
    weatherForecast(e) {
      if (e.key == "Enter") {
        fetch(`${this.url_base}forecast?q=${this.query}&APPID=${this.api_key}&cnt=${this.cnt}`)  
        .then(function(res) {
            return res.json() 
        })
        .then(function(data) {
            console.log(JSON.stringify(data));
            return JSON.stringify(data)
            //drawWeather(data);
        })
        .catch(function() {
            // catch any errors
        });
      }
    },
    fetchForecast (e) {
      if (e.key == "Enter") {
        //fetch(`${this.url_base}forecast/daily?q=${this.query}&mode=xml&units=metric&cnt=7&APPID=${this.api_keyy}`)
        //fetch(`${this.url_base}forecast/daily?q=${this.query}&cnt=${this.cnt}&appid=${this.api_key}`)
        //fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?q=london&units=metric&APPID==${this.api_keyy}&cnt=7`)
        fetch(`${this.url_base}forecast?q=${this.query}&APPID=${this.api_key}&cnt=${this.cnt}`)
          /*.then(res => {
            return res.json();
          }).then(this.setResults);*/
          .then(res => {
            console.log(res)
            return res.json();
          })
      }
    },
    setResults (results) {
      this.weather = results;
    },
    dateBuilder () {
      let d = new Date();
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      let time = d.getTime();

      return `${day} ${date} ${month} ${year} ${time}`;
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'montserrat', sans-serif;
}

.app {
  background: #F3F3F3;
  color: #15202B;
  transition: background 0.3s ease-in-out;
}

.dark {
  background: #192734;
  color: #E8E8E8;
}
</style>