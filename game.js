class Game {
    constructor() {
        this.player1 = new Player ("One", "🐵");
        this.player2 = new Player ("Two", "🙈");
        this.turns = [];
        this.sessions = [];
    }
    player1Turn() {
        this.turns.unshift("X");
    }
    player2Turn() {
        this.turns.unshift("O");
    }
}