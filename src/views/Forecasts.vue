<template>
    <div class="contents">
      <main>
      <div class="weather-in">
        <div class="weather"><h3>Forecast Weather</h3></div>
      </div>

      <div class="search-box">
        <input 
          type="text" 
          class="search-bar" 
          placeholder="Search"
          v-model="query"
          @keypress="weatherForecast"
        />
      </div>

      <div class="weather-wrap">
        <div class="location-box">
            <div class="location"><h3>{{ query }}</h3></div>
          </div>

          <div class="column" v-for="item in dataProcessing" :key="item.id">
            <div class="card" >
                <h1>{{ item.weather }}</h1>
                <h3>{{ item.temp }}°</h3>
                <h5>{{ item.time }}</h5>
            </div>
        </div>
        </div>
        </main>
  </div>
</template>

<script>
export default {
  props: ['mode'],
  data () {
    return {
      query: null
    }
  },
  computed: {
      forecasts() {
          return this.$store.getters['datastore/forecastsData']
      },

      dataProcessing() {
          const dataAcc = [];
            const dataProc = this.forecasts;
            if(dataProc.city != undefined){
              const dataInfo = dataProc.list
              dataInfo.forEach(function(obj) {
              const time = obj.dt_txt
              const temp = Math.round(obj.main.temp)
              const weather = obj.weather
              weather.forEach(function(objtwo) {
              const climate = objtwo.main;
              dataAcc.push({'name': dataProc.city.name,'country': dataProc.city.country, 'temp': temp, 'weather': climate, 'time': time})
              });
            });
          }
          return dataAcc;
      }
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

    weatherForecast(e) {
        if (e.key == "Enter") {
            this.$store.commit('datastore/query', this.query)
            this.$store.dispatch('datastore/forecastsData');
        }
    }
  },
  created: function(){}
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

.column {
  float: left;
  width: 20%;
  padding: 0 10px;
}

.row {margin: 0 -5px;}

.row:after {
  content: "";
  display: table;
  clear: both;
}

@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

.card {
  box-shadow: 0 4px 8px 0 rgb(0, 0, 0);
  padding: 16px;
  text-align: center;
  border-radius: 16px;
  border-block-color: #000000;
}

.contents {
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}

main {
  min-height: 120vh;
  padding: 25px;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
}

.search-box {
  width: 100%;
  margin-bottom: 30px;
}

.search-box .search-bar {
  display: block;
  width: 100%;
  padding: 15px;
  color: #000000;
  font-size: 20px;
  appearance: none;
  border:none;
  outline: none;
  background: none;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
}

.search-box .search-bar:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgb(255, 255, 255);
  border-radius: 16px 0px 16px 0px;
}

.location-box .location {
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
  padding-bottom: 15px;
}

.location-box .date {
  font-size: 20px;
  font-weight: 300;
  text-align: center;
}

.weather-in {
  padding-bottom: 20px;
}

.weather-in .weather {
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}

.weather-box {
  text-align: center;
}

.weather-box .temp {
  display: inline-block;
  padding: 10px 25px;
  font-size: 102px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color:rgba(18, 66, 224, 0.25);
  border-radius: 16px;
  margin: 30px 0px;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

.weather-box .weather {
  font-size: 48px;
  font-weight: 700;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
</style>