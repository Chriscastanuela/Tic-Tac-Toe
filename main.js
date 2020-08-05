// <---------------------------Main.JS Variables
var games = []; //Data Model
var roundOver = false;
var currentGame = new Game();
var moves;
player1 = currentGame.player1;
player2 = currentGame.player2;
var stringifiedGame;

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
var gameBoard = document.querySelector(".Game-board");

// <---------------------------Event Listeners
// window.addEventListener("load", restart);
window.addEventListener("load", loadGame);
sq1.addEventListener("click", makeMove);
sq2.addEventListener("click", makeMove);
sq3.addEventListener("click", makeMove);
sq4.addEventListener("click", makeMove);
sq5.addEventListener("click", makeMove);
sq6.addEventListener("click", makeMove);
sq7.addEventListener("click", makeMove);
sq8.addEventListener("click", makeMove);
sq9.addEventListener("click", makeMove);
restartButton.addEventListener("click", restart);
newGameButton.addEventListener("click", newGame);

// <---------------------------Functions

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
    newGameButton.hidden = true;
    mainHeader.innerHTML = "Start";
    roundOver = false;
    setTimeout(alert("Avenge your loss"), 3000);
    updateCurrentGame();
    saveCurrentGame();
}

function newGame() {
    games.push(currentGame);
    currentGame.player1.wins = [];
    currentGame.player2.wins = [];
    victory1.innerHTML = currentGame.player1.wins
    victory2.innerHTML = currentGame.player2.wins
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
    roundOver = false;
    setTimeout(alert("Clean slate"), 3000);
    updateCurrentGame();
    saveCurrentGame();
    updateCurrentGame();
    saveCurrentGame();
    currentGame = new Game;
}

function loadGame() {
    var currentGame = new Game();
    var retrievedGameString = localStorage.getItem("storedGame");
    var parsedGame = JSON.parse(retrievedGameString);
    currentGame.roundsCompleted = parsedGame.roundsCompleted;
    function loadRoundsCompleted() {
        if (parsedGame.roundsCompleted == null) {
            currentGame.roundsCompleted = [];
        } if (parsedGame.roundsCompleted != null) {
            currentGame.roundsCompleted = parsedGame.roundsCompleted;
        }
    }
    loadRoundsCompleted();
    roundOver = parsedGame.currentGameRoundOver;
    currentGame.turns = parsedGame.turns;
    sq1.innerHTML = parsedGame.currentSq1;
    sq2.innerHTML = parsedGame.currentSq2;
    sq3.innerHTML = parsedGame.currentSq3;
    sq4.innerHTML = parsedGame.currentSq4;
    sq5.innerHTML = parsedGame.currentSq5;
    sq6.innerHTML = parsedGame.currentSq6;
    sq7.innerHTML = parsedGame.currentSq7;
    sq8.innerHTML = parsedGame.currentSq8;
    sq9.innerHTML = parsedGame.currentSq9;
    currentGame.player1.wins = parsedGame.player1.wins;
    currentGame.player2.wins = parsedGame.player2.wins;
    victory1.innerHTML = currentGame.player1.wins;
    victory2.innerHTML = currentGame.player2.wins;
    function loadMainHeader() {
        if (parsedGame.currentGameMainHeader == undefined || parsedGame.currentGameMainHeader == "") {
            mainHeader.innerHTML = "Start";
        } if (parsedGame.currentGameMainHeader != undefined || parsedGame.currentGameMainHeader != "") {
            mainHeader.innerHTML = parsedGame.currentGameMainHeader;
        }
    }
    loadMainHeader();
    function maybeShowButtons() {
    if (parsedGame.restartButtonStatus == true && parsedGame.newGameButtonStatus == true) {
        restartButton.hidden = true;
        newGameButton.hidden = true;
    } else {
        restartButton.hidden = false;
        newGameButton.hidden = false;
        }
    }
    maybeShowButtons();
    games = parsedGame.gamesHistory;
};

