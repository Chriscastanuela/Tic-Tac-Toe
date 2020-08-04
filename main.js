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
window.addEventListener("load", restart);
// window.addEventListener("load", loadGame);
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
    saveCurrentGame();
}

function newGame() {
    games.push(currentGame);
    victory1.innerHTML = "";
    victory2.innerHTML = "";
    restart(); 
    currentGame = new Game;
    player1 = currentGame.player1;
    player2 = currentGame.player2;
    currentGame.player1.wins = [];
    currentGame.player2.wins = [];
    console.log(currentGame);
    console.log(games);
}

// function loadGame() {
//     // on load hide buttons
//     // check JSON currentGame
//     // load it to the screen
//     //
//     var retrievedGameString = localStorage.getItem("storedGame");
//     // var parsedGame = JSON.parse(retrievedGameString);
//     console.log(retrievedGameString);
//     if (retrievedGameString.turns > 1) {
//         console.log(parsedGame);
//         // roundsCompleted = parsedGame.roundsCompleted;
//         // currentGame.turns = parsedGame.turns;
//         // gameBoard = parsedGame.gameBoard;
//         // gameBoard.innerHTML = parsedGame.gameBoard;
//         // victory1 = parsedGame.victory1;
//         // victory1.innerHTML = parsedGame.victory1;
//         // victory2 = parsedGame.victory2;
//         // victory2.innerHTML = parsedGame.victory2;
//         // mainHeader = parsedGame.mainHeader;
//         // mainHeader.innerHTML = parsedGame.mainHeader;
//         // games = parsedGame.gamesHistory;
//         roundsCompleted = retrievedGameString.roundsCompleted;
//         currentGame.turns = retrievedGameString.turns;
//         gameBoard = retrievedGameString.gameBoard;
//         gameBoard.innerHTML = retrievedGameString.gameBoard;
//         victory1 = retrievedGameString.victory1;
//         victory1.innerHTML = retrievedGameString.victory1;
//         victory2 = retrievedGameString.victory2;
//         victory2.innerHTML = retrievedGameString.victory2;
//         mainHeader = retrievedGameString.mainHeader;
//         mainHeader.innerHTML = retrievedGameString.mainHeader;
//         games = retrievedGameString.gamesHistory;
//     } if (retrievedGameString.turns < 1) {
//         restart();
//     }
// }

function makeMove() {
    if (currentGame.turns[0] === "O" && this.innerHTML === "" && roundOver === false || currentGame.turns.length < 1 && this.innerHTML === "" && roundOver === false) {
        //
        // Update the Page
        /*!*/this.insertAdjacentHTML("afterbegin", player1.icon);
        /*!*/mainHeader.innerHTML = "🙈's Turn";
        //
        // Check for win
        /*!*/checkForWin("🐵", victory1, currentGame.player1);
        //
        // Update Current Game
        /*!*/currentGame.player1AddTurn();
        /*!*/currentGame.currentGameBoard = gameBoard;
        /*!*/currentGame.currentGameVictory1 = victory1;
        /*!*/currentGame.currentGameVictory2 = victory2;
        /*!*/currentGame.currentGameMainHeader = mainHeader;
        /*!*/currentGame.gamesHistory = games;
        //
        /*!*/saveCurrentGame(); // Save to storage
        //
        // Log Current Game to Console
        /*!*/console.log(currentGame.currentGameBoard);
        /*!*/console.log(currentGame);
        //
    } if (currentGame.turns[0] === "X" && this.innerHTML === "" && roundOver === false ) {
        /*!*/this.insertAdjacentHTML("afterbegin", player2.icon);
        /*!*/mainHeader.innerHTML = "🐵's Turn";
        /*!*/checkForWin("🙈", victory2, currentGame.player2);
        /*!*/currentGame.player2AddTurn();
        /*!*/currentGame.currentGameBoard = gameBoard;
        /*!*/currentGame.currentGameVictory1 = victory1;
        /*!*/currentGame.currentGameVictory2 = victory2;
        /*!*/currentGame.currentGameMainHeader = mainHeader;
        /*!*/currentGame.gamesHistory = games;
        /*!*/saveCurrentGame();
        /*!*/console.log(currentGame.currentGameBoard);
        /*!*/console.log(currentGame);
    }
};

function checkForWin(token, scoreBox, player) {
    if (sq1.innerHTML == token && sq2.innerHTML == token && sq3.innerHTML == token || sq4.innerHTML == token && sq5.innerHTML == token && sq6.innerHTML == token || sq7.innerHTML == token && sq8.innerHTML == token && sq9.innerHTML == token || sq1.innerHTML == token && sq4.innerHTML == token && sq7.innerHTML == token || sq2.innerHTML == token && sq5.innerHTML == token && sq8.innerHTML == token || sq3.innerHTML == token && sq6.innerHTML == token && sq9.innerHTML == token  || sq1.innerHTML == token && sq5.innerHTML == token && sq9.innerHTML == token || sq3.innerHTML == token && sq5.innerHTML == token && sq7.innerHTML == token) {
        /*1*/roundOver = true;
        /*2*/player.wins.push("🍌");
        /*3*/scoreBox.innerHTML = player.wins;
        /*4*/restartButton.hidden = false;
        /*5*/mainHeader.innerHTML = token + " Wins!";
        /*6*/currentGame.roundsCompleted.push("1")
        /*7*/newGameButton.hidden = false;
        console.log(player);
        console.log(currentGame);
    } if (sq1.innerHTML != "" && sq2.innerHTML != "" && sq3.innerHTML != "" && sq4.innerHTML != "" && sq5.innerHTML != "" && sq6.innerHTML != "" && sq7.innerHTML != "" && sq8.innerHTML != "" && sq9.innerHTML != "") {
        /*1*/roundOver = true;
        /*2*/scoreBox.innerHTML = player.wins;
        /*3*/restartButton.hidden = false;
        /*4*/mainHeader.innerHTML = "🐵 Tie! 🙈";
        /*5*/currentGame.roundsCompleted.push("1");
        /*6*/newGameButton.hidden = false;
        console.log(player);
        console.log(currentGame);
    }
};

function saveCurrentGame() {
    var gameToString = currentGame
    var stringifiedGame = JSON.stringify(gameToString);
    localStorage.setItem("storedGame", gameToString);
}