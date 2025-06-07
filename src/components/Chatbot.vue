<template>
  <div id="chatbot">
    <div id="background"></div>
    <div id="content">
      <h1>Brill Assistant</h1>
      <div class="chat-container">
        <div class="chat-messages" ref="messagesContainer">
          <div v-for="(message, index) in messages" :key="index" 
               :class="['message', message.role]">
            <div class="message-content">
              {{ message.content }}
            </div>
          </div>
        </div>
        <div class="chat-input">
          <input 
            type="text" 
            v-model="userInput" 
            @keyup.enter="sendMessage"
            placeholder="Ask me anything about Brill..."
          >
          <button @click="sendMessage" :disabled="isLoading">
            {{ isLoading ? 'Sending...' : 'Send' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';

const messages = ref([
  { role: 'assistant', content: 'Hello! I\'m your Brill assistant. How can I help you today?' }
]);
const userInput = ref('');
const isLoading = ref(false);
const messagesContainer = ref(null);

const scrollToBottom = async () => {
  await nextTick();
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
};

const sendMessage = async () => {
  if (!userInput.value.trim() || isLoading.value) return;

  const userMessage = userInput.value.trim();
  messages.value.push({ role: 'user', content: userMessage });
  userInput.value = '';
  await scrollToBottom();

  isLoading.value = true;
  try {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('API key is missing. Please check your .env file.');
    }

    console.log('API Key exists:', apiKey ? 'Yes' : 'No');
    
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    console.log('Request URL:', url);

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `You are a helpful assistant for the Brill note-taking application. Answer the following question about Brill: ${userMessage}`
          }]
        }]
      })
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }

    const data = await response.json();
    console.log('API Response:', data);

    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
      const assistantMessage = data.candidates[0].content.parts[0].text;
      messages.value.push({ role: 'assistant', content: assistantMessage });
    } else {
      console.error('Invalid response format:', data);
      throw new Error('Invalid response format from API');
    }
  } catch (error) {
    console.error('Detailed error:', error);
    messages.value.push({ 
      role: 'assistant', 
      content: `I apologize, but I'm having trouble connecting to the server. Error: ${error.message}` 
    });
  } finally {
    isLoading.value = false;
    await scrollToBottom();
  }
};

onMounted(() => {
  scrollToBottom();
});
</script>

<style scoped>
#chatbot {
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
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-weight: 700;
  letter-spacing: 1px;
}

.chat-container {
  max-width: 800px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  backdrop-filter: blur(5px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 60vh;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.message {
  max-width: 80%;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  line-height: 1.4;
}

.message.user {
  align-self: flex-end;
  background: white;
  color: blueviolet;
}

.message.assistant {
  align-self: flex-start;
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.chat-input {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
}

.chat-input input {
  flex: 1;
  padding: 0.75rem;
  border-radius: 20px;
  border: none;
  background: rgba(255, 255, 255, 0.9);
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  color: #333;
}

.chat-input button {
  padding: 0.75rem 1.5rem;
  border-radius: 20px;
  border: none;
  background: white;
  color: blueviolet;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.chat-input button:hover:not(:disabled) {
  transform: scale(1.05);
}

.chat-input button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

@media (min-width: 768px) {
  #content {
    padding: 10vh 20vh;
  }
}

@media (max-width: 480px) {
  #content {
    padding: 1rem;
  }

  .chat-container {
    height: 70vh;
  }

  .message {
    max-width: 90%;
  }
}
</style> 