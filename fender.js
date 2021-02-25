var Blank = require('./blank.js');

module.exports = class Fender extends Blank {
    constructor(x, y) {
        super(x, y)
        this.energyf = 8;
    }

    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x - 3, this.y - 3],
            [this.x + 3, this.y - 3],
            [this.x - 3, this.y + 3],
            [this.x + 3, this.y + 3]
        ]
    }

    chooseCell(character) {
        this.getNewDirections()
        return super.chooseCell(character);

    }

    mult() {
        var empty = random(this.chooseCell(0))
        if (empty && this.energyf > 12) {
            var newFX = empty[0]
            var newFY = empty[1]
            matrix[newFY][newFX] = 6
            var fen = new Fender(newFX, newFY)
            fenderArr.push(fen)
        }
    }

    move() {
        var empty = random(this.chooseCell(0))
        this.energyf -= 2;
        if (empty) {
            var newFX = empty[0]
            var newFY = empty[1]
            matrix[newFY][newFX] = 7
            matrix[this.y][this.x] = 0

            this.x = newFX
            this.y = newFY
        }
    }

    eat() {
        var food = random(this.chooseCell(4))
        if (food) {
            var newFX = food[0]
            var newFY = food[1]
            matrix[newFY][newFX] = 6
            matrix[this.y][this.x] = 0

            for (var i in soulArr) {
                if (soulArr[i].x == newFX && soulArr[i].y == newFY) {
                    soulArr.splice(i, 1)
                }
            }

            this.x = newFX
            this.y = newFY
            this.energyf += 2
        }
    }

    die() {
        if (this.energyf <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in fenderArr) {
                if (fenderArr[i].x == this.x && fenderArr[i].y == this.y) {
                    fenderArr.splice(i, 1)
                }
            }
        }
    }
}