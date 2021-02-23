const Util = require("./utils.js");
const MovingObject = require('./moving_object');

module.exports = Asteroid;

const RADIUS = 15;
const COLOR = 'yellow';

function Asteroid(options){
    options = options || {};
    options.pos = options.pos || Util.randomPosition(); // fix this
    options.vel = options.vel || Util.randomVec(5);
    options.radius = RADIUS;
    options.color = COLOR;
    
    MovingObject.call(this, options);
}

Util.inherits(Asteroid, MovingObject);



// const as = new Asteroid({ pos: [30, 30] })
// console.log(as)
