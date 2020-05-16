<template>
  <div id="app">
    <homePage/>
  </div>
</template>

<script>
import homePage from './components/homePage.vue'

export default {
  name: 'App',
  components: {
    homePage
  }
}
</script>

<style>
body{
  background:linear-gradient(to bottom , #FF5733, #581845);
  background-attachment: fixed;
  
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
