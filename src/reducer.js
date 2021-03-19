export const initialState = {
    userName : '',
}

export const reducer = (state, action) => {
    console.log(action.type)
    switch (action.type) {
        case 'userName':
            return {
                ...state,
                userName:action.name,
            };
            break;
        default:
            return state;
    }
}