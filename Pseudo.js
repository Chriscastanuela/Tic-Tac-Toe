/*  <---------------------------List

1 - restart function - done
2 - newGame - done

3 - Load
    - if (game is in progress){} else {} every time you make a move save the entire game
    - on load hide buttons

*/
/*  <---------------------------Pseudo

function loadGame() {
    // on load hide buttons
    // check JSON currentGame
    // load it to the screen
}

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

if (currentGame.turns.length < 1) {
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
} if (currentGame.turns.length > 1) {
    
}

*/