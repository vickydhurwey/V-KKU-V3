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
