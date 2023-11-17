const socket = io('ws://localhost:8080');
let currentQuestion;
let oldQuestion;
let currentBuzzer;
let currentAudio;
let next = 0;
var change = 1;
const audio = new Audio("funky.mp3");
audio.volume = 0.001;

socket.on('answer', (id, answer) => {
    document.getElementById("input" + id).innerHTML = answer;
});

socket.on('question', (id) => {
    oldQuestion = currentQuestion;
    console.log(oldQuestion);
    currentQuestion = id;
    openQuestion(id);
});

socket.on('showAnswer', () => {
    showAnswer(currentQuestion);
});

socket.on('closeQuestion', () => {
    close(currentQuestion);
});

socket.on('endQuestion', () => {
    end(currentQuestion);
});

socket.on('blurOut', () => {
    blurOut();
});

socket.on('blurOutSingle', (id) => {
    blurOutSingle(id);
});

socket.on('blurAn', () => {
    blurAn();
});

socket.on('pointsCalc', (id) => {
    pointsCalc(id);
});

socket.on('buzzer', (id) => {
    buzzer(id);
});

socket.on('buzzerR', () => {
    buzzerR();
});

socket.on('nextC', () => {
    nextC();
});

socket.on('playS', () => {
    playAudio();
});

socket.on('changeF', () => {
    changeField();
});



function close(id) {
    document.querySelector(".frage[data-field=" + id + "]").style.display = "none";
}
function end(id){
    document.querySelector(".frage[data-field=" + id + "]").style.display = "none";
    if(document.querySelector(".frage[data-field="+id+"]").classList.contains("gold"))
    {
        document.getElementById(id).classList.add("disabledPointGold");
    }
    else{
        document.getElementById(id).classList.add("disabledPoint");
    }
}

function openQuestion(id) {
    if(oldQuestion==null){
        document.querySelector(".frage[data-field=" + id + "]").style.display = "block";
    }
    else{
        console.log(id);
        document.querySelector(".frage[data-field=" + oldQuestion + "]").style.display = "none";
        document.querySelector(".frage[data-field=" + id + "]").style.display = "block";
    }
}

function showAnswer(id) {
    if(id=="B1" ||id=="B2" ||id=="B3" ||id=="B4" ||id=="B5"){
        document.querySelector(".frage[data-field=" + id + "] .loesung").style.display = "flex";
    }
    else
    document.querySelector(".frage[data-field=" + id + "] .loesung").style.display = "block";
}

function blurOut() {
    document.querySelectorAll(".inputField p").forEach((answerText) => {
        answerText.classList.remove("blur");
    })
}

function blurAn() {
    document.querySelectorAll(".inputField p").forEach((answerText) => {
        answerText.classList.add("blur");
    })
}

function pointsCalc(id) {
    console.log(id.slice(1, 3));
    document.querySelector(".Punktestand[data-field=pointsPlayer" + id.charAt(0) + "]").innerHTML;
    switch (id.slice(1, 3)) {
        case "-5":
            document.querySelector(".Punktestand[data-field=pointsPlayer" + id.charAt(0) + "]").innerHTML = parseInt(document.querySelector(".Punktestand[data-field=pointsPlayer" + id.charAt(0) + "]").innerHTML, 10) - 500;
            break;
        case "-4":
            document.querySelector(".Punktestand[data-field=pointsPlayer" + id.charAt(0) + "]").innerHTML = parseInt(document.querySelector(".Punktestand[data-field=pointsPlayer" + id.charAt(0) + "]").innerHTML, 10) - 400;
            break;
        case "-3":
            document.querySelector(".Punktestand[data-field=pointsPlayer" + id.charAt(0) + "]").innerHTML = parseInt(document.querySelector(".Punktestand[data-field=pointsPlayer" + id.charAt(0) + "]").innerHTML, 10) - 300;
            break;
        case "-2":
            document.querySelector(".Punktestand[data-field=pointsPlayer" + id.charAt(0) + "]").innerHTML = parseInt(document.querySelector(".Punktestand[data-field=pointsPlayer" + id.charAt(0) + "]").innerHTML, 10) - 200;
            break;
        case "+2":
            document.querySelector(".Punktestand[data-field=pointsPlayer" + id.charAt(0) + "]").innerHTML = parseInt(document.querySelector(".Punktestand[data-field=pointsPlayer" + id.charAt(0) + "]").innerHTML, 10) + 200;
            break;
        case "+3":
            document.querySelector(".Punktestand[data-field=pointsPlayer" + id.charAt(0) + "]").innerHTML = parseInt(document.querySelector(".Punktestand[data-field=pointsPlayer" + id.charAt(0) + "]").innerHTML, 10) + 300;
            break;
        case "+4":
            document.querySelector(".Punktestand[data-field=pointsPlayer" + id.charAt(0) + "]").innerHTML = parseInt(document.querySelector(".Punktestand[data-field=pointsPlayer" + id.charAt(0) + "]").innerHTML, 10) + 400;
            break;
        case "+5":
            document.querySelector(".Punktestand[data-field=pointsPlayer" + id.charAt(0) + "]").innerHTML = parseInt(document.querySelector(".Punktestand[data-field=pointsPlayer" + id.charAt(0) + "]").innerHTML, 10) + 500;
            break;
    }
    var audio = new Audio('PointsUp.mp3');
    audio.volume = 0.02;
    audio.play();
}

