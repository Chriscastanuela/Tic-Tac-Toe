/*  <---------------------------Pseudo

Game:
    Show turn reminder in main header
    Switch turns
    Change turn reminder in main header

    check squares for win or draw
    
    wins
        Update main header after best 3 of 5
        Over after Best 3 of 5, clear storage
        reset board after win or draw

Player:
    makeMove

Global:
    Datamodel - 
        Log array of wins
        Store it
        Retrieve it
        Clear after 3 of 5

Refactor:
    showTurn and makeMove

*/
/* <---------------------------Code I might need

O
X
<section class="Game">
    <h1 class="Turn-reminder">'s Turn</h1>
    <section class="Game-board" id="board">
        <div class="square" id="square-1"></div>

123456789

function makeMove() {
    if (this.innerHTML == "") {
        // `${square}`.innerHTML = `${icon}`
        // `${square}`.insertAdjacentHTML("afterbegin", `${icon}`)
    }
}

*/