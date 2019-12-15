export const getCurrentTime = time => {
    return {
        type: 'GET_CURRENT_TIME',
        payload: time
    }
}