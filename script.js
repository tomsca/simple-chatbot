const chatWindow = document.getElementById("chat-window");
const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");

// 🔗 Change this to your real backend URL when deployed
const API_URL = "https://your-stats-bot.onrender.com/api/chat";

function addMessage(text, sender = "bot") {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = text;
  chatWindow.appendChild(msg);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

async function getBotResponse(message) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.reply || "Sorry, I could not get a reply from the statistics tutor.";
  } catch (error) {
    console.error(error);
    return "There was an error contacting the statistics tutor. Please try again later.";
  }
}

// Handle form submit
chatForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  const text = userInput.value;
  if (!text.trim()) return;

  // User message
  addMessage(text, "user");
  userInput.value = "";

  // Temporary typing indicator
  const typingId = "typing-indicator";
  const typing = document.createElement("div");
  typing.id = typingId;
  typing.classList.add("message", "bot");
  typing.textContent = "Thinking...";
  chatWindow.appendChild(typing);
  chatWindow.scrollTop = chatWindow.scrollHeight;

  // Get real response from backend
  const botReply = await getBotResponse(text);

  // Remove typing indicator
  const typingNode = document.getElementById(typingId);
  if (typingNode) {
    chatWindow.removeChild(typingNode);
  }

  // Add bot message
  addMessage(botReply, "bot");
});

// Initial greeting
addMessage("Hi, I'm your ChatGPT-powered Statistics Tutor. Ask me any statistics or probability question.");
