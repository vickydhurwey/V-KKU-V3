let progress = document.getElementById("progress");
let percent = document.getElementById("percent");
let status = document.getElementById("status");

let boot = document.getElementById("boot-screen");
let dashboard = document.getElementById("dashboard");

let value = 0;

let messages = [
    "Loading Core...",
    "Loading AI Engine...",
    "Connecting Network...",
    "Checking Security...",
    "Starting Voice Engine...",
    "Launching V!KKU V3..."
];

let index = 0;

let loading = setInterval(() => {

    value++;

    progress.style.width = value + "%";
    percent.innerHTML = value + "%";

    if (value % 20 === 0 && index < messages.length) {
        status.innerHTML = messages[index];
        index++;
    }

    if (value >= 100) {

        clearInterval(loading);

        boot.style.display = "none";
        dashboard.style.display = "flex";

    }

}, 50);
// ===== Live Clock =====

function updateClock() {

    const now = new Date();

    const time = now.toLocaleTimeString();

    const date = now.toDateString();

    document.getElementById("time").innerHTML = time;
    document.getElementById("date").innerHTML = date;

}

setInterval(updateClock, 1000);

updateClock();
// ===== Voice Assistant =====

const mic = document.getElementById("mic");
const chat = document.getElementById("chat");

const SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {

    const recognition = new SpeechRecognition(reply);

    recognition.lang = "en-IN";
    speechsynthesis.speak(speech)
    recognition.continuous = true;

    mic.onclick = () => {
        recognition.start();
    };

    recognition.onresult = (event) => {

        let text = event.results[0][0].transcript;

        chat.innerHTML += `<p><b>You:</b> ${text}</p>`;

        let reply = "Sorry, I didn't understand.";

        if (text.toLowerCase().includes("hello")) {
            reply = "Hello Vicky! Nice to hear your voice.";
        } else if (text.toLowerCase().includes("how are you")) {
            reply = "I'm doing great. Thank you for asking.";
        } else if (text.toLowerCase().includes("your name")) {
            reply = "My name is V!KKU V3.";
        }

        chat.innerHTML += `<p><b>V!KKU:</b> ${reply}</p>`;

        const speech = new SpeechSynthesisUtterance(reply);
        speech.lang = "en-IN";
        speechSynthesis.speak(speech);

    };

} else {

    chat.innerHTML += "<p><b>V!KKU:</b> Sorry, your browser doesn't support voice recognition.</p>";

}
// ===== V!KKU MEMORY SYSTEM =====

let vikkU_Memory = {
    name: "Vicky",
    assistantName: "V!KKU V3",

    preferences: {
        language: "Hindi",
        style: "Friendly"
    },

    interests: [
        "Technology",
        "AI",
        "Coding",
        "Video Editing"
    ],

    projects: [
        "V!KKU V3 AI Assistant"
    ]
};


// Save Memory
localStorage.setItem(
    "VIKKU_MEMORY",
    JSON.stringify(vikkU_Memory)
);


// Load Memory
let savedMemory = JSON.parse(
    localStorage.getItem("VIKKU_MEMORY")
);

console.log(savedMemory);
