// <---------------------------Global
var games = []; //Data Model
var someoneWon = false;
var currentGame = new Game();
player1 = currentGame.player1;
player2 = currentGame.player2;

// <---------------------------QuerySelectors
var sq1 = document.querySelector("#square-1");
var sq2 = document.querySelector("#square-2");
var sq3 = document.querySelector("#square-3");
var sq4 = document.querySelector("#square-4");
var sq5 = document.querySelector("#square-5");
var sq6 = document.querySelector("#square-6");
var sq7 = document.querySelector("#square-7");
var sq8 = document.querySelector("#square-8");
var sq9 = document.querySelector("#square-9");
var mainHeader = document.querySelector(".main-header");
var victory1 = document.querySelector("#victory-display-1");
var victory2 = document.querySelector("#victory-display-2");
var allSquares = document.querySelector(".square");
var restartButton = document.querySelector(".restartButton");
var newGameButton = document.querySelector(".newGameButton");

// <---------------------------Event Listeners
window.addEventListener("load", showStart);
sq1.addEventListener("click", makeMove);
sq2.addEventListener("click", makeMove);
sq3.addEventListener("click", makeMove);
sq4.addEventListener("click", makeMove);
sq5.addEventListener("click", makeMove);
sq6.addEventListener("click", makeMove);
sq7.addEventListener("click", makeMove);
sq8.addEventListener("click", makeMove);
sq9.addEventListener("click", makeMove);
restartButton.addEventListener("click", showStart);
newGameButton.addEventListener("click", newGame);

// <---------------------------Functions

function showStart() {
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
    newGameButton.hidden = true;
    mainHeader.innerHTML = "Start";
    someoneWon = false;
}

function newGame() {
    games.push(currentGame);
    victory1.innerHTML = "";
    victory2.innerHTML = "";
    showStart();
    currentGame = new Game;
    player1 = currentGame.player1;
    player2 = currentGame.player2;
    console.log(currentGame);
    console.log(games);
}

function makeMove() {
    if (currentGame.turns[0] === "O" && this.innerHTML === "" && someoneWon === false || currentGame.turns.length < 1 && this.innerHTML === "" && someoneWon === false) {
        /*1*/currentGame.player1Turn();
        /*2*/this.insertAdjacentHTML("afterbegin", player1.icon);
        /*3*/mainHeader.innerHTML = "🙈's Turn";
        /*4*/checkForWin("🐵", victory1, player1);
    } if (currentGame.turns[0] === "X" && this.innerHTML === "" && someoneWon === false ){
        /*1*/currentGame.player2Turn();
        /*2*/this.insertAdjacentHTML("afterbegin", player2.icon);
        /*3*/mainHeader.innerHTML = "🐵's Turn";
        /*4*/checkForWin("🙈", victory2, player2);
    }
};

function checkForWin(token, scoreBox, player) {
    if (sq1.innerHTML == token && sq2.innerHTML == token && sq3.innerHTML == token || sq4.innerHTML == token && sq5.innerHTML == token && sq6.innerHTML == token || sq7.innerHTML == token && sq8.innerHTML == token && sq9.innerHTML == token || sq1.innerHTML == token && sq4.innerHTML == token && sq7.innerHTML == token || sq2.innerHTML == token && sq5.innerHTML == token && sq8.innerHTML == token || sq3.innerHTML == token && sq6.innerHTML == token && sq9.innerHTML == token  || sq1.innerHTML == token && sq5.innerHTML == token && sq9.innerHTML == token || sq3.innerHTML == token && sq5.innerHTML == token && sq7.innerHTML == token) {
        /*1*/someoneWon = true;
        /*2*/player.wins.push("🍌");
        /*3*/scoreBox.innerHTML = player.wins;
        /*4*/restartButton.hidden = false;
        /*5*/mainHeader.innerHTML = token + " Wins!";
        /*6*/currentGame.rounds.push("1")
        /*7*/newGameButton.hidden = false;
        console.log(player);
        console.log(currentGame);
    }
};