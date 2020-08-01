class Game {
    constructor() {
        this.player1 = new Player ("One", "X");
        this.player2 = new Player ("Two", "O");
        this.turn = [];
        this.winner = [];
    }
    player1Turn() {
        this.turn.push("X");
    }
    player2Turn() {
        this.turn.push("O");
    }
}