function makeMove() {
    if (currentGame.turns[0] === "O" && this.innerHTML === "" && roundOver === false || currentGame.turns.length < 1 && this.innerHTML === "" && roundOver === false) {
        this.insertAdjacentHTML("afterbegin", player1.icon);
        mainHeader.innerHTML = "🙈's Turn";
        checkForWin("🐵", victory1, currentGame.player1);
        currentGame.player1AddTurn();
        updateCurrentGame();
        saveCurrentGame();
    } if (currentGame.turns[0] === "X" && this.innerHTML === "" && roundOver === false ) {
        this.insertAdjacentHTML("afterbegin", player2.icon);
        mainHeader.innerHTML = "🐵's Turn";
        checkForWin("🙈", victory2, currentGame.player2);
        currentGame.player2AddTurn();
        updateCurrentGame();
        saveCurrentGame();
        console.log(currentGame.currentGameBoard);
        console.log(currentGame);
    }
};

function checkForWin(token, scoreBox, player) {
    if (sq1.innerHTML == token && sq2.innerHTML == token && sq3.innerHTML == token || sq4.innerHTML == token && sq5.innerHTML == token && sq6.innerHTML == token || sq7.innerHTML == token && sq8.innerHTML == token && sq9.innerHTML == token || sq1.innerHTML == token && sq4.innerHTML == token && sq7.innerHTML == token || sq2.innerHTML == token && sq5.innerHTML == token && sq8.innerHTML == token || sq3.innerHTML == token && sq6.innerHTML == token && sq9.innerHTML == token  || sq1.innerHTML == token && sq5.innerHTML == token && sq9.innerHTML == token || sq3.innerHTML == token && sq5.innerHTML == token && sq7.innerHTML == token) {
        roundOver = true;
        player.wins.push("🍌");
        scoreBox.innerHTML = player.wins;
        restartButton.hidden = false;
        newGameButton.hidden = false;
        mainHeader.innerHTML = token + " Wins!";
        currentGame.roundsCompleted.push("1")
        updateCurrentGame();
        saveCurrentGame();
    } if (sq1.innerHTML != "" && sq2.innerHTML != "" && sq3.innerHTML != "" && sq4.innerHTML != "" && sq5.innerHTML != "" && sq6.innerHTML != "" && sq7.innerHTML != "" && sq8.innerHTML != "" && sq9.innerHTML != "") {
        roundOver = true;
        scoreBox.innerHTML = player.wins;
        restartButton.hidden = false;
        mainHeader.innerHTML = "🐵 Tie! 🙈";
        currentGame.roundsCompleted.push("1");
        newGameButton.hidden = false;
        updateCurrentGame();
        saveCurrentGame();
    }
};

function saveCurrentGame() {
    var gameToString = currentGame;
    var stringifiedGame = JSON.stringify(gameToString);
    localStorage.setItem("storedGame", stringifiedGame);
}

function updateCurrentGame() {
    currentGame.currentSq1 = sq1.innerHTML;
    currentGame.currentSq2 = sq2.innerHTML;
    currentGame.currentSq3 = sq3.innerHTML;
    currentGame.currentSq4 = sq4.innerHTML;
    currentGame.currentSq5 = sq5.innerHTML;
    currentGame.currentSq6 = sq6.innerHTML;
    currentGame.currentSq7 = sq7.innerHTML;
    currentGame.currentSq8 = sq8.innerHTML;
    currentGame.currentSq9 = sq9.innerHTML;
    currentGame.currentGameVictory1 = currentGame.player1.wins;
    currentGame.currentGameVictory2 = currentGame.player2.wins
    currentGame.currentGameMainHeader = mainHeader.innerText;
    currentGame.gamesHistory = games;
    currentGame.currentGameRoundOver = roundOver;
    checkButtonStatus();
}

function checkButtonStatus() {
    if (restartButton.hidden == true && newGameButton.hidden == true) {
        currentGame.restartButtonStatus = true;
        currentGame.newGameButtonStatus = true;
    } if (restartButton.hidden == false && newGameButton.hidden == false) {
        currentGame.restartButtonStatus = false;
        currentGame.newGameButtonStatus = false;
    }
}