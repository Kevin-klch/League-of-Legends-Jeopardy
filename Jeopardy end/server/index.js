
const http = require('http').createServer();

const io = require('socket.io')(http, {
    cors: { origin: "*" }
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('answer', (id, answer) => {
        console.log(id, answer);
        io.emit('answer', id, answer);
    });

    socket.on('pointsCalc', (id) => {
        io.emit('pointsCalc', id);
    });

    socket.on('question', (id) => {
        console.log(id);
        io.emit('question', id);
    });

    socket.on('showAnswer', () => {
        io.emit('showAnswer');
    });

    socket.on('closeQuestion', () => {
        io.emit('closeQuestion');
    });

    socket.on('endQuestion', () => {
        io.emit('endQuestion');
    });

    socket.on('blurOut', () => {
        io.emit('blurOut');
    });

    socket.on('blurOutSingle', (id) => {
        io.emit('blurOutSingle', id);
    });

    socket.on('blurAn', () => {
        io.emit('blurAn');
    });

    socket.on('buzzer', (id) => {
        io.emit('buzzer', id);
    });

    socket.on('buzzerR', () => {
        io.emit('buzzerR');
    });

    socket.on('nextC', () => {
        io.emit('nextC');
    });

    socket.on('playS', () => {
        io.emit('playS');
    });

    socket.on('changeF', () => {
        io.emit('changeF');
    });
});

http.listen(8080, () => console.log('listening on http://localhost:8080'));