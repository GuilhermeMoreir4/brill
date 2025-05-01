<template>
  <div id="app">
    <Navigation />
    <Home/>
    <router-view></router-view>
  </div>
</template>

<script setup>
import Navigation from './components/Navigation.vue'
import Home from './components/Home.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}

#app {
  min-height: 100vh;
  width: 100%;
  position: relative;
}
</style>