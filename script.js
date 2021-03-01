/*
var socket = require('socket.io')
var side = 28;
socket.on('matrix', drawMatrix)

function setup() {
    frameRate(16);
    createCanvas(25* side, 25* side)
    background('#acacac');
}

function drawMatrix() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
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
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }

            rect(x * side, y * side, side, side)

        }
    }
}*/
/*քոմենթի մեջի կոդն ա վերջնականը, բայց require-ի խնդիրը պետքա ստուգել ներքևի գրած մասով*/ 
/*
var m = Math.round((Math.random() * 10) + 25)
var n = Math.round((Math.random() * 10) + 13)
var matrix = []

for (var y = 0; y < m; y++) {
    matrix[y] = []
    for (var x = 0; x < n; x++) {





        matrix[y].push(Math.round(Math.random(0, 1)))



        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));

        }
        matrix[y].push(getRandomInt(8))

    }
} console.log(matrix)




var side = 28;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var soulArr = [];
var boltArr = [];
var fenderArr = [];
var paulArr = [];

function setup() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var xt = new Xotaker(x, y)
                xotakerArr.push(xt)
            }
            else if (matrix[y][x] == 3) {
                var gsh = new Gishatich(x, y)
                gishatichArr.push(gsh)
            }
            else if (matrix[y][x] == 4) {
                var sl = new Soul(x, y)
                soulArr.push(sl)
            }
            else if (matrix[y][x] == 5) {
                var sl = new Bolt(x, y)
                boltArr.push(sl)
            }
            else if (matrix[y][x] == 6) {
                var sl = new Fender(x, y)
                boltArr.push(sl)
            }
            else if (matrix[y][x] == 7) {
                var sl = new Paul(x, y)
                boltArr.push(sl)
            }

        }
    }

    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}




function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
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
                fill("#acacac");
            }

            rect(x * side, y * side, side, side)

        }
    }

    for (var i in grassArr) {
        grassArr[i].mult()
    }


    for (var i in xotakerArr) {
        xotakerArr[i].eat()
        xotakerArr[i].move()
        xotakerArr[i].mult()
        xotakerArr[i].die()
    }


    for (var i in gishatichArr) {
        gishatichArr[i].eat()
        gishatichArr[i].move()
        gishatichArr[i].mult()
        gishatichArr[i].die()
    }

    for (var i in soulArr) {
        soulArr[i].eat()
        soulArr[i].move()
        soulArr[i].mult()
    }

    for (var i in boltArr) {
        boltArr[i].eat()
        boltArr[i].move()
        boltArr[i].mult()
        boltArr[i].die()
    }
    for (var i in fenderArr) {
        boltArr[i].eat()
        boltArr[i].move()
        boltArr[i].mult()
        boltArr[i].die()
    }
    for (var i in paulArr) {
        boltArr[i].eat()
        boltArr[i].move()
        boltArr[i].mult()
        boltArr[i].die()
    }
}*/
var socket = io();

var side = 10;
function setup(){
    createCanvas(50 * side,50 * side);
    background('#acacac');
}


function draw(matrix) {
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
                fill("#acacac");
            }

            rect(x * side, y * side, side, side)

        }
    }
}

socket.on('send matrix', draw)

function kill() {
    socket.emit("kill")
}
function addGrass() {
    socket.emit("add grass")
}
function addXotaker() {
    socket.emit("add xotaker")
}
function change() {
    socket.emit("add change")
}