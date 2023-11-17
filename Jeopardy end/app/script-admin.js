const socket = io('ws://localhost:8080');

socket.on('answer', (id, answer) => {
    document.getElementById("input" + id).innerHTML = answer;
});

document.querySelectorAll("button.buttonPoint").forEach((button) => {
    button.addEventListener("click", (event) => {
        const id = event.target.id;
            socket.emit('question', id);
        console.log(id);
    });
})

document.querySelectorAll("button.points").forEach((button) => {
    button.addEventListener("click", (event) => {
        const id = event.target.id;
        socket.emit('pointsCalc', id);
    });
})

document.querySelectorAll("button.blurOutSingle").forEach((button) => {
    button.addEventListener("click", (event) => {
        const id = event.target.id;
        socket.emit('blurOutSingle', id);
    });
})

document.querySelector("#answerB").addEventListener("click", () => {
    socket.emit('showAnswer');
})

document.querySelector("#closeB").addEventListener("click", () => {
    socket.emit('closeQuestion');
})

document.querySelector("#closeBE").addEventListener("click", () => {
    socket.emit('endQuestion');
})


document.querySelector("#blurO").addEventListener("click", () => {
    socket.emit('blurOut');
})

document.querySelector("#blurA").addEventListener("click", () => {
    socket.emit('blurAn');
})

document.querySelector("#buzzerR").addEventListener("click", () => {
    socket.emit('buzzerR');
})

document.querySelector("#nextC").addEventListener("click", () => {
    socket.emit('nextC');
})

document.querySelector("#playS").addEventListener("click", () => {
    socket.emit('playS');
})

document.querySelector("#changeF").addEventListener("click", () => {
    socket.emit('changeF');
})




