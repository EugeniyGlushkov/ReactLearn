export default function (state={}, action) {//начальный state null пока никакая машина не выбрана
    switch (action.type) {
        case 'CAR_SELECTED':
            return {
                ...state,
                act: action.payload};
            break;
        default:
            return state;
    }
}