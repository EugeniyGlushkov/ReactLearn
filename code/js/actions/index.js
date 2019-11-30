//actionCreator. эта функция создаёт действие

export const selectCar = car => {
    alert('Now car is: ' + car.name);
    return {
        type: 'CAR_SELECTED',//тип того, что возвращаем. Просто название, придумываем сами
        payload: car// поле может называться как угодно, data, info и т.д., payload принятоe название.
    }
};