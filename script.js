// STUDYMATE AI - Frontend Chatbot

const studyTopics = {
    "python": "Python is a high-level programming language. It is easy to learn and used in web development, automation, Data Science and Artificial Intelligence.",

    "data structures": "Data Structures organize and store data efficiently. Examples include Arrays, Linked Lists, Stacks, Queues, Trees and Graphs.",

    "operating systems": "An Operating System manages computer hardware and software. Examples are Windows, Linux and macOS. Its functions include memory management, process management and file management.",

    "digital electronics": "Digital Electronics works with binary values 0 and 1. Important topics include Logic Gates, Flip-Flops, Counters and Registers.",

    "java": "Java is an object-oriented programming language. It is platform-independent and commonly used for application development."
};

// Display messages
function addMessage(message, sender) {
    const chatBox = document.getElementById("chatBox");

    const messageDiv = document.createElement("div");
    messageDiv.className = "message " + sender;
    messageDiv.textContent = message;

    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Send message
function sendMessage() {
    const input = document.getElementById("userInput");
    const question = input.value.trim().toLowerCase();

    if (!question) return;

    addMessage(input.value.trim(), "user");
    input.value = "";

    let answer = "I can help with Python, Data Structures, Operating Systems, Java and Digital Electronics. Try asking about one of these subjects!";

    if (question.includes("quiz")) {
        answer = "QUIZ TIME!\n\n1. What does CPU stand for?\nA) Central Processing Unit\nB) Computer Personal Unit\n\n2. Which data structure follows LIFO?\nA) Queue\nB) Stack\n\nAnswers: 1-A, 2-B";

    } else if (question.includes("short notes")) {
        answer = "SHORT NOTES\n\n1. Data Structures organize data.\n2. Arrays store elements in sequence.\n3. Stacks follow LIFO.\n4. Queues follow FIFO.\n5. Trees represent hierarchical data.";

    } else if (question.includes("study tips")) {
        answer = "STUDY TIPS\n\n1. Study for 25 minutes.\n2. Take a 5-minute break.\n3. Write short notes.\n4. Practise previous questions.\n5. Revise regularly.";

    } else {
        for (const topic in studyTopics) {
            if (question.includes(topic)) {
                answer = studyTopics[topic];
                break;
            }
        }
    }

    addMessage(answer, "bot");
}

// Suggested questions
function quickAsk(question) {
    document.getElementById("userInput").value = question;
    sendMessage();
}

// Clear chat
function clearChat() {
    document.getElementById("chatBox").innerHTML = "";
}