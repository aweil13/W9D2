
function MovingObject(options){
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
}

module.exports = MovingObject;

MovingObject.prototype.draw = function (ctx) {
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'blue';

    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI);
    ctx.fillStyle = 'purple';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

MovingObject.prototype.move = function (){
    this.pos[0] = this.pos[0] + this.vel[0];
    this.pos[1] = this.pos[1] + this.vel[1];
    
}