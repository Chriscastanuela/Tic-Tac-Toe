// class game and player
class Game {
    constructor() {
        this.player1 = new Player ("One", "🐵");
        this.player2 = new Player ("Two", "🙈");
        this.turns = [];
        this.rounds = [];
        this.currentGameBoard;
    }
    player1Turn() {
        this.turn.unshift("X");
        // this.turn.unshift(event.target.id);
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
/*  <---------------------------List



Game:
- keep track of turns in storage

Player:
- saveWinsToStorage
- retrieveWinsFromStorage




- Check for draws


*/

/* <---------------------------Extra
*/
/*  <---------------------------Pseudo

Deal with localStorage
New Game
*/
/* <-----------------------------Code I might need

<section class="Game">
    <h1 class="Turn-reminder">'s Turn</h1>
    <section class="Game-board" id="board">
        <div class="square" id="square-1"></div>

// makeMove
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

// checkForWin
function checkForWin(token, scoreBox, player) {
    if (sq1.innerHTML == token && sq2.innerHTML == token && sq3.innerHTML == token) {
        player.wins.push("🍌");
        scoreBox.innerHTML = "";
        scoreBox.innerHTML = player.wins;
        console.log(player.wins);
    } if (sq4.innerHTML == token && sq5.innerHTML == token && sq6.innerHTML == token) {
        player.wins.push("🍌");
        scoreBox.innerHTML = "";
        scoreBox.innerHTML = player.wins;
        console.log(player.wins);
    } if (sq7.innerHTML == token && sq8.innerHTML == token && sq9.innerHTML == token) {
        player.wins.push("🍌");
        scoreBox.innerHTML = "";
        scoreBox.innerHTML = player.wins;
        console.log(player.wins);
    } if (sq1.innerHTML == token && sq4.innerHTML == token && sq7.innerHTML == token) {
        player.wins.push("🍌");
        scoreBox.innerHTML = "";
        scoreBox.innerHTML = player.wins;
        console.log(player.wins);
    } if (sq2.innerHTML == token && sq5.innerHTML == token && sq8.innerHTML == token) {
        player.wins.push("🍌");
        scoreBox.innerHTML = "";
        scoreBox.innerHTML = player.wins;
        console.log(player.wins);
    } if (sq3.innerHTML == token && sq6.innerHTML == token && sq9.innerHTML == token) {
        player.wins.push("🍌");
        scoreBox.innerHTML = "";
        scoreBox.innerHTML = player.wins;
        console.log(player.wins);
    } if (sq1.innerHTML == token && sq5.innerHTML == token && sq9.innerHTML == token) {
        player.wins.push("🍌");
        scoreBox.innerHTML = "";
        scoreBox.innerHTML = player.wins;
        console.log(player.wins);
    } if (sq3.innerHTML == token && sq5.innerHTML == token && sq7.innerHTML == token) {
        player.wins.push("🍌");
        scoreBox.innerHTML = "";
        scoreBox.innerHTML = player.wins;
        console.log(player.wins);
    }
};

function restart() {
    sq1.innerHTML = "";
    sq2.innerHTML = "";
    sq3.innerHTML = "";
    sq4.innerHTML = "";
    sq5.innerHTML = "";
    sq6.innerHTML = "";
    sq7.innerHTML = "";
    sq8.innerHTML = "";
    sq9.innerHTML = "";
    currentGame.turns = [];
    restartButton.hidden = true;
    mainHeader.innerHTML = "Start";
}

*/