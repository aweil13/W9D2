const Util = require("./utils.js");
const MovingObject = require('./moving_object');

Util.prototype.inherits(Asteroid, MovingObject)


function Asteroid(options){
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = 30;
    this.color = "yellow";
}

