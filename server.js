var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");

app.use(express.static("."));
app.get('/', function (req, res) {
    res.write('<h1>hello world</h1>');
});
server.listen(3000);
/*ստուգել վերևի մասով, բայց վերջնականը ներքևինն էլ ա */
/*
grassArr = [];
xotakerArr = [];
gishatichArr = [];
soulArr = [];
boltArr = [];
var side = 28

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
        matrix[y].push(getRandomInt(6))
    }
}


Grass = require("./grass.js")
Xotaker = require("./xotaker.js");
Gishatich = require("./gishatich.js");
Soul = require("./soul.js");
Bolt = require("./bolt.js");;

function start() {
    io.sockets.emit('send matrix', matrix);
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
        }
    }
    
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}

start()
function game() {
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
        soulArr[i].die()
    }

    for (var i in boltArr) {
        boltArr[i].eat()
        boltArr[i].move()
        boltArr[i].mult()
        boltArr[i].die()
    }
    io.sockets.emit('send matrix', server);
}
setInterval(game, 100)

*/