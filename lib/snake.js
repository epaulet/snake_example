// import 'script-loader!CreateJS/builds/createjs-2015.11.26.combined.js';
const Food = require("./food");

const Coord = function (i, j) {
  this.i = i;
  this.j = j;
};

Coord.prototype.equals = function (coord2) {
  return (this.i == coord2.i) && (this.j == coord2.j);
};

Coord.prototype.isOpposite = function (coord2) {
  return (this.i == (-1 * coord2.i)) && (this.j == (-1 * coord2.j));
};

Coord.prototype.plus = function (coord2) {
  return new Coord(this.i + coord2.i, this.j + coord2.j);
};

class Snake {
  constructor(options) {
    this.segments = [options.pos]
    this.ctx = options.ctx
    // this.pos = options.pos
    // this.headPos = this.pos[0]
    // this.tailPos = this.pos[this.pos.length-1]
    // this.vel = options.vel
    this.color = 'green'
    this.dir = 'N'

    this.DIFFS = {
      "N": new Coord(-1, 0),
      "E": new Coord(0, 1),
      "S": new Coord(1, 0),
      "W": new Coord(0, -1)
    };

    this.move = this.move.bind(this)
  }

  head() {
    return this.segments[this.segments.length - 1]
  }

  draw() {
    console.log(this)
    this.segments.forEach((segment) => {
      this.ctx.fillStyle = this.color;
      this.ctx.beginPath();
      this.ctx.rect(segment[0], segment[1], 1, 1);
      this.ctx.fill();
    })
  }

  move() {
    if (this.dir = 'N') {
      this.segments.push([this.head()[0] - 1, this.head()[1]]);
      this.segments.shift();
    }
  }

  // grow() {
  //   if (this.pos[0] === Food.pos) {
  //     this.body.push([])
  //
  //   }
  // }


}

//initial length is 2 (25px*2)
//each time it eats food, increase the length by 1
//when snake collides with food, make food disappear and reappear in a different spot
//if snake collides with obstacle, end game
//when game starts, make snake move to the right (setInterval?)
//have snake's moving direction respond to arrow keys

module.exports = Snake