function buzzer(id) {
    console.log(id);
    if(document.querySelector(".name[data-field=name" + id + "]").classList.contains("buzzerName")){

    }
    else{
        if (id == 1) {
            var audio = new Audio('Marlon.mp3');
            audio.volume = 0.2;
            audio.play();
        }
        else if (id == 2) {
            var audio = new Audio('Marc.mp3');
            audio.volume = 0.4;
            audio.play();
        }
        else if (id == 3) {
            var audio = new Audio('Erik.mp3');
            audio.volume = 0.1;
            audio.play();
        }
        else if (id == 4) {
            var audio = new Audio('Jan.mp3');
            audio.volume = 0.5;
            audio.play();
        }
        else if (id == 5) {
            var audio = new Audio('Tom.mp3');
            audio.volume = 0.5;
            audio.play();
        }
        else if (id == 6) {
            var audio = new Audio('Merlin.mp3');
            audio.volume = 0.5;
            audio.play();
        }
        document.querySelector(".name[data-field=name" + id + "]").classList.add("buzzerName");
        document.querySelector(".inputField[data-field=input" + id + "]").classList.add("buzzerInput");
    }
}

function buzzerR() {
    document.querySelector(".name[data-field=name1]").classList.remove("buzzerName");
    document.querySelector(".inputField[data-field=input1]").classList.remove("buzzerInput");
    document.querySelector(".name[data-field=name2]").classList.remove("buzzerName");
    document.querySelector(".inputField[data-field=input2]").classList.remove("buzzerInput");
    document.querySelector(".name[data-field=name3]").classList.remove("buzzerName");
    document.querySelector(".inputField[data-field=input3]").classList.remove("buzzerInput");
    document.querySelector(".name[data-field=name4]").classList.remove("buzzerName");
    document.querySelector(".inputField[data-field=input4]").classList.remove("buzzerInput");
    document.querySelector(".name[data-field=name5]").classList.remove("buzzerName");
    document.querySelector(".inputField[data-field=input5]").classList.remove("buzzerInput");
    document.querySelector(".name[data-field=name6]").classList.remove("buzzerName");
    document.querySelector(".inputField[data-field=input6]").classList.remove("buzzerInput");
}

function nextC() {
    if (next < 4) {
        next++;
        document.querySelector("[data-field="+currentQuestion+"] .abilityGuess[data-field=ability" + next + "]").style.color = "rgb(51, 51, 51)";
    }
    else {
        document.querySelector("[data-field="+currentQuestion+"] .abilityGuess[data-field=ability1]").style.color = "rgb(255, 214, 108, 0)";
        document.querySelector("[data-field="+currentQuestion+"] .abilityGuess[data-field=ability2]").style.color = "rgb(255, 214, 108, 0)";
        document.querySelector("[data-field="+currentQuestion+"] .abilityGuess[data-field=ability3]").style.color = "rgb(255, 214, 108, 0)";
        next = 0;
    }
}

function playAudio() {
    const audio = new Audio(currentQuestion+".mp3");
    audio.play();
    
    setTimeout(function(){
        audio.pause();
        audio.currentTime = 0;
    }, 10000);
}

function blurOutSingle(id){
    var input = "input"+id.charAt(4);
    console.log(input);
    document.getElementById(input).classList.remove("blur");
}

function changeField(){
    document.getElementById("feld1").remove();
    document.getElementById("feld2").style.display = "flex";
}

function bgmusic(){
    audio.play();
    audio.loop=true;
}

function endbg(){
    audio.pause();
}