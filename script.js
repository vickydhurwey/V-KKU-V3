// ===============================
// V!KKU V3 MAIN SCRIPT
// ===============================


// ===== BOOT SYSTEM =====

let progress = document.getElementById("progress");
let percent = document.getElementById("percent");
let status = document.getElementById("status");

let boot = document.getElementById("boot-screen");
let dashboard = document.getElementById("dashboard");

let value = 0;

let messages = [
    "Loading Core...",
    "Loading AI Engine...",
    "Checking Memory...",
    "Starting Voice System...",
    "V!KKU V3 Online..."
];

let msgIndex = 0;


let loading = setInterval(()=>{

    value++;

    if(progress){
        progress.style.width = value + "%";
    }

    if(percent){
        percent.innerHTML = value + "%";
    }


    if(value % 20 === 0 && msgIndex < messages.length){

        if(status){
            status.innerHTML = messages[msgIndex];
        }

        msgIndex++;

    }


    if(value >= 100){

        clearInterval(loading);


        if(boot){
            boot.style.display = "none";
        }


        if(dashboard){
            dashboard.style.display = "flex";
        }

    }


},50);





// ===============================
// CLOCK SYSTEM
// ===============================


function updateClock(){

    let now = new Date();


    let time = now.toLocaleTimeString();

    let date = now.toDateString();


    let timeBox = document.getElementById("time");
    let dateBox = document.getElementById("date");


    if(timeBox){
        timeBox.innerHTML = time;
    }


    if(dateBox){
        dateBox.innerHTML = date;
    }

}


setInterval(updateClock,1000);

updateClock();





// ===============================
// MEMORY SYSTEM
// ===============================


let memory = {

    name:"Vicky",

    assistant:"V!KKU V3",

    language:"Hindi",

    interests:[
        "Technology",
        "AI",
        "Coding",
        "Video Editing"
    ]

};


if(!localStorage.getItem("VIKKU_MEMORY")){

    localStorage.setItem(
        "VIKKU_MEMORY",
        JSON.stringify(memory)
    );

}




function saveChat(message){


    let history = JSON.parse(
        localStorage.getItem("CHAT_HISTORY")
    ) || [];


    history.push(message);


    localStorage.setItem(
        "CHAT_HISTORY",
        JSON.stringify(history)
    );

}




function loadChat(){


    let history = JSON.parse(
        localStorage.getItem("CHAT_HISTORY")
    ) || [];


    let chatBox = document.getElementById("chat");


    if(chatBox){

        history.forEach(msg=>{

            chatBox.innerHTML += `<p>${msg}</p>`;

        });

    }


}





// ===============================
// VOICE ASSISTANT
// ===============================


let mic = document.getElementById("mic");

let chat = document.getElementById("chat");



const SpeechRecognition =
window.SpeechRecognition ||
window.webkitSpeechRecognition;



if(SpeechRecognition && mic){


    const recognition = new SpeechRecognition();


    recognition.lang = "hi-IN";


    recognition.continuous = false;



    mic.onclick = ()=>{


        recognition.start();


        mic.innerHTML="🎧 Listening...";

    };




    recognition.onresult = (event)=>{


        let text =
        event.results[0][0].transcript;



        chat.innerHTML +=
        `<p><b>You:</b> ${text}</p>`;


        saveChat(
        `<b>You:</b> ${text}`
        );



        let reply =
        "Mujhe samajh nahi aaya Vicky.";




        if(text.includes("hello") ||
        text.includes("helo") ||
        text.includes("hi")){


            reply =
            "Hello Vicky, main V!KKU V3 hoon.";

        }



        else if(text.includes("naam")){


            reply =
            "Mera naam V!KKU V3 hai.";

        }



        else if(text.includes("kaise")){


            reply =
            "Main bilkul ready hoon Vicky.";

        }



        else if(text.includes("time")){


            reply =
            "Abhi time hai " + new Date().toLocaleTimeString();

        }




        chat.innerHTML +=
        `<p><b>V!KKU:</b> ${reply}</p>`;


        saveChat(
        `<b>V!KKU:</b> ${reply}`
        );




        let voice =
        new SpeechSynthesisUtterance(reply);



        voice.lang="hi-IN";

        voice.pitch=1.2;

        voice.rate=0.9;



        speechSynthesis.speak(voice);



        mic.innerHTML="🎤 Talk to V!KKU";


    };



}
else{


    if(chat){

        chat.innerHTML +=
        "<p>Voice support not available</p>";

    }

}



// Load previous chats

loadChat();
