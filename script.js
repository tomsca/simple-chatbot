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

// Knowledge base: basic statistics Q&A
const statsFAQ = [
  {
    pattern: /(mean|average)/,
    answer:
      "The mean (average) is the sum of all values divided by the number of values. It’s a measure of the center of the data."
  },
  {
    pattern: /(median)/,
    answer:
      "The median is the middle value when the data are ordered from smallest to largest. If there are an even number of values, it’s the average of the two middle values."
  },
  {
    pattern: /(mode)/,
    answer:
      "The mode is the value that occurs most frequently in the data set. A data set can have no mode, one mode, or more than one mode."
  },
  {
    pattern: /(variance|standard deviation|std dev|sd)/,
    answer:
      "Variance measures how spread out the data are from the mean. Standard deviation is the square root of the variance and is in the same units as the data."
  },
  {
    pattern: /(population|sample)\s+mean/,
    answer:
      "The population mean (μ) is the mean of all values in the entire population. The sample mean (x̄) is the mean of the values in a sample taken from that population."
  },
  {
    pattern: /(population|sample)\s+standard deviation/,
    answer:
      "Population standard deviation divides by N (the population size). Sample standard deviation divides by n − 1 (the sample size minus one) to account for estimation from a sample."
  },
  {
    pattern: /(null hypothesis|alternative hypothesis|h0|ha)/,
    answer:
      "The null hypothesis (H₀) is a statement of no effect or no difference. The alternative hypothesis (Hₐ) is what you want to find evidence for, such as a difference or an effect."
  },
  {
    pattern: /(p-?value|p value)/,
    answer:
      "The p-value is the probability of getting a result as extreme as, or more extreme than, the observed result if the null hypothesis is true. A small p-value suggests evidence against H₀."
  },
  {
    pattern: /(type i error|type 1 error)/,
    answer:
      "A Type I error happens when you reject a true null hypothesis. It’s like a false alarm. The probability of a Type I error is the significance level α (for example, 0.05)."
  },
  {
    pattern: /(type ii error|type 2 error)/,
    answer:
      "A Type II error happens when you fail to reject a false null hypothesis. It’s like missing a real effect. The probability of a Type II error is β, and 1 − β is the power of the test."
  },
  {
    pattern: /(confidence interval|ci)/,
    answer:
      "A confidence interval gives a range of plausible values for a population parameter. For example, a 95% confidence interval means that, in repeated samples, about 95% of such intervals would contain the true parameter."
  },
  {
    pattern: /(normal distribution|bell curve|z score|z-score)/,
    answer:
      "The normal distribution is a symmetric, bell-shaped curve centered at the mean. A z-score tells you how many standard deviations a value is above or below the mean."
  },
  {
    pattern: /(z test|z-test|t test|t-test)/,
    answer:
      "A z-test is used when the population standard deviation is known and the sample is large. A t-test is used when the population standard deviation is unknown and you use the sample standard deviation instead."
  },
  {
    pattern: /(correlation|correlated|correlate)/,
    answer:
      "Correlation measures the strength and direction of a linear relationship between two quantitative variables. It does not prove causation."
  },
  {
    pattern: /(correlation.*causation|cause.*correlation)/,
    answer:
      "Correlation does not imply causation. Two variables can move together without one causing the other; there may be other factors involved."
  },
  {
    pattern: /(probability)/,
    answer:
      "Probability is a number between 0 and 1 that measures how likely an event is to happen. 0 means impossible, 1 means certain."
  },
  {
    pattern: /(sample size)/,
    answer:
      "Sample size is the number of observations in your sample. Larger samples generally give more precise estimates and more powerful hypothesis tests."
  }
];

// Rule-based response using patterns above
function getBotResponse(message) {
  const text = message.toLowerCase().trim();

  // First, handle greetings and general chat
  if (/(hello|hi|hey)\b/.test(text)) {
    return "Hello! I’m a basic statistics helper. Ask me about mean, standard deviation, p-values, confidence intervals, tests, and more.";
  }

  if (text.includes("who are you") || text.includes("what can you do")) {
    return "I’m a simple statistics chatbot. I can explain basic concepts like mean, median, standard deviation, hypotheses, p-values, confidence intervals, and common tests.";
  }

  if (text.includes("help")) {
    return "You can ask things like:\n- What is a p-value?\n- Explain Type I error\n- What is the difference between a t-test and a z-test?\n- What is a confidence interval?";
  }

  if (text.includes("bye") || text.includes("goodbye")) {
    return "Goodbye! Keep practicing your statistics.";
  }

  // Check statistics FAQ patterns
  for (const item of statsFAQ) {
    if (item.pattern.test(text)) {
      return item.answer;
    }
  }

  // Default fallback
  return "That’s a good question. I’m designed for basic stats concepts like mean, median, standard deviation, p-values, confidence intervals, and hypothesis tests. Try asking about one of those topics.";
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
addMessage("Hi, I’m your Statistics Chatbot. Ask me about basic statistics concepts!");

