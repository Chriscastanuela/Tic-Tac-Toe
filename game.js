class Game {
    constructor() {
        this.player1 = new Player ("One", "🐵");
        this.player2 = new Player ("Two", "🙈");
        this.roundsCompleted = [];
        this.turns = [];
        this.currentGameBoard;
        this.currentSq1;
        this.currentSq2;
        this.currentSq3;
        this.currentSq4;
        this.currentSq5;
        this.currentSq6;
        this.currentSq7;
        this.currentSq8;
        this.currentSq9;
        this.currentGameVictory1;
        this.currentGameVictory2;
        this.currentGameMainHeader;
        this.gamesHistory;
        this.currentGameRoundOver;
        this.restartButtonStatus;
        this.newGameButtonStatus;
    }
    player1AddTurn() {
        this.turns.unshift("X");
    }
    player2AddTurn() {
        this.turns.unshift("O");
    }
}