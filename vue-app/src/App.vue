<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Home/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
export default {
  components: {
    Home
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Nunito');
#app {
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#app img {
  width: 13%;
}
</style>
