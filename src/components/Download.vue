<template>
  <div id="download">
    <div id="background"></div>
    <div id="content">
      <h1>Download Brill</h1>
      <div class="download-options">
        <div class="platform">
          <h2>Windows</h2>
          <button class="download-button">Download for Windows</button>
          <p>Version 1.0.0 | 64-bit</p>
        </div>
        <div class="platform">
          <h2>macOS</h2>
          <button class="download-button">Download for macOS</button>
          <p>Version 1.0.0 | Universal</p>
        </div>
        <div class="platform">
          <h2>Linux</h2>
          <button class="download-button">Download for Linux</button>
          <p>Version 1.0.0 | .deb/.rpm</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#download {
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
  padding: 10vh 20vh;
  color: white;
}

h1 {
  font-size: 3rem;
  margin-bottom: 3rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.download-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.platform {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 10px;
  backdrop-filter: blur(5px);
}

.platform h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.download-button {
  width: 100%;
  padding: 1rem;
  margin: 1rem 0;
  background: white;
  color: blueviolet;
  border: none;
  border-radius: 20px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.download-button:hover {
  transform: scale(1.05);
}

.platform p {
  color: #ffffff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}
</style> 