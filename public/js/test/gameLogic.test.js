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

describe('checkWinCondition', () => {
    let game;
    let markedFields_winHorizontal1_positive = [1,2,3];

    beforeEach(() => {
        game = new GameLogic();
    });

    test('win horizontal row 1', () => {
        expect()
    });
});

/*
test('', () => {

});
*/