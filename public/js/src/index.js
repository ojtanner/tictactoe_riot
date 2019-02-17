"use strict";

riot.mount("*");

let currentPlayer = "X";

function getCurrentPlayer() {
    return currentPlayer;
}

function setCurrentPlayer(player) {
    currentPlayer = player;
}

function changePlayer() {
    console.log("Before change", getCurrentPlayer());
    if(getCurrentPlayer() === "X") {
        setCurrentPlayer("O");
    } else {
        setCurrentPlayer("X");
    }
    console.log("After change", getCurrentPlayer())
}