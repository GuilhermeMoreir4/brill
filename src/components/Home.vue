<template>
  <div id="home">
    <div id="background"></div>
    <div id="content">
      <div id="title">
        <h1>ANYONE CAN BRILL</h1>
        <p>Write once read everywhere</p>
      </div>
      
      <div id="call-to-action">
        <p>
          Download Brill on your favorite OS and start to take notes now!
        </p>
        <router-link to="/download">
          <button>
            Get Started
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
#home {
  min-height: 80vh;
  width: 100%;
  position: relative;
  overflow: hidden;
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

#content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  min-height: 80vh;
  justify-content: center;
  position: relative;
  z-index: 1;
}

#title h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin: 0;
}

#title p {
  color: #ffffff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  font-size: clamp(1rem, 2vw, 1.5rem);
  margin: 0.5rem 0;
}

#call-to-action {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 100%;
}

#call-to-action p {
  color: white;
  font-size: clamp(1rem, 2vw, 1.25rem);
  margin: 0;
}

#call-to-action button {
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  padding: 0.75rem 1.5rem;
  border-radius: 20px;
  color: blueviolet;
  background-color: white;
  border: none;
  font-weight: bold;
  transition: transform 0.2s ease;
  width: fit-content;
}

#call-to-action button:hover {
  cursor: pointer;
  transform: scale(1.05);
}

@media (min-width: 768px) {
  #content {
    padding-left: 20vh;
    padding-right: 20vh;
  }

  #call-to-action {
    max-width: 45vh;
  }
}

@media (max-width: 480px) {
  #content {
    padding: 1rem;
  }

  #call-to-action button {
    width: 100%;
  }
}
</style> 