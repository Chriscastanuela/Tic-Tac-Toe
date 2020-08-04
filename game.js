class Game {
    constructor() {
        this.player1 = new Player ("One", "🐵");
        this.player2 = new Player ("Two", "🙈");
        this.roundsCompleted = [];
        this.turns = [];
        this.currentGameBoard;
        this.currentGameVictory1;
        this.currentGameVictory2;
        this.currentGameMainHeader;
        this.gamesHistory;
    }
    player1AddTurn() {
        this.turns.unshift("X");
    }
    player2AddTurn() {
        this.turns.unshift("O");
    }
}