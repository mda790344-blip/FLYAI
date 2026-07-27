async function sendMessage() {

    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    const message = input.value;

    if (message.trim() === "") {
        return;
    }

    // Show user's message
    chatBox.innerHTML += `
<div class="user-message">
👤 ${message}
</div>
`;
    input.value = "";

    // Send message to Flask
    const response = await fetch("/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message: message
        })
    });

    const data = await response.json();

    // Show AI response
   chatBox.innerHTML += `
<div class="bot-message">
🤖 ${data.reply}
</div>
`;

    chatBox.scrollTop = chatBox.scrollHeight;
}