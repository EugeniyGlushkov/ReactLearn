import {combineReducers} from "redux";
import CarsReducers from './car';
import ActiveCar from './car-active';
import CarId from './id';

const allReducers = combineReducers({
    cars: CarsReducers,
    active: ActiveCar,
    carId: CarId
});

export default allReducers;