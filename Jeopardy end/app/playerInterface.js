const socket = io('ws://localhost:8080');

const searchParams = new URLSearchParams(location.search);
const playerId = searchParams.get("id");
console.log(playerId);

socket.on('buzzerR', () => {
    buzzerReset();
});

socket.on('buzzer', () => {
    buzzerDisable();
});

document.querySelector("button.submit").addEventListener("click", () => {

    const text = document.querySelector('input').value;
    socket.emit('answer', playerId, text);
    console.log(text);

});

document.querySelector("button.buzzer").addEventListener("click", () => {
    socket.emit('buzzer', playerId);
});


function buzzerDisable(){
    console.log(":)");
    document.getElementById("buzzer").disabled = true;
    document.getElementById("buzzer").style.backgroundColor = "grey";
}

function buzzerReset(){
    document.getElementById("buzzer").disabled = false;
    document.getElementById("buzzer").style.backgroundColor = "rgb(150, 50, 50)";
}