<template>
  <header>
    <h1>{{ mode }} Mode</h1>
    <Toggle :mode="mode" @toggle="$emit('toggle')" />
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
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 900;
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
  background: #02bff8;
}
.dark header nav .nav-link:hover {
  background: #101520;
}
</style>