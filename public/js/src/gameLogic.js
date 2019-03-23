const player = {
    x : "X",
    o : "O",
    none: "None"
};

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

const gameLogic = {
    currentPlayer: player.x,
    winner: player.none,
    fieldState: []
};

gameLogic.prototype.resetGame = function() {
    this.currentPlayer = player.x;
    this.winner = player.none;
    this.resetField();
};

const resetField = () => {
    this.fieldState = new Array(9).forEach((field, index) => {
        field = {
            mark: player.none,
            id: index
        };
    });
};

gameLogic.prototype.executeTurn = function(fieldId) {
    setMark(fieldId);
    checkForWin();
};

const setMark = (fieldId) => {
    this.fieldState[fieldId].mark = this.currentPlayer;
};

const checkForWin = () => {
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

const checkWinCondition = (markedFields, winConditions) => {
    for(let condition = 0; condition < winConditions.length; condition++) {
        for (let i = 0; i < 3; i++) {
            if (markedFields[i] !== winCondition[i]) return false;
        };
    };
    return true;
};

export const gameLogic;