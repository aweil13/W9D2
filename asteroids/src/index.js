// console.log("Webpack is working!")

const MovingObject = require('./moving_object');
window.MovingObject = MovingObject;
const Asteroid = require('./asteroid');
window.Asteroid = Asteroid;

console.log(MovingObject);

document.addEventListener('DOMContentLoaded', () => {
    const canvasEl = document.getElementById('game-canvas');
    canvasEl.width = 800;
    canvasEl.height = 900;

    const ctx = canvasEl.getContext('2d');
    
    ctx.fillStyle = 'grey';
    ctx.fillRect(0, 0, 800, 900);
    // const mo = new MovingObject({
    //     pos: [30, 30],
    //     vel: [10, 10],
    //     radius: 5,
    //     color: "#00FF00"
    //   });

    // mo.draw(ctx);

    const as = new Asteroid({ pos: [30, 30] });
    as.draw(ctx);
})