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
        let as = new Asteroid(this.randomPosition());
        this.asteroids.push(as);
    }
}

Game.prototype.randomPosition = function () {
    const x = Math.floor(Math.random() * (DIM_X - 25));
    const y = Math.floor(Math.random() * (DIM_Y - 25));
    const pos = [x, y];
    return pos;
}

Game.prototype.draw = function (ctx) {
    ctx.clearRect(0,0,800,900);
    this.asteroids.forEach(asteroid=> {
        // let as = new Asteroid(asteroid_pos);
        asteroid.draw(ctx);
    });
}

Game.prototype.moveObjects = function () {
    this.asteroids.forEach(asteroid_pos => {
        // let as = new Asteroid(asteroid_pos);
        asteroid.move();
    });
}

module.exports = Game;

// const game = new Game();
// game.addAsteroids();
// game.draw();