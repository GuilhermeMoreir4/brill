<template>
  <div id="report-bug">
    <div id="background"></div>
    <div id="content">
      <h1>Report a Bug</h1>
      <div class="bug-form">
        <div class="form-group">
          <label for="title">Bug Title</label>
          <input type="text" id="title" placeholder="Brief description of the bug">
        </div>
        <div class="form-group">
          <label for="description">Detailed Description</label>
          <textarea id="description" placeholder="Please describe the bug in detail..."></textarea>
        </div>
        <div class="form-group">
          <label for="steps">Steps to Reproduce</label>
          <textarea id="steps" placeholder="1. Step one&#10;2. Step two&#10;3. Step three"></textarea>
        </div>
        <div class="form-group">
          <label for="version">Brill Version</label>
          <input type="text" id="version" placeholder="e.g., 1.0.0">
        </div>
        <div class="form-group">
          <label for="os">Operating System</label>
          <select id="os">
            <option value="">Select your OS</option>
            <option value="windows">Windows</option>
            <option value="macos">macOS</option>
            <option value="linux">Linux</option>
          </select>
        </div>
        <button class="submit-button">Submit Report</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
#report-bug {
  min-height: 80vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
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
  width: 100%;
  max-width: 1200px;
}

h1 {
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-weight: 700;
  letter-spacing: 1px;
}

.bug-form {
  max-width: 800px;
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 10px;
  backdrop-filter: blur(5px);
  margin: 0 auto;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  font-weight: 500;
  letter-spacing: 0.5px;
}

input, textarea, select {
  width: 100%;
  padding: 0.75rem;
  border-radius: 5px;
  border: none;
  background: rgba(255, 255, 255, 0.9);
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  font-weight: 400;
  letter-spacing: 0.5px;
}

textarea {
  min-height: 100px;
  resize: vertical;
}

.submit-button {
  width: 100%;
  padding: 0.75rem 1.5rem;
  background: white;
  color: blueviolet;
  border: none;
  border-radius: 20px;
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.submit-button:hover {
  transform: scale(1.05);
}

@media (min-width: 768px) {
  #content {
    padding: 10vh 20vh;
  }

  .bug-form {
    padding: 2rem;
  }
}

@media (max-width: 480px) {
  #content {
    padding: 1rem;
  }

  .bug-form {
    padding: 1rem;
  }
}
</style> 