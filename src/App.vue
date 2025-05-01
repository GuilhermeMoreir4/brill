<template>
  <div id="app">
    <div id="background"></div>
    <Navigation />
    <div id="content">
       <div id="title">
        <h1>ANYONE CAN BRILL</h1>
        <p>Write once read everywhere</p>
       </div> 
       
       <div id="call-to-action">
        <p>
          Download Brill on your favorite OS and start to take notes now!
        </p>
        <button>
          Get Started
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navigation from './components/Navigation.vue'
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

#background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('@/assets/background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(8px) brightness(0.7);
  transform: scale(1.1);
  z-index: -1;
}

#call-to-action p{
  color: white;
  font-size: 20px;
}

#call-to-action {
  display: flex;
  flex-direction: column;
  max-width: 45vh;
  gap: 20px;
}

#call-to-action button {
  max-width: 20vh;
  padding: 10px;
  border-radius: 20px;
  color: blueviolet;
  background-color: white;
  border: none;
  font-weight: bold;
  transition: transform 0.2s ease;
}

#call-to-action button:hover {
  cursor: pointer;
  transform: scale(1.05);
}

#content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 20vh;
  height: 80vh;
  justify-content: center;
  position: relative;
  z-index: 1;
}

#title h1 {
  font-size: 3.5rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

#title p {
  color: #ffffff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

#app {
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>