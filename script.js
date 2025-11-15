const chatWindow = document.getElementById("chat-window");
const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");

function addMessage(text, sender = "bot") {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = text;
  chatWindow.appendChild(msg);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Very simple rule-based response
function getBotResponse(message) {
  const text = message.toLowerCase().trim();

  if (text.includes("hello") || text.includes("hi")) {
    return "Hello! How can I help you today?";
  }

  if (text.includes("name")) {
    return "I'm a simple chatbot hosted on GitHub Pages.";
  }

  if (text.includes("help")) {
    return "You can ask me basic questions like 'who are you?' or say 'bye' to end.";
  }

  if (text.includes("bye") || text.includes("goodbye")) {
    return "Goodbye! Thanks for chatting with me.";
  }

  // Default fallback
  return "I'm not sure how to answer that yet, but I'm still learning!";
}

// Handle form submit
chatForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const text = userInput.value;
  if (!text.trim()) return;

  // Add user message
  addMessage(text, "user");

  // Get bot reply
  const botReply = getBotResponse(text);

  // Simulate a tiny delay
  setTimeout(() => {
    addMessage(botReply, "bot");
  }, 300);

  userInput.value = "";
});

// Greet when page loads
addMessage("Hi, I'm your GitHub chatbot. Ask me something!");

