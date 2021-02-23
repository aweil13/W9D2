const Util = require("./utils.js");
const MovingObject = require('./moving_object');

Util.inherits(Asteroid, MovingObject)

function Asteroid(options){
    options ||= {}
    options.pos ||= super(pos);
    option.vel ||= Util.randomVec(this.pos[0]);
    option.radius ||= this.RADIUS;
    option.color = this.COLOR;
    MovingObject.call(this, options);
}

Asteroid.RADIUS = 30;
Asteroid.COLOR = 'yellow'