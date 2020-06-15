export const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {...state, count: action.payload};
        case 'decrement':
            return {...state, str: action.payload};
        case 'reset':
            return action.payload;
        case 'ttt':
            return action.payload;
        default:
            throw new Error();
    }
};