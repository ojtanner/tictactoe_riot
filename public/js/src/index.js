"use strict";

import riot from 'riot';
import 'riot-hot-reload';
import '../../modules/header/header.tag.html';
import '../../modules/playingField/box/box.tag.html';
import '../../modules/playingField/playerDisplay/playerDisplay.tag.html';
import '../../modules/resetButton/resetButton.tag.html';

import '../../css/bootstrap-grid.min.css';
import '../../css/bootstrap-reboot.min.css';
import '../../css/bootstrap.min.css';
import '../../css/main.css';

document.addEventListener('DOMContentLoaded', function() {
    riot.mount("*");
})

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