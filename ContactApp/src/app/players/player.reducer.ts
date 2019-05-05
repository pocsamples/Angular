export function reducer(state, action) {
    switch (action.type) {
        case 'SHOW_CAPTAIN':
            console.log(`state: ${JSON.stringify(state)}`);
            console.log(`action.payload: ${JSON.stringify(action.payload)}`);
            return {
                ...state,
                displayNickName: action.payload
            };
        default:
            return state;
    }
}