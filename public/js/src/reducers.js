import { actionType } from './actions';

function testReducer(state = [], action) {
    switch (action.type) {
        case actionType.test: 
            return [...state, action.payload];
        default:
            return state;
    }
};

export { testReducer };

