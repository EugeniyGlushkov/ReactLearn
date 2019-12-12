export const getCarId = car => {
    return {
        type: 'GET_CAR_ID',
        payload: car.id
    }
};