export default function (state=null, action) {//начальный state null пока никакая машина не выбрана
    switch (action.type) {
        case 'CAR_SELECTED':
            return action.payload;
            break;
        default:
            return state;
    }
}