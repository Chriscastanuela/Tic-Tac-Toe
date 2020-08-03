class Game {
    constructor() {
        this.player1 = new Player ("One", "🐵");
        this.player2 = new Player ("Two", "🙈");
        this.roundsCompleted = [];
        this.turns = [];
        this.currentGameBoard;
        this.victory1;
        this.victory2;
    }
    player1AddTurn() {
        this.turns.unshift("X");
    }
    player2AddTurn() {
        this.turns.unshift("O");
    }
}