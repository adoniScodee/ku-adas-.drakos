function toggleChat() {
  const chatWindow = document.getElementById("chatWindow");
  chatWindow.style.display =
    chatWindow.style.display === "flex" ? "none" : "flex";
}

function handleChat(event) {
  if (event.key === "Enter") {
    const input = document.getElementById("chatInput");
    const message = input.value;
    if (message.trim() === "") return;

    const chatLog = document.getElementById("chatLog");
    const userMsg = document.createElement("div");
    userMsg.textContent = "👤 " + message;
    chatLog.appendChild(userMsg);

    // Basit yapay cevap
    const botMsg = document.createElement("div");
    botMsg.textContent = "🤖: Bu harika bir soru! Daha fazlası için bizimle iletişime geçin.";
    chatLog.appendChild(botMsg);

    input.value = "";
    chatLog.scrollTop = chatLog.scrollHeight;
  }
}

// Dil geçişi
document.getElementById("lang-toggle").addEventListener("click", function () {
  const lang = document.documentElement.lang;
  if (lang === "tr") {
    document.documentElement.lang = "en";
    this.textContent = "TR";
    alert("English translation not fully implemented in demo.");
  } else {
    document.documentElement.lang = "tr";
    this.textContent = "EN";
  }
});
