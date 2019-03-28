import GameLogic from '../src/GameLogic';
import player from '../src/player.enum';

describe('resetGame', () => {
    let game;
    let expectedFieldState = [
        { mark: player.none, id: 1 },
        { mark: player.none, id: 2 },
        { mark: player.none, id: 3 },
        { mark: player.none, id: 4 },
        { mark: player.none, id: 5 },
        { mark: player.none, id: 6 },
        { mark: player.none, id: 7 },
        { mark: player.none, id: 8 },
        { mark: player.none, id: 9 }
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

describe('changePlayer', () => {
    let game;

    beforeEach(() => {
        game = new GameLogic();
    });

    test('should change player from X to O', () => {
       game.changePlayer();
       expect(game.getCurrentPlayer()).toBe(player.o); 
    });
    
    test('should change player from X to O to X', () => {
        game.changePlayer();
        game.changePlayer();
        expect(game.getCurrentPlayer()).toBe(player.x);
    });
    
});

describe('setMark', () => {
    let game;

    beforeEach(() => {
        game = new GameLogic();
    });

    test('should have the mark of initial fields set to player.none', () => {
        expect(game.getFieldState()[0].mark).toBe(player.none);
    });

    test('should set the mark in the correct field', () => {
        game.setMark(0);
        expect(game.getFieldState()[0].mark).not.toBe(player.none);
    });

    test('should set the mark of the correct player', () => {
        game.setMark(1);
        expect(game.getFieldState()[1].mark).toBe(game.getCurrentPlayer());
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

    let testArray = [1,2,3];
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
        expect(game.checkWinCondition(testArray, simpleCondition)).toBe(true);
    });

    test('logic works with incorrect values', () => {
        expect(game.checkWinCondition(testArray, simpleFalseCondition)).toBe(false);
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

describe('checkAllWinConditions', () => {
    let game;

    beforeAll(() => {
        game = new GameLogic();
    });

    test('recognizes win condition row 1', () => {
        let markedPositionsRow1 = [1,2,3];
        expect(game.checkAllWinConditions(markedPositionsRow1)).toBe(true);
    });

    test('recognizes negative win condition row 1', () => {
        let markedPositionsRow1Negative = [1,2,6];
        expect(game.checkAllWinConditions(markedPositionsRow1Negative)).toBe(false);
    });

    test('recognizes win condition column 1', () => {
        let markedPositionsColumn1 = [1,4,7];
        expect(game.checkAllWinConditions(markedPositionsColumn1)).toBe(true);
    });

    test('recognizes negative win condition column 1', () => {
        let markedPositionsColumn1Negative = [1,4,9];
        expect(game.checkAllWinConditions(markedPositionsColumn1Negative)).toBe(false);
    });
    
    test('returns false when given an empty array', () => {
        let emptyArray = [];
        expect(game.checkAllWinConditions(emptyArray)).toBe(false);
    });

    test('returns false when given an array with less elements than necessary for a win', () => {
        let shortArray = [1,2];
        expect(game.checkAllWinConditions(shortArray)).toBe(false);
    });
    
});

describe('checkForWin', () => {
    let game;

    beforeEach(() => {
        game = new GameLogic();
    });

    test('should have winner set to player.none initially', () => {
        expect(game.getWinner()).toBe(player.none);
    });

    test('should set winner to current player on win', () => {
        game.setMark(0);
        game.setMark(1);
        game.setMark(2);
        game.checkForWin();
        expect(game.getWinner()).toBe(game.getCurrentPlayer());
    });
    
    test('should not set winner when no win happens', () => {
       game.setMark(2);
       game.setMark(3);
       game.setMark(8);
       game.checkForWin();
       expect(game.getWinner()).toBe(player.none); 
    });
});
