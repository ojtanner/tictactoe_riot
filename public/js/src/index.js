"use strict";

//Riot + Modules
import riot from 'riot';
import 'riot-hot-reload';
import '../../modules/header/header.tag.html';
import '../../modules/playingField/playingField.tag.html';
import '../../modules/playingField/box/box.tag.html';
import '../../modules/playingField/playerDisplay/playerDisplay.tag.html';
import '../../modules/resetButton/resetButton.tag.html';

//CSS
import '../../css/bootstrap-grid.min.css';
import '../../css/bootstrap-reboot.min.css';
import '../../css/bootstrap.min.css';
import '../../css/main.css';

//JS
import GameLogic from '../src/GameLogic';

document.addEventListener('DOMContentLoaded', function() {
    global.game = new GameLogic()
    riot.mount("*");
});

console.log();