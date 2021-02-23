// console.log("Webpack is working!")
const Game  = require('./game');
window.Game = Game;
const GameView = require('./game_view');
window.GameView = GameView;
// const MovingObject = require('./moving_object');
// window.MovingObject = MovingObject;
// const Asteroid = require('./asteroid');
// window.Asteroid = Asteroid;

// console.log(MovingObject);

document.addEventListener('DOMContentLoaded', () => {
    const canvasEl = document.getElementById('game-canvas');
    canvasEl.width = 800;
    canvasEl.height = 900;

    const ctx = canvasEl.getContext('2d');
    
    // const mo = new MovingObject({
    //     pos: [30, 30],
    //     vel: [10, 10],
    //     radius: 5,
    //     color: "#00FF00"
    //   });

    // mo.draw(ctx);

    const game = new Game();
    game.addAsteroids();
    game.draw(ctx);
    const gameView = new GameView(game, ctx);
    gameView.start();
})