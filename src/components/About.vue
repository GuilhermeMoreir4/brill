<template>
  <div id="about">
    <div id="background"></div>
    <div id="content">
      <h1>About Brill</h1>
      <div class="about-content">
        <p>Brill is a revolutionary note-taking application designed to make your life easier.</p>
        <p>Our mission is to provide a seamless experience across all platforms, allowing you to write once and access your notes everywhere.</p>
        <p>Founded in 2024, we're committed to innovation and user satisfaction.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
#about {
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
  padding: 2rem;
  color: white;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h1 {
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-weight: 700;
  letter-spacing: 1px;
}

.about-content {
  font-size: clamp(1rem, 2vw, 1.5rem);
  line-height: 1.6;
  max-width: 800px;
  font-weight: 400;
  letter-spacing: 0.5px;
}

.about-content p {
  margin-bottom: 1.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

@media (min-width: 768px) {
  #content {
    padding: 20vh;
  }
}

@media (max-width: 480px) {
  #content {
    padding: 1rem;
  }

  .about-content {
    line-height: 1.4;
  }
}
</style> 