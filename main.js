// Variables
var currentGame = new Game();
player1 = currentGame.player1;
player2 = currentGame.player2;

// QuerySelectors
var sq1 = document.querySelector("#square-1")
var sq2 = document.querySelector("#square-2")
var sq3 = document.querySelector("#square-3")
var sq4 = document.querySelector("#square-4")
var sq5 = document.querySelector("#square-5")
var sq6 = document.querySelector("#square-6")
var sq7 = document.querySelector("#square-7")
var sq8 = document.querySelector("#square-8")
var sq9 = document.querySelector("#square-9")

// Event Listeners
sq1.addEventListener("click", makeMove)
sq2.addEventListener("click", makeMove)
sq3.addEventListener("click", makeMove)
sq4.addEventListener("click", makeMove)
sq5.addEventListener("click", makeMove)
sq6.addEventListener("click", makeMove)
sq7.addEventListener("click", makeMove)
sq8.addEventListener("click", makeMove)
sq9.addEventListener("click", makeMove)

// window.addEventListener("onload", game)

// Functions
// function game() {
//     player1 = currentGame.player1;
//     player2 = currentGame.player2;
//     // makeMove(player1.icon);
// }

function makeMove() {
    if (this.innerHTML == "") {
        this.insertAdjacentHTML("afterbegin", player1.icon);
    }
}

function addIcon(square, icon) {
    // `${square}`.innerHTML = `${icon}`
    `${square}`.insertAdjacentHTML("afterbegin", `${icon}`)
}