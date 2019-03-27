import GameLogic from '../src/GameLogic';
import player from '../src/player.enum';

describe('resetGame', () => {
    let game;
    let expectedFieldState = [
        { mark: player.none, id: 0 },
        { mark: player.none, id: 1 },
        { mark: player.none, id: 2 },
        { mark: player.none, id: 3 },
        { mark: player.none, id: 4 },
        { mark: player.none, id: 5 },
        { mark: player.none, id: 6 },
        { mark: player.none, id: 7 },
        { mark: player.none, id: 8 }
    ];

    beforeEach(() => {
        game = new GameLogic();
    });

    test('currentPlayer after reset', () => {
        expect(game.getCurrentPlayer()).toBe(player.x);
    });
    
    test('winner after reset', () => {
        expect(game.getWinner()).toBe(player.none);
    });

    test('fieldState after reset', () => {
        expect(game.getFieldState()).toEqual(expectedFieldState);
    });    
});

describe('extractMarkedPositions', () => {
    let game;

    beforeEach(() => {
        game = new GameLogic();
    });

    test('extracts only fields marked by current player', () => {
        let fieldState = [
            {mark: player.x, id: 1},
            {mark: player.o, id: 2},
            {mark: player.none, id: 3},
            {mark: player.x, id: 4}
        ];
        let expectedResult = [1,4];
        expect(game.extractMarkedPositions(fieldState)).toEqual(expectedResult);
    });
});

describe('checkWinCondition', () => {
    let game;

    let positiveTest = [1,2,3];
    let simpleCondition = [1,2,3];
    let simpleFalseCondition = [1,6,9];

    let markedPositionsRow1 = [1,2,3];
    let markedPositionsRow1Negative = [1,2,4];

    let markedPositionsColumn1 = [1,4,7];
    let markedPositionsColumn1Negative = [1,2,8];


    beforeEach(() => {
        game = new GameLogic();
    });

    test('logic works with correct values', () => {
        expect(game.checkWinCondition(positiveTest, simpleCondition)).toBe(true);
    });

    test('logic works with incorrect values', () => {
        expect(game.checkWinCondition(positiveTest, simpleFalseCondition)).toBe(false);
    });

    test('recognizes win condition row 1', () => {
        expect(game.checkWinCondition(markedPositionsRow1, game.winConditions[0])).toBe(true);
    });

    test('recognizes negative win condition row 1', () => {
        expect(game.checkWinCondition(markedPositionsRow1Negative,game.winConditions[0])).toBe(false);
    });

    test('recognizes win condition column 1', () => {
        expect(game.checkWinCondition(markedPositionsColumn1, game.winConditions[3])).toBe(true);
    });

    test('recognizes negative win condition column 1', () => {
        expect(game.checkWinCondition(markedPositionsColumn1Negative, game.winConditions[3])).toBe(false);
    });
});