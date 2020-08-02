// <---------------------------Global
var games = [];
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

// <---------------------------Event Listeners
sq1.addEventListener("click", makeMove);
sq2.addEventListener("click", makeMove);
sq3.addEventListener("click", makeMove);
sq4.addEventListener("click", makeMove);
sq5.addEventListener("click", makeMove);
sq6.addEventListener("click", makeMove);
sq7.addEventListener("click", makeMove);
sq8.addEventListener("click", makeMove);
sq9.addEventListener("click", makeMove);
window.addEventListener("load", showStart);

// <---------------------------Functions

function showStart() {
    mainHeader.innerHTML = "Start";
}

function makeMove() {
    if (currentGame.turns[0] === "O" && this.innerHTML === "" || currentGame.turns.length < 1 && this.innerHTML === "") {
        /*1*/currentGame.player1Turn();
        /*2*/this.insertAdjacentHTML("afterbegin", player1.icon);
        /*3*/mainHeader.innerHTML = "🙈's Turn";
        /*4*/checkForWin("🐵", victory1);
    } if (currentGame.turns[0] === "X" && this.innerHTML === ""){
        /*1*/currentGame.player2Turn();
        /*2*/this.insertAdjacentHTML("afterbegin", player2.icon);
        /*3*/mainHeader.innerHTML = "🐵's Turn";
        /*4*/checkForWin("🙈", victory2);
    }
};

function checkForWin(token, display) {
    if (sq1.innerHTML == token && sq2.innerHTML == token && sq3.innerHTML == token || sq4.innerHTML == token && sq5.innerHTML == token && sq6.innerHTML == token || sq7.innerHTML == token && sq8.innerHTML == token && sq9.innerHTML == token){
        
        display.innerHTML = "🍌"
    }
};