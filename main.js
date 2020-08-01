// <---------------------------Global
var dataModel = [];
var currentGame = new Game();
player1 = currentGame.player1;
player2 = currentGame.player2;
var moves = [];

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
    /*3*/mainHeader.innerHTML = "Start";
}

function makeMove() {
    if (moves[0] == "O" && this.innerHTML == "" || moves.length < 1 && this.innerHTML == "") {
        /*1*/moves.unshift("X");
        /*2*/this.insertAdjacentHTML("afterbegin", player1.icon);
        /*3*/mainHeader.innerHTML = "O's Turn";
    } if (moves[0] == "X" && this.innerHTML == ""){
        /*1*/moves.unshift("O");
        /*2*/this.insertAdjacentHTML("afterbegin", player2.icon);
        /*3*/mainHeader.innerHTML = "X's Turn";
    }
};
