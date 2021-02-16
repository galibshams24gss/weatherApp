<template>
    <div id="app" :class="mode">
      <Header :mode="mode" @toggle="toggle" />
      <div id="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'app',
  data () {
    return {
      mode: 'light'
    }
  },
  components: {
    Header
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
  background: #172633;
  color: #E8E8E8;
}
</style>