let Blank = require('./blank.js');

module.exports = class Paul extends Blank {
    constructor(x, y) {
        super(x, y)
        this.energyp = 84;
    }

    getNewDirections() {
        this.directions = [
            [this.x, this.y - 3],
            [this.x, this.y - 2],
            [this.x, this.y - 1],
            [this.x, this.y + 5],
            [this.x, this.y + 4],
            [this.x, this.y + 3],
            [this.x, this.y + 2],
            [this.x, this.y + 5],
            [this.x + 1, this.y],
            [this.x + 2, this.y],
            [this.x + 3, this.y]
        ]
    }

    chooseCell(character) {
        this.getNewDirections()
        return super.chooseCell(character);

    }


    move() {
        var empty = super.random(this.chooseCell(0))
        this.energyp -= 2;
        if (empty) {
            var newPX = empty[0]
            var newPY = empty[1]
            matrix[newPY][newPX] = 7
            matrix[this.y][this.x] = 0

            this.x = newPX
            this.y = newPY
        }
    }

    eat() {
        var food = super.random(this.chooseCell(4))
        if (food) {
            var newPX = food[0]
            var newPY = food[1]
            matrix[newPY][newPX] = 7
            matrix[this.y][this.x] = 0

            for (var i in soulArr) {
                if (soulArr[i].x == newPX && soulArr[i].y == newPY) {
                    soulArr.splice(i, 1)
                }
            }

            this.x = newPX
            this.y = newPY
            this.energyp += 1
        }
    }

    die() {
        if (this.energyp <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in paulArr) {
                if (paulArr[i].x == this.x && paulArr[i].y == this.y) {
                    paulArr.splice(i, 1)
                }
            }
        }
    }
}