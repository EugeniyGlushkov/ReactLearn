
var initialState = {
    date: (new Date()).toLocaleTimeString()
};

export default function (state = initialState, action) {

    switch (action.type) {
        case 'GET_CURRENT_TIME':
            return {
                ...state,
                date: action.payload
            };
            break;
        default:
            return state;
    }
}

function getTime() {
    return (new Date()).toLocaleTimeString();
}