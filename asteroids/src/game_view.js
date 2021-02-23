const Game = require("./game");

function GameView(game, ctx) {
    this.game = game;
    this.ctx = ctx;
}

GameView.prototype.start = function () {
    const boundMove = this.game.moveObjects.bind(this.game);
    const boundDraw = this.game.draw.bind(this.game, this.ctx);
    // const boundMove = this.game.moveObjects;
    // const boundDraw = this.game.draw;
        setInterval(function() {boundMove(); boundDraw();}, 20);
}

module.exports = GameView;