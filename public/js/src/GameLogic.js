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

GameLogic.prototype.getFieldState = function() {
    return this.fieldState;
};

GameLogic.prototype.getCurrentPlayer = function() {
    return this.currentPlayer;
}

GameLogic.prototype.getWinner = function() {
    return this.winner;
}

GameLogic.prototype.resetGame = function() {
    this.currentPlayer = player.x;
    this.winner = player.none;
    this.resetField(this);
};

GameLogic.prototype.executeTurn = function(fieldId) {
    this.setMark(fieldId);
    this.checkForWin();
};

GameLogic.prototype.resetField = (that) => {
    const newFieldState = new Array(9);
    for(let i = 0; i < newFieldState.length; i++) {
        newFieldState[i] = {
            mark: player.none,
            id: i
        };
    }
    that.fieldState = newFieldState;
};

GameLogic.prototype.setMark = (fieldId) => {
    this.fieldState[fieldId].mark = this.currentPlayer;
};

GameLogic.prototype.checkForWin = () => {
    let currentFieldState = extractMarkedPositions();
    if (
        checkWinCondition(
            this.fieldState
            .filter(field => field.mark === this.currentPlayer)
            .reduce((list, field) => {
                list.push(field.id);
            }, [])
            .sort((a,b) => a > b),
            winConditions
        )
    ) this.winner =  this.currentPlayer;  
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

export default GameLogic;