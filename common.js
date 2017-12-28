function startGame() {
    document.turn = "X";
    document.winner = null;

    for (var i = 1; i <= 9; i++) {
        clearBox(i);
    }
}

function nextMove(square) {

    if(document.winner != null){
        setText(document.winner + " already won!");
    }
    else if (square.innerText === "") {
        square.innerText = document.turn;
        switchTurn();
    } else {
        setText("Pick another square")
    }
}

function switchTurn() {
    if(checkForWinner(document.turn)){
        setText('Congrats ' + document.turn + ', you won!');
        document.winner = document.turn;
    }
    else if (document.turn === "X") {
        document.turn = "O";
        setText("Its " + document.turn + "'s turn now");
    } else {
        document.turn = "X";
        setText("Its " + document.turn + "'s turn now");
    }

}


function setText(msg) {
    document.getElementById('message').innerText = msg;
}

function getBox(number) {
    return document.getElementById('s_' + number).innerText;
}

function checkForWinner(move) {
    var result = false;
    if (checkRow(1, 2, 3, move) ||
        checkRow(4, 5, 6, move) ||
        checkRow(7, 8, 9, move) ||
        checkRow(1, 5, 9, move) ||
        checkRow(2, 5, 8, move) ||
        checkRow(3, 5, 7, move) ||
        checkRow(1, 4, 7, move) ||
        checkRow(3, 6, 9, move)) {
        result = true;
    }
    return result;
}

function checkRow(a, b, c, move) {
    var result = false;
    if (getBox(a) === move && getBox(b) === move && getBox(c) === move) {
        result = true;
    }
    return result;
}

function clearBox(number) {
    document.getElementById('s_' + number).innerText = "";
}