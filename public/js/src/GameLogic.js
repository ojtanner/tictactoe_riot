import player from './player.enum';

const horizontalRow1 = [1,2,3];
const horizontalRow2 = [4,5,6];
const horizontalRow3 = [7,8,9];

const horizontalColumn1 = [1,4,7];
const horizontalColumn2 = [2,5,8];
const horizontalColumn3 = [3,6,9];

const diagonal      = [1,5,9];
const antidiagonal  = [3,5,7];

const winConditions = [
    horizontalRow1,
    horizontalRow2,
    horizontalRow3,
    horizontalColumn1,
    horizontalColumn2,
    horizontalColumn3,
    diagonal,
    antidiagonal
];

function GameLogic() {
    this.winConditions = winConditions;
    this.currentPlayer;
    this.winner;
    this.fieldState;
    this.resetGame();
};

GameLogic.prototype.getWinConditions = function() {
    return this.winConditions;
}

GameLogic.prototype.getFieldState = function() {
    return this.fieldState;
};

GameLogic.prototype.getCurrentPlayer = function() {
    return this.currentPlayer;
};

GameLogic.prototype.setCurrentPlayer = function (player) {
    this.currentPlayer = player;
};

GameLogic.prototype.getWinner = function() {
    return this.winner;
};

GameLogic.prototype.setWinner = function (player) {
    this.winner = player;
};

GameLogic.prototype.resetGame = function() {
    this.currentPlayer = player.x;
    this.winner = player.none;
    this.resetField(this);
};

GameLogic.prototype.changePlayer = function () {
    let currentPlayer = this.getCurrentPlayer();
    if (currentPlayer === player.x) {
        this.setCurrentPlayer(player.o)
    } else if (currentPlayer === player.o) {
        this.setCurrentPlayer(player.x);
    };
};

GameLogic.prototype.executeTurn = function(fieldIndex) {
    if (this.getCurrentPlayer() === player.none
        && this.getWinner() !== player.none) {
        return;
    }
    if (this.getFieldState()[fieldIndex].mark !== player.none) {
        return;
    }
    this.setMark(fieldIndex);
    this.checkForWin();
    if (this.getCurrentPlayer() !== player.none
        && this.getWinner() === player.none) {
        this.changePlayer();
    }
    return;
};

GameLogic.prototype.resetField = (that) => {
    const newFieldState = new Array(9);
    for(let i = 0; i < newFieldState.length; i++) {
        newFieldState[i] = {
            mark: player.none,
            id: i+1
        };
    }
    that.fieldState = newFieldState;
};

GameLogic.prototype.setMark = function (fieldIndex) {
    this.fieldState[fieldIndex].mark = this.currentPlayer;
};

GameLogic.prototype.checkForWin = function () {
    let markedFields = this.extractMarkedPositions(this.getFieldState());
    if (this.checkAllWinConditions(markedFields)) {
        this.setWinner(this.getCurrentPlayer());
        this.setCurrentPlayer(player.none);
    }  
};

GameLogic.prototype.extractMarkedPositions = function (fieldState) {
    return fieldState.reduce((array, currentField) => {
        if(currentField.mark === this.currentPlayer) {
            array.push(currentField.id);
        }
        return array;
    }, []);
}

GameLogic.prototype.checkWinCondition = function (markedFields, condition) {
    for(let i = 0; i < condition.length; i++){
        if(!(markedFields.includes(condition[i]))) return false;
    };
    return true;
};

GameLogic.prototype.checkAllWinConditions = function (markedFields) {
    for (let i = 0; i < this.getWinConditions().length; i++) {
        if (this.checkWinCondition(markedFields, this.getWinConditions()[i])) {
            return true;
        }
    }
    return false;
}

export default GameLogic;