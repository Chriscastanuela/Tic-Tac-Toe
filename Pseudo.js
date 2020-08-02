class Game {
    constructor() {
        this.player1 = new Player ("One", "🐵");
        this.player2 = new Player ("Two", "🙈");
        this.turn = [];
        this.games = [];
    }
    player1Turn() {
        this.turn.unshift("X");
    }
    player2Turn() {
        this.turn.unshift("O");
    }
}

class Player {
    constructor(id, icon) {
        this.id = id;
        this.icon = icon;
        this.wins = [];
    }
    saveWinsToStorage() {

    }
    retrieveWinsFromStorage() {

    }
}

/*  <---------------------------Pseudo

Game:
    - check squares for win or draw
    - wins
        Update main header after best 3 of 5
        Over after Best 3 of 5, clear storage
        reset board after win or draw

Player:
    - makeMove

Global:
    Datamodel - 
        Log array of wins
        Store it
        Retrieve it
        Clear and reset after 3 of 5

🍌🍌🍌
*/
/* <---------------------------Code I might need

<section class="Game">
    <h1 class="Turn-reminder">'s Turn</h1>
    <section class="Game-board" id="board">
        <div class="square" id="square-1"></div>

function makeMove() {
    if (moves[0] == "O" && this.innerHTML == "" || moves.length < 1 && this.innerHTML == "") {
        moves.unshift("X");
        this.insertAdjacentHTML("afterbegin", player1.icon);
        mainHeader.innerHTML = "🙈's Turn";
    } if (moves[0] == "X" && this.innerHTML == ""){
        moves.unshift("O");
        /this.insertAdjacentHTML("afterbegin", player2.icon);
        mainHeader.innerHTML = "🐵's Turn";
    }
};

*/