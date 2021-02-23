const Asteroid = require("./asteroid");
const MovingObject = require("./moving_object");


const DIM_X = 800;
const DIM_Y = 900;
const NUM_ASTEROIDS = 8;

function Game(){
   this.asteroids = []; 
}

Game.prototype.addAsteroids = function () {
    for (let i = this.asteroids.length; i < NUM_ASTEROIDS; i++) {
        this.asteroids.push(this.randomPosition());
    }
}

Game.prototype.randomPosition = function () {
    const x = Math.floor(Math.random() * (DIM_X - 25));
    const y = Math.floor(Math.random() * (DIM_Y - 25));
    const pos = [x, y];
    return pos;
}

Game.prototype.draw = function (ctx) {
    ctx.clearRect();
    this.asteroids.forEach(asteroid => {
        let as = new Asteroid(asteroid);
        asteroid.draw(ctx);
    });
}

Game.prototype.moveObjects = function () {
    this.asteroids.forEach(asteroid => {
       asteroid.move();
    });
}

module.exports = Game;