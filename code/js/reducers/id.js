export default function (state={}, action) {
    switch (action.type) {
        case 'GET_CAR_ID':
            return {
                ...state,
                id: action.payload};
            break;
        default:
            return state;
    }
};