"use strict";

riot.mount("*");

const players = {
    x: "X",
    o: "O"
};
let currentPlayer = players.x;

function getCurrentPlayer() {
    return currentPlayer;
};

function setCurrentPlayer(player) {
    currentPlayer = player;
};

function changePlayer() {
    console.log("Before change", getCurrentPlayer());
    if(getCurrentPlayer() === players.x) {
        setCurrentPlayer(players.o);
    } else {
        setCurrentPlayer(players.x);
    }
    console.log("After change", getCurrentPlayer())
};