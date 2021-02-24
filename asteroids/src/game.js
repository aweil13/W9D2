const Asteroid = require("./asteroid");
const MovingObject = require("./moving_object");

 
const DIM_X = 800;
const DIM_Y = 900;
const NUM_ASTEROIDS = 30;

function Game(){
   this.asteroids = []; 
}

Game.prototype.addAsteroids = function () {
    const that = this;
    for (let i = this.asteroids.length; i < NUM_ASTEROIDS; i++) {
        let as = new Asteroid({game: that});
        this.asteroids.push(as);
    }
}

Game.prototype.draw = function (ctx) {
    // debugger
    ctx.clearRect(0,0,800,900);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 800, 900);
    this.asteroids.forEach(asteroid=> {
        // let as = new Asteroid(asteroid_pos);
        asteroid.draw(ctx);
    });
}

Game.prototype.moveObjects = function () {
    this.asteroids.forEach(asteroid => {
        asteroid.move();
    });
}

Game.prototype.wrap = function(pos){
    if (pos[0] < 0) {
        pos[0] = DIM_X;
    }
    if (pos[1] < 0) {
        pos[1] = DIM_Y;
    }
    if (pos[0] > DIM_X) {
        pos[0] = 0;
    }
    if (pos[1] > DIM_Y) {
        pos[1] = 0;
    }   
}

module.exports = Game;

// const game = new Game();
// game.addAsteroids();
// game.draw();