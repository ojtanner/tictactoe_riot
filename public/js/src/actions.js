const actionType = {
    test: 'TEST'
};

function test() {
    return {
        type: actionType.test,
        payload: 'test'
    }
};

export { test, actionType };