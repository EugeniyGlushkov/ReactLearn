import {combineReducers} from "redux";
import CarsReducers from './car';
import ActiveCar from './car-active';
import CarId from './id';
import CurrentTime from './clock';

const allReducers = combineReducers({
    cars: CarsReducers,
    active: ActiveCar,
    carId: CarId,
    currentTime: CurrentTime

});

export default allReducers;