const Asteroid = require("./asteroid");
const MovingObject = require("./moving_object");



const NUM_ASTEROIDS = 8;

function Game(){
   this.asteroids = []; 
}

Game.prototype.addAsteroids = function () {
    for (let i = this.asteroids.length; i < NUM_ASTEROIDS; i++) {
        let as = new Asteroid();
        this.asteroids.push(as);
    }
}


Game.prototype.draw = function (ctx) {
    debugger
    ctx.clearRect(0,0,800,900);
    ctx.fillRect(0, 0, 800, 900);
    this.asteroids.forEach(asteroid=> {
        // let as = new Asteroid(asteroid_pos);
        asteroid.draw(ctx);
    });
    // ctx.fillStyle = 'black';
}

Game.prototype.moveObjects = function () {
    let that = this;
    debugger
    this.asteroids.forEach(asteroid => {
        // let as = new Asteroid(asteroid_pos);
        asteroid.move();
    });
}

module.exports = Game;

// const game = new Game();
// game.addAsteroids();
// game.draw();