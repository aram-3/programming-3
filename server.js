var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

grassArr = [];
xotakerArr = [];
gishatichArr = [];
soulArr = [];
boltArr = [];
fenderArr = [];
paulArr = [];
matrix = [];
var side = 10;

var w = 50;

Grass = require("./grass.js")
Xotaker = require("./xotaker.js");
Gishatich = require("./gishatich.js");
Soul = require("./soul.js");
Bolt = require("./bolt.js");
Fender = require("./fender.js");
Paul = require("./paul.js");

function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

for (let i = 0; i < w; i++) {
    matrix[i] = [];
    for (let j = 0; j < w; j++) {
        matrix[i][j] = Math.floor(rand(0, 8))
        
    }  
}

/*
var m = Math.round((Math.random() * 10) + 25)
var n = Math.round((Math.random() * 10) + 13)

for (var y = 0; y < m; y++) {
    matrix[y] = []
    for (var x = 0; x < n; x++) {
        matrix[y].push(Math.round(Math.random(0, 1)))

        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
        matrix[y].push(getRandomInt(8))
    }
}*/

io.sockets.emit("send matrix", matrix)


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
                var bt = new Bolt(x, y)
                boltArr.push(bt)
            }
            else if (matrix[y][x] == 6) {
                var fd = new Fender(x, y)
                fenderArr.push(fd)
            }
            else if (matrix[y][x] == 7) {
                var pl = new Paul(x, y)
                paulArr.push(pl)
            }
        }
    }
    io.sockets.emit('send matrix', matrix)
}

function game() {
    for (var i in grassArr) {
        grassArr[i].mult()
    }
    for (var i in xotakerArr) {
        xotakerArr[i].mult()
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
    for (var i in fenderArr) {
        fenderArr[i].eat()
        fenderArr[i].move()
        fenderArr[i].mult()
        fenderArr[i].die()
    }
    for (var i in paulArr) {
        paulArr[i].eat()
        paulArr[i].move()
        paulArr[i].die()
    }
    io.sockets.emit('send matrix', server);
}
setInterval(game, 1000)


function kill() {
    grassArr = [];
    xotakerArr = []
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            matrix[y][x] = 0;
        }
    }
    io.sockets.emit("send matrix", matrix);
}


function addGrass() {
    for (var i = 0; i < 7; i++) {
    var x = Math.floor(Math.random() * matrix[0].length)
    var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1
            var gr = new Grass(x, y, 1)
            grassArr.push(gr)
        }
    }
    io.sockets.emit("send matrix", matrix);
}
function addXotaker() {
    for (var i = 0; i < 7; i++) {   
    var x = Math.floor(Math.random() * matrix[0].length)
    var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2
            xotakerArr.push(new Xotaker(x, y, 2))
        }
    }
    io.sockets.emit("send matrix", matrix);
}
function change(){
    var newgrassArr = grassArr;
    var newxotakerArr = xotakerArr;
    grassArr = newxotakerArr;
    xotakerArr = newgrassArr;
}
io.on('connection', function (socket) {
    start();
    socket.on("kill", kill);
    socket.on("add grass", addGrass);
    socket.on("add xotaker", addXotaker);
    socket.on("add change", change);
});

var statistics = {};

setInterval(function() {
    statistics.grass = grassArr.length;
    statistics.xotaker = xotakerArr.length;
    fs.writeFile("statistics.json", JSON.stringify(statistics), function(){
    })
},1000)
