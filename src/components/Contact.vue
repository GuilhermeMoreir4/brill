<template>
  <div id="contact">
    <div id="background"></div>
    <div id="content">
      <h1>Contact Us</h1>
      <div class="contact-info">
        <p>Email: contact@brill.com</p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Address: 123 Brill Street, Tech City</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
#contact {
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
}

.contact-info {
  font-size: clamp(1rem, 2vw, 1.5rem);
  line-height: 1.6;
}

.contact-info p {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
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

  .contact-info {
    line-height: 1.4;
  }
}
</style> 