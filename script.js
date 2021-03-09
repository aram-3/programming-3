
var socket = io();

var side = 10;
function setup(){
    createCanvas(50 * side,50 * side);
    background('#acacac');
}

function nkarel(matrix) {
    
console.log(matrix);
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[0].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }

            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("white");
            }
            else if (matrix[y][x] == 5) {
                fill("black");
            }
            else if (matrix[y][x] == 6) {
                fill("orange");
            }
            else if (matrix[y][x] == 7) {
                fill("cyan");
            }
            else if (matrix[y][x] == 0) {
                fill("grey");
            }

            rect(x * side, y * side, side, side)

        }
    }
}

socket.on('send matrix', nkarel)

function kill() {
    socket.emit("kill")
}
function addGrass() {
    socket.emit("add grass")
}
function addXotaker() {
    socket.emit("add xotaker")
}
function addrandom() {
    socket.emit("add change")
}