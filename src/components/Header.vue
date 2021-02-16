<template>
  <header>
    <h1>{{ mode }}</h1>
    <Toggle :mode="mode" @toggle="$emit('toggle')" />
    <nav>
      <div class="nav-link"><router-link to="/">Current</router-link></div>
      <div class="nav-link"><router-link to="/forecasts">Forecasts</router-link></div>
    </nav>
  </header>
</template>

<script>
import Toggle from '@/components/Toggle'
export default {
  props: ['mode'],
  components: {
    Toggle
  }
}
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 25px;
  height: 60px;
  background: #FFFFFF;
  transition: background 0.3s ease-in-out;
}

.dark header {
  background: #000000;
}

header h1 {
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 800;
}
header nav {
  display: flex;
  height: 60px;
}
header nav .nav-link {
  display: flex;
  align-items: center;
  padding: 0px 15px;
}
header nav .nav-link:hover {
  background: #9eff01b7;
}
.dark header nav .nav-link:hover {
  background: #ffd000;
}
.router-link-exact-active {
      color: #011aff; 
    }
</style